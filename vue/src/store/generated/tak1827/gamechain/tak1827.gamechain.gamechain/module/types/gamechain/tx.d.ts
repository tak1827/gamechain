import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "tak1827.gamechain.gamechain";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateBaseNft {
    creator: string;
    name: string;
    symbol: string;
    supply: string;
    baseuri: string;
}
export interface MsgCreateBaseNftResponse {
    id: number;
}
export interface MsgUpdateBaseNft {
    creator: string;
    id: number;
    name: string;
    symbol: string;
    supply: string;
    baseuri: string;
}
export interface MsgUpdateBaseNftResponse {
}
export interface MsgDeleteBaseNft {
    creator: string;
    id: number;
}
export interface MsgDeleteBaseNftResponse {
}
export declare const MsgCreateBaseNft: {
    encode(message: MsgCreateBaseNft, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBaseNft;
    fromJSON(object: any): MsgCreateBaseNft;
    toJSON(message: MsgCreateBaseNft): unknown;
    fromPartial(object: DeepPartial<MsgCreateBaseNft>): MsgCreateBaseNft;
};
export declare const MsgCreateBaseNftResponse: {
    encode(message: MsgCreateBaseNftResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBaseNftResponse;
    fromJSON(object: any): MsgCreateBaseNftResponse;
    toJSON(message: MsgCreateBaseNftResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateBaseNftResponse>): MsgCreateBaseNftResponse;
};
export declare const MsgUpdateBaseNft: {
    encode(message: MsgUpdateBaseNft, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateBaseNft;
    fromJSON(object: any): MsgUpdateBaseNft;
    toJSON(message: MsgUpdateBaseNft): unknown;
    fromPartial(object: DeepPartial<MsgUpdateBaseNft>): MsgUpdateBaseNft;
};
export declare const MsgUpdateBaseNftResponse: {
    encode(_: MsgUpdateBaseNftResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateBaseNftResponse;
    fromJSON(_: any): MsgUpdateBaseNftResponse;
    toJSON(_: MsgUpdateBaseNftResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateBaseNftResponse>): MsgUpdateBaseNftResponse;
};
export declare const MsgDeleteBaseNft: {
    encode(message: MsgDeleteBaseNft, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteBaseNft;
    fromJSON(object: any): MsgDeleteBaseNft;
    toJSON(message: MsgDeleteBaseNft): unknown;
    fromPartial(object: DeepPartial<MsgDeleteBaseNft>): MsgDeleteBaseNft;
};
export declare const MsgDeleteBaseNftResponse: {
    encode(_: MsgDeleteBaseNftResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteBaseNftResponse;
    fromJSON(_: any): MsgDeleteBaseNftResponse;
    toJSON(_: MsgDeleteBaseNftResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteBaseNftResponse>): MsgDeleteBaseNftResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateBaseNft(request: MsgCreateBaseNft): Promise<MsgCreateBaseNftResponse>;
    UpdateBaseNft(request: MsgUpdateBaseNft): Promise<MsgUpdateBaseNftResponse>;
    DeleteBaseNft(request: MsgDeleteBaseNft): Promise<MsgDeleteBaseNftResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateBaseNft(request: MsgCreateBaseNft): Promise<MsgCreateBaseNftResponse>;
    UpdateBaseNft(request: MsgUpdateBaseNft): Promise<MsgUpdateBaseNftResponse>;
    DeleteBaseNft(request: MsgDeleteBaseNft): Promise<MsgDeleteBaseNftResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
