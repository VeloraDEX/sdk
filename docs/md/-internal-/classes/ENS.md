[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ENS

# Class: ENS

Defined in: node\_modules/.pnpm/web3-eth-ens@4.4.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-ens/lib/commonjs/ens.d.ts:27

This class is designed to interact with the ENS system on the Ethereum blockchain.
For using ENS package, first install Web3 package using: `npm i web3` or `yarn add web3` based on your package manager, after that ENS features can be used as mentioned in following snippet.
```ts

import { Web3 } from 'web3';

const web3 = new Web3('https://127.0.0.1:4545');

console.log(await web3.eth.ens.getAddress('ethereum.eth'))
```
For using individual package install `web3-eth-ens` packages using: `npm i web3-eth-ens` or `yarn add web3-eth-ens`. This is more efficient approach for building lightweight applications.

```ts
import { ENS } from 'web3-eth-ens';

const ens = new ENS(undefined,'https://127.0.0.1:4545');

console.log(await ens.getAddress('vitalik.eth'));
```

## Extends

- [`Web3Context`](Web3Context.md)\<[`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md) & [`Web3NetAPI`](../type-aliases/Web3NetAPI.md)\>

## Constructors

### Constructor

> **new ENS**(`registryAddr?`, `provider?`): `ENS`

Defined in: node\_modules/.pnpm/web3-eth-ens@4.4.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-ens/lib/commonjs/ens.d.ts:51

Use to create an instance of ENS

#### Parameters

##### registryAddr?

`string`

(Optional) The address of the ENS registry (default: mainnet registry address)

##### provider?

`string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<[`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md) & [`Web3NetAPI`](../type-aliases/Web3NetAPI.md)\> \| [`Web3ContextObject`](../type-aliases/Web3ContextObject.md)\<[`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md) & [`Web3NetAPI`](../type-aliases/Web3NetAPI.md)\>

(Optional) The provider to use for the ENS instance

#### Returns

`ENS`

#### Example

```ts
const ens = new ENS(
	"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
	"http://localhost:8545"
);

console.log( ens.defaultChain);
> mainnet
```

#### Overrides

[`Web3Context`](Web3Context.md).[`constructor`](Web3Context.md#constructor)

## Properties

### \_accountProvider?

> `protected` `optional` **\_accountProvider?**: [`Web3AccountProvider`](../interfaces/Web3AccountProvider.md)\<[`Web3BaseWalletAccount`](../interfaces/Web3BaseWalletAccount.md)\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:51

#### Inherited from

[`Web3Context`](Web3Context.md).[`_accountProvider`](Web3Context.md#_accountprovider)

***

### \_requestManager

> `protected` **\_requestManager**: [`Web3RequestManager`](Web3RequestManager.md)\<[`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md) & [`Web3NetAPI`](../type-aliases/Web3NetAPI.md)\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:49

#### Inherited from

[`Web3Context`](Web3Context.md).[`_requestManager`](Web3Context.md#_requestmanager)

***

### \_subscriptionManager

> `protected` **\_subscriptionManager**: [`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<[`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md) & [`Web3NetAPI`](../type-aliases/Web3NetAPI.md), `any`\>

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

### registryAddress

> **registryAddress**: `string`

Defined in: node\_modules/.pnpm/web3-eth-ens@4.4.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-ens/lib/commonjs/ens.d.ts:31

The registryAddress property can be used to define a custom registry address when you are connected to an unknown chain. It defaults to the main registry address.

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

### events

#### Get Signature

> **get** **events**(): [`ContractEventsInterface`](../type-aliases/ContractEventsInterface.md)\<readonly \[\{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"label"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"NewOwner"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"resolver"`; `type`: `"address"`; \}\]; `name`: `"NewResolver"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"Transfer"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"operator"`; `type`: `"address"`; \}\]; `name`: `"isApprovedForAll"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"owner"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"recordExists"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"resolver"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"ttl"`; `outputs`: readonly \[\{ `internalType`: `"uint64"`; `name`: `""`; `type`: `"uint64"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}\], [`ContractEvents`](../type-aliases/ContractEvents.md)\<readonly \[\{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"label"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"NewOwner"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"resolver"`; `type`: `"address"`; \}\]; `name`: `"NewResolver"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"Transfer"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"operator"`; `type`: `"address"`; \}\]; `name`: `"isApprovedForAll"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"owner"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"recordExists"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"resolver"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"ttl"`; `outputs`: readonly \[\{ `internalType`: `"uint64"`; `name`: `""`; `type`: `"uint64"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}\]\>\>

Defined in: node\_modules/.pnpm/web3-eth-ens@4.4.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-ens/lib/commonjs/ens.d.ts:177

##### Returns

[`ContractEventsInterface`](../type-aliases/ContractEventsInterface.md)\<readonly \[\{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"label"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"NewOwner"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"resolver"`; `type`: `"address"`; \}\]; `name`: `"NewResolver"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"Transfer"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"operator"`; `type`: `"address"`; \}\]; `name`: `"isApprovedForAll"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"owner"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"recordExists"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"resolver"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"ttl"`; `outputs`: readonly \[\{ `internalType`: `"uint64"`; `name`: `""`; `type`: `"uint64"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}\], [`ContractEvents`](../type-aliases/ContractEvents.md)\<readonly \[\{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"label"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"NewOwner"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"resolver"`; `type`: `"address"`; \}\]; `name`: `"NewResolver"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"Transfer"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"operator"`; `type`: `"address"`; \}\]; `name`: `"isApprovedForAll"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"owner"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"recordExists"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"resolver"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"ttl"`; `outputs`: readonly \[\{ `internalType`: `"uint64"`; `name`: `""`; `type`: `"uint64"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}\]\>\>

- Returns all events that can be emitted by the ENS registry.

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

### checkNetwork()

> **checkNetwork**(): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/web3-eth-ens@4.4.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-ens/lib/commonjs/ens.d.ts:160

Checks if the current used network is synced and looks for ENS support there.
Throws an error if not.

#### Returns

`Promise`\<`string`\>

- The address of the ENS registry if the network has been detected successfully

#### Example

```ts
console.log(await web3.eth.ens.checkNetwork());
> '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
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

### getAddress()

> **getAddress**(`ENSName`, `coinType?`): `Promise`\<[`MatchPrimitiveType`](../type-aliases/MatchPrimitiveType.md)\<`"bytes"`, `unknown`\>\>

Defined in: node\_modules/.pnpm/web3-eth-ens@4.4.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-ens/lib/commonjs/ens.d.ts:107

Resolves an ENS name to an Ethereum address.

#### Parameters

##### ENSName

`string`

The ENS name to resolve

##### coinType?

`number`

(Optional) The coin type, defaults to 60 (ETH)

#### Returns

`Promise`\<[`MatchPrimitiveType`](../type-aliases/MatchPrimitiveType.md)\<`"bytes"`, `unknown`\>\>

- The Ethereum address of the given name
```ts
const address = await web3.eth.ens.getAddress('ethereum.eth');
console.log(address);
> '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359'
```

***

### getContenthash()

> **getContenthash**(`ENSName`): `Promise`\<[`MatchPrimitiveType`](../type-aliases/MatchPrimitiveType.md)\<`"bytes"`, `unknown`\>\>

Defined in: node\_modules/.pnpm/web3-eth-ens@4.4.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-ens/lib/commonjs/ens.d.ts:149

Returns the content hash object associated with an ENS node.

#### Parameters

##### ENSName

`string`

The ENS name

#### Returns

`Promise`\<[`MatchPrimitiveType`](../type-aliases/MatchPrimitiveType.md)\<`"bytes"`, `unknown`\>\>

- The content hash object associated with an ENS node

#### Example

```ts
const hash = await web3.eth.ens.getContenthash('ethereum.eth');
console.log(hash);
> 'QmaEBknbGT4bTQiQoe2VNgBJbRfygQGktnaW5TbuKixjYL'
```

***

### getContextObject()

> **getContextObject**(): [`Web3ContextObject`](../type-aliases/Web3ContextObject.md)\<[`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md) & [`Web3NetAPI`](../type-aliases/Web3NetAPI.md), `any`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:62

#### Returns

[`Web3ContextObject`](../type-aliases/Web3ContextObject.md)\<[`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md) & [`Web3NetAPI`](../type-aliases/Web3NetAPI.md), `any`\>

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

### getName()

> **getName**(`ENSName`, `checkInterfaceSupport?`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/web3-eth-ens@4.4.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-ens/lib/commonjs/ens.d.ts:120

Resolves the name of an ENS node.

#### Parameters

##### ENSName

`string`

The node to resolve

##### checkInterfaceSupport?

`boolean`

#### Returns

`Promise`\<`string`\>

- The name

***

### getOwner()

> **getOwner**(`name`): `Promise`\<`unknown`\>

Defined in: node\_modules/.pnpm/web3-eth-ens@4.4.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-ens/lib/commonjs/ens.d.ts:95

Returns the owner by the given name and current configured or detected Registry

#### Parameters

##### name

`string`

The ENS name

#### Returns

`Promise`\<`unknown`\>

- Returns the address of the owner of the name.

#### Example

```ts
const owner = await web3.eth.ens.getOwner('ethereum.eth');
```

***

### getPubkey()

> **getPubkey**(`ENSName`): `Promise`\<`unknown`[] & [`Record`](../type-aliases/Record.md)\<`1`, [`MatchPrimitiveType`](../type-aliases/MatchPrimitiveType.md)\<`"bytes32"`, `unknown`\>\> & [`Record`](../type-aliases/Record.md)\<`0`, [`MatchPrimitiveType`](../type-aliases/MatchPrimitiveType.md)\<`"bytes32"`, `unknown`\>\> & \[\] & [`Record`](../type-aliases/Record.md)\<`"x"`, [`MatchPrimitiveType`](../type-aliases/MatchPrimitiveType.md)\<`"bytes32"`, `unknown`\>\> & [`Record`](../type-aliases/Record.md)\<`"y"`, [`MatchPrimitiveType`](../type-aliases/MatchPrimitiveType.md)\<`"bytes32"`, `unknown`\>\>\>

Defined in: node\_modules/.pnpm/web3-eth-ens@4.4.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-ens/lib/commonjs/ens.d.ts:137

Returns the X and Y coordinates of the curve point for the public key.

#### Parameters

##### ENSName

`string`

The ENS name

#### Returns

`Promise`\<`unknown`[] & [`Record`](../type-aliases/Record.md)\<`1`, [`MatchPrimitiveType`](../type-aliases/MatchPrimitiveType.md)\<`"bytes32"`, `unknown`\>\> & [`Record`](../type-aliases/Record.md)\<`0`, [`MatchPrimitiveType`](../type-aliases/MatchPrimitiveType.md)\<`"bytes32"`, `unknown`\>\> & \[\] & [`Record`](../type-aliases/Record.md)\<`"x"`, [`MatchPrimitiveType`](../type-aliases/MatchPrimitiveType.md)\<`"bytes32"`, `unknown`\>\> & [`Record`](../type-aliases/Record.md)\<`"y"`, [`MatchPrimitiveType`](../type-aliases/MatchPrimitiveType.md)\<`"bytes32"`, `unknown`\>\>\>

- The X and Y coordinates of the curve point for the public key

#### Example

```ts
const key = await web3.eth.ens.getPubkey('ethereum.eth');
console.log(key);
> {
"0": "0x0000000000000000000000000000000000000000000000000000000000000000",
"1": "0x0000000000000000000000000000000000000000000000000000000000000000",
"x": "0x0000000000000000000000000000000000000000000000000000000000000000",
"y": "0x0000000000000000000000000000000000000000000000000000000000000000"
}
```

***

### getResolver()

> **getResolver**(`name`): `Promise`\<[`Contract`](Contract-2.md)\<readonly \[\{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"a"`; `type`: `"address"`; \}\]; `name`: `"AddrChanged"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"coinType"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"newAddress"`; `type`: `"bytes"`; \}\]; `name`: `"AddressChanged"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"operator"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"bool"`; `name`: `"approved"`; `type`: `"bool"`; \}\]; `name`: `"ApprovalForAll"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"hash"`; `type`: `"bytes"`; \}\]; `name`: `"ContenthashChanged"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"name"`; `type`: `"bytes"`; \}, \{ `indexed`: `false`; `internalType`: `"uint16"`; `name`: `"resource"`; `type`: `"uint16"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"record"`; `type`: `"bytes"`; \}\]; `name`: `"DNSRecordChanged"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"name"`; `type`: `"bytes"`; \}, \{ `indexed`: `false`; `internalType`: `"uint16"`; `name`: `"resource"`; `type`: `"uint16"`; \}\]; `name`: `"DNSRecordDeleted"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"DNSZoneCleared"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"lastzonehash"`; `type`: `"bytes"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"zonehash"`; `type`: `"bytes"`; \}\]; `name`: `"DNSZonehashChanged"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `true`; `internalType`: `"bytes4"`; `name`: `"interfaceID"`; `type`: `"bytes4"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"implementer"`; `type`: `"address"`; \}\]; `name`: `"InterfaceChanged"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"string"`; `name`: `"name"`; `type`: `"string"`; \}\]; `name`: `"NameChanged"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes32"`; `name`: `"x"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes32"`; `name`: `"y"`; `type`: `"bytes32"`; \}\]; `name`: `"PubkeyChanged"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `true`; `internalType`: `"string"`; `name`: `"indexedKey"`; `type`: `"string"`; \}, \{ `indexed`: `false`; `internalType`: `"string"`; `name`: `"key"`; `type`: `"string"`; \}\]; `name`: `"TextChanged"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"uint256"`; `name`: `"contentTypes"`; `type`: `"uint256"`; \}\]; `name`: `"ABI"`; `outputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}, \{ `internalType`: `"bytes"`; `name`: `""`; `type`: `"bytes"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"addr"`; `outputs`: readonly \[\{ `internalType`: `"address payable"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"uint256"`; `name`: `"coinType"`; `type`: `"uint256"`; \}\]; `name`: `"addr"`; `outputs`: readonly \[\{ `internalType`: `"bytes"`; `name`: `""`; `type`: `"bytes"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"contenthash"`; `outputs`: readonly \[\{ `internalType`: `"bytes"`; `name`: `""`; `type`: `"bytes"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"bytes32"`; `name`: `"name"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"uint16"`; `name`: `"resource"`; `type`: `"uint16"`; \}\]; `name`: `"dnsRecord"`; `outputs`: readonly \[\{ `internalType`: `"bytes"`; `name`: `""`; `type`: `"bytes"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"bytes32"`; `name`: `"name"`; `type`: `"bytes32"`; \}\]; `name`: `"hasDNSRecords"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"bytes4"`; `name`: `"interfaceID"`; `type`: `"bytes4"`; \}\]; `name`: `"interfaceImplementer"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"account"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"operator"`; `type`: `"address"`; \}\]; `name`: `"isApprovedForAll"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"name"`; `outputs`: readonly \[\{ `internalType`: `"string"`; `name`: `""`; `type`: `"string"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"pubkey"`; `outputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"x"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"bytes32"`; `name`: `"y"`; `type`: `"bytes32"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes4"`; `name`: `"interfaceID"`; `type`: `"bytes4"`; \}\]; `name`: `"supportsInterface"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"string"`; `name`: `"key"`; `type`: `"string"`; \}\]; `name`: `"text"`; `outputs`: readonly \[\{ `internalType`: `"string"`; `name`: `""`; `type`: `"string"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"zonehash"`; `outputs`: readonly \[\{ `internalType`: `"bytes"`; `name`: `""`; `type`: `"bytes"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"address"`; `name`: `"a"`; `type`: `"address"`; \}\]; `name`: `"setAddr"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}\]\>\>

Defined in: node\_modules/.pnpm/web3-eth-ens@4.4.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-ens/lib/commonjs/ens.d.ts:65

Returns the Resolver by the given address

#### Parameters

##### name

`string`

The name of the ENS domain

#### Returns

`Promise`\<[`Contract`](Contract-2.md)\<readonly \[\{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"a"`; `type`: `"address"`; \}\]; `name`: `"AddrChanged"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"coinType"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"newAddress"`; `type`: `"bytes"`; \}\]; `name`: `"AddressChanged"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"operator"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"bool"`; `name`: `"approved"`; `type`: `"bool"`; \}\]; `name`: `"ApprovalForAll"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"hash"`; `type`: `"bytes"`; \}\]; `name`: `"ContenthashChanged"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"name"`; `type`: `"bytes"`; \}, \{ `indexed`: `false`; `internalType`: `"uint16"`; `name`: `"resource"`; `type`: `"uint16"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"record"`; `type`: `"bytes"`; \}\]; `name`: `"DNSRecordChanged"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"name"`; `type`: `"bytes"`; \}, \{ `indexed`: `false`; `internalType`: `"uint16"`; `name`: `"resource"`; `type`: `"uint16"`; \}\]; `name`: `"DNSRecordDeleted"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"DNSZoneCleared"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"lastzonehash"`; `type`: `"bytes"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"zonehash"`; `type`: `"bytes"`; \}\]; `name`: `"DNSZonehashChanged"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `true`; `internalType`: `"bytes4"`; `name`: `"interfaceID"`; `type`: `"bytes4"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"implementer"`; `type`: `"address"`; \}\]; `name`: `"InterfaceChanged"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"string"`; `name`: `"name"`; `type`: `"string"`; \}\]; `name`: `"NameChanged"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes32"`; `name`: `"x"`; `type`: `"bytes32"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes32"`; `name`: `"y"`; `type`: `"bytes32"`; \}\]; `name`: `"PubkeyChanged"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `indexed`: `true`; `internalType`: `"string"`; `name`: `"indexedKey"`; `type`: `"string"`; \}, \{ `indexed`: `false`; `internalType`: `"string"`; `name`: `"key"`; `type`: `"string"`; \}\]; `name`: `"TextChanged"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"uint256"`; `name`: `"contentTypes"`; `type`: `"uint256"`; \}\]; `name`: `"ABI"`; `outputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}, \{ `internalType`: `"bytes"`; `name`: `""`; `type`: `"bytes"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"addr"`; `outputs`: readonly \[\{ `internalType`: `"address payable"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"uint256"`; `name`: `"coinType"`; `type`: `"uint256"`; \}\]; `name`: `"addr"`; `outputs`: readonly \[\{ `internalType`: `"bytes"`; `name`: `""`; `type`: `"bytes"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"contenthash"`; `outputs`: readonly \[\{ `internalType`: `"bytes"`; `name`: `""`; `type`: `"bytes"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"bytes32"`; `name`: `"name"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"uint16"`; `name`: `"resource"`; `type`: `"uint16"`; \}\]; `name`: `"dnsRecord"`; `outputs`: readonly \[\{ `internalType`: `"bytes"`; `name`: `""`; `type`: `"bytes"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"bytes32"`; `name`: `"name"`; `type`: `"bytes32"`; \}\]; `name`: `"hasDNSRecords"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"bytes4"`; `name`: `"interfaceID"`; `type`: `"bytes4"`; \}\]; `name`: `"interfaceImplementer"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"account"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"operator"`; `type`: `"address"`; \}\]; `name`: `"isApprovedForAll"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"name"`; `outputs`: readonly \[\{ `internalType`: `"string"`; `name`: `""`; `type`: `"string"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"pubkey"`; `outputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"x"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"bytes32"`; `name`: `"y"`; `type`: `"bytes32"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes4"`; `name`: `"interfaceID"`; `type`: `"bytes4"`; \}\]; `name`: `"supportsInterface"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"string"`; `name`: `"key"`; `type`: `"string"`; \}\]; `name`: `"text"`; `outputs`: readonly \[\{ `internalType`: `"string"`; `name`: `""`; `type`: `"string"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}\]; `name`: `"zonehash"`; `outputs`: readonly \[\{ `internalType`: `"bytes"`; `name`: `""`; `type`: `"bytes"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"node"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"address"`; `name`: `"a"`; `type`: `"address"`; \}\]; `name`: `"setAddr"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}\]\>\>

