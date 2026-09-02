[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / DeltaOrderToPost

# Type Alias: DeltaOrderToPost\<T\>

> **DeltaOrderToPost**\<`T`\> = `object`

Defined in: [src/methods/delta/postDeltaOrder.ts:7](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/postDeltaOrder.ts#L7)

## Type Parameters

### T

`T` *extends* keyof [`OnChainOrderMap`](../-internal-/type-aliases/OnChainOrderMap.md) = `"Order"`

## Properties

### chainId

> **chainId**: `number`

Defined in: [src/methods/delta/postDeltaOrder.ts:15](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/postDeltaOrder.ts#L15)

***

### excludeAgents?

> `optional` **excludeAgents?**: `string`[]

Defined in: [src/methods/delta/postDeltaOrder.ts:21](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/postDeltaOrder.ts#L21)

***

### includeAgents?

> `optional` **includeAgents?**: `string`[]

Defined in: [src/methods/delta/postDeltaOrder.ts:20](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/postDeltaOrder.ts#L20)

***

### order

> **order**: [`OnChainOrderMap`](../-internal-/type-aliases/OnChainOrderMap.md)\[`T`\]

Defined in: [src/methods/delta/postDeltaOrder.ts:12](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/postDeltaOrder.ts#L12)

***

### partiallyFillable?

> `optional` **partiallyFillable?**: `boolean`

Defined in: [src/methods/delta/postDeltaOrder.ts:17](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/postDeltaOrder.ts#L17)

#### Description

Designates the Order as being able to be partially filled, as opposed to fill-or-kill

***

### partner?

> `optional` **partner?**: `string`

Defined in: [src/methods/delta/postDeltaOrder.ts:9](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/postDeltaOrder.ts#L9)

#### Description

Partner string

***

### referrerAddress?

> `optional` **referrerAddress?**: `string`

Defined in: [src/methods/delta/postDeltaOrder.ts:11](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/postDeltaOrder.ts#L11)

#### Description

Referrer address

***

### signature

> **signature**: `string`

Defined in: [src/methods/delta/postDeltaOrder.ts:14](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/postDeltaOrder.ts#L14)

#### Description

Signature of the order from order.owner address. EOA signatures must be submitted in ERC-2098 Compact Representation.

***

### type?

> `optional` **type?**: [`DeltaOrderType`](DeltaOrderType.md)

Defined in: [src/methods/delta/postDeltaOrder.ts:19](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/postDeltaOrder.ts#L19)

#### Description

Type of the order. MARKET or LIMIT. Default is MARKET
