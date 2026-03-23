[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetDeltaOrders

# Type Alias: GetDeltaOrders()

> **GetDeltaOrders**: \<`T`\>(`options`, `requestParams`?) => `Promise`\<[`DeltaAuction`](../../type-aliases/DeltaAuction.md)\<`T`\>[]\>(`options`, `requestParams`?) => `Promise`\<[`DeltaAuction`](../../type-aliases/DeltaAuction.md)[]\>

## Type Parameters

• **T** *extends* [`OnChainOrderType`](../../type-aliases/OnChainOrderType.md)

## Parameters

• **options**: [`OrdersFilter`](OrdersFilter.md)\<`T`\> & `object`

• **requestParams?**: [`RequestParameters`](RequestParameters.md)

## Returns

`Promise`\<[`DeltaAuction`](../../type-aliases/DeltaAuction.md)\<`T`\>[]\>

## Parameters

• **options**: [`OrdersFilter`](OrdersFilter.md)\<[`OnChainOrderType`](../../type-aliases/OnChainOrderType.md)\>

• **requestParams?**: [`RequestParameters`](RequestParameters.md)

## Returns

`Promise`\<[`DeltaAuction`](../../type-aliases/DeltaAuction.md)[]\>

## Defined in

[src/methods/delta/getDeltaOrders.ts:64](https://github.com/VeloraDEX/sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L64)
