[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / OrdersFilter

# Type Alias: OrdersFilter\<T\>

> **OrdersFilter**\<`T`\> = `object`

Defined in: [src/methods/delta/getDeltaOrders.ts:22](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L22)

## Type Parameters

### T

`T` *extends* [`OnChainOrderType`](../../type-aliases/OnChainOrderType.md) = [`OnChainOrderType`](../../type-aliases/OnChainOrderType.md)

## Properties

### chainId?

> `optional` **chainId?**: `number`[]

Defined in: [src/methods/delta/getDeltaOrders.ts:30](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L30)

#### Description

Filter by chainId. Omitted = orders across all chains.

***

### limit?

> `optional` **limit?**: `number`

Defined in: [src/methods/delta/getDeltaOrders.ts:28](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L28)

#### Description

Pagination option. Default 100, max 1000.

***

### onChainOrderType?

> `optional` **onChainOrderType?**: `T`

Defined in: [src/methods/delta/getDeltaOrders.ts:36](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L36)

#### Description

Filter by on-chain order type. Narrows the returned `DeltaAuction<T>`.

***

### page?

> `optional` **page?**: `number`

Defined in: [src/methods/delta/getDeltaOrders.ts:26](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L26)

#### Description

Pagination option. Default 1.

***

### status?

> `optional` **status?**: [`DeltaOrderStatus`](../../type-aliases/DeltaOrderStatus.md)[]

Defined in: [src/methods/delta/getDeltaOrders.ts:32](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L32)

#### Description

Filter by integrator-facing status.

***

### type?

> `optional` **type?**: [`DeltaOrderType`](../../type-aliases/DeltaOrderType.md)

Defined in: [src/methods/delta/getDeltaOrders.ts:34](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L34)

#### Description

Filter by order type. MARKET or LIMIT.

***

### userAddress

> **userAddress**: [`Address`](../../type-aliases/Address.md)

Defined in: [src/methods/delta/getDeltaOrders.ts:24](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L24)

#### Description

`order.owner` to fetch Delta Orders for.
