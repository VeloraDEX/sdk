[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / DeltaPriceParams

# Type Alias: DeltaPriceParams

> **DeltaPriceParams** = `object`

Defined in: [src/methods/delta/getDeltaPrice.ts:12](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L12)

## Properties

### allowBridgeAndSwap?

> `optional` **allowBridgeAndSwap?**: `boolean`

Defined in: [src/methods/delta/getDeltaPrice.ts:45](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L45)

#### Description

Allow swap on destChain after bridge. Default is true.

***

### amount

> **amount**: `string`

Defined in: [src/methods/delta/getDeltaPrice.ts:18](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L18)

#### Description

srcToken amount in wei

***

### beneficiary?

> `optional` **beneficiary?**: `string`

Defined in: [src/methods/delta/getDeltaPrice.ts:26](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L26)

#### Description

Beneficiary Address

***

### degenMode?

> `optional` **degenMode?**: `boolean`

Defined in: [src/methods/delta/getDeltaPrice.ts:46](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L46)

***

### destChainId?

> `optional` **destChainId?**: `number`

Defined in: [src/methods/delta/getDeltaPrice.ts:32](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L32)

#### Description

Destination Chain ID for Crosschain Orders

***

### destDecimals

> **destDecimals**: `number`

Defined in: [src/methods/delta/getDeltaPrice.ts:22](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L22)

#### Description

Destination Token Decimals

***

### destToken

> **destToken**: `string`

Defined in: [src/methods/delta/getDeltaPrice.ts:16](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L16)

#### Description

Destination Token Address. For Crosschain Orders, the destination token on the destination chain

***

### excludeAgents?

> `optional` **excludeAgents?**: `string`[]

Defined in: [src/methods/delta/getDeltaPrice.ts:40](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L40)

***

### excludeBridges?

> `optional` **excludeBridges?**: `string`[]

Defined in: [src/methods/delta/getDeltaPrice.ts:42](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L42)

***

### includeAgents?

> `optional` **includeAgents?**: `string`[]

Defined in: [src/methods/delta/getDeltaPrice.ts:39](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L39)

***

### includeBridges?

> `optional` **includeBridges?**: `string`[]

Defined in: [src/methods/delta/getDeltaPrice.ts:41](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L41)

***

### maxImpact?

> `optional` **maxImpact?**: `number`

Defined in: [src/methods/delta/getDeltaPrice.ts:36](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L36)

#### Description

In %. Bypasses the API price impact check (default = 15%)

***

### maxUSDImpact?

> `optional` **maxUSDImpact?**: `number`

Defined in: [src/methods/delta/getDeltaPrice.ts:37](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L37)

***

### partner?

> `optional` **partner?**: `string`

Defined in: [src/methods/delta/getDeltaPrice.ts:28](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L28)

#### Description

Partner string.

***

### partnerFeeBps?

> `optional` **partnerFeeBps?**: `number`

Defined in: [src/methods/delta/getDeltaPrice.ts:30](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L30)

#### Description

Partner fee in basis points (bps), 50bps=0.5%

***

### side?

> `optional` **side?**: [`SwapSideUnion`](../-internal-/type-aliases/SwapSideUnion.md)

Defined in: [src/methods/delta/getDeltaPrice.ts:34](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L34)

#### Description

SELL or BUY, default is SELL

***

### srcDecimals

> **srcDecimals**: `number`

Defined in: [src/methods/delta/getDeltaPrice.ts:20](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L20)

#### Description

Source Token Decimals

***

### srcToken

> **srcToken**: `string`

Defined in: [src/methods/delta/getDeltaPrice.ts:14](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L14)

#### Description

Source Token Address

***

### userAddress?

> `optional` **userAddress?**: `string`

Defined in: [src/methods/delta/getDeltaPrice.ts:24](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getDeltaPrice.ts#L24)

#### Description

User's Wallet Address
