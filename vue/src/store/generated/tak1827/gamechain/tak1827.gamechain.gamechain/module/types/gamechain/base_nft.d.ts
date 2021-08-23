import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "tak1827.gamechain.gamechain";
export interface BaseNft {
    creator: string;
    id: number;
    name: string;
    symbol: string;
    supply: string;
    baseuri: string;
}
export declare const BaseNft: {
    encode(message: BaseNft, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): BaseNft;
    fromJSON(object: any): BaseNft;
    toJSON(message: BaseNft): unknown;
    fromPartial(object: DeepPartial<BaseNft>): BaseNft;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
