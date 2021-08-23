/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'tak1827.gamechain.gamechain'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateBaseNft {
  creator: string
  name: string
  symbol: string
  supply: string
  baseuri: string
}

export interface MsgCreateBaseNftResponse {
  id: number
}

export interface MsgUpdateBaseNft {
  creator: string
  id: number
  name: string
  symbol: string
  supply: string
  baseuri: string
}

export interface MsgUpdateBaseNftResponse {}

export interface MsgDeleteBaseNft {
  creator: string
  id: number
}

export interface MsgDeleteBaseNftResponse {}

const baseMsgCreateBaseNft: object = { creator: '', name: '', symbol: '', supply: '', baseuri: '' }

export const MsgCreateBaseNft = {
  encode(message: MsgCreateBaseNft, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.symbol !== '') {
      writer.uint32(26).string(message.symbol)
    }
    if (message.supply !== '') {
      writer.uint32(34).string(message.supply)
    }
    if (message.baseuri !== '') {
      writer.uint32(42).string(message.baseuri)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBaseNft {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateBaseNft } as MsgCreateBaseNft
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        case 3:
          message.symbol = reader.string()
          break
        case 4:
          message.supply = reader.string()
          break
        case 5:
          message.baseuri = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateBaseNft {
    const message = { ...baseMsgCreateBaseNft } as MsgCreateBaseNft
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol)
    } else {
      message.symbol = ''
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = String(object.supply)
    } else {
      message.supply = ''
    }
    if (object.baseuri !== undefined && object.baseuri !== null) {
      message.baseuri = String(object.baseuri)
    } else {
      message.baseuri = ''
    }
    return message
  },

  toJSON(message: MsgCreateBaseNft): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    message.symbol !== undefined && (obj.symbol = message.symbol)
    message.supply !== undefined && (obj.supply = message.supply)
    message.baseuri !== undefined && (obj.baseuri = message.baseuri)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateBaseNft>): MsgCreateBaseNft {
    const message = { ...baseMsgCreateBaseNft } as MsgCreateBaseNft
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol
    } else {
      message.symbol = ''
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = object.supply
    } else {
      message.supply = ''
    }
    if (object.baseuri !== undefined && object.baseuri !== null) {
      message.baseuri = object.baseuri
    } else {
      message.baseuri = ''
    }
    return message
  }
}

const baseMsgCreateBaseNftResponse: object = { id: 0 }

export const MsgCreateBaseNftResponse = {
  encode(message: MsgCreateBaseNftResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBaseNftResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateBaseNftResponse } as MsgCreateBaseNftResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateBaseNftResponse {
    const message = { ...baseMsgCreateBaseNftResponse } as MsgCreateBaseNftResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateBaseNftResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateBaseNftResponse>): MsgCreateBaseNftResponse {
    const message = { ...baseMsgCreateBaseNftResponse } as MsgCreateBaseNftResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateBaseNft: object = { creator: '', id: 0, name: '', symbol: '', supply: '', baseuri: '' }

export const MsgUpdateBaseNft = {
  encode(message: MsgUpdateBaseNft, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.symbol !== '') {
      writer.uint32(34).string(message.symbol)
    }
    if (message.supply !== '') {
      writer.uint32(42).string(message.supply)
    }
    if (message.baseuri !== '') {
      writer.uint32(50).string(message.baseuri)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBaseNft {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateBaseNft } as MsgUpdateBaseNft
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.name = reader.string()
          break
        case 4:
          message.symbol = reader.string()
          break
        case 5:
          message.supply = reader.string()
          break
        case 6:
          message.baseuri = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateBaseNft {
    const message = { ...baseMsgUpdateBaseNft } as MsgUpdateBaseNft
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol)
    } else {
      message.symbol = ''
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = String(object.supply)
    } else {
      message.supply = ''
    }
    if (object.baseuri !== undefined && object.baseuri !== null) {
      message.baseuri = String(object.baseuri)
    } else {
      message.baseuri = ''
    }
    return message
  },

  toJSON(message: MsgUpdateBaseNft): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.name !== undefined && (obj.name = message.name)
    message.symbol !== undefined && (obj.symbol = message.symbol)
    message.supply !== undefined && (obj.supply = message.supply)
    message.baseuri !== undefined && (obj.baseuri = message.baseuri)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateBaseNft>): MsgUpdateBaseNft {
    const message = { ...baseMsgUpdateBaseNft } as MsgUpdateBaseNft
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol
    } else {
      message.symbol = ''
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = object.supply
    } else {
      message.supply = ''
    }
    if (object.baseuri !== undefined && object.baseuri !== null) {
      message.baseuri = object.baseuri
    } else {
      message.baseuri = ''
    }
    return message
  }
}

