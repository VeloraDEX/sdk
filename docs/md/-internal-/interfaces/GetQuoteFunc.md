[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetQuoteFunc

# Interface: GetQuoteFunc()

Defined in: [src/methods/quote/getQuote.ts:81](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L81)

## Call Signature

> **GetQuoteFunc**(`options`, `requestParams?`): `Promise`\<[`QuoteWithDeltaPrice`](../../type-aliases/QuoteWithDeltaPrice.md)\>

Defined in: [src/methods/quote/getQuote.ts:82](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L82)

### Parameters

#### options

[`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"delta"`\> & `object`

#### requestParams?

[`RequestParameters`](../type-aliases/RequestParameters.md)

### Returns

`Promise`\<[`QuoteWithDeltaPrice`](../../type-aliases/QuoteWithDeltaPrice.md)\>

## Call Signature

> **GetQuoteFunc**(`options`, `requestParams?`): `Promise`\<[`QuoteWithBridgePrice`](../type-aliases/QuoteWithBridgePrice.md)\>

Defined in: [src/methods/quote/getQuote.ts:86](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L86)

### Parameters

#### options

[`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"delta"`\> & `object`

#### requestParams?

[`RequestParameters`](../type-aliases/RequestParameters.md)

### Returns

`Promise`\<[`QuoteWithBridgePrice`](../type-aliases/QuoteWithBridgePrice.md)\>

## Call Signature

> **GetQuoteFunc**(`options`, `requestParams?`): `Promise`\<[`QuoteWithDeltaPriceAndBridgePrice`](../type-aliases/QuoteWithDeltaPriceAndBridgePrice.md)\>

Defined in: [src/methods/quote/getQuote.ts:90](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L90)

### Parameters

#### options

[`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"delta"`\>

#### requestParams?

[`RequestParameters`](../type-aliases/RequestParameters.md)

### Returns

`Promise`\<[`QuoteWithDeltaPriceAndBridgePrice`](../type-aliases/QuoteWithDeltaPriceAndBridgePrice.md)\>

## Call Signature

> **GetQuoteFunc**(`options`, `requestParams?`): `Promise`\<[`QuoteWithMarketPrice`](../../type-aliases/QuoteWithMarketPrice.md)\>

Defined in: [src/methods/quote/getQuote.ts:94](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L94)

### Parameters

#### options

[`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"market"`\>

#### requestParams?

[`RequestParameters`](../type-aliases/RequestParameters.md)

### Returns

`Promise`\<[`QuoteWithMarketPrice`](../../type-aliases/QuoteWithMarketPrice.md)\>

## Call Signature

> **GetQuoteFunc**(`options`, `requestParams?`): `Promise`\<[`QuoteWithDeltaPrice`](../../type-aliases/QuoteWithDeltaPrice.md) \| [`QuoteWithMarketPriceAsFallback`](../../type-aliases/QuoteWithMarketPriceAsFallback.md)\>

Defined in: [src/methods/quote/getQuote.ts:98](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L98)

### Parameters

#### options

[`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"all"`\> & `object`

#### requestParams?

[`RequestParameters`](../type-aliases/RequestParameters.md)

### Returns

`Promise`\<[`QuoteWithDeltaPrice`](../../type-aliases/QuoteWithDeltaPrice.md) \| [`QuoteWithMarketPriceAsFallback`](../../type-aliases/QuoteWithMarketPriceAsFallback.md)\>

## Call Signature

> **GetQuoteFunc**(`options`, `requestParams?`): `Promise`\<[`QuoteWithBridgePrice`](../type-aliases/QuoteWithBridgePrice.md)\>

Defined in: [src/methods/quote/getQuote.ts:104](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L104)

### Parameters

#### options

[`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"all"`\> & `object`

#### requestParams?

[`RequestParameters`](../type-aliases/RequestParameters.md)

### Returns

`Promise`\<[`QuoteWithBridgePrice`](../type-aliases/QuoteWithBridgePrice.md)\>

## Call Signature

> **GetQuoteFunc**(`options`, `requestParams?`): `Promise`\<[`QuoteWithDeltaPriceAndBridgePrice`](../type-aliases/QuoteWithDeltaPriceAndBridgePrice.md) \| [`QuoteWithMarketPriceAsFallback`](../../type-aliases/QuoteWithMarketPriceAsFallback.md)\>

Defined in: [src/methods/quote/getQuote.ts:108](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L108)

### Parameters

#### options

[`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"all"`\>

#### requestParams?

[`RequestParameters`](../type-aliases/RequestParameters.md)

### Returns

`Promise`\<[`QuoteWithDeltaPriceAndBridgePrice`](../type-aliases/QuoteWithDeltaPriceAndBridgePrice.md) \| [`QuoteWithMarketPriceAsFallback`](../../type-aliases/QuoteWithMarketPriceAsFallback.md)\>

## Call Signature

> **GetQuoteFunc**(`options`, `requestParams?`): `Promise`\<[`QuoteResponse`](../../type-aliases/QuoteResponse.md)\>

Defined in: [src/methods/quote/getQuote.ts:111](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L111)

### Parameters

#### options

[`QuoteParams`](../../type-aliases/QuoteParams.md)

#### requestParams?

[`RequestParameters`](../type-aliases/RequestParameters.md)

### Returns

`Promise`\<[`QuoteResponse`](../../type-aliases/QuoteResponse.md)\>