- An contract instance of the resolver

#### Example

```ts
const resolver = await ens.getResolver('resolver');

console.log(resolver.options.address);
> '0x1234567890123456789012345678901234567890'
```

***

### getText()

> **getText**(`ENSNameOrAddr`, `key`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/web3-eth-ens@4.4.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-ens/lib/commonjs/ens.d.ts:114

ERC-634 - Returns the text content stored in the resolver for the specified key.

#### Parameters

##### ENSNameOrAddr

`string`

##### key

`string`

The key to resolve https://github.com/ethereum/ercs/blob/master/ERCS/erc-634.md#global-keys

#### Returns

`Promise`\<`string`\>

- The value content stored in the resolver for the specified key

***

### getTTL()

> **getTTL**(`name`): `Promise`\<`unknown`\>

Defined in: node\_modules/.pnpm/web3-eth-ens@4.4.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-ens/lib/commonjs/ens.d.ts:85

Returns the caching TTL (time-to-live) of an ENS name.

#### Parameters

##### name

`string`

The ENS name

#### Returns

`Promise`\<`unknown`\>

- Returns the caching TTL (time-to-live) of a name.

#### Example

```ts
const owner = await web3.eth.ens.getTTL('ethereum.eth');
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

### recordExists()

> **recordExists**(`name`): `Promise`\<`unknown`\>

Defined in: node\_modules/.pnpm/web3-eth-ens@4.4.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-ens/lib/commonjs/ens.d.ts:75

Returns true if the record exists

#### Parameters

##### name

`string`

The ENS name

#### Returns

`Promise`\<`unknown`\>

- Returns `true` if node exists in this ENS registry. This will return `false` for records that are in the legacy ENS registry but have not yet been migrated to the new one.

#### Example

```ts
const exists = await web3.eth.ens.recordExists('ethereum.eth');
```

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

### setAddress()

> **setAddress**(`name`, `address`, `txConfig`): `Promise`\<[`TransactionReceipt`](../type-aliases/TransactionReceipt.md) \| [`RevertInstructionError`](RevertInstructionError.md)\>

Defined in: node\_modules/.pnpm/web3-eth-ens@4.4.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-ens/lib/commonjs/ens.d.ts:478

Sets the address of an ENS name in his resolver.

#### Parameters

##### name

`string`

The ENS name

##### address

`string`

The address to set

##### txConfig

[`PayableCallOptions`](../interfaces/PayableCallOptions.md)

(Optional) The transaction config

#### Returns

`Promise`\<[`TransactionReceipt`](../type-aliases/TransactionReceipt.md) \| [`RevertInstructionError`](RevertInstructionError.md)\>

- The transaction receipt
```ts
const receipt = await ens.setAddress('web3js.eth','0xe2597eb05cf9a87eb1309e86750c903ec38e527e');
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

`string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<[`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md) & [`Web3NetAPI`](../type-aliases/Web3NetAPI.md)\>

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

