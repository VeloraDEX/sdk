[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3ContextInitOptions

# Type Alias: Web3ContextInitOptions\<API, RegisteredSubs\>

> **Web3ContextInitOptions**\<`API`, `RegisteredSubs`\> = `object`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:21

## Type Parameters

### API

`API` *extends* [`Web3APISpec`](Web3APISpec.md) = `unknown`

### RegisteredSubs

`RegisteredSubs` *extends* `object` = `any`

## Properties

### accountProvider?

> `optional` **accountProvider?**: [`Web3AccountProvider`](../interfaces/Web3AccountProvider.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:29

***

### config?

> `optional` **config?**: [`Partial`](Partial.md)\<[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md)\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:24

***

### provider?

> `optional` **provider?**: [`SupportedProviders`](SupportedProviders.md)\<`API`\> \| `string`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:25

***

### registeredSubscriptions?

> `optional` **registeredSubscriptions?**: `RegisteredSubs`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:28

***

### requestManager?

> `optional` **requestManager?**: [`Web3RequestManager`](../classes/Web3RequestManager.md)\<`API`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:26

***

### requestManagerMiddleware?

> `optional` **requestManagerMiddleware?**: [`RequestManagerMiddleware`](../interfaces/RequestManagerMiddleware.md)\<`API`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:31

***

### subscriptionManager?

> `optional` **subscriptionManager?**: [`Web3SubscriptionManager`](../classes/Web3SubscriptionManager.md)\<`API`, `RegisteredSubs`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:27

***

### wallet?

> `optional` **wallet?**: [`Web3BaseWallet`](../classes/Web3BaseWallet.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:30
