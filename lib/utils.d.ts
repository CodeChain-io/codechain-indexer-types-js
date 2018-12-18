import { ActionDoc, AssetMintTransactionDoc, AssetSchemeDoc, BlockDoc, ParcelDoc, TransactionDoc } from "./types";
declare function isAssetTransactionGroupDoc(action: ActionDoc): boolean;
declare function isPaymentDoc(action: ActionDoc): boolean;
declare function isSetRegularKeyDoc(action: ActionDoc): boolean;
declare function isCreateShardDoc(action: ActionDoc): boolean;
declare function isAssetTransferTransactionDoc(transaction: TransactionDoc): boolean;
declare function isAssetMintTransactionDoc(transaction: TransactionDoc): boolean;
declare function getAssetSchemeDoc(transaction: AssetMintTransactionDoc): AssetSchemeDoc;
declare function isH256String(data: string): boolean;
declare function getTransactionsByBlock(blockDoc: BlockDoc): TransactionDoc[];
declare function getMintTransactionsByParcel(parcelDoc: ParcelDoc): AssetMintTransactionDoc[];
export interface MetadataFormat {
    name?: string;
    description?: string;
    icon_url?: string;
    gateway?: {
        url: string;
    };
}
export declare let Type: {
    isAssetTransactionGroupDoc: typeof isAssetTransactionGroupDoc;
    isPaymentDoc: typeof isPaymentDoc;
    isSetRegularKeyDoc: typeof isSetRegularKeyDoc;
    isCreateShardDoc: typeof isCreateShardDoc;
    isAssetTransferTransactionDoc: typeof isAssetTransferTransactionDoc;
    isAssetMintTransactionDoc: typeof isAssetMintTransactionDoc;
    getAssetSchemeDoc: typeof getAssetSchemeDoc;
    getMetadata: (data: string) => MetadataFormat;
    isH256String: typeof isH256String;
    getTransactionsByBlock: typeof getTransactionsByBlock;
    getMintTransactionsByParcel: typeof getMintTransactionsByParcel;
};
export {};
