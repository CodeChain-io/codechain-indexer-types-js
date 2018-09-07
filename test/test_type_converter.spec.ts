import { Block } from "codechain-sdk/lib/core/Block";
import { TypeConverter } from "../src/utils";
const blockJson = {
    parentHash: "ff8324bd3b0232e4fd1799496ae422ee0896cc7a8a64a2885052e320b4ba9535",
    timestamp: 1536222635,
    number: 1,
    author: "tccqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqj5aqu5",
    extraData: [],
    parcelsRoot: "dfb9ba5a27f29ec6bc4241b49e008ce04cb55fbfd08dff7639efa04433d50ad2",
    stateRoot: "6f1c2748f2ea8b7c13207b9f3f7c5bc53096ce907c3492dc52294e939961f5b1",
    invoicesRoot: "50c86888cf60305683091a896034dec2aea8011d5c5c240214afdcfb92e9e4b3",
    score: "131072",
    seal: [],
    hash: "0c7d32e3466ec3fe0bc22430e1a7077b777952426495e28187a19fb253789f62",
    parcels: [
        {
            blockNumber: 1,
            blockHash: "0c7d32e3466ec3fe0bc22430e1a7077b777952426495e28187a19fb253789f62",
            parcelIndex: 0,
            nonce: "0",
            fee: "10",
            networkId: "tc",
            action: {
                action: "assetTransactionGroup",
                transactions: [
                    {
                        type: "assetMint",
                        data: {
                            networkId: "tc",
                            shardId: 0,
                            worldId: 0,
                            metadata:
                                '{"name":"Gold","description":"An asset example","icon_url":"https://gold.image/"}',
                            output: {
                                lockScriptHash: "f42a65ea518ba236c08b261c34af0521fa3cd1aa505e1c18980919cb8945f8f3",
                                parameters: [
                                    [
                                        59,
                                        26,
                                        54,
                                        60,
                                        107,
                                        0,
                                        95,
                                        35,
                                        102,
                                        186,
                                        42,
                                        39,
                                        123,
                                        54,
                                        143,
                                        78,
                                        138,
                                        61,
                                        195,
                                        247,
                                        33,
                                        209,
                                        152,
                                        251,
                                        226,
                                        120,
                                        229,
                                        1,
                                        37,
                                        198,
                                        116,
                                        94
                                    ]
                                ],
                                amount: 10000
                            },
                            registrar: null,
                            nonce: 0
                        }
                    },
                    {
                        type: "assetTransfer",
                        data: {
                            networkId: "tc",
                            burns: [],
                            inputs: [
                                {
                                    prevOut: {
                                        transactionHash:
                                            "77104ce72c1ab0d5904c017cc87bd1edfc2ffb8bbd1185497e64ddbd66f1adfd",
                                        index: 0,
                                        assetType: "5300000000003cfa603f8a4ca91c62335cf735e81ee2de4f6c4f9f8764cb796c",
                                        amount: 10000
                                    },
                                    lockScript: [53, 1, 144, 17, 34, 255, 128],
                                    unlockScript: [
                                        50,
                                        65,
                                        225,
                                        196,
                                        84,
                                        224,
                                        105,
                                        236,
                                        175,
                                        84,
                                        30,
                                        158,
                                        41,
                                        244,
                                        208,
                                        103,
                                        56,
                                        55,
                                        149,
                                        204,
                                        50,
                                        101,
                                        36,
                                        91,
                                        197,
                                        8,
                                        46,
                                        158,
                                        233,
                                        47,
                                        173,
                                        174,
                                        59,
                                        173,
                                        75,
                                        159,
                                        232,
                                        114,
                                        16,
                                        3,
                                        19,
                                        64,
                                        8,
                                        239,
                                        55,
                                        111,
                                        140,
                                        194,
                                        103,
                                        150,
                                        138,
                                        159,
                                        248,
                                        69,
                                        66,
                                        69,
                                        221,
                                        171,
                                        53,
                                        100,
                                        201,
                                        74,
                                        27,
                                        11,
                                        14,
                                        33,
                                        0,
                                        50,
                                        64,
                                        33,
                                        245,
                                        102,
                                        25,
                                        147,
                                        96,
                                        98,
                                        172,
                                        219,
                                        13,
                                        22,
                                        181,
                                        92,
                                        206,
                                        162,
                                        176,
                                        155,
                                        196,
                                        51,
                                        125,
                                        239,
                                        200,
                                        84,
                                        250,
                                        63,
                                        25,
                                        239,
                                        238,
                                        54,
                                        160,
                                        73,
                                        5,
                                        16,
                                        68,
                                        85,
                                        147,
                                        152,
                                        30,
                                        190,
                                        142,
                                        133,
                                        96,
                                        92,
                                        92,
                                        85,
                                        103,
                                        181,
                                        216,
                                        71,
                                        8,
                                        213,
                                        167,
                                        4,
                                        108,
                                        12,
                                        60,
                                        89,
                                        52,
                                        209,
                                        215,
                                        45,
                                        160,
                                        11,
                                        61
                                    ]
                                }
                            ],
                            outputs: [
                                {
                                    lockScriptHash: "50a2c0d145539c1fb32f60e0d8425b1c03f6120c40171971b8de9c0017a4bfb3",
                                    parameters: [],
                                    assetType: "5300000000003cfa603f8a4ca91c62335cf735e81ee2de4f6c4f9f8764cb796c",
                                    amount: 3000
                                },
                                {
                                    lockScriptHash: "f42a65ea518ba236c08b261c34af0521fa3cd1aa505e1c18980919cb8945f8f3",
                                    parameters: [
                                        [
                                            59,
                                            26,
                                            54,
                                            60,
                                            107,
                                            0,
                                            95,
                                            35,
                                            102,
                                            186,
                                            42,
                                            39,
                                            123,
                                            54,
                                            143,
                                            78,
                                            138,
                                            61,
                                            195,
                                            247,
                                            33,
                                            209,
                                            152,
                                            251,
                                            226,
                                            120,
                                            229,
                                            1,
                                            37,
                                            198,
                                            116,
                                            94
                                        ]
                                    ],
                                    assetType: "5300000000003cfa603f8a4ca91c62335cf735e81ee2de4f6c4f9f8764cb796c",
                                    amount: 7000
                                }
                            ],
                            nonce: 0
                        }
                    }
                ],
                changes: [
                    {
                        shardId: 0,
                        preRoot: "0x0000000000000000000000000000000000000000000000000000000000000000",
                        postRoot: "0x0000000000000000000000000000000000000000000000000000000000000000"
                    }
                ],
                signatures: []
            },
            sig:
                "0x40168424069f7b87f48b090b389d8dde8831edd5e4a57680ad78233e20e95d492b8d8b0ad805ba8304c602dec7fafd9fdf62caefbeeda6d17decd4728d9e39fa01",
            hash: "41fd8bca05796bfae90e21216609dc772089ebb65e2c739096f61d2b5861ab80"
        }
    ]
};
describe("type-converter", () => {
    let typeConverter: TypeConverter;
    beforeAll(async () => {
        typeConverter = new TypeConverter("http://127.0.0.1:8080");
    });

    test("from block", async () => {
        const blockDoc = await typeConverter.fromBlock(Block.fromJSON(blockJson), 50);
        expect(blockDoc.number).toBe(1);
    });
});
