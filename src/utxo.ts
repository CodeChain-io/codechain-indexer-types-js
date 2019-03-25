import { AssetSchemeDoc } from "./transaction";

export interface UTXODoc {
    address: string;
    assetType: string;
    shardId: number;
    lockScriptHash: string;
    parameters: string[];
    quantity: string;
    orderHash: string | null;
    transactionHash: string;
    transactionTracker: string;
    transactionOutputIndex: number;
    usedTransactionHash: string | null;
    assetScheme: AssetSchemeDoc;
    blockNumber: number;
}

export interface AggsUTXODoc {
    assetType: string;
    totalAssetQuantity: string;
    utxoQuantity: string;
    assetScheme: AssetSchemeDoc;
}

export interface UTXOSnapshotDoc {
    blockNumber: number;
    blockHash: string;
    snapshot: UTXODoc[];
}
