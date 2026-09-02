[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Personal

# Class: Personal

Defined in: node\_modules/.pnpm/web3-eth-personal@4.1.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-personal/lib/commonjs/personal.d.ts:23

Eth Personal allows you to interact with the Ethereum node’s accounts.
For using Eth Personal package, first install Web3 package using: `npm i web3` or `yarn add web3` based on your package manager.
```ts

import { Web3 } from 'web3';
 const web3 = new Web3('http://127.0.0.1:7545');

 console.log(await web3.eth.personal.getAccounts());

```
For using individual package install `web3-eth-personal` packages using: `npm i web3-eth-personal` or `yarn add web3-eth-personal`.

```ts
import {Personal} from 'web3-eth-personal';

const personal = new Personal('http://127.0.0.1:7545');
console.log(await personal.getAccounts());
```

## Extends

- [`Web3Context`](Web3Context.md)\<[`EthPersonalAPI`](../type-aliases/EthPersonalAPI.md)\>

## Constructors

### Constructor

> **new Personal**(`providerOrContext?`): `Personal`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:53

#### Parameters

##### providerOrContext?

`string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<[`EthPersonalAPI`](../type-aliases/EthPersonalAPI.md)\> \| [`Web3ContextInitOptions`](../type-aliases/Web3ContextInitOptions.md)\<[`EthPersonalAPI`](../type-aliases/EthPersonalAPI.md), `any`\>

#### Returns

`Personal`

#### Inherited from

[`Web3Context`](Web3Context.md).[`constructor`](Web3Context.md#constructor)

## Properties

### \_accountProvider?

> `protected` `optional` **\_accountProvider?**: [`Web3AccountProvider`](../interfaces/Web3AccountProvider.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:51

#### Inherited from

[`Web3Context`](Web3Context.md).[`_accountProvider`](Web3Context.md#_accountprovider)

***

### \_requestManager

> `protected` **\_requestManager**: [`Web3RequestManager`](Web3RequestManager.md)\<[`EthPersonalAPI`](../type-aliases/EthPersonalAPI.md)\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:49

#### Inherited from

[`Web3Context`](Web3Context.md).[`_requestManager`](Web3Context.md#_requestmanager)

***

### \_subscriptionManager

> `protected` **\_subscriptionManager**: [`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<[`EthPersonalAPI`](../type-aliases/EthPersonalAPI.md), `any`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:50

#### Inherited from

[`Web3Context`](Web3Context.md).[`_subscriptionManager`](Web3Context.md#_subscriptionmanager)

***

### \_wallet?

> `protected` `optional` **\_wallet?**: [`Web3BaseWallet`](Web3BaseWallet.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:52

#### Inherited from

[`Web3Context`](Web3Context.md).[`_wallet`](Web3Context.md#_wallet)

***

### config

> **config**: [`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:46

#### Inherited from

[`Web3Context`](Web3Context.md).[`config`](Web3Context.md#config)

***

### providers

> `readonly` **providers**: `object`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:45

#### HttpProvider

> **HttpProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

#### WebsocketProvider

> **WebsocketProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

#### Inherited from

[`Web3Context`](Web3Context.md).[`providers`](Web3Context.md#providers)

***

### givenProvider?

> `static` `optional` **givenProvider?**: [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`never`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:44

#### Inherited from

[`Web3Context`](Web3Context.md).[`givenProvider`](Web3Context.md#givenprovider)

***

### providers

> `readonly` `static` **providers**: `object`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:40

#### HttpProvider

> **HttpProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

#### WebsocketProvider

> **WebsocketProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

#### Inherited from

[`Web3Context`](Web3Context.md).[`providers`](Web3Context.md#providers-1)

## Accessors

### accountProvider

#### Get Signature

> **get** **accountProvider**(): [`Web3AccountProvider`](../interfaces/Web3AccountProvider.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\> \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:60

##### Returns

[`Web3AccountProvider`](../interfaces/Web3AccountProvider.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\> \| `undefined`

#### Inherited from

[`Web3Context`](Web3Context.md).[`accountProvider`](Web3Context.md#accountprovider)

***

### BatchRequest

#### Get Signature

> **get** **BatchRequest**(): () => [`Web3BatchRequest`](Web3BatchRequest.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:160

Will return the [Web3BatchRequest](Web3BatchRequest.md) constructor.

##### Returns

() => [`Web3BatchRequest`](Web3BatchRequest.md)

#### Inherited from

`Web3Context.BatchRequest`

***

### blockHeaderTimeout

#### Get Signature

> **get** **blockHeaderTimeout**(): `number`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:169

The blockHeaderTimeout is used over socket-based connections. This option defines the amount seconds it should wait for `'newBlockHeaders'` event before falling back to polling to fetch transaction receipt.
Default is `10` seconds.

##### Returns

`number`

#### Set Signature

> **set** **blockHeaderTimeout**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:173

Will set the blockHeaderTimeout

##### Parameters

###### val

`number`

##### Returns

`void`

#### Inherited from

`Web3Context.blockHeaderTimeout`

***

### contractDataInputFill

#### Get Signature

> **get** **contractDataInputFill**(): `"data"` \| `"input"` \| `"both"`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:70

The `contractDataInputFill` options property will allow you to set the hash of the method signature and encoded parameters to the property
either `data`, `input` or both within your contract.
This will affect the contracts send, call and estimateGas methods
Default is `data`.

##### Returns

`"data"` \| `"input"` \| `"both"`

#### Set Signature

> **set** **contractDataInputFill**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:74

Will set the contractDataInputFill

##### Parameters

###### val

`"data"` \| `"input"` \| `"both"`

##### Returns

`void`

#### Inherited from

`Web3Context.contractDataInputFill`

***

### currentProvider

#### Get Signature

> **get** **currentProvider**(): [`Web3BaseProvider`](Web3BaseProvider.md)\<`API`\> \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:123

Will return the current provider. (The same as `provider`)

##### Example

```ts
const web3Context = new Web3Context("http://localhost:8545");
console.log(web3Context.provider);
> HttpProvider {
	clientUrl: 'http://localhost:8545',
	httpProviderOptions: undefined
 }
```

##### Returns

[`Web3BaseProvider`](Web3BaseProvider.md)\<`API`\> \| `undefined`

Returns the current provider

#### Set Signature

> **set** **currentProvider**(`provider`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:142

Will set the current provider. (The same as `provider`)

##### Example

```ts
 const web3Context = new Web3Context("http://localhost:8545");
web3Context.currentProvider = "ws://localhost:8545";
console.log(web3Context.provider);
> WebSocketProvider {
_eventEmitter: EventEmitter {
_events: [Object: null prototype] {},
_eventsCount: 0,
...
}
```

##### Parameters

###### provider

`string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\> \| `undefined`

[SupportedProviders](../type-aliases/SupportedProviders.md) The provider to set

##### Returns

`void`

#### Inherited from

`Web3Context.currentProvider`

***

### customTransactionSchema

#### Get Signature

> **get** **customTransactionSchema**(): [`CustomTransactionSchema`](../type-aliases/CustomTransactionSchema.md) \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:255

##### Returns

[`CustomTransactionSchema`](../type-aliases/CustomTransactionSchema.md) \| `undefined`

#### Set Signature

> **set** **customTransactionSchema**(`schema`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:256

##### Parameters

###### schema

[`CustomTransactionSchema`](../type-aliases/CustomTransactionSchema.md) \| `undefined`

##### Returns

`void`

#### Inherited from

`Web3Context.customTransactionSchema`

***

### defaultAccount

#### Get Signature

> **get** **defaultAccount**(): `string` \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:82

This default address is used as the default `from` property, if no `from` property is specified in for the following methods:
- web3.eth.sendTransaction()
- web3.eth.call()
- myContract.methods.myMethod().call()
- myContract.methods.myMethod().send()

##### Returns

`string` \| `undefined`

#### Set Signature

> **set** **defaultAccount**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:86

Will set the default account.

##### Parameters

###### val

`string` \| `undefined`

##### Returns

`void`

#### Inherited from

`Web3Context.defaultAccount`

***

### defaultBlock

#### Get Signature

> **get** **defaultBlock**(): [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:96

The default block is used for certain methods. You can override it by passing in the defaultBlock as last parameter. The default value is `"latest"`.
- web3.eth.getBalance()
- web3.eth.getCode()
- web3.eth.getTransactionCount()
- web3.eth.getStorageAt()
- web3.eth.call()
- myContract.methods.myMethod().call()

##### Returns

[`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

#### Set Signature

> **set** **defaultBlock**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:107

Will set the default block.

- A block number
- `"earliest"` - String: The genesis block
- `"latest"` - String: The latest block (current head of the blockchain)
- `"pending"` - String: The currently mined block (including pending transactions)
- `"finalized"` - String: (For POS networks) The finalized block is one which has been accepted as canonical by greater than 2/3 of validators
- `"safe"` - String: (For POS networks) The safe head block is one which under normal network conditions, is expected to be included in the canonical chain. Under normal network conditions the safe head and the actual tip of the chain will be equivalent (with safe head trailing only by a few seconds). Safe heads will be less likely to be reorged than the proof of work network's latest blocks.

##### Parameters

###### val

[`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

##### Returns

`void`

#### Inherited from

`Web3Context.defaultBlock`

***

### defaultChain

#### Get Signature

> **get** **defaultChain**(): `string`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:195

##### Returns

`string`

#### Set Signature

> **set** **defaultChain**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:196

##### Parameters

###### val

`string`

##### Returns

`void`

#### Inherited from

`Web3Context.defaultChain`

***

### defaultCommon

#### Get Signature

> **get** **defaultCommon**(): [`Common`](../interfaces/Common.md) \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:235

Will get the default common property
The default common property does contain the following Common object:
- `customChain` - `Object`: The custom chain properties
	- `name` - `string`: (optional) The name of the chain
	- `networkId` - `number`: Network ID of the custom chain
	- `chainId` - `number`: Chain ID of the custom chain
- `baseChain` - `string`: (optional) mainnet, goerli, kovan, rinkeby, or ropsten
- `hardfork` - `string`: (optional) chainstart, homestead, dao, tangerineWhistle, spuriousDragon, byzantium, constantinople, petersburg, istanbul, berlin, or london
Default is `undefined`.

##### Returns

[`Common`](../interfaces/Common.md) \| `undefined`

#### Set Signature

> **set** **defaultCommon**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:240

Will set the default common property

##### Parameters

###### val

[`Common`](../interfaces/Common.md) \| `undefined`

##### Returns

`void`

#### Inherited from

`Web3Context.defaultCommon`

***

### defaultHardfork

#### Get Signature

> **get** **defaultHardfork**(): `string`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:216

Will return the default hardfork. Default is `london`
The default hardfork property can be one of the following:
- `chainstart`
- `homestead`
- `dao`
- `tangerineWhistle`
- `spuriousDragon`
- `byzantium`
- `constantinople`
- `petersburg`
- `istanbul`
- `berlin`
- `london`
- 'arrowGlacier',
- 'tangerineWhistle',
- 'muirGlacier'

##### Returns

`string`

#### Set Signature

> **set** **defaultHardfork**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:221

Will set the default hardfork.

##### Parameters

###### val

`string`

##### Returns

`void`

#### Inherited from

`Web3Context.defaultHardfork`

***

### defaultMaxPriorityFeePerGas

#### Get Signature

> **get** **defaultMaxPriorityFeePerGas**(): [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:249

##### Returns

[`Numbers`](../type-aliases/Numbers.md)

#### Set Signature

> **set** **defaultMaxPriorityFeePerGas**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:250

##### Parameters

###### val

[`Numbers`](../type-aliases/Numbers.md)

##### Returns

`void`

#### Inherited from

`Web3Context.defaultMaxPriorityFeePerGas`

***

### defaultNetworkId

#### Get Signature

> **get** **defaultNetworkId**(): [`Numbers`](../type-aliases/Numbers.md) \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:193

##### Returns

[`Numbers`](../type-aliases/Numbers.md) \| `undefined`

#### Set Signature

> **set** **defaultNetworkId**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:194

##### Parameters

###### val

[`Numbers`](../type-aliases/Numbers.md) \| `undefined`

##### Returns

`void`

#### Inherited from

`Web3Context.defaultNetworkId`

***

### defaultReturnFormat

#### Get Signature

> **get** **defaultReturnFormat**(): [`DataFormat`](../type-aliases/DataFormat.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:191

##### Returns

[`DataFormat`](../type-aliases/DataFormat.md)

#### Set Signature

> **set** **defaultReturnFormat**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:192

##### Parameters

###### val

[`DataFormat`](../type-aliases/DataFormat.md)

##### Returns

`void`

#### Inherited from

`Web3Context.defaultReturnFormat`

***

### defaultTransactionType

#### Get Signature

> **get** **defaultTransactionType**(): [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:247

##### Returns

[`Numbers`](../type-aliases/Numbers.md)

#### Set Signature

> **set** **defaultTransactionType**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:248

##### Parameters

###### val

[`Numbers`](../type-aliases/Numbers.md)

##### Returns

`void`

#### Inherited from

`Web3Context.defaultTransactionType`

***

### enableExperimentalFeatures

#### Get Signature

> **get** **enableExperimentalFeatures**(): `object`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:178

The enableExperimentalFeatures is used to enable trying new experimental features that are still not fully implemented or not fully tested or still have some related issues.
Default is `false` for every feature.

##### Returns

`object`

###### useRpcCallSpecification

> **useRpcCallSpecification**: `boolean`

###### useSubscriptionWhenCheckingBlockTimeout

> **useSubscriptionWhenCheckingBlockTimeout**: `boolean`

#### Set Signature

> **set** **enableExperimentalFeatures**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:185

Will set the enableExperimentalFeatures

##### Parameters

###### val

###### useRpcCallSpecification

`boolean`

###### useSubscriptionWhenCheckingBlockTimeout

`boolean`

##### Returns

`void`

#### Inherited from

`Web3Context.enableExperimentalFeatures`

***

### givenProvider

#### Get Signature

> **get** **givenProvider**(): [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`never`\> \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:148

Will return the givenProvider if available.

When using web3.js in an Ethereum compatible browser, it will set with the current native provider by that browser. Will return the given provider by the (browser) environment, otherwise `undefined`.

##### Returns

[`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`never`\> \| `undefined`

#### Inherited from

[`Web3Context`](Web3Context.md).[`givenProvider`](Web3Context.md#givenprovider-1)

***

### handleRevert

#### Get Signature

> **get** **handleRevert**(): `boolean`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:59

The `handleRevert` options property returns the revert reason string if enabled for the following methods:
- web3.eth.sendTransaction()
- web3.eth.call()
- myContract.methods.myMethod().call()
- myContract.methods.myMethod().send()
Default is `false`.

`Note`: At the moment `handleRevert` is only supported for `sendTransaction` and not for `sendSignedTransaction`

##### Returns

`boolean`

#### Set Signature

> **set** **handleRevert**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:63

Will set the handleRevert

##### Parameters

###### val

`boolean`

##### Returns

`void`

#### Inherited from

`Web3Context.handleRevert`

***

### ignoreGasPricing

#### Get Signature

> **get** **ignoreGasPricing**(): `boolean`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:245

Will get the ignoreGasPricing property. When true, the gasPrice, maxPriorityFeePerGas, and maxFeePerGas will not be autofilled in the transaction object.
 Useful when you want wallets to handle gas pricing.

##### Returns

`boolean`

#### Set Signature

> **set** **ignoreGasPricing**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:246

##### Parameters

###### val

`boolean`

##### Returns

`void`

#### Inherited from

`Web3Context.ignoreGasPricing`

***

### maxListenersWarningThreshold

#### Get Signature

> **get** **maxListenersWarningThreshold**(): `number`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:189

##### Returns

`number`

#### Set Signature

> **set** **maxListenersWarningThreshold**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:190

##### Parameters

###### val

`number`

##### Returns

`void`

#### Inherited from

`Web3Context.maxListenersWarningThreshold`

***

### provider

#### Get Signature

> **get** **provider**(): [`Web3BaseProvider`](Web3BaseProvider.md)\<`API`\> \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:88

Will return the current provider.

##### Example

```ts
const web3 = new Web3Context("http://localhost:8545");
console.log(web3.provider);
> HttpProvider {
	clientUrl: 'http://localhost:8545',
	httpProviderOptions: undefined
 }
```

##### Returns

[`Web3BaseProvider`](Web3BaseProvider.md)\<`API`\> \| `undefined`

Returns the current provider

#### Set Signature

> **set** **provider**(`provider`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:108

Will set the current provider.

##### Example

```ts
 const web3Context = new web3ContextContext("http://localhost:8545");
web3Context.provider = "ws://localhost:8545";
console.log(web3Context.provider);
> WebSocketProvider {
_eventEmitter: EventEmitter {
_events: [Object: null prototype] {},
_eventsCount: 0,
...
}
```

##### Parameters

###### provider

`string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\> \| `undefined`

The provider to set

Accepted providers are of type [SupportedProviders](../type-aliases/SupportedProviders.md)

##### Returns

`void`

#### Inherited from

`Web3Context.provider`

***

### requestManager

#### Get Signature

> **get** **requestManager**(): [`Web3RequestManager`](Web3RequestManager.md)\<`API`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:54

##### Returns

[`Web3RequestManager`](Web3RequestManager.md)\<`API`\>

#### Inherited from

`Web3Context.requestManager`

***

### subscriptionManager

#### Get Signature

> **get** **subscriptionManager**(): [`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, `RegisteredSubs`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:58

Will return the current subscriptionManager ([Web3SubscriptionManager](Web3SubscriptionManager.md))

##### Returns

[`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, `RegisteredSubs`\>

#### Inherited from

`Web3Context.subscriptionManager`

***

### transactionBlockTimeout

#### Get Signature

> **get** **transactionBlockTimeout**(): `number`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:122

The `transactionBlockTimeout` is used over socket-based connections. This option defines the amount of new blocks it should wait until the first confirmation happens, otherwise the PromiEvent rejects with a timeout error.
Default is `50`.

##### Returns

`number`

#### Set Signature

> **set** **transactionBlockTimeout**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:126

Will set the transactionBlockTimeout.

##### Parameters

###### val

`number`

##### Returns

`void`

#### Inherited from

`Web3Context.transactionBlockTimeout`

***

### transactionBuilder

#### Get Signature

> **get** **transactionBuilder**(): [`TransactionBuilder`](../type-aliases/TransactionBuilder.md)\<`unknown`\> \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:251

##### Returns

[`TransactionBuilder`](../type-aliases/TransactionBuilder.md)\<`unknown`\> \| `undefined`

#### Set Signature

> **set** **transactionBuilder**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:252

##### Parameters

###### val

[`TransactionBuilder`](../type-aliases/TransactionBuilder.md)\<`unknown`\> \| `undefined`

##### Returns

`void`

#### Inherited from

`Web3Context.transactionBuilder`

***

### transactionConfirmationBlocks

#### Get Signature

> **get** **transactionConfirmationBlocks**(): `number`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:131

This defines the number of blocks it requires until a transaction is considered confirmed.
Default is `24`.

##### Returns

`number`

#### Set Signature

> **set** **transactionConfirmationBlocks**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:135

Will set the transactionConfirmationBlocks.

##### Parameters

###### val

`number`

##### Returns

`void`

#### Inherited from

`Web3Context.transactionConfirmationBlocks`

***

### transactionConfirmationPollingInterval

#### Get Signature

> **get** **transactionConfirmationPollingInterval**(): `number` \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:163

##### Returns

`number` \| `undefined`

#### Set Signature

> **set** **transactionConfirmationPollingInterval**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:164

##### Parameters

###### val

`number` \| `undefined`

##### Returns

`void`

#### Inherited from

`Web3Context.transactionConfirmationPollingInterval`

***

### transactionPollingInterval

#### Get Signature

> **get** **transactionPollingInterval**(): `number`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:140

Used over HTTP connections. This option defines the number of seconds between Web3 calls for a receipt which confirms that a transaction was mined by the network.
Default is `1000` ms.

##### Returns

`number`

#### Set Signature

> **set** **transactionPollingInterval**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:144

Will set the transactionPollingInterval.

##### Parameters

###### val

`number`

##### Returns

`void`

#### Inherited from

`Web3Context.transactionPollingInterval`

***

### transactionPollingTimeout

#### Get Signature

> **get** **transactionPollingTimeout**(): `number`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:149

Used over HTTP connections. This option defines the number of seconds Web3 will wait for a receipt which confirms that a transaction was mined by the network. Note: If this method times out, the transaction may still be pending.
Default is `750` seconds (12.5 minutes).

##### Returns

`number`

#### Set Signature

> **set** **transactionPollingTimeout**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:153

Will set the transactionPollingTimeout.

##### Parameters

###### val

`number`

##### Returns

`void`

#### Inherited from

`Web3Context.transactionPollingTimeout`

***

### transactionReceiptPollingInterval

#### Get Signature

> **get** **transactionReceiptPollingInterval**(): `number` \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:158

The `transactionPollingInterval` is used over HTTP connections. This option defines the number of seconds between Web3 calls for a receipt which confirms that a transaction was mined by the network.
Default is `undefined`

##### Returns

`number` \| `undefined`

#### Set Signature

> **set** **transactionReceiptPollingInterval**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:162

Will set the transactionReceiptPollingInterval

##### Parameters

###### val

`number` \| `undefined`

##### Returns

`void`

#### Inherited from

`Web3Context.transactionReceiptPollingInterval`

***

### transactionSendTimeout

#### Get Signature

> **get** **transactionSendTimeout**(): `number`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:113

The time used to wait for Ethereum Node to return the sent transaction result.
Note: If the RPC call stuck at the Node and therefor timed-out, the transaction may still be pending or even mined by the Network. We recommend checking the pending transactions in such a case.
Default is `750` seconds (12.5 minutes).

##### Returns

`number`

#### Set Signature

> **set** **transactionSendTimeout**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:117

Will set the transactionSendTimeout.

##### Parameters

###### val

`number`

##### Returns

`void`

#### Inherited from

`Web3Context.transactionSendTimeout`

***

### transactionTypeParser

#### Get Signature

> **get** **transactionTypeParser**(): [`TransactionTypeParser`](../type-aliases/TransactionTypeParser.md) \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:253

##### Returns

[`TransactionTypeParser`](../type-aliases/TransactionTypeParser.md) \| `undefined`

#### Set Signature

> **set** **transactionTypeParser**(`val`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:254

##### Parameters

###### val

[`TransactionTypeParser`](../type-aliases/TransactionTypeParser.md) \| `undefined`

##### Returns

`void`

#### Inherited from

`Web3Context.transactionTypeParser`

***

### wallet

#### Get Signature

> **get** **wallet**(): [`Web3BaseWallet`](Web3BaseWallet.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\> \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:59

##### Returns

[`Web3BaseWallet`](Web3BaseWallet.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\> \| `undefined`

#### Inherited from

[`Web3Context`](Web3Context.md).[`wallet`](Web3Context.md#wallet)

## Methods

### ecRecover()

> **ecRecover**(`signedData`, `signature`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/web3-eth-personal@4.1.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-personal/lib/commonjs/personal.d.ts:206

Recovers the account that signed the data.

#### Parameters

##### signedData

`string`

Data that was signed. If String it will be converted using utf8ToHex

##### signature

`string`

The signature

#### Returns

`Promise`\<`string`\>

- The address of the account that signed the data.

#### Example

```ts
 const address = await personal.ecRecover(
	"Hello world",
	"0x5d21d01b3198ac34d0585a9d76c4d1c8123e5e06746c8962318a1c08ffb207596e6fce4a6f377b7c0fc98c5f646cd73438c80e8a1a95cbec55a84c2889dca0301b"
);
console.log(address);
> 0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e
```

***

### emit()

> **emit**\<`K`\>(`eventName`, `params`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:16

#### Type Parameters

##### K

`K` *extends* [`CONFIG_CHANGE`](../README.md#config_change)

#### Parameters

##### eventName

`K`

##### params

`object`\[`K`\]

#### Returns

`void`

#### Inherited from

[`Web3Context`](Web3Context.md).[`emit`](Web3Context.md#emit)

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:19

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[`Web3Context`](Web3Context.md).[`eventNames`](Web3Context.md#eventnames)

***

### extend()

> **extend**(`extendObj`): `this`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:165

This method allows extending the web3 modules.
Note: This method is only for backward compatibility, and It is recommended to use Web3 v4 Plugin feature for extending web3.js functionality if you are developing something new.

#### Parameters

##### extendObj

[`ExtensionObject`](../interfaces/ExtensionObject.md)

#### Returns

`this`

#### Inherited from

[`Web3Context`](Web3Context.md).[`extend`](Web3Context.md#extend)

***

### getAccounts()

> **getAccounts**(): `Promise`\<`string`[]\>

Defined in: node\_modules/.pnpm/web3-eth-personal@4.1.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-personal/lib/commonjs/personal.d.ts:46

Returns a list of accounts the node controls by using the provider and calling the RPC method personal_listAccounts. Using `web3.eth.accounts.create()` will not add accounts into this list. For that use `web3.eth.personal.newAccount()`.

#### Returns

`Promise`\<`string`[]\>

- An array of addresses controlled by the node.

#### Example

```ts
 const accounts = await personal.getAccounts();
console.log(accounts);
>
[
	'0x79D7BbaC53C9aF700d0B250e9AE789E503Fcd6AE',
	'0xe2597eB05CF9a87eB1309e86750C903EC38E527e',
	'0x7eD0e85B8E1E925600B4373e6d108F34AB38a401',
	'0xE4bEEf667408b99053dC147Ed19592aDa0d77F59',
	'0x7AB80aeB6bb488B7f6c41c58e83Ef248eB39c882',
	'0x12B1D9d74d73b1C3A245B19C1C5501c653aF1af9',
	'0x1a6075A263Ee140e00Dbf8E374Fc5A443d097894',
	'0x4FEC0A51024B13030D26E70904B066C6d41157A5',
	'0x03095dc4857BB26f3a4550c5651Df8b7f6b6B1Ef',
	'0xac0B9b6e8A17991cb172B2ABAF45Fb5eb769E540'
]
```

***

### getContextObject()

> **getContextObject**(): [`Web3ContextObject`](../type-aliases/Web3ContextObject.md)\<[`EthPersonalAPI`](../type-aliases/EthPersonalAPI.md), `any`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:62

#### Returns

[`Web3ContextObject`](../type-aliases/Web3ContextObject.md)\<[`EthPersonalAPI`](../type-aliases/EthPersonalAPI.md), `any`\>

#### Inherited from

[`Web3Context`](Web3Context.md).[`getContextObject`](Web3Context.md#getcontextobject)

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:22

#### Returns

`number`

#### Inherited from

[`Web3Context`](Web3Context.md).[`getMaxListeners`](Web3Context.md#getmaxlisteners)

***

### importRawKey()

> **importRawKey**(`keyData`, `passphrase`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/web3-eth-personal@4.1.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-personal/lib/commonjs/personal.d.ts:103

Imports the given private key into the key store, encrypting it with the passphrase.

#### Parameters

##### keyData

`string`

An unencrypted private key (hex string).

##### passphrase

`string`

The password of the account

#### Returns

`Promise`\<`string`\>

- The address of the new account.

#### Example

```ts
const accountAddress = await personal.importRawKey(
	"abe40cb08850da918ee951b237fa87946499b2d8643e4aa12b0610b050c731f6",
	"123456"
);

console.log(unlockTx);
> 0x8727a8b34ec833154b72b62cac05d69f86eb6556
```

***

### link()

> **link**\<`T`\>(`parentContext`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:72

Link current context to another context.

#### Type Parameters

##### T

`T` *extends* [`Web3Context`](Web3Context.md)\<`unknown`, `any`\>

#### Parameters

##### parentContext

`T`

#### Returns

`void`

#### Inherited from

[`Web3Context`](Web3Context.md).[`link`](Web3Context.md#link)

***

### listenerCount()

> **listenerCount**\<`K`\>(`eventName`): `number`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:17

#### Type Parameters

##### K

`K` *extends* [`CONFIG_CHANGE`](../README.md#config_change)

#### Parameters

##### eventName

`K`

#### Returns

`number`

#### Inherited from

[`Web3Context`](Web3Context.md).[`listenerCount`](Web3Context.md#listenercount)

***

### listeners()

> **listeners**\<`K`\>(`eventName`): (...`args`) => `void`[]

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:18

#### Type Parameters

##### K

`K` *extends* [`CONFIG_CHANGE`](../README.md#config_change)

#### Parameters

##### eventName

`K`

#### Returns

(...`args`) => `void`[]

#### Inherited from

[`Web3Context`](Web3Context.md).[`listeners`](Web3Context.md#listeners)

***

### lockAccount()

> **lockAccount**(`address`): `Promise`\<`boolean`\>

Defined in: node\_modules/.pnpm/web3-eth-personal@4.1.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-personal/lib/commonjs/personal.d.ts:86

Locks the given account

#### Parameters

##### address

`string`

The address of the account to lock.

#### Returns

`Promise`\<`boolean`\>

- `true` if the account was locked, otherwise `false`.

#### Example

```ts
await personal.lockAccount(
	"0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e"
);
```

***

### newAccount()

> **newAccount**(`password`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/web3-eth-personal@4.1.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-personal/lib/commonjs/personal.d.ts:59

Creates a new account and returns its address.
**_NOTE:_**  This function sends a sensitive information like password. Never call this function over a unsecured Websocket or HTTP provider, as your password will be sent in plain text!

#### Parameters

##### password

`string`

The password to encrypt the account with.

#### Returns

`Promise`\<`string`\>

- The address of the new account.

#### Example

```ts
const addr = await web3.eth.personal.newAccount('password');
console.log(addr);
> '0x1234567891011121314151617181920212223456'
```

***

### off()

> **off**\<`K`\>(`eventName`, `fn`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:15

#### Type Parameters

##### K

`K` *extends* [`CONFIG_CHANGE`](../README.md#config_change)

#### Parameters

##### eventName

`K`

##### fn

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3Context`](Web3Context.md).[`off`](Web3Context.md#off)

***

### on()

> **on**\<`K`\>(`eventName`, `fn`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:13

#### Type Parameters

##### K

`K` *extends* [`CONFIG_CHANGE`](../README.md#config_change)

#### Parameters

##### eventName

`K`

##### fn

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3Context`](Web3Context.md).[`on`](Web3Context.md#on)

***

### once()

> **once**\<`K`\>(`eventName`, `fn`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:14

#### Type Parameters

##### K

`K` *extends* [`CONFIG_CHANGE`](../README.md#config_change)

#### Parameters

##### eventName

`K`

##### fn

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3Context`](Web3Context.md).[`once`](Web3Context.md#once)

***

### registerPlugin()

> **registerPlugin**(`plugin`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:73

#### Parameters

##### plugin

[`Web3PluginBase`](Web3PluginBase.md)

#### Returns

`void`

#### Inherited from

[`Web3Context`](Web3Context.md).[`registerPlugin`](Web3Context.md#registerplugin)

***

### removeAllListeners()

> **removeAllListeners**(): [`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:20

#### Returns

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md)

#### Inherited from

[`Web3Context`](Web3Context.md).[`removeAllListeners`](Web3Context.md#removealllisteners)

***

### sendTransaction()

> **sendTransaction**(`tx`, `passphrase`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/web3-eth-personal@4.1.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-personal/lib/commonjs/personal.d.ts:128

This method sends a transaction over the management API.
**_NOTE:_** Sending your account password over an unsecured HTTP RPC connection is highly unsecure.

#### Parameters

##### tx

[`Transaction`](../interfaces/Transaction-1.md)

The transaction options

##### passphrase

`string`

The passphrase of the current account

#### Returns

`Promise`\<`string`\>

- The transaction hash

#### Example

```ts
const txHash = personal
.sendTransaction({
 	from: "0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e",
	gasPrice: "20000000000",
	gas: "21000",
	to: "0x3535353535353535353535353535353535353535",
	value: "1000000",
	data: "",
	nonce: 0,
},
"123456");

console.log(txHash);
> 0x9445325c3c5638c9fe425b003b8c32f03e9f99d409555a650a6838ba712bb51b
```

***

### setConfig()

> **setConfig**(`options`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:48

#### Parameters

##### options

[`Partial`](../type-aliases/Partial.md)\<[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md)\>

#### Returns

`void`

#### Inherited from

[`Web3Context`](Web3Context.md).[`setConfig`](Web3Context.md#setconfig)

***

### setMaxListenerWarningThreshold()

> **setMaxListenerWarningThreshold**(`maxListenersWarningThreshold`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:21

#### Parameters

##### maxListenersWarningThreshold

`number`

#### Returns

`void`

#### Inherited from

[`Web3Context`](Web3Context.md).[`setMaxListenerWarningThreshold`](Web3Context.md#setmaxlistenerwarningthreshold)

***

### setProvider()

> **setProvider**(`provider?`): `boolean`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:155

Will set the provider.

#### Parameters

##### provider?

`string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<[`EthPersonalAPI`](../type-aliases/EthPersonalAPI.md)\>

[SupportedProviders](../type-aliases/SupportedProviders.md) The provider to set

#### Returns

`boolean`

Returns true if the provider was set

#### Inherited from

[`Web3Context`](Web3Context.md).[`setProvider`](Web3Context.md#setprovider)

***

### setRequestManagerMiddleware()

> **setRequestManagerMiddleware**(`requestManagerMiddleware`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:156

#### Parameters

##### requestManagerMiddleware

[`RequestManagerMiddleware`](../interfaces/RequestManagerMiddleware.md)\<[`EthPersonalAPI`](../type-aliases/EthPersonalAPI.md)\>

#### Returns

`void`

#### Inherited from

[`Web3Context`](Web3Context.md).[`setRequestManagerMiddleware`](Web3Context.md#setrequestmanagermiddleware)

***

### sign()

> **sign**(`data`, `address`, `passphrase`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/web3-eth-personal@4.1.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-personal/lib/commonjs/personal.d.ts:190

Calculates an Ethereum specific signature with:
sign(keccak256("\x19Ethereum Signed Message:\n" + dataToSign.length + dataToSign)))
Adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature.

If you have the original message and the signed message, you can discover the signing account address using web3.eth.personal.ecRecover
**_NOTE:_** Sending your account password over an unsecured HTTP RPC connection is highly unsecure.

#### Parameters

##### data

`string`

The data to sign.

##### address

`string`

The address to sign with.

##### passphrase

`string`

The passphrase to decrypt the account with.

#### Returns

`Promise`\<`string`\>

- The signature.

#### Example

```ts
const sig = await personal.sign("Hello world", "0x0D4Aa485ECbC499c70860fEb7e5AaeAf5fd8172E", "123456")
console.log(sig)
> 0x5d21d01b3198ac34d0585a9d76c4d1c8123e5e06746c8962318a1c08ffb207596e6fce4a6f377b7c0fc98c5f646cd73438c80e8a1a95cbec55a84c2889dca0301b
```

***

### signTransaction()

> **signTransaction**(`tx`, `passphrase`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/web3-eth-personal@4.1.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-personal/lib/commonjs/personal.d.ts:171

Signs a transaction. This account needs to be unlocked.
**_NOTE:_** Sending your account password over an unsecured HTTP RPC connection is highly unsecure.

#### Parameters

##### tx

[`Transaction`](../interfaces/Transaction-1.md)

The transaction data to sign. See sendTransaction  for more information.

##### passphrase

`string`

The password of the `from` account, to sign the transaction with.

#### Returns

`Promise`\<`string`\>

- The RLP encoded transaction. The `raw` property can be used to send the transaction using  sendSignedTransaction.

#### Example

```ts
const tx = personal
.signTransaction({
	from: "0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e",
	gasPrice: "20000000000",
	gas: "21000",
	to: "0x3535353535353535353535353535353535353535",
	value: "1000000000000000000",
	data: "",
	nonce: 0,
},
"123456");

console.log(tx);

> {
	raw: '0xf86e808504a817c800825208943535353535353535353535353535353535353535880de0b6b3a764000080820a95a0c951c03238fe930e6e69ab9d6af9f29248a514048e44884f0e60c4de40de3526a038b71399bf0c8925749ab79e91ce6cd2fc068c84c18ff6a197b48c4cbef01e00',
	tx: {
	type: '0x0',
	nonce: '0x0',
	gasPrice: '0x4a817c800',
	maxPriorityFeePerGas: null,
	maxFeePerGas: null,
	gas: '0x5208',
	value: '0xde0b6b3a7640000',
	input: '0x',
	v: '0xa95',
	r: '0xc951c03238fe930e6e69ab9d6af9f29248a514048e44884f0e60c4de40de3526',
	s: '0x38b71399bf0c8925749ab79e91ce6cd2fc068c84c18ff6a197b48c4cbef01e00',
	to: '0x3535353535353535353535353535353535353535',
	hash: '0x65e3df790ab2a32068b13cff970b26445b8995229ae4abbed61bd996f09fce69'
	}
}
```

***

### unlockAccount()

> **unlockAccount**(`address`, `password`, `unlockDuration`): `Promise`\<`boolean`\>

Defined in: node\_modules/.pnpm/web3-eth-personal@4.1.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-personal/lib/commonjs/personal.d.ts:74

Unlocks an account for a given duration.

#### Parameters

##### address

`string`

The address of the account to unlock.

##### password

`string`

The password of the account to unlock.

##### unlockDuration

`number`

The duration in seconds to unlock the account for.

#### Returns

`Promise`\<`boolean`\>

#### Example

```ts
await personal.unlockAccount(
	"0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e",
	"123456",
	600
);
```

***

### use()

> **use**\<`T`, `T2`\>(`ContextRef`, ...`args`): `T`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:68

Use to create new object of any type extended by `Web3Context`
and link it to current context. This can be used to initiate a global context object
and then use it to create new objects of any type extended by `Web3Context`.

#### Type Parameters

##### T

`T` *extends* [`Web3Context`](Web3Context.md)\<`unknown`, `any`\>

##### T2

`T2` *extends* `unknown`[]

#### Parameters

##### ContextRef

[`Web3ContextConstructor`](../type-aliases/Web3ContextConstructor.md)\<`T`, `T2`\>

##### args

...\[`...T2[]`\]

#### Returns

`T`

#### Inherited from

[`Web3Context`](Web3Context.md).[`use`](Web3Context.md#use)

***

### fromContextObject()

> `static` **fromContextObject**\<`T`, `T3`\>(`this`, ...`args`): `T`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:61

#### Type Parameters

##### T

`T` *extends* [`Web3Context`](Web3Context.md)\<`unknown`, `any`\>

##### T3

`T3` *extends* `unknown`[]

#### Parameters

##### this

[`Web3ContextConstructor`](../type-aliases/Web3ContextConstructor.md)\<`T`, `T3`\>

##### args

...\[[`Web3ContextObject`](../type-aliases/Web3ContextObject.md)\<`unknown`, `any`\>, `...T3[]`\]

#### Returns

`T`

#### Inherited from

[`Web3Context`](Web3Context.md).[`fromContextObject`](Web3Context.md#fromcontextobject)
