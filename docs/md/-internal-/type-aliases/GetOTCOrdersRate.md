[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetOTCOrdersRate

# Type Alias: GetOTCOrdersRate

> **GetOTCOrdersRate** = (`options`, `orders`, `requestParams?`) => `Promise`\<[`OptimalRate`](../../type-aliases/OptimalRate.md)\>

Defined in: [src/methods/otcOrders/transaction.ts:53](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/otcOrders/transaction.ts#L53)

## Parameters

### options

[`Omit`](Omit.md)\<[`GetRateInput`](../../type-aliases/GetRateInput.md), `"amount"` \| `"side"`\> & `object`

### orders

[`CheckableOrderData`](CheckableOrderData.md)[]

### requestParams?

[`RequestParameters`](RequestParameters.md)

## Returns

`Promise`\<[`OptimalRate`](../../type-aliases/OptimalRate.md)\>
