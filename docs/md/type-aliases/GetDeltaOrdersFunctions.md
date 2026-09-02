[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / GetDeltaOrdersFunctions

# Type Alias: GetDeltaOrdersFunctions

> **GetDeltaOrdersFunctions** = `object`

Defined in: [src/methods/delta/getDeltaOrders.ts:59](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L59)

## Properties

### getDeltaOrderByHash

> **getDeltaOrderByHash**: [`GetDeltaOrderByHash`](../-internal-/type-aliases/GetDeltaOrderByHash.md)

Defined in: [src/methods/delta/getDeltaOrders.ts:63](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L63)

#### Description

Fetch a single order by its EIP-712 order hash.

***

### getDeltaOrderById

> **getDeltaOrderById**: [`GetDeltaOrderById`](../-internal-/type-aliases/GetDeltaOrderById.md)

Defined in: [src/methods/delta/getDeltaOrders.ts:61](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L61)

#### Description

Fetch a single order by its UUID.

***

### getDeltaOrders

> **getDeltaOrders**: [`GetDeltaOrders`](../-internal-/type-aliases/GetDeltaOrders.md)

Defined in: [src/methods/delta/getDeltaOrders.ts:65](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L65)

#### Description

List Delta orders with the v2 pagination envelope.

***

### getRequiredBalanceForDeltaOrders

> **getRequiredBalanceForDeltaOrders**: [`GetRequiredBalance`](../-internal-/type-aliases/GetRequiredBalance-1.md)

Defined in: [src/methods/delta/getDeltaOrders.ts:67](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L67)

#### Description

Required balance per token across the user's open Delta v2 orders. Pass `tokenAddress` to narrow the result to a single token.
