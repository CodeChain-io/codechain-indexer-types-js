import * as _ from "lodash";

export interface BlockDoc {
    parentHash: string;
    timestamp: number;
    number: number;
    author: string;
    extraData: Buffer;
    parcelsRoot: string;
    stateRoot: string;
    invoicesRoot: string;
    score: string;
    seal: Buffer[];
    hash: string;
    parcels: ParcelDoc[];
    /* custom field for indexing */
    isRetracted: boolean;
    miningReward: string;
}

export interface ParcelDoc {
    blockNumber: number | null;
    blockHash: string | null;
    parcelIndex: number | null;
    nonce: string;
    fee: string;
    networkId: string;
    sig: string;
    hash: string;
    action: ActionDoc;
    /* custom field for indexing */
    signer: string;
    timestamp: number;
    countOfTransaction: number;
    isRetracted: boolean;
}

export type ActionDoc = AssetTransactionGroupDoc | PaymentDoc | SetRegularKeyDoc | CreateShardDoc;

export interface AssetTransactionGroupDoc {
    action: "assetTransactionGroup";
    transactions: TransactionDoc[];
}

export interface PaymentDoc {
    action: "payment";
    receiver: string;
    amount: string;
    /* custom field for indexing */
    invoice?: boolean;
    errorType?: string;
}

export interface SetRegularKeyDoc {
    action: "setRegularKey";
    key: string;
    /* custom field for indexing */
    invoice?: boolean;
    errorType?: string;
}

export interface CreateShardDoc {
    action: "createShard";
    /* custom field for indexing */
    invoice?: boolean;
    errorType?: string;
}

export type TransactionDoc = AssetMintTransactionDoc | AssetTransferTransactionDoc;

export interface AssetSchemeDoc {
    metadata: string;
    registrar: string | null;
    amount: number | null;
    networkId: string;
}

export interface AssetDoc {
    assetType: string;
    lockScriptHash: string;
    parameters: Buffer[];
    amount: number;
    transactionHash: string;
    transactionOutputIndex: number;
}

export interface UTXO {
    asset: AssetDoc;
    assetScheme: AssetSchemeDoc;
    blockNumber: number;
    parcelIndex: number;
    transactionIndex: number;
}

export interface AggsUTXO {
    assetType: string;
    assetScheme: AssetSchemeDoc;
    totalAssetQuantity: number;
    utxoQuantity: number;
}

export interface AssetMintTransactionDoc {
    type: "assetMint";
    data: {
        output: {
            lockScriptHash: string;
            parameters: Buffer[];
            amount: number | null;
            /* custom field for indexing */
            owner: string;
            assetType: string;
        };
        networkId: string;
        metadata: string;
        registrar: string | null;
        nonce: number;
        hash: string;
        /* custom field for indexing */
        timestamp: number;
        assetName: string;
        parcelHash: string;
        blockNumber: number;
        parcelIndex: number;
        transactionIndex: number;
        invoice?: boolean;
        errorType?: string;
    };
    isRetracted: boolean;
}

export interface AssetTransferTransactionDoc {
    type: "assetTransfer";
    data: {
        networkId: string;
        burns: AssetTransferInputDoc[];
        inputs: AssetTransferInputDoc[];
        outputs: AssetTransferOutputDoc[];
        nonce: number;
        hash: string;
        /* custom field for indexing */
        timestamp: number;
        parcelHash: string;
        blockNumber: number;
        parcelIndex: number;
        transactionIndex: number;
        invoice?: boolean;
        errorType?: string;
    };
    isRetracted: boolean;
}

export interface AssetTransferInputDoc {
    prevOut: {
        transactionHash: string;
        index: number;
        assetType: string;
        assetScheme: AssetSchemeDoc;
        amount: number;
        /* custom field for indexing */
        owner: string;
        lockScriptHash: string;
        parameters: Buffer[];
    };
    lockScript: Buffer;
    unlockScript: Buffer;
}

export interface AssetTransferOutputDoc {
    lockScriptHash: string;
    parameters: Buffer[];
    assetType: string;
    assetScheme: AssetSchemeDoc;
    amount: number;
    /* custom field for indexing */
    owner: string;
}

export interface PendingParcelDoc {
    parcel: ParcelDoc;
    status: string;
    timestamp: number;
}

export interface PendingTransactionDoc {
    transaction: TransactionDoc;
    status: string;
    timestamp: number;
}
