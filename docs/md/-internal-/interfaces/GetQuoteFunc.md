[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetQuoteFunc

# Interface: GetQuoteFunc()

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteWithDeltaPrice`](../../type-aliases/QuoteWithDeltaPrice.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"delta"`\> & `object`

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteWithDeltaPrice`](../../type-aliases/QuoteWithDeltaPrice.md)\>

## Defined in

[src/methods/quote/getQuote.ts:75](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L75)

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteWithBridgePrice`](../type-aliases/QuoteWithBridgePrice.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"delta"`\> & `object`

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteWithBridgePrice`](../type-aliases/QuoteWithBridgePrice.md)\>

## Defined in

[src/methods/quote/getQuote.ts:79](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L79)

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteWithDeltaPriceAndBridgePrice`](../type-aliases/QuoteWithDeltaPriceAndBridgePrice.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"delta"`\>

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteWithDeltaPriceAndBridgePrice`](../type-aliases/QuoteWithDeltaPriceAndBridgePrice.md)\>

## Defined in

[src/methods/quote/getQuote.ts:83](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L83)

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteWithMarketPrice`](../../type-aliases/QuoteWithMarketPrice.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"market"`\>

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteWithMarketPrice`](../../type-aliases/QuoteWithMarketPrice.md)\>

## Defined in

[src/methods/quote/getQuote.ts:87](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L87)

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteWithDeltaPrice`](../../type-aliases/QuoteWithDeltaPrice.md) \| [`QuoteWithMarketPriceAsFallback`](../../type-aliases/QuoteWithMarketPriceAsFallback.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"all"`\> & `object`

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteWithDeltaPrice`](../../type-aliases/QuoteWithDeltaPrice.md) \| [`QuoteWithMarketPriceAsFallback`](../../type-aliases/QuoteWithMarketPriceAsFallback.md)\>

## Defined in

[src/methods/quote/getQuote.ts:91](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L91)

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteWithBridgePrice`](../type-aliases/QuoteWithBridgePrice.md) \| [`QuoteWithMarketPriceAsFallback`](../../type-aliases/QuoteWithMarketPriceAsFallback.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"all"`\> & `object`

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteWithBridgePrice`](../type-aliases/QuoteWithBridgePrice.md) \| [`QuoteWithMarketPriceAsFallback`](../../type-aliases/QuoteWithMarketPriceAsFallback.md)\>

## Defined in

[src/methods/quote/getQuote.ts:97](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L97)

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteWithDeltaPriceAndBridgePrice`](../type-aliases/QuoteWithDeltaPriceAndBridgePrice.md) \| [`QuoteWithMarketPriceAsFallback`](../../type-aliases/QuoteWithMarketPriceAsFallback.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"all"`\>

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteWithDeltaPriceAndBridgePrice`](../type-aliases/QuoteWithDeltaPriceAndBridgePrice.md) \| [`QuoteWithMarketPriceAsFallback`](../../type-aliases/QuoteWithMarketPriceAsFallback.md)\>

## Defined in

[src/methods/quote/getQuote.ts:103](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L103)

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteResponse`](../../type-aliases/QuoteResponse.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<[`TradeMode`](../type-aliases/TradeMode.md)\>

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteResponse`](../../type-aliases/QuoteResponse.md)\>

## Defined in

[src/methods/quote/getQuote.ts:106](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L106)
