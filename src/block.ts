export interface BlockDoc {
    hash: string;
    parentHash: string;
    timestamp: number;
    number: number;
    author: string;
    extraData: Buffer;
    transactionsRoot: string;
    stateRoot: string;
    score: string;
    seal: Buffer[];
    miningReward: string;
    transactionsCount: number;
}
