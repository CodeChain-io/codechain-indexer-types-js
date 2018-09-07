import { Block } from "codechain-sdk/lib/core/Block";
import { TypeConverter } from "../src/utils";
const blockJson = {
    parentHash: "0000000000000000000000000000000000000000000000000000000000000000",
    timestamp: 0,
    number: 0,
    author: "tccqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqj5aqu5",
    extraData: [
        23,
        108,
        91,
        111,
        253,
        100,
        40,
        143,
        87,
        206,
        189,
        160,
        126,
        135,
        186,
        91,
        4,
        70,
        5,
        195,
        246,
        153,
        51,
        67,
        233,
        113,
        143,
        161,
        0,
        209,
        115,
        124
    ],
    parcelsRoot: "45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0",
    stateRoot: "2f6b19afc38f6f1464af20dde08d8bebd6a6aec0a95aaf7ef2fb729c3b88dc5b",
    invoicesRoot: "45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0",
    score: "131072",
    seal: [],
    hash: "ff8324bd3b0232e4fd1799496ae422ee0896cc7a8a64a2885052e320b4ba9535",
    parcels: []
};
describe("type-converter", () => {
    let typeConverter: TypeConverter;
    beforeAll(async () => {
        typeConverter = new TypeConverter("http://127.0.0.1:8080");
    });

    test("from block", async () => {
        const blockDoc = await typeConverter.fromBlock(Block.fromJSON(blockJson), 50);
        expect(blockDoc.number).toBe(0);
    });
});
