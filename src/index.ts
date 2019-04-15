import * as _ from "lodash";

export type NetworkId = "cc" | "tc" | "sc" | "wc";
export interface AccountDoc {
    address: string;
    balance: string;
    seq: number;
}

export * from "./block";
export * from "./transaction";
export * from "./utxo";
export * from "./balanceHistory";
