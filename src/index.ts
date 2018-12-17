import * as _ from "lodash";

export type NetworkId = "cc" | "tc" | "sc" | "wc";

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
    blockNumber?: number | null;
    blockHash?: string | null;
    parcelIndex?: number | null;
    seq: string;
    fee: string;
    networkId: NetworkId;
    sig: string;
    hash: string;
    action: ActionDoc;
    /* custom field for indexing */
    signer: string;
    timestamp: number;
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
    action: "assetTransaction";
    transaction: TransactionDoc;
}

export interface PaymentDoc {
    action: "payment";
    receiver: string;
    amount: string;
    /* custom field for indexing */
    invoice?: boolean | null;
    errorType?: string | null;
}

export interface SetRegularKeyDoc {
    action: "setRegularKey";
    key: string;
    /* custom field for indexing */
    invoice?: boolean | null;
    errorType?: string | null;
}

export interface CreateShardDoc {
    action: "createShard";
    /* custom field for indexing */
    invoice?: boolean | null;
    errorType?: string | null;
}

export interface SetShardOwnersDoc {
    action: "setShardOwners";
    shardId: number;
    owners: string[];
    /* custom field for indexing */
    invoice?: boolean | null;
    errorType?: string | null;
}

export interface SetShardUsersDoc {
    action: "setShardUsers";
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
    metadata: Metadata;
    registrar?: string | null;
    amount?: string | null;
    networkId?: string | null;
    shardId?: number | null;
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
        output: AssetMintOutputDoc;
        networkId: string;
        shardId: number;
        metadata: Metadata;
        registrar?: string | null;
        /* custom field for indexing */
        hash: string;
        timestamp: number;
        assetName: string;
        parcelHash: string;
        blockNumber: number;
        parcelIndex: number;
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
    type: "assetTransfer";
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
        invoice?: boolean | null;
        errorType?: string | null;
    };
    isRetracted: boolean;
}

export interface AssetComposeTransactionDoc {
    type: "assetCompose";
    data: {
        networkId: string;
        shardId: number;
        metadata: Metadata;
        registrar?: string | null;
        output: AssetMintOutputDoc;
        inputs: AssetTransferInputDoc[];
        /* custom field for indexing */
        hash: string;
        timestamp: number;
        parcelHash: string;
        blockNumber: number;
        parcelIndex: number;
        invoice?: boolean | null;
        errorType?: string | null;
    };
    isRetracted: boolean;
}

export interface AssetDecomposeTransactionDoc {
    type: "assetDecompose";
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
        invoice?: boolean | null;
        errorType?: string | null;
    };
    isRetracted: boolean;
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

export interface Metadata {
    name?: string;
    description?: string;
    icon_url?: string;
    gateway?: string;
}
