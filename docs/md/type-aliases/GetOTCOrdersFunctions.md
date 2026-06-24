[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / GetOTCOrdersFunctions

# Type Alias: GetOTCOrdersFunctions

> **GetOTCOrdersFunctions**: `object`

## Type declaration

### getOTCOrderByHash

> **getOTCOrderByHash**: [`GetOTCOrderByHash`](../-internal-/type-aliases/GetOTCOrderByHash.md)

### getOTCOrders

> **getOTCOrders**: [`GetOTCOrders`](../-internal-/type-aliases/GetOTCOrders.md)

### getRequiredBalance

> **getRequiredBalance**: [`GetRequiredBalance`](../-internal-/type-aliases/GetRequiredBalance.md)

Gets fillableBalance for tokens from user's active orders.
User needs to have enough balance & allowance to cover active orders before creating new orders.

#### Param

parameters to get allowance for active orders

#### Param

user to get required allowances for

#### Param

if given `token`, the mapping will contain that token address only

#### Param

requestParams passed to fetcher, can include {signal: AbortSignal, timeout: for axios, etc.}

#### Returns

`{Lowercase<Address> => wei number as string}` mapping of token to fillableBalance

## Defined in

[src/methods/otcOrders/getOrders.ts:46](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/otcOrders/getOrders.ts#L46)
