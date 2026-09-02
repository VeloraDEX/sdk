[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3Config

# Abstract Class: Web3Config

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:43

## Extends

- [`Web3EventEmitter`](Web3EventEmitter.md)\<\{ `CONFIG_CHANGE`: [`ConfigEvent`](../type-aliases/ConfigEvent.md)\<[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md)\>; \}\>

## Extended by

- [`Web3Context`](Web3Context.md)

## Implements

- [`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md)

## Constructors

### Constructor

> **new Web3Config**(`options?`): `Web3Config`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:47

#### Parameters

##### options?

[`Partial`](../type-aliases/Partial.md)\<[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md)\>

#### Returns

`Web3Config`

#### Overrides

[`Web3EventEmitter`](Web3EventEmitter.md).[`constructor`](Web3EventEmitter.md#constructor)

## Properties

### config

> **config**: [`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:46

## Accessors

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`blockHeaderTimeout`](../interfaces/Web3ConfigOptions.md#blockheadertimeout)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`contractDataInputFill`](../interfaces/Web3ConfigOptions.md#contractdatainputfill)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`customTransactionSchema`](../interfaces/Web3ConfigOptions.md#customtransactionschema)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`defaultAccount`](../interfaces/Web3ConfigOptions.md#defaultaccount)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`defaultBlock`](../interfaces/Web3ConfigOptions.md#defaultblock)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`defaultChain`](../interfaces/Web3ConfigOptions.md#defaultchain)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`defaultCommon`](../interfaces/Web3ConfigOptions.md#defaultcommon)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`defaultHardfork`](../interfaces/Web3ConfigOptions.md#defaulthardfork)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`defaultMaxPriorityFeePerGas`](../interfaces/Web3ConfigOptions.md#defaultmaxpriorityfeepergas)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`defaultNetworkId`](../interfaces/Web3ConfigOptions.md#defaultnetworkid)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`defaultReturnFormat`](../interfaces/Web3ConfigOptions.md#defaultreturnformat)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`defaultTransactionType`](../interfaces/Web3ConfigOptions.md#defaulttransactiontype)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`enableExperimentalFeatures`](../interfaces/Web3ConfigOptions.md#enableexperimentalfeatures)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`handleRevert`](../interfaces/Web3ConfigOptions.md#handlerevert)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`ignoreGasPricing`](../interfaces/Web3ConfigOptions.md#ignoregaspricing)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`maxListenersWarningThreshold`](../interfaces/Web3ConfigOptions.md#maxlistenerswarningthreshold)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`transactionBlockTimeout`](../interfaces/Web3ConfigOptions.md#transactionblocktimeout)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`transactionBuilder`](../interfaces/Web3ConfigOptions.md#transactionbuilder)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`transactionConfirmationBlocks`](../interfaces/Web3ConfigOptions.md#transactionconfirmationblocks)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`transactionConfirmationPollingInterval`](../interfaces/Web3ConfigOptions.md#transactionconfirmationpollinginterval)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`transactionPollingInterval`](../interfaces/Web3ConfigOptions.md#transactionpollinginterval)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`transactionPollingTimeout`](../interfaces/Web3ConfigOptions.md#transactionpollingtimeout)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`transactionReceiptPollingInterval`](../interfaces/Web3ConfigOptions.md#transactionreceiptpollinginterval)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`transactionSendTimeout`](../interfaces/Web3ConfigOptions.md#transactionsendtimeout)

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

#### Implementation of

[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md).[`transactionTypeParser`](../interfaces/Web3ConfigOptions.md#transactiontypeparser)

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

[`Web3EventEmitter`](Web3EventEmitter.md).[`emit`](Web3EventEmitter.md#emit)

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:19

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`eventNames`](Web3EventEmitter.md#eventnames)

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:22

#### Returns

`number`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`getMaxListeners`](Web3EventEmitter.md#getmaxlisteners)

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

[`Web3EventEmitter`](Web3EventEmitter.md).[`listenerCount`](Web3EventEmitter.md#listenercount)

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

[`Web3EventEmitter`](Web3EventEmitter.md).[`listeners`](Web3EventEmitter.md#listeners)

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

[`Web3EventEmitter`](Web3EventEmitter.md).[`off`](Web3EventEmitter.md#off)

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

[`Web3EventEmitter`](Web3EventEmitter.md).[`on`](Web3EventEmitter.md#on)

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

[`Web3EventEmitter`](Web3EventEmitter.md).[`once`](Web3EventEmitter.md#once)

***

### removeAllListeners()

> **removeAllListeners**(): [`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:20

#### Returns

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md)

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`removeAllListeners`](Web3EventEmitter.md#removealllisteners)

***

### setConfig()

> **setConfig**(`options`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_config.d.ts:48

#### Parameters

##### options

[`Partial`](../type-aliases/Partial.md)\<[`Web3ConfigOptions`](../interfaces/Web3ConfigOptions.md)\>

#### Returns

`void`

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

[`Web3EventEmitter`](Web3EventEmitter.md).[`setMaxListenerWarningThreshold`](Web3EventEmitter.md#setmaxlistenerwarningthreshold)
