import { H256 } from "codechain-sdk/lib/core/classes";
import { Client, DeleteDocumentResponse } from "elasticsearch";
import * as _ from "lodash";
import { ElasticSearchAgent } from "..";
import { AssetDoc } from "../types";
import { BaseAction } from "./BaseAction";

interface AssetResponse {
    asset: AssetDoc;
    blockNumber: number;
    parcelIndex: number;
    transactionIndex: number;
}

export interface UTXO {
    assetType: string;
    assetAmount: number;
    utxoQuantity: number;
}

export class QueryAsset implements BaseAction {
    public agent!: ElasticSearchAgent;
    public client!: Client;

    public async getUTXOByAssetType(
        address: string,
        assetType: H256,
        lastBlockNumber: number = Number.MAX_VALUE,
        lastParcelIndex: number = Number.MAX_VALUE,
        lastTransactionIndex: number = Number.MAX_VALUE,
        itemsPerPage: number = 25
    ): Promise<AssetDoc[]> {
        const response = await this.client.search<AssetResponse>({
            index: "asset",
            type: "_doc",
            body: {
                sort: [
                    { blockNumber: { order: "desc" } },
                    { parcelIndex: { order: "desc" } },
                    { transactionIndex: { order: "desc" } }
                ],
                size: itemsPerPage,
                search_after: [lastBlockNumber, lastParcelIndex, lastTransactionIndex],
                query: {
                    bool: {
                        must: [
                            {
                                term: {
                                    address: {
                                        value: address
                                    }
                                }
                            },
                            {
                                term: {
                                    "asset.assetType": {
                                        value: assetType
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        });
        return _.map(response.hits.hits, hit => {
            return hit._source.asset;
        });
    }

    public async getUTXOList(address: string, page: number = 0, itemsPerPage: number = 25): Promise<UTXO[]> {
        const response = await this.client.search<AssetResponse>({
            index: "asset",
            type: "_doc",
            body: {
                query: {
                    term: {
                        address: {
                            value: address
                        }
                    }
                },
                size: 0,
                aggs: {
                    asset_bucket: {
                        composite: {
                            sources: [
                                {
                                    type: {
                                        terms: {
                                            field: "asset.assetType.keyword"
                                        }
                                    }
                                }
                            ]
                        },
                        aggs: {
                            sum_of_asset: {
                                sum: {
                                    field: "asset.amount"
                                }
                            },
                            asset_bucket_sort: {
                                bucket_sort: {
                                    sort: [
                                        {
                                            sum_of_asset: {
                                                order: "desc"
                                            }
                                        }
                                    ],
                                    from: page * itemsPerPage,
                                    size: itemsPerPage
                                }
                            }
                        }
                    }
                }
            }
        });
        return _.map(response.aggregations.asset_bucket.buckets, bucket => {
            return {
                assetType: bucket.key.type,
                assetAmount: bucket.sum_of_score.value,
                utxoQuantity: bucket.doc_count
            };
        });
    }

    public async indexAsset(
        address: string,
        assetDoc: AssetDoc,
        blockNumber: number,
        parcelIndex: number,
        transactionIndex: number
    ): Promise<void> {
        return this.client.update({
            index: "asset",
            type: "_doc",
            id: `${address}-${assetDoc.assetType}-${assetDoc.transactionHash}-${assetDoc.transactionOutputIndex}`,
            body: {
                doc: {
                    address,
                    asset: assetDoc,
                    blockNumber,
                    parcelIndex,
                    transactionIndex
                },
                doc_as_upsert: true
            }
        });
    }

    public async removeAsset(
        address: string,
        assetType: H256,
        transactionHash: H256,
        transactionOutputIndex: number
    ): Promise<DeleteDocumentResponse> {
        return this.client.delete({
            index: "asset",
            type: "_doc",
            id: `${address}-${assetType}-${transactionHash.value}-${transactionOutputIndex}`
        });
    }
}
