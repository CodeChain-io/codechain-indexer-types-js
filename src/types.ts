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
    seq: string;
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

export type ActionDoc =
    | AssetTransactionDoc
    | PaymentDoc
    | SetRegularKeyDoc
    | CreateShardDoc
    | SetShardOwnersDoc
    | SetShardUsersDoc;

export interface AssetTransactionDoc {
    action: string;
    transaction: TransactionDoc;
}

export interface PaymentDoc {
    action: string;
    receiver: string;
    amount: string;
    /* custom field for indexing */
    invoice?: boolean;
    errorType?: string;
}

export interface SetRegularKeyDoc {
    action: string;
    key: string;
    /* custom field for indexing */
    invoice?: boolean;
    errorType?: string;
}

export interface CreateShardDoc {
    action: string;
    /* custom field for indexing */
    invoice?: boolean;
    errorType?: string;
}

export interface SetShardOwnersDoc {
    action: string;
    shardId: number;
    owners: string[];
    /* custom field for indexing */
    invoice?: boolean;
    errorType?: string;
}

export interface SetShardUsersDoc {
    action: string;
    shardId: number;
    users: string[];
    /* custom field for indexing */
    invoice?: boolean;
    errorType?: string;
}

export type TransactionDoc =
    | AssetMintTransactionDoc
    | AssetTransferTransactionDoc
    | AssetComposeTransactionDoc
    | AssetDecomposeTransactionDoc;

export interface AssetSchemeDoc {
    metadata: string;
    registrar?: string | null;
    amount?: string | null;
    networkId: string;
}

export interface AssetDoc {
    assetType: string;
    lockScriptHash: string;
    parameters: Buffer[];
    amount: string;
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
    type: string;
    data: {
        output: AssetMintOutputDoc;
        networkId: string;
        shardId: number;
        metadata: string;
        registrar?: string | null;
        /* custom field for indexing */
        hash: string;
        timestamp: number;
        assetName: string;
        parcelHash: string;
        blockNumber: number;
        parcelIndex: number;
        transactionIndex: number;
        invoice?: boolean | null;
        errorType?: string | null;
    };
    isRetracted: boolean;
}

export interface AssetMintOutputDoc {
    lockScriptHash: string;
    parameters: Buffer[];
    amount?: string | null;
    recipient?: string | null;
    /* custom field for indexing */
    assetType: string;
}

export interface AssetTransferTransactionDoc {
    type: string;
    data: {
        networkId: string;
        burns: AssetTransferInputDoc[];
        inputs: AssetTransferInputDoc[];
        outputs: AssetTransferOutputDoc[];
        /* custom field for indexing */
        hash: string;
        timestamp: number;
        parcelHash: string;
        blockNumber: number;
        parcelIndex: number;
        transactionIndex: number;
        invoice?: boolean | null;
        errorType?: string | null;
    };
    isRetracted: boolean;
}

export interface AssetComposeTransactionDoc {
    type: string;
    data: {
        networkId: string;
        shardId: number;
        metadata: string;
        registrar?: string | null;
        output: AssetMintOutputDoc;
        inputs: AssetTransferInputDoc;
        /* custom field for indexing */
        hash: string;
        timestamp: number;
        parcelHash: string;
        blockNumber: number;
        parcelIndex: number;
        transactionIndex: number;
        invoice?: boolean | null;
        errorType?: string | null;
    };
}

export interface AssetDecomposeTransactionDoc {
    type: string;
    data: {
        input: AssetTransferInputDoc;
        outputs: AssetTransferOutputDoc[];
        networkId: string;
        /* custom field for indexing */
        hash: string;
        timestamp: number;
        parcelHash: string;
        blockNumber: number;
        parcelIndex: number;
        transactionIndex: number;
        invoice?: boolean | null;
        errorType?: string | null;
    };
}

export type TimelockType = "block" | "blockAge" | "time" | "timeAge";
export interface Timelock {
    type: TimelockType;
    value: number;
}

export interface AssetTransferInputDoc {
    prevOut: AssetOutPointDoc;
    timelock?: Timelock | null;
    lockScript: Buffer;
    unlockScript: Buffer;
}

export interface AssetOutPointDoc {
    transactionHash: string;
    index: number;
    assetType: string;
    assetScheme: AssetSchemeDoc;
    amount: string;
    /* custom field for indexing */
    owner?: string | null;
    lockScriptHash: string;
    parameters: Buffer[];
}

export interface AssetTransferOutputDoc {
    lockScriptHash: string;
    parameters: Buffer[];
    assetType: string;
    amount: string;
    /* custom field for indexing */
    owner?: string | null;
    assetScheme: AssetSchemeDoc;
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
