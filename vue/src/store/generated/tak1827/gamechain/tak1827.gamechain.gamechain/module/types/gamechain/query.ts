/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { BaseNft } from '../gamechain/base_nft'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'tak1827.gamechain.gamechain'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetBaseNftRequest {
  id: number
}

export interface QueryGetBaseNftResponse {
  BaseNft: BaseNft | undefined
}

export interface QueryAllBaseNftRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllBaseNftResponse {
  BaseNft: BaseNft[]
  pagination: PageResponse | undefined
}

const baseQueryGetBaseNftRequest: object = { id: 0 }

export const QueryGetBaseNftRequest = {
  encode(message: QueryGetBaseNftRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBaseNftRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBaseNftRequest } as QueryGetBaseNftRequest
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

  fromJSON(object: any): QueryGetBaseNftRequest {
    const message = { ...baseQueryGetBaseNftRequest } as QueryGetBaseNftRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetBaseNftRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBaseNftRequest>): QueryGetBaseNftRequest {
    const message = { ...baseQueryGetBaseNftRequest } as QueryGetBaseNftRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetBaseNftResponse: object = {}

export const QueryGetBaseNftResponse = {
  encode(message: QueryGetBaseNftResponse, writer: Writer = Writer.create()): Writer {
    if (message.BaseNft !== undefined) {
      BaseNft.encode(message.BaseNft, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBaseNftResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBaseNftResponse } as QueryGetBaseNftResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.BaseNft = BaseNft.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetBaseNftResponse {
    const message = { ...baseQueryGetBaseNftResponse } as QueryGetBaseNftResponse
    if (object.BaseNft !== undefined && object.BaseNft !== null) {
      message.BaseNft = BaseNft.fromJSON(object.BaseNft)
    } else {
      message.BaseNft = undefined
    }
    return message
  },

  toJSON(message: QueryGetBaseNftResponse): unknown {
    const obj: any = {}
    message.BaseNft !== undefined && (obj.BaseNft = message.BaseNft ? BaseNft.toJSON(message.BaseNft) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBaseNftResponse>): QueryGetBaseNftResponse {
    const message = { ...baseQueryGetBaseNftResponse } as QueryGetBaseNftResponse
    if (object.BaseNft !== undefined && object.BaseNft !== null) {
      message.BaseNft = BaseNft.fromPartial(object.BaseNft)
    } else {
      message.BaseNft = undefined
    }
    return message
  }
}

const baseQueryAllBaseNftRequest: object = {}

export const QueryAllBaseNftRequest = {
  encode(message: QueryAllBaseNftRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBaseNftRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBaseNftRequest } as QueryAllBaseNftRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBaseNftRequest {
    const message = { ...baseQueryAllBaseNftRequest } as QueryAllBaseNftRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBaseNftRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBaseNftRequest>): QueryAllBaseNftRequest {
    const message = { ...baseQueryAllBaseNftRequest } as QueryAllBaseNftRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllBaseNftResponse: object = {}

export const QueryAllBaseNftResponse = {
  encode(message: QueryAllBaseNftResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.BaseNft) {
      BaseNft.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBaseNftResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBaseNftResponse } as QueryAllBaseNftResponse
    message.BaseNft = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.BaseNft.push(BaseNft.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBaseNftResponse {
    const message = { ...baseQueryAllBaseNftResponse } as QueryAllBaseNftResponse
    message.BaseNft = []
    if (object.BaseNft !== undefined && object.BaseNft !== null) {
      for (const e of object.BaseNft) {
        message.BaseNft.push(BaseNft.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBaseNftResponse): unknown {
    const obj: any = {}
    if (message.BaseNft) {
      obj.BaseNft = message.BaseNft.map((e) => (e ? BaseNft.toJSON(e) : undefined))
    } else {
      obj.BaseNft = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBaseNftResponse>): QueryAllBaseNftResponse {
    const message = { ...baseQueryAllBaseNftResponse } as QueryAllBaseNftResponse
    message.BaseNft = []
    if (object.BaseNft !== undefined && object.BaseNft !== null) {
      for (const e of object.BaseNft) {
        message.BaseNft.push(BaseNft.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a baseNft by id. */
  BaseNft(request: QueryGetBaseNftRequest): Promise<QueryGetBaseNftResponse>
  /** Queries a list of baseNft items. */
  BaseNftAll(request: QueryAllBaseNftRequest): Promise<QueryAllBaseNftResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  BaseNft(request: QueryGetBaseNftRequest): Promise<QueryGetBaseNftResponse> {
    const data = QueryGetBaseNftRequest.encode(request).finish()
    const promise = this.rpc.request('tak1827.gamechain.gamechain.Query', 'BaseNft', data)
    return promise.then((data) => QueryGetBaseNftResponse.decode(new Reader(data)))
  }

  BaseNftAll(request: QueryAllBaseNftRequest): Promise<QueryAllBaseNftResponse> {
    const data = QueryAllBaseNftRequest.encode(request).finish()
    const promise = this.rpc.request('tak1827.gamechain.gamechain.Query', 'BaseNftAll', data)
    return promise.then((data) => QueryAllBaseNftResponse.decode(new Reader(data)))
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
