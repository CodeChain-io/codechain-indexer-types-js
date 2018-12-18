"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
function isAssetTransactionGroupDoc(action) {
    return action.action === "assetTransactionGroup";
}
function isPaymentDoc(action) {
    return action.action === "payment";
}
function isSetRegularKeyDoc(action) {
    return action.action === "setRegularKey";
}
function isCreateShardDoc(action) {
    return action.action === "createShard";
}
function isAssetTransferTransactionDoc(transaction) {
    return transaction.type === "assetTransfer";
}
function isAssetMintTransactionDoc(transaction) {
    return transaction.type === "assetMint";
}
function getAssetSchemeDoc(transaction) {
    return {
        metadata: transaction.data.metadata,
        registrar: transaction.data.registrar,
        amount: transaction.data.output.amount,
        networkId: transaction.data.networkId
    };
}
function isH256String(data) {
    const regexp = /^(0x)?[0-9a-fA-F]+$/;
    return regexp.test(data) && (data.length === 64 || data.length === 66);
}
function getTransactionsByBlock(blockDoc) {
    return _.chain(blockDoc.parcels)
        .filter((parcel) => isAssetTransactionGroupDoc(parcel.action))
        .flatMap((parcel) => parcel.action.transactions)
        .value();
}
function getMintTransactionsByParcel(parcelDoc) {
    if (isAssetTransactionGroupDoc(parcelDoc.action)) {
        const assetTransactionGroupAction = parcelDoc.action;
        return _.filter(assetTransactionGroupAction.transactions, (tx) => exports.Type.isAssetMintTransactionDoc(tx));
    }
    return [];
}
const getMetadata = (data) => {
    try {
        return JSON.parse(data);
    }
    catch (e) {
        // nothing
    }
    return {};
};
exports.Type = {
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
