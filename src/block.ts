import { TransactionDoc } from "./transaction";

export interface BlockDoc {
    hash: string;
    parentHash: string;
    timestamp: number;
    number: number;
    author: string;
    extraData: Buffer;
    transactionsRoot: string;
    stateRoot: string;
    resultsRoot: string;
    score: string;
    seal: Buffer[];
    miningReward: string;
    transactions: TransactionDoc[];
}
