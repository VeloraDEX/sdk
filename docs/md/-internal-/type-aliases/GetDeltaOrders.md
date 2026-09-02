[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetDeltaOrders

# Type Alias: GetDeltaOrders

> **GetDeltaOrders** = \<`T`\>(`options`, `requestParams?`) => `Promise`\<[`PaginatedResponse`](../../type-aliases/PaginatedResponse.md)\<[`DeltaAuction`](../../type-aliases/DeltaAuction.md)\<`T`\>\>\>

Defined in: [src/methods/delta/getDeltaOrders.ts:44](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L44)

## Type Parameters

### T

`T` *extends* [`OnChainOrderType`](../../type-aliases/OnChainOrderType.md) = [`OnChainOrderType`](../../type-aliases/OnChainOrderType.md)

## Parameters

### options

[`OrdersFilter`](OrdersFilter.md)\<`T`\>

### requestParams?

[`RequestParameters`](RequestParameters.md)

## Returns

`Promise`\<[`PaginatedResponse`](../../type-aliases/PaginatedResponse.md)\<[`DeltaAuction`](../../type-aliases/DeltaAuction.md)\<`T`\>\>\>
