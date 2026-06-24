[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / DeltaOrderToPost

# Type Alias: DeltaOrderToPost\<T\>

> **DeltaOrderToPost**\<`T`\>: `object`

## Type Parameters

• **T** *extends* keyof [`OnChainOrderMap`](../-internal-/type-aliases/OnChainOrderMap.md) = `"Order"`

## Type declaration

### chainId

> **chainId**: `number`

### excludeAgents?

> `optional` **excludeAgents**: `string`[]

### includeAgents?

> `optional` **includeAgents**: `string`[]

### order

> **order**: [`OnChainOrderMap`](../-internal-/type-aliases/OnChainOrderMap.md)\[`T`\]

### partiallyFillable?

> `optional` **partiallyFillable**: `boolean`

#### Description

Designates the Order as being able to be partially filled, as opposed to fill-or-kill

### partner?

> `optional` **partner**: `string`

#### Description

Partner string

### referrerAddress?

> `optional` **referrerAddress**: `string`

#### Description

Referrer address

### signature

> **signature**: `string`

#### Description

Signature of the order from order.owner address. EOA signatures must be submitted in ERC-2098 Compact Representation.

### type?

> `optional` **type**: [`DeltaOrderType`](DeltaOrderType.md)

#### Description

Type of the order. MARKET or LIMIT. Default is MARKET

## Defined in

[src/methods/delta/postDeltaOrder.ts:7](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/postDeltaOrder.ts#L7)
