import { TransactionDoc } from "./transaction";

export interface BalanceHistoryDoc {
    address: string;
    change: string;
    blockNumber: number;
    reason: "fee" | "author" | "stake" | "tx" | "initial_distribution";
    transactionHash: string;
    transaction: {
        type: TransactionDoc["type"];
    };
}
