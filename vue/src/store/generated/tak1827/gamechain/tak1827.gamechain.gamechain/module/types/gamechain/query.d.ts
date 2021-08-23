import { Reader, Writer } from 'protobufjs/minimal';
import { BaseNft } from '../gamechain/base_nft';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "tak1827.gamechain.gamechain";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetBaseNftRequest {
    id: number;
}
export interface QueryGetBaseNftResponse {
    BaseNft: BaseNft | undefined;
}
export interface QueryAllBaseNftRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllBaseNftResponse {
    BaseNft: BaseNft[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetBaseNftRequest: {
    encode(message: QueryGetBaseNftRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBaseNftRequest;
    fromJSON(object: any): QueryGetBaseNftRequest;
    toJSON(message: QueryGetBaseNftRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetBaseNftRequest>): QueryGetBaseNftRequest;
};
export declare const QueryGetBaseNftResponse: {
    encode(message: QueryGetBaseNftResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBaseNftResponse;
    fromJSON(object: any): QueryGetBaseNftResponse;
    toJSON(message: QueryGetBaseNftResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetBaseNftResponse>): QueryGetBaseNftResponse;
};
export declare const QueryAllBaseNftRequest: {
    encode(message: QueryAllBaseNftRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBaseNftRequest;
    fromJSON(object: any): QueryAllBaseNftRequest;
    toJSON(message: QueryAllBaseNftRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBaseNftRequest>): QueryAllBaseNftRequest;
};
export declare const QueryAllBaseNftResponse: {
    encode(message: QueryAllBaseNftResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBaseNftResponse;
    fromJSON(object: any): QueryAllBaseNftResponse;
    toJSON(message: QueryAllBaseNftResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBaseNftResponse>): QueryAllBaseNftResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a baseNft by id. */
    BaseNft(request: QueryGetBaseNftRequest): Promise<QueryGetBaseNftResponse>;
    /** Queries a list of baseNft items. */
    BaseNftAll(request: QueryAllBaseNftRequest): Promise<QueryAllBaseNftResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    BaseNft(request: QueryGetBaseNftRequest): Promise<QueryGetBaseNftResponse>;
    BaseNftAll(request: QueryAllBaseNftRequest): Promise<QueryAllBaseNftResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
