/// <reference types="node" />
export declare type NetworkId = "cc" | "tc" | "sc" | "wc";
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
    miningReward: string;
}
export interface ParcelDoc {
    blockNumber?: number | null;
    blockHash?: string | null;
    parcelIndex?: number | null;
    seq: number;
    fee: string;
    networkId: NetworkId;
    sig: string;
    hash: string;
    action: ActionDoc;
    signer: string;
    timestamp: number;
}
export declare type ActionDoc = AssetTransactionDoc | PaymentDoc | SetRegularKeyDoc | CreateShardDoc | SetShardOwnersDoc | SetShardUsersDoc;
export interface AssetTransactionDoc {
    action: "assetTransaction";
    transaction: TransactionDoc;
    invoice?: boolean | null;
    errorType?: string | null;
}
export interface PaymentDoc {
    action: "payment";
    receiver: string;
    amount: string;
    invoice?: boolean | null;
    errorType?: string | null;
}
export interface SetRegularKeyDoc {
    action: "setRegularKey";
    key: string;
    invoice?: boolean | null;
    errorType?: string | null;
}
export interface CreateShardDoc {
    action: "createShard";
    invoice?: boolean | null;
    errorType?: string | null;
}
export interface SetShardOwnersDoc {
    action: "setShardOwners";
    shardId: number;
    owners: string[];
    invoice?: boolean | null;
    errorType?: string | null;
}
export interface SetShardUsersDoc {
    action: "setShardUsers";
    shardId: number;
    users: string[];
    invoice?: boolean;
    errorType?: string;
}
export declare type TransactionDoc = AssetMintTransactionDoc | AssetTransferTransactionDoc | AssetComposeTransactionDoc | AssetDecomposeTransactionDoc;
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
        hash: string;
        timestamp: number;
        assetName: string;
        parcelHash: string;
        blockNumber: number;
        parcelIndex: number;
        invoice?: boolean | null;
        errorType?: string | null;
    };
}
export interface AssetMintOutputDoc {
    lockScriptHash: string;
    parameters: Buffer[];
    amount?: string | null;
    recipient?: string | null;
    assetType: string;
}
export interface AssetTransferTransactionDoc {
    type: "assetTransfer";
    data: {
        networkId: string;
        burns: AssetTransferInputDoc[];
        inputs: AssetTransferInputDoc[];
        outputs: AssetTransferOutputDoc[];
        hash: string;
        timestamp: number;
        parcelHash: string;
        blockNumber: number;
        parcelIndex: number;
        invoice?: boolean | null;
        errorType?: string | null;
    };
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
        hash: string;
        timestamp: number;
        parcelHash: string;
        blockNumber: number;
        parcelIndex: number;
        invoice?: boolean | null;
        errorType?: string | null;
    };
}
export interface AssetDecomposeTransactionDoc {
    type: "assetDecompose";
    data: {
        input: AssetTransferInputDoc;
        outputs: AssetTransferOutputDoc[];
        networkId: string;
        hash: string;
        timestamp: number;
        parcelHash: string;
        blockNumber: number;
        parcelIndex: number;
        invoice?: boolean | null;
        errorType?: string | null;
    };
}
export declare type TimelockType = "block" | "blockAge" | "time" | "timeAge";
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
    owner?: string | null;
    lockScriptHash: string;
    parameters: Buffer[];
}
export interface AssetTransferOutputDoc {
    lockScriptHash: string;
    parameters: Buffer[];
    assetType: string;
    amount: string;
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
