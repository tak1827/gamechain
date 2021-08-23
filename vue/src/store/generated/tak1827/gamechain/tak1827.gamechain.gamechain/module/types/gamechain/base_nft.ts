/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'tak1827.gamechain.gamechain'

export interface BaseNft {
  creator: string
  id: number
  name: string
  symbol: string
  supply: string
  baseuri: string
}

const baseBaseNft: object = { creator: '', id: 0, name: '', symbol: '', supply: '', baseuri: '' }

export const BaseNft = {
  encode(message: BaseNft, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): BaseNft {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseBaseNft } as BaseNft
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

  fromJSON(object: any): BaseNft {
    const message = { ...baseBaseNft } as BaseNft
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

  toJSON(message: BaseNft): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.name !== undefined && (obj.name = message.name)
    message.symbol !== undefined && (obj.symbol = message.symbol)
    message.supply !== undefined && (obj.supply = message.supply)
    message.baseuri !== undefined && (obj.baseuri = message.baseuri)
    return obj
  },

  fromPartial(object: DeepPartial<BaseNft>): BaseNft {
    const message = { ...baseBaseNft } as BaseNft
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
