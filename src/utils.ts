import * as _ from "lodash";
import {
    ActionDoc,
    AssetMintTransactionDoc,
    AssetSchemeDoc,
    AssetTransactionGroupDoc,
    BlockDoc,
    ParcelDoc,
    TransactionDoc
} from "./types";

function isAssetTransactionGroupDoc(action: ActionDoc) {
    return action.action === "assetTransactionGroup";
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

function isAssetTransferTransactionDoc(transaction: TransactionDoc) {
    return transaction.type === "assetTransfer";
}

function isAssetMintTransactionDoc(transaction: TransactionDoc) {
    return transaction.type === "assetMint";
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
        .filter((parcel: ParcelDoc) => isAssetTransactionGroupDoc(parcel.action))
        .flatMap((parcel: ParcelDoc) => (parcel.action as AssetTransactionGroupDoc).transactions)
        .value();
}

function getMintTransactionsByParcel(parcelDoc: ParcelDoc): AssetMintTransactionDoc[] {
    if (isAssetTransactionGroupDoc(parcelDoc.action)) {
        const assetTransactionGroupAction = parcelDoc.action as AssetTransactionGroupDoc;
        return _.filter(assetTransactionGroupAction.transactions, (tx: TransactionDoc) =>
            Type.isAssetMintTransactionDoc(tx)
        ) as AssetMintTransactionDoc[];
    }
    return [];
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

export { TypeConverter } from "./utils/TypeConverter";
export let Type = {
    isAssetTransactionGroupDoc,
    isPaymentDoc,
    isSetRegularKeyDoc,
    isCreateShardDoc,
    isAssetTransferTransactionDoc,
    isAssetMintTransactionDoc,
    getAssetSchemeDoc,
    getMetadata,
    isH256String,
    getTransactionsByBlock,
    getMintTransactionsByParcel
};
