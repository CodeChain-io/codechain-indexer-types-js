export type TransactionDoc =
    | PayTransactionDoc
    | MintAssetTransactionDoc
    | TransferAssetTransactionDoc
    | ComposeAssetTransactionDoc
    | DecomposeAssetTransactionDoc
    | WrapCCCTransactionDoc
    | UnwrapCCCTransactionDoc
    | ChangeAssetSchemeTransactionDoc
    | IncreaseAssetSupplyTransactionDoc
    | SetRegularKeyTransactionDoc
    | CreateShardTransactionDoc
    | SetShardOwnersTransactionDoc
    | SetShardUsersTransactionDoc
    | StoreTransactionDoc
    | RemoveTransactionDoc
    | CustomTransactionDoc;

export interface TransactionBaseDoc {
    hash: string;
    blockNumber?: number | null;
    blockHash?: string | null;
    tracker?: string | null;
    transactionIndex?: number | null;
    seq: number;
    fee: string;
    networkId: string;
    sig: string;
    signer: string;
    success?: boolean | null;
    errorHint?: string | null;
    timestamp?: number | null;
    isPending: boolean;
    pendingTimestamp?: number | null;
}

export interface PayTransactionDoc extends TransactionBaseDoc {
    type: "pay";
    pay: {
        receiver: string;
        quantity: string;
    };
}

export interface MintAssetTransactionDoc extends TransactionBaseDoc {
    type: "mintAsset";
    mintAsset: {
        networkId: string;
        shardId: number;
        metadata: string;
        approver: string | null;
        registrar: string | null;
        allowedScriptHashes: string[];
        approvals: string[];

        lockScriptHash: string;
        parameters: string[];
        supply: string;

        assetName?: string;
        assetType: string;
        recipient: string;
    };
}

export interface TransferAssetTransactionDoc extends TransactionBaseDoc {
    type: "transferAsset";
    transferAsset: {
        networkId: string;
        metadata: string;
        approvals: string[];
        expiration?: string;
        inputs: AssetTransferInputDoc[];
        burns: AssetTransferInputDoc[];
        outputs: AssetTransferOutputDoc[];
        orders: OrderOnTransferDoc[];
    };
}

export interface ComposeAssetTransactionDoc extends TransactionBaseDoc {
    type: "composeAsset";
    composeAsset: {
        networkId: string;
        shardId: number;
        metadata: string;
        approver: string | null;
        registrar: string | null;
        allowedScriptHashes: string[];

        approvals: string[];

        lockScriptHash: string;
        parameters: string[];
        supply: string;

        assetName?: string;
        assetType: string;
        recipient: string;

        inputs: AssetTransferInputDoc[];
    };
}

export interface DecomposeAssetTransactionDoc extends TransactionBaseDoc {
    type: "decomposeAsset";
    decomposeAsset: {
        networkId: string;
        approvals: string[];
        input: AssetTransferInputDoc;
        outputs: AssetTransferOutputDoc[];
    };
}

export type TimelockType = "block" | "blockAge" | "time" | "timeAge";
export interface Timelock {
    type: TimelockType;
    value: number;
}

export interface AssetTransferInputDoc {
    prevOut: AssetOutPointDoc;
    timelock: Timelock | null;
    owner: string | null;
    assetType: string;
    assetScheme: AssetSchemeDoc | null;
    lockScript: Buffer;
    unlockScript: Buffer;
}

export interface AssetOutPointDoc {
    tracker: string;
    hash?: string;
    index: number;
    assetType: string;
    quantity: string;
    owner: string | null;
    lockScriptHash: string | null;
    parameters: string[] | null;
}

export interface AssetSchemeDoc {
    assetType: string;
    metadata: string;
    approver: string | null;
    registrar: string | null;
    allowedScriptHashes: string[];
    supply: string;
    networkId: string;
    shardId: number;
}

export interface AssetTransferOutputDoc {
    lockScriptHash: string;
    parameters: string[];
    assetType: string;
    quantity: string;
    owner: string | null;
    assetScheme: AssetSchemeDoc | null;
}

export interface OrderOnTransferDoc {
    order?: OrderDoc;
    spentQuantity: string;
    inputIndices: number[];
    outputIndices: number[];
}

export interface OrderDoc {
    orderHash: string;

    assetTypeFrom: string;
    assetTypeTo: string;
    assetTypeFee: string;
    shardIdFrom: number;
    shardIdTo: number;
    shardIdFee: number;
    assetQuantityFrom: string;
    assetQuantityTo: string;
    assetQuantityFee: string;

    originOutputs: AssetOutPointDoc[];
    expiration: string;
    lockScriptHashFrom: string;
    parametersFrom: string[];
    lockScriptHashFee: string;
    parametersFee: string[];
}

export interface Metadata {
    name?: string;
    description?: string;
    icon_url?: string;
    gateway?: string;
}

export interface WrapCCCTransactionDoc extends TransactionBaseDoc {
    type: "wrapCCC";
    wrapCCC: {
        shardId: number;
        lockScriptHash: string;
        parameters: string[];
        quantity: string;
        recipient: string;
    };
}

export interface UnwrapCCCTransactionDoc extends TransactionBaseDoc {
    type: "unwrapCCC";
    unwrapCCC: {
        burn: AssetTransferInputDoc;
        receiver: string;
    };
}

export interface ChangeAssetSchemeTransactionDoc extends TransactionBaseDoc {
    type: "changeAssetScheme";
    changeAssetScheme: {
        assetType: string;
        networkId: string;
        shardId: number;
        metadata: string;
        approver: string | null;
        registrar: string | null;
        allowedScriptHashes: string[];
        approvals: string[];
    };
}

export interface IncreaseAssetSupplyTransactionDoc extends TransactionBaseDoc {
    type: "increaseAssetSupply";
    increaseAssetSupply: {
        assetType: string;
        networkId: string;
        shardId: number;
        parameters: string[];
        supply: string;
        recipient: string;
        lockScriptHash: string;
        approvals: string[];
    };
}

export interface SetRegularKeyTransactionDoc extends TransactionBaseDoc {
    type: "setRegularKey";
    setRegularKey: {
        key: string;
    };
}

export interface CreateShardTransactionDoc extends TransactionBaseDoc {
    type: "createShard";
}

export interface SetShardOwnersTransactionDoc extends TransactionBaseDoc {
    type: "setShardOwners";
    setShardOwners: {
        shardId: number;
        owners: string[];
    };
}

export interface SetShardUsersTransactionDoc extends TransactionBaseDoc {
    type: "setShardUsers";
    setShardUsers: {
        shardId: number;
        users: string[];
    };
}

export interface StoreTransactionDoc extends TransactionBaseDoc {
    type: "store";
    store: {
        content: string;
        certifier: string;
        signature: string;
    };
}

export interface RemoveTransactionDoc extends TransactionBaseDoc {
    type: "remove";
    remove: {
        textHash: string;
        signature: string;
    };
}

export interface CustomTransactionDoc extends TransactionBaseDoc {
    type: "custom";
    custom: {
        handlerId: number;
        content: string;
    };
}
