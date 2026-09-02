[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3ProviderEventCallback

# Type Alias: Web3ProviderEventCallback\<T\>

> **Web3ProviderEventCallback**\<`T`\> = (`error`, `result?`) => `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:15

## Type Parameters

### T

`T` = [`JsonRpcResult`](JsonRpcResult.md)

## Parameters

### error

`Error` \| [`ProviderRpcError`](../interfaces/ProviderRpcError.md) \| `undefined`

### result?

[`JsonRpcSubscriptionResult`](../interfaces/JsonRpcSubscriptionResult.md) \| [`JsonRpcNotification`](../interfaces/JsonRpcNotification.md)\<`T`\>

## Returns

`void`
