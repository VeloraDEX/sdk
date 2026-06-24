[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / GetDeltaOrdersFunctions

# Type Alias: GetDeltaOrdersFunctions

> **GetDeltaOrdersFunctions**: `object`

## Type declaration

### getDeltaOrderByHash

> **getDeltaOrderByHash**: [`GetDeltaOrderByHash`](../-internal-/type-aliases/GetDeltaOrderByHash.md)

#### Description

Fetch a single order by its EIP-712 order hash.

### getDeltaOrderById

> **getDeltaOrderById**: [`GetDeltaOrderById`](../-internal-/type-aliases/GetDeltaOrderById.md)

#### Description

Fetch a single order by its UUID.

### getDeltaOrders

> **getDeltaOrders**: [`GetDeltaOrders`](../-internal-/type-aliases/GetDeltaOrders.md)

#### Description

List Delta orders with the v2 pagination envelope.

### getRequiredBalanceForDeltaOrders

> **getRequiredBalanceForDeltaOrders**: [`GetRequiredBalance`](../-internal-/type-aliases/GetRequiredBalance.md)

#### Description

Required balance per token across the user's open Delta v2 orders. Pass `tokenAddress` to narrow the result to a single token.

## Defined in

[src/methods/delta/getDeltaOrders.ts:59](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaOrders.ts#L59)
