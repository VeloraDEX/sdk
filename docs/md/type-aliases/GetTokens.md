[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / GetTokens

# Type Alias: GetTokens()

> **GetTokens**: (`options`?, `requestParams`?) => `Promise`\<`object`[]\>(`requestParams`?) => `Promise`\<`object`[]\>

## Parameters

• **options?**: [`GetTokensParams`](GetTokensParams.md)

• **requestParams?**: [`RequestParameters`](../-internal-/type-aliases/RequestParameters.md)

## Returns

`Promise`\<`object`[]\>

## Parameters

• **requestParams?**: [`RequestParameters`](../-internal-/type-aliases/RequestParameters.md)

## Returns

`Promise`\<`object`[]\>

## Deprecated

Passing RequestParameters as the first argument is deprecated.
Pass it as the second argument instead: `getTokens({}, requestParams)`

## Defined in

[src/methods/swap/token.ts:15](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/token.ts#L15)
