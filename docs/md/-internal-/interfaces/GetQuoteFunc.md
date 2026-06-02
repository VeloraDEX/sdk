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

[src/methods/quote/getQuote.ts:82](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L82)

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteWithBridgePrice`](../type-aliases/QuoteWithBridgePrice.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"delta"`\> & `object`

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteWithBridgePrice`](../type-aliases/QuoteWithBridgePrice.md)\>

## Defined in

[src/methods/quote/getQuote.ts:86](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L86)

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteWithDeltaPriceAndBridgePrice`](../type-aliases/QuoteWithDeltaPriceAndBridgePrice.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"delta"`\>

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteWithDeltaPriceAndBridgePrice`](../type-aliases/QuoteWithDeltaPriceAndBridgePrice.md)\>

## Defined in

[src/methods/quote/getQuote.ts:90](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L90)

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteWithMarketPrice`](../../type-aliases/QuoteWithMarketPrice.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"market"`\>

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteWithMarketPrice`](../../type-aliases/QuoteWithMarketPrice.md)\>

## Defined in

[src/methods/quote/getQuote.ts:94](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L94)

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteWithDeltaPrice`](../../type-aliases/QuoteWithDeltaPrice.md) \| [`QuoteWithMarketPriceAsFallback`](../../type-aliases/QuoteWithMarketPriceAsFallback.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"all"`\> & `object`

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteWithDeltaPrice`](../../type-aliases/QuoteWithDeltaPrice.md) \| [`QuoteWithMarketPriceAsFallback`](../../type-aliases/QuoteWithMarketPriceAsFallback.md)\>

## Defined in

[src/methods/quote/getQuote.ts:98](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L98)

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteWithBridgePrice`](../type-aliases/QuoteWithBridgePrice.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"all"`\> & `object`

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteWithBridgePrice`](../type-aliases/QuoteWithBridgePrice.md)\>

## Defined in

[src/methods/quote/getQuote.ts:104](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L104)

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteWithDeltaPriceAndBridgePrice`](../type-aliases/QuoteWithDeltaPriceAndBridgePrice.md) \| [`QuoteWithMarketPriceAsFallback`](../../type-aliases/QuoteWithMarketPriceAsFallback.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<`"all"`\>

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteWithDeltaPriceAndBridgePrice`](../type-aliases/QuoteWithDeltaPriceAndBridgePrice.md) \| [`QuoteWithMarketPriceAsFallback`](../../type-aliases/QuoteWithMarketPriceAsFallback.md)\>

## Defined in

[src/methods/quote/getQuote.ts:108](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L108)

> **GetQuoteFunc**(`options`, `requestParams`?): `Promise`\<[`QuoteResponse`](../../type-aliases/QuoteResponse.md)\>

## Parameters

• **options**: [`QuoteParams`](../../type-aliases/QuoteParams.md)\<[`TradeMode`](../type-aliases/TradeMode.md)\>

• **requestParams?**: [`RequestParameters`](../type-aliases/RequestParameters.md)

## Returns

`Promise`\<[`QuoteResponse`](../../type-aliases/QuoteResponse.md)\>

## Defined in

[src/methods/quote/getQuote.ts:111](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/quote/getQuote.ts#L111)
