[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / DeltaOrderToPost

# Type Alias: DeltaOrderToPost

> **DeltaOrderToPost**: `object`

## Type declaration

### chainId

> **chainId**: `number`

### excludeAgents?

> `optional` **excludeAgents**: `string`[]

### includeAgents?

> `optional` **includeAgents**: `string`[]

### order

> **order**: [`DeltaAuctionOrder`](../../type-aliases/DeltaAuctionOrder.md)

### partiallyFillable?

> `optional` **partiallyFillable**: `boolean`

#### Description

designates the Order as being able to partially filled, as opposed to fill-or-kill

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

> `optional` **type**: `"MARKET"` \| `"LIMIT"`

#### Description

Type of the order. MARKET or LIMIT. Default is MARKET

## Defined in

[src/methods/delta/postDeltaOrder.ts:5](https://github.com/VeloraDEX/sdk/blob/feat/extend_delta_orders_filtering/src/methods/delta/postDeltaOrder.ts#L5)
