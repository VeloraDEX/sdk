[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / DeltaPriceParams

# Type Alias: DeltaPriceParams

> **DeltaPriceParams**: `object`

## Type declaration

### allowBridgeAndSwap?

> `optional` **allowBridgeAndSwap**: `boolean`

#### Description

Allow swap on destChain after bridge. Default is true.

### amount

> **amount**: `string`

#### Description

srcToken amount in wei

### beneficiary?

> `optional` **beneficiary**: `string`

#### Description

Beneficiary Address

### destChainId?

> `optional` **destChainId**: `number`

#### Description

Destination Chain ID for Crosschain Orders

### destDecimals

> **destDecimals**: `number`

#### Description

Destination Token Decimals

### destToken

> **destToken**: `string`

#### Description

Destination Token Address

### excludeAgents?

> `optional` **excludeAgents**: `string`[]

### excludeBridges?

> `optional` **excludeBridges**: `string`[]

### includeAgents?

> `optional` **includeAgents**: `string`[]

### includeBridges?

> `optional` **includeBridges**: `string`[]

### partner?

> `optional` **partner**: `string`

#### Description

Partner string.

### side?

> `optional` **side**: [`SwapSideUnion`](../-internal-/type-aliases/SwapSideUnion.md)

#### Description

SELL or BUY, default is SELL

### srcDecimals

> **srcDecimals**: `number`

#### Description

Source Token Decimals

### srcToken

> **srcToken**: `string`

#### Description

Source Token Address. Not Native Token

### userAddress?

> `optional` **userAddress**: `string`

#### Description

User's Wallet Address

## Defined in

[src/methods/delta/getDeltaPrice.ts:14](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L14)
