[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / QuoteParams

# Type Alias: QuoteParams\<M\>

> **QuoteParams**\<`M`\> = `object`

Defined in: [src/methods/quote/getQuote.ts:15](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L15)

## Type Parameters

### M

`M` *extends* [`TradeMode`](../-internal-/type-aliases/TradeMode.md) = [`TradeMode`](../-internal-/type-aliases/TradeMode.md)

## Properties

### amount

> **amount**: `string`

Defined in: [src/methods/quote/getQuote.ts:21](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L21)

#### Description

srcToken amount (in case of SELL) or destToken amount (in case of BUY), in wei

***

### destDecimals

> **destDecimals**: `number`

Defined in: [src/methods/quote/getQuote.ts:25](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L25)

#### Description

Destination Token Decimals

***

### destToken

> **destToken**: `string`

Defined in: [src/methods/quote/getQuote.ts:19](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L19)

#### Description

Destination Token Address

***

### maxImpact?

> `optional` **maxImpact?**: `number`

Defined in: [src/methods/quote/getQuote.ts:35](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L35)

#### Description

Maximum price impact (in percentage) acceptable for the trade

***

### maxUSDImpact?

> `optional` **maxUSDImpact?**: `number`

Defined in: [src/methods/quote/getQuote.ts:37](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L37)

#### Description

Maximum price impact (in USD) acceptable for the trade

***

### mode

> **mode**: `M`

Defined in: [src/methods/quote/getQuote.ts:39](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L39)

#### Description

Preferred mode for the trade. In case of "all", Delta pricing is returned, with Market as a fallback

***

### partner?

> `optional` **partner?**: `string`

Defined in: [src/methods/quote/getQuote.ts:31](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L31)

#### Description

Partner string

***

### partnerFeeBps?

> `optional` **partnerFeeBps?**: `number`

Defined in: [src/methods/quote/getQuote.ts:33](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L33)

#### Description

Used together with `partner` if provided. Represented in basis points, 50bps=0.5%

***

### side?

> `optional` **side?**: [`SwapSideUnion`](../-internal-/type-aliases/SwapSideUnion-1.md)

Defined in: [src/methods/quote/getQuote.ts:27](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L27)

#### Description

SELL or BUY, default is SELL

***

### srcDecimals

> **srcDecimals**: `number`

Defined in: [src/methods/quote/getQuote.ts:23](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L23)

#### Description

Source Token Decimals.

***

### srcToken

> **srcToken**: `string`

Defined in: [src/methods/quote/getQuote.ts:17](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L17)

#### Description

Source Token Address

***

### userAddress?

> `optional` **userAddress?**: `string`

Defined in: [src/methods/quote/getQuote.ts:29](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L29)

#### Description

User's Wallet Address
