/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { BaseNft } from '../gamechain/base_nft';
export const protobufPackage = 'tak1827.gamechain.gamechain';
const baseGenesisState = { baseNftCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.baseNftList) {
            BaseNft.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.baseNftCount !== 0) {
            writer.uint32(16).uint64(message.baseNftCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.baseNftList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseNftList.push(BaseNft.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.baseNftCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.baseNftList = [];
        if (object.baseNftList !== undefined && object.baseNftList !== null) {
            for (const e of object.baseNftList) {
                message.baseNftList.push(BaseNft.fromJSON(e));
            }
        }
        if (object.baseNftCount !== undefined && object.baseNftCount !== null) {
            message.baseNftCount = Number(object.baseNftCount);
        }
        else {
            message.baseNftCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.baseNftList) {
            obj.baseNftList = message.baseNftList.map((e) => (e ? BaseNft.toJSON(e) : undefined));
        }
        else {
            obj.baseNftList = [];
        }
        message.baseNftCount !== undefined && (obj.baseNftCount = message.baseNftCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.baseNftList = [];
        if (object.baseNftList !== undefined && object.baseNftList !== null) {
            for (const e of object.baseNftList) {
                message.baseNftList.push(BaseNft.fromPartial(e));
            }
        }
        if (object.baseNftCount !== undefined && object.baseNftCount !== null) {
            message.baseNftCount = object.baseNftCount;
        }
        else {
            message.baseNftCount = 0;
        }
        return message;
    }
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