[`RequestManagerMiddleware`](../interfaces/RequestManagerMiddleware.md)\<[`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md) & [`Web3NetAPI`](../type-aliases/Web3NetAPI.md)\>

#### Returns

`void`

#### Inherited from

[`Web3Context`](Web3Context.md).[`setRequestManagerMiddleware`](Web3Context.md#setrequestmanagermiddleware)

***

### supportsInterface()

> **supportsInterface**(`ENSName`, `interfaceId`): `Promise`\<[`MatchPrimitiveType`](../type-aliases/MatchPrimitiveType.md)\<`"bool"`, `unknown`\>\>

Defined in: node\_modules/.pnpm/web3-eth-ens@4.4.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-ens/lib/commonjs/ens.d.ts:173

Returns true if the related Resolver does support the given signature or interfaceId.

#### Parameters

##### ENSName

`string`

The ENS name

##### interfaceId

`string`

The signature of the function or the interfaceId as described in the ENS documentation

#### Returns

`Promise`\<[`MatchPrimitiveType`](../type-aliases/MatchPrimitiveType.md)\<`"bool"`, `unknown`\>\>

- `true` if the related Resolver does support the given signature or interfaceId.

#### Example

```ts
const supports = await web3.eth.ens.supportsInterface('ethereum.eth', 'addr(bytes32');
console.log(supports);
> true
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
