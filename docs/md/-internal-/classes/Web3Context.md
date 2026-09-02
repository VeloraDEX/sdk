[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3Context

# Class: Web3Context\<API, RegisteredSubs\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:37

## Extends

- [`Web3Config`](Web3Config.md)

## Extended by

- [`Web3`](Web3.md)
- [`Web3Eth`](Web3Eth.md)
- [`Net`](Net.md)
- [`ENS`](ENS.md)
- [`Personal`](Personal.md)
- [`Web3PluginBase`](Web3PluginBase.md)
- [`Contract`](Contract-2.md)

## Type Parameters

### API

`API` *extends* [`Web3APISpec`](../type-aliases/Web3APISpec.md) = `unknown`

### RegisteredSubs

`RegisteredSubs` *extends* `object` = `any`

## Constructors

### Constructor

> **new Web3Context**\<`API`, `RegisteredSubs`\>(`providerOrContext?`): `Web3Context`\<`API`, `RegisteredSubs`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:53

#### Parameters

##### providerOrContext?

`string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\> \| [`Web3ContextInitOptions`](../type-aliases/Web3ContextInitOptions.md)\<`API`, `RegisteredSubs`\>

#### Returns

`Web3Context`\<`API`, `RegisteredSubs`\>

#### Overrides

[`Web3Config`](Web3Config.md).[`constructor`](Web3Config.md#constructor)

## Properties

### \_accountProvider?

> `protected` `optional` **\_accountProvider?**: [`Web3AccountProvider`](../interfaces/Web3AccountProvider.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:51

***

### \_requestManager

> `protected` **\_requestManager**: [`Web3RequestManager`](Web3RequestManager.md)\<`API`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:49

***

### \_subscriptionManager

> `protected` **\_subscriptionManager**: [`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, `RegisteredSubs`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:50

***

### \_wallet?

> `protected` `optional` **\_wallet?**: [`Web3BaseWallet`](Web3BaseWallet.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:52

***

### config

> **config**: [`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:46

#### Inherited from

[`Web3Config`](Web3Config.md).[`config`](Web3Config.md#config)

***

### providers

> `readonly` **providers**: `object`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:45

#### HttpProvider

> **HttpProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

#### WebsocketProvider

> **WebsocketProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

***

### givenProvider?

> `static` `optional` **givenProvider?**: [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`never`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:44

***

### providers

> `readonly` `static` **providers**: `object`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:40

#### HttpProvider

> **HttpProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

#### WebsocketProvider

> **WebsocketProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

## Accessors

### accountProvider

#### Get Signature

> **get** **accountProvider**(): [`Web3AccountProvider`](../interfaces/Web3AccountProvider.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\> \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:60

##### Returns

[`Web3AccountProvider`](../interfaces/Web3AccountProvider.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\> \| `undefined`

***

### BatchRequest

#### Get Signature

> **get** **BatchRequest**(): () => [`Web3BatchRequest`](Web3BatchRequest.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:160

Will return the [Web3BatchRequest](Web3BatchRequest.md) constructor.

##### Returns

() => [`Web3BatchRequest`](Web3BatchRequest.md)

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

`Web3Config.blockHeaderTimeout`

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

`Web3Config.contractDataInputFill`

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

`Web3Config.customTransactionSchema`

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

`Web3Config.defaultAccount`

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

`Web3Config.defaultBlock`

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

`Web3Config.defaultChain`

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

`Web3Config.defaultCommon`

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

`Web3Config.defaultHardfork`

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

`Web3Config.defaultMaxPriorityFeePerGas`

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

`Web3Config.defaultNetworkId`

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

`Web3Config.defaultReturnFormat`

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

`Web3Config.defaultTransactionType`

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

`Web3Config.enableExperimentalFeatures`

***

### givenProvider

#### Get Signature

> **get** **givenProvider**(): [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`never`\> \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:148

Will return the givenProvider if available.

When using web3.js in an Ethereum compatible browser, it will set with the current native provider by that browser. Will return the given provider by the (browser) environment, otherwise `undefined`.

##### Returns

[`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`never`\> \| `undefined`

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

`Web3Config.handleRevert`

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

`Web3Config.ignoreGasPricing`

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

`Web3Config.maxListenersWarningThreshold`

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

***

### requestManager

#### Get Signature

> **get** **requestManager**(): [`Web3RequestManager`](Web3RequestManager.md)\<`API`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:54

##### Returns

[`Web3RequestManager`](Web3RequestManager.md)\<`API`\>

***

### subscriptionManager

#### Get Signature

> **get** **subscriptionManager**(): [`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, `RegisteredSubs`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:58

Will return the current subscriptionManager ([Web3SubscriptionManager](Web3SubscriptionManager.md))

##### Returns

[`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, `RegisteredSubs`\>

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

`Web3Config.transactionBlockTimeout`

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

`Web3Config.transactionBuilder`

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

`Web3Config.transactionConfirmationBlocks`

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

`Web3Config.transactionConfirmationPollingInterval`

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

`Web3Config.transactionPollingInterval`

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

`Web3Config.transactionPollingTimeout`

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

`Web3Config.transactionReceiptPollingInterval`

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

`Web3Config.transactionSendTimeout`

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

`Web3Config.transactionTypeParser`

***

### wallet

#### Get Signature

> **get** **wallet**(): [`Web3BaseWallet`](Web3BaseWallet.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\> \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:59

##### Returns

[`Web3BaseWallet`](Web3BaseWallet.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\> \| `undefined`

## Methods

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

[`Web3Config`](Web3Config.md).[`emit`](Web3Config.md#emit)

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:19

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[`Web3Config`](Web3Config.md).[`eventNames`](Web3Config.md#eventnames)

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

***

### getContextObject()

> **getContextObject**(): [`Web3ContextObject`](../type-aliases/Web3ContextObject.md)\<`API`, `RegisteredSubs`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:62

#### Returns

[`Web3ContextObject`](../type-aliases/Web3ContextObject.md)\<`API`, `RegisteredSubs`\>

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:22

#### Returns

`number`

#### Inherited from

[`Web3Config`](Web3Config.md).[`getMaxListeners`](Web3Config.md#getmaxlisteners)

***

### link()

> **link**\<`T`\>(`parentContext`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:72

Link current context to another context.

#### Type Parameters

##### T

`T` *extends* `Web3Context`\<`unknown`, `any`\>

#### Parameters

##### parentContext

`T`

#### Returns

`void`

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

[`Web3Config`](Web3Config.md).[`listenerCount`](Web3Config.md#listenercount)

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

[`Web3Config`](Web3Config.md).[`listeners`](Web3Config.md#listeners)

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

[`Web3Config`](Web3Config.md).[`off`](Web3Config.md#off)

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

[`Web3Config`](Web3Config.md).[`on`](Web3Config.md#on)

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

[`Web3Config`](Web3Config.md).[`once`](Web3Config.md#once)

***

### registerPlugin()

> **registerPlugin**(`plugin`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:73

#### Parameters

##### plugin

[`Web3PluginBase`](Web3PluginBase.md)

#### Returns

`void`

***

### removeAllListeners()

> **removeAllListeners**(): [`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:20

#### Returns

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md)

#### Inherited from

[`Web3Config`](Web3Config.md).[`removeAllListeners`](Web3Config.md#removealllisteners)

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

[`Web3Config`](Web3Config.md).[`setConfig`](Web3Config.md#setconfig)

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

[`Web3Config`](Web3Config.md).[`setMaxListenerWarningThreshold`](Web3Config.md#setmaxlistenerwarningthreshold)

***

### setProvider()

> **setProvider**(`provider?`): `boolean`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:155

Will set the provider.

#### Parameters

##### provider?

`string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\>

[SupportedProviders](../type-aliases/SupportedProviders.md) The provider to set

#### Returns

`boolean`

Returns true if the provider was set

***

### setRequestManagerMiddleware()

> **setRequestManagerMiddleware**(`requestManagerMiddleware`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:156

#### Parameters

##### requestManagerMiddleware

[`RequestManagerMiddleware`](../interfaces/RequestManagerMiddleware.md)\<`API`\>

#### Returns

`void`

***

### use()

> **use**\<`T`, `T2`\>(`ContextRef`, ...`args`): `T`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:68

Use to create new object of any type extended by `Web3Context`
and link it to current context. This can be used to initiate a global context object
and then use it to create new objects of any type extended by `Web3Context`.

#### Type Parameters

##### T

`T` *extends* `Web3Context`\<`unknown`, `any`\>

##### T2

`T2` *extends* `unknown`[]

#### Parameters

##### ContextRef

[`Web3ContextConstructor`](../type-aliases/Web3ContextConstructor.md)\<`T`, `T2`\>

##### args

...\[`...T2[]`\]

#### Returns

`T`

***

### fromContextObject()

> `static` **fromContextObject**\<`T`, `T3`\>(`this`, ...`args`): `T`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:61

#### Type Parameters

##### T

`T` *extends* `Web3Context`\<`unknown`, `any`\>

##### T3

`T3` *extends* `unknown`[]

#### Parameters

##### this

[`Web3ContextConstructor`](../type-aliases/Web3ContextConstructor.md)\<`T`, `T3`\>

##### args

...\[[`Web3ContextObject`](../type-aliases/Web3ContextObject.md)\<`unknown`, `any`\>, `...T3[]`\]

#### Returns

`T`
