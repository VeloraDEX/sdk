[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3ContextObject

# Type Alias: Web3ContextObject\<API, RegisteredSubs\>

> **Web3ContextObject**\<`API`, `RegisteredSubs`\> = `object`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:9

## Type Parameters

### API

`API` *extends* [`Web3APISpec`](Web3APISpec.md) = `unknown`

### RegisteredSubs

`RegisteredSubs` *extends* `object` = `any`

## Properties

### accountProvider?

> `optional` **accountProvider?**: [`Web3AccountProvider`](../interfaces/Web3AccountProvider.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:18

***

### config

> **config**: [`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:12

***

### provider?

> `optional` **provider?**: [`SupportedProviders`](SupportedProviders.md)\<`API`\> \| `string`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:13

***

### providers

> **providers**: *typeof* [`providers`](../classes/Web3RequestManager.md#providers-1)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:17

***

### registeredSubscriptions?

> `optional` **registeredSubscriptions?**: `RegisteredSubs`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:16

***

### requestManager

> **requestManager**: [`Web3RequestManager`](../classes/Web3RequestManager.md)\<`API`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:14

***

### subscriptionManager?

> `optional` **subscriptionManager?**: [`Web3SubscriptionManager`](../classes/Web3SubscriptionManager.md)\<`API`, `RegisteredSubs`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:15

***

### wallet?

> `optional` **wallet?**: [`Web3BaseWallet`](../classes/Web3BaseWallet.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:19
