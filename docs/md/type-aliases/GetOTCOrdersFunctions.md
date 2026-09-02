[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / GetOTCOrdersFunctions

# Type Alias: GetOTCOrdersFunctions

> **GetOTCOrdersFunctions** = `object`

Defined in: [src/methods/otcOrders/getOrders.ts:46](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/otcOrders/getOrders.ts#L46)

## Properties

### getOTCOrderByHash

> **getOTCOrderByHash**: [`GetOTCOrderByHash`](../-internal-/type-aliases/GetOTCOrderByHash.md)

Defined in: [src/methods/otcOrders/getOrders.ts:48](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/otcOrders/getOrders.ts#L48)

***

### getOTCOrders

> **getOTCOrders**: [`GetOTCOrders`](../-internal-/type-aliases/GetOTCOrders.md)

Defined in: [src/methods/otcOrders/getOrders.ts:47](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/otcOrders/getOrders.ts#L47)

***

### getRequiredBalance

> **getRequiredBalance**: [`GetRequiredBalance`](../-internal-/type-aliases/GetRequiredBalance.md)

Defined in: [src/methods/otcOrders/getOrders.ts:58](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/otcOrders/getOrders.ts#L58)

Gets fillableBalance for tokens from user's active orders.
User needs to have enough balance & allowance to cover active orders before creating new orders.

#### Param

**userParams**

parameters to get allowance for active orders

#### Param

**userParams.maker**

user to get required allowances for

#### Param

**userParams.token**

if given `token`, the mapping will contain that token address only

#### Param

**requestParams**

requestParams passed to fetcher, can include {signal: AbortSignal, timeout: for axios, etc.}

#### Returns

`{Lowercase<Address> => wei number as string}` mapping of token to fillableBalance
