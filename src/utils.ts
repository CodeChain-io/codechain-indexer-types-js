import * as _ from "lodash";
import {
    ActionDoc,
    AssetMintTransactionDoc,
    AssetSchemeDoc,
    AssetTransactionDoc,
    BlockDoc,
    ParcelDoc,
    TransactionDoc
} from "./types";

function isAssetTransactionDoc(action: ActionDoc) {
    return action.action === "assetTransaction";
}

function isPaymentDoc(action: ActionDoc) {
    return action.action === "payment";
}

function isSetRegularKeyDoc(action: ActionDoc) {
    return action.action === "setRegularKey";
}

function isCreateShardDoc(action: ActionDoc) {
    return action.action === "createShard";
}

function isSetShardOwnersDoc(action: ActionDoc) {
    return action.action === "setShardOwners";
}

function isSetShardUsersDoc(action: ActionDoc) {
    return action.action === "setShardUsers";
}

function isAssetTransferTransactionDoc(transaction: TransactionDoc) {
    return transaction.type === "assetTransfer";
}

function isAssetMintTransactionDoc(transaction: TransactionDoc) {
    return transaction.type === "assetMint";
}

function isAssetComposeTransactionDoc(transaction: TransactionDoc) {
    return transaction.type === "assetCompose";
}

function isAssetDecomposeTransactionDoc(transaction: TransactionDoc) {
    return transaction.type === "assetDecompose";
}

function getAssetSchemeDoc(transaction: AssetMintTransactionDoc): AssetSchemeDoc {
    return {
        metadata: transaction.data.metadata,
        registrar: transaction.data.registrar,
        amount: transaction.data.output.amount,
        networkId: transaction.data.networkId
    };
}

function isH256String(data: string) {
    const regexp = /^(0x)?[0-9a-fA-F]+$/;
    return regexp.test(data) && (data.length === 64 || data.length === 66);
}

function getTransactionsByBlock(blockDoc: BlockDoc): TransactionDoc[] {
    return _.chain(blockDoc.parcels)
        .filter((parcel: ParcelDoc) => isAssetTransactionDoc(parcel.action))
        .map((parcel: ParcelDoc) => (parcel.action as AssetTransactionDoc).transaction)
        .value();
}

export interface MetadataFormat {
    name?: string;
    description?: string;
    icon_url?: string;
}

const getMetadata = (data: string): MetadataFormat => {
    try {
        return JSON.parse(data);
    } catch (e) {
        // nothing
    }
    return {};
};

export let Type = {
    isAssetTransactionDoc,
    isPaymentDoc,
    isSetRegularKeyDoc,
    isCreateShardDoc,
    isSetShardOwnersDoc,
    isSetShardUsersDoc,
    isAssetTransferTransactionDoc,
    isAssetMintTransactionDoc,
    isAssetComposeTransactionDoc,
    isAssetDecomposeTransactionDoc,
    getAssetSchemeDoc,
    getMetadata,
    isH256String,
    getTransactionsByBlock
};
