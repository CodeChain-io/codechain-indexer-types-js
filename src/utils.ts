import * as _ from "lodash";
import {
    ActionDoc,
    AssetComposeTransactionDoc,
    AssetDecomposeTransactionDoc,
    AssetMintTransactionDoc,
    AssetSchemeDoc,
    AssetTransactionDoc,
    AssetTransferTransactionDoc,
    BlockDoc,
    CreateShardDoc,
    ParcelDoc,
    PaymentDoc,
    SetRegularKeyDoc,
    SetShardOwnersDoc,
    SetShardUsersDoc,
    TransactionDoc
} from "./types";

function isAssetTransactionDoc(action: ActionDoc): action is AssetTransactionDoc {
    return action.action === "assetTransaction";
}

function isPaymentDoc(action: ActionDoc): action is PaymentDoc {
    return action.action === "payment";
}

function isSetRegularKeyDoc(action: ActionDoc): action is SetRegularKeyDoc {
    return action.action === "setRegularKey";
}

function isCreateShardDoc(action: ActionDoc): action is CreateShardDoc {
    return action.action === "createShard";
}

function isSetShardOwnersDoc(action: ActionDoc): action is SetShardOwnersDoc {
    return action.action === "setShardOwners";
}

function isSetShardUsersDoc(action: ActionDoc): action is SetShardUsersDoc {
    return action.action === "setShardUsers";
}

function isAssetTransferTransactionDoc(transaction: TransactionDoc): transaction is AssetTransferTransactionDoc {
    return transaction.type === "assetTransfer";
}

function isAssetMintTransactionDoc(transaction: TransactionDoc): transaction is AssetMintTransactionDoc {
    return transaction.type === "assetMint";
}

function isAssetComposeTransactionDoc(transaction: TransactionDoc): transaction is AssetComposeTransactionDoc {
    return transaction.type === "assetCompose";
}

function isAssetDecomposeTransactionDoc(transaction: TransactionDoc): transaction is AssetDecomposeTransactionDoc {
    return transaction.type === "assetDecompose";
}

function getAssetSchemeDoc(transaction: AssetMintTransactionDoc | AssetComposeTransactionDoc): AssetSchemeDoc {
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

function getMintTransactionByParcel(parcel: ParcelDoc): AssetMintTransactionDoc | undefined {
    if (Type.isAssetTransactionDoc(parcel.action)) {
        if (Type.isAssetMintTransactionDoc(parcel.action.transaction)) {
            return parcel.action.transaction;
        }
    }
    return undefined;
}

function getComposeTransactionByParcel(parcel: ParcelDoc): AssetComposeTransactionDoc | undefined {
    if (Type.isAssetTransactionDoc(parcel.action)) {
        if (Type.isAssetComposeTransactionDoc(parcel.action.transaction)) {
            return parcel.action.transaction as AssetComposeTransactionDoc;
        }
    }
    return undefined;
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
    getTransactionsByBlock,
    getMintTransactionByParcel,
    getComposeTransactionByParcel
};
