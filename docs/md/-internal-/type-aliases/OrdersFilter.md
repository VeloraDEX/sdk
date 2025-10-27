[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / OrdersFilter

# Type Alias: OrdersFilter

> **OrdersFilter**: `object`

## Type declaration

### chainId?

> `optional` **chainId**: `number`[]

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

### status?

> `optional` **status**: [`DeltaOrderFilterByStatus`](../../type-aliases/DeltaOrderFilterByStatus.md)[]

#### Description

Filter by any known DeltaAuctionStatus and some custom statuses:
- **INSUFFICIENT_BALANCE** —  returned as SUSPENDED from API
- **INSUFFICIENT_ALLOWANCE** —  returned as SUSPENDED from API
- **INVALIDATED** —  returned as FAILED from API
- **ACTIVE** —  All orders with NOT_STARTED, RUNNING, EXECUTING or SUSPENDED statuses.
- **INACTIVE** —  All orders with EXECUTED, FAILED, EXPIRED, CANCELLED or INVALIDATED statuses.

### type?

> `optional` **type**: `"MARKET"` \| `"LIMIT"`

#### Description

Filter by type. MARKET, LIMIT. Orders with both types are returned if not specified

### userAddress

> **userAddress**: [`Address`](../../type-aliases/Address.md)

#### Description

Order.owner to fetch Delta Order for

## Defined in

[src/methods/delta/getDeltaOrders.ts:30](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L30)