const baseMsgUpdateBaseNftResponse: object = {}

export const MsgUpdateBaseNftResponse = {
  encode(_: MsgUpdateBaseNftResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBaseNftResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateBaseNftResponse } as MsgUpdateBaseNftResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateBaseNftResponse {
    const message = { ...baseMsgUpdateBaseNftResponse } as MsgUpdateBaseNftResponse
    return message
  },

  toJSON(_: MsgUpdateBaseNftResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateBaseNftResponse>): MsgUpdateBaseNftResponse {
    const message = { ...baseMsgUpdateBaseNftResponse } as MsgUpdateBaseNftResponse
    return message
  }
}

const baseMsgDeleteBaseNft: object = { creator: '', id: 0 }

export const MsgDeleteBaseNft = {
  encode(message: MsgDeleteBaseNft, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBaseNft {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteBaseNft } as MsgDeleteBaseNft
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteBaseNft {
    const message = { ...baseMsgDeleteBaseNft } as MsgDeleteBaseNft
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteBaseNft): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteBaseNft>): MsgDeleteBaseNft {
    const message = { ...baseMsgDeleteBaseNft } as MsgDeleteBaseNft
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteBaseNftResponse: object = {}

export const MsgDeleteBaseNftResponse = {
  encode(_: MsgDeleteBaseNftResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBaseNftResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteBaseNftResponse } as MsgDeleteBaseNftResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteBaseNftResponse {
    const message = { ...baseMsgDeleteBaseNftResponse } as MsgDeleteBaseNftResponse
    return message
  },

  toJSON(_: MsgDeleteBaseNftResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteBaseNftResponse>): MsgDeleteBaseNftResponse {
    const message = { ...baseMsgDeleteBaseNftResponse } as MsgDeleteBaseNftResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateBaseNft(request: MsgCreateBaseNft): Promise<MsgCreateBaseNftResponse>
  UpdateBaseNft(request: MsgUpdateBaseNft): Promise<MsgUpdateBaseNftResponse>
  DeleteBaseNft(request: MsgDeleteBaseNft): Promise<MsgDeleteBaseNftResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateBaseNft(request: MsgCreateBaseNft): Promise<MsgCreateBaseNftResponse> {
    const data = MsgCreateBaseNft.encode(request).finish()
    const promise = this.rpc.request('tak1827.gamechain.gamechain.Msg', 'CreateBaseNft', data)
    return promise.then((data) => MsgCreateBaseNftResponse.decode(new Reader(data)))
  }

  UpdateBaseNft(request: MsgUpdateBaseNft): Promise<MsgUpdateBaseNftResponse> {
    const data = MsgUpdateBaseNft.encode(request).finish()
    const promise = this.rpc.request('tak1827.gamechain.gamechain.Msg', 'UpdateBaseNft', data)
    return promise.then((data) => MsgUpdateBaseNftResponse.decode(new Reader(data)))
  }

  DeleteBaseNft(request: MsgDeleteBaseNft): Promise<MsgDeleteBaseNftResponse> {
    const data = MsgDeleteBaseNft.encode(request).finish()
    const promise = this.rpc.request('tak1827.gamechain.gamechain.Msg', 'DeleteBaseNft', data)
    return promise.then((data) => MsgDeleteBaseNftResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
