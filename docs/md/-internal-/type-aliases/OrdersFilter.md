[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / OrdersFilter

# Type Alias: OrdersFilter\<T\>

> **OrdersFilter**\<`T`\>: `object`

## Type Parameters

• **T** *extends* [`OnChainOrderType`](../../type-aliases/OnChainOrderType.md) = [`OnChainOrderType`](../../type-aliases/OnChainOrderType.md)

## Type declaration

### chainId?

> `optional` **chainId**: `number`[]

#### Description

Filter by chainId. Omitted = orders across all chains.

### limit?

> `optional` **limit**: `number`

#### Description

Pagination option. Default 100, max 1000.

### onChainOrderType?

> `optional` **onChainOrderType**: `T`

#### Description

Filter by on-chain order type. Narrows the returned `DeltaAuction<T>`.

### page?

> `optional` **page**: `number`

#### Description

Pagination option. Default 1.

### status?

> `optional` **status**: [`DeltaOrderStatus`](../../type-aliases/DeltaOrderStatus.md)[]

#### Description

Filter by integrator-facing status.

### type?

> `optional` **type**: [`DeltaOrderType`](../../type-aliases/DeltaOrderType.md)

#### Description

Filter by order type. MARKET or LIMIT.

### userAddress

> **userAddress**: [`Address`](../../type-aliases/Address.md)

#### Description

`order.owner` to fetch Delta Orders for.

## Defined in

[src/methods/delta/getDeltaOrders.ts:22](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L22)
