/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { BaseNft } from '../gamechain/base_nft';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export const protobufPackage = 'tak1827.gamechain.gamechain';
const baseQueryGetBaseNftRequest = { id: 0 };
export const QueryGetBaseNftRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBaseNftRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBaseNftRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBaseNftRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetBaseNftResponse = {};
export const QueryGetBaseNftResponse = {
    encode(message, writer = Writer.create()) {
        if (message.BaseNft !== undefined) {
            BaseNft.encode(message.BaseNft, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBaseNftResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.BaseNft = BaseNft.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBaseNftResponse };
        if (object.BaseNft !== undefined && object.BaseNft !== null) {
            message.BaseNft = BaseNft.fromJSON(object.BaseNft);
        }
        else {
            message.BaseNft = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.BaseNft !== undefined && (obj.BaseNft = message.BaseNft ? BaseNft.toJSON(message.BaseNft) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBaseNftResponse };
        if (object.BaseNft !== undefined && object.BaseNft !== null) {
            message.BaseNft = BaseNft.fromPartial(object.BaseNft);
        }
        else {
            message.BaseNft = undefined;
        }
        return message;
    }
};
const baseQueryAllBaseNftRequest = {};
export const QueryAllBaseNftRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBaseNftRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllBaseNftRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBaseNftRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllBaseNftResponse = {};
export const QueryAllBaseNftResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.BaseNft) {
            BaseNft.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBaseNftResponse };
        message.BaseNft = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.BaseNft.push(BaseNft.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllBaseNftResponse };
        message.BaseNft = [];
        if (object.BaseNft !== undefined && object.BaseNft !== null) {
            for (const e of object.BaseNft) {
                message.BaseNft.push(BaseNft.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.BaseNft) {
            obj.BaseNft = message.BaseNft.map((e) => (e ? BaseNft.toJSON(e) : undefined));
        }
        else {
            obj.BaseNft = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBaseNftResponse };
        message.BaseNft = [];
        if (object.BaseNft !== undefined && object.BaseNft !== null) {
            for (const e of object.BaseNft) {
                message.BaseNft.push(BaseNft.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    BaseNft(request) {
        const data = QueryGetBaseNftRequest.encode(request).finish();
        const promise = this.rpc.request('tak1827.gamechain.gamechain.Query', 'BaseNft', data);
        return promise.then((data) => QueryGetBaseNftResponse.decode(new Reader(data)));
    }
    BaseNftAll(request) {
        const data = QueryAllBaseNftRequest.encode(request).finish();
        const promise = this.rpc.request('tak1827.gamechain.gamechain.Query', 'BaseNftAll', data);
        return promise.then((data) => QueryAllBaseNftResponse.decode(new Reader(data)));
    }
}
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
