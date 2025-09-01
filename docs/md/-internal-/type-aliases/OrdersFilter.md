[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / OrdersFilter

# Type Alias: OrdersFilter

> **OrdersFilter**: `object`

## Type declaration

### chainId?

> `optional` **chainId**: `number`

#### Description

Filter by chainId, without this filter, orders from all chains are returned

### limit?

> `optional` **limit**: `number`

#### Description

Pagination option, limit. Default 100

### page?

> `optional` **page**: `number`

#### Description

Pagination option, page. Default 1

### type?

> `optional` **type**: `"MARKET"` \| `"LIMIT"` \| `"ALL"`

#### Description

Filter by type. MARKET, LIMIT, or ALL. Default is ALL

### userAddress

> **userAddress**: [`Address`](../../type-aliases/Address.md)

#### Description

Order.owner to fetch Delta Order for

## Defined in

[src/methods/delta/getDeltaOrders.ts:22](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L22)
