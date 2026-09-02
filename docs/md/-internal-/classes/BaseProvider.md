[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BaseProvider

# Class: BaseProvider

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:56

## Extends

- [`Provider`](Provider.md)

## Implements

- [`EnsProvider`](../interfaces/EnsProvider.md)

## Constructors

### Constructor

> **new BaseProvider**(`network`): `BaseProvider`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:89

ready

 A Promise<Network> that resolves only once the provider is ready.

 Sub-classes that call the super with a network without a chainId
 MUST set this. Standard named networks have a known chainId.

#### Parameters

##### network

`Promise`\<[`Network`](../type-aliases/Network.md)\> \| [`Networkish`](../type-aliases/Networkish.md)

#### Returns

`BaseProvider`

#### Overrides

[`Provider`](Provider.md).[`constructor`](Provider.md#constructor)

## Properties

### \_bootstrapPoll

> **\_bootstrapPoll**: [`Timer`](../interfaces/Timer.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:66

***

### \_emitted

> **\_emitted**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:61

#### Index Signature

\[`eventName`: `string`\]: `number` \| `"pending"`

***

### \_events

> **\_events**: [`Event`](Event.md)[]

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:59

***

### \_fastBlockNumber

> **\_fastBlockNumber**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:69

***

### \_fastBlockNumberPromise

> **\_fastBlockNumberPromise**: `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:70

***

### \_fastQueryDate

> **\_fastQueryDate**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:71

***

### \_internalBlockNumber

> **\_internalBlockNumber**: `Promise`\<\{ `blockNumber`: `number`; `reqTime`: `number`; `respTime`: `number`; \}\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:73

***

### \_isProvider

> `readonly` **\_isProvider**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:152

#### Inherited from

[`Provider`](Provider.md).[`_isProvider`](Provider.md#_isprovider)

***

### \_lastBlockNumber

> **\_lastBlockNumber**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:67

***

### \_maxFilterBlockRange

> **\_maxFilterBlockRange**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:68

***

### \_maxInternalBlockNumber

> **\_maxInternalBlockNumber**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:72

***

### \_network

> **\_network**: [`Network`](../type-aliases/Network.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:58

***

### \_networkPromise

> **\_networkPromise**: `Promise`\<[`Network`](../type-aliases/Network.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:57

***

### \_poller

> **\_poller**: [`Timer`](../interfaces/Timer.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:65

***

### \_pollingInterval

> **\_pollingInterval**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:64

***

### anyNetwork

> `readonly` **anyNetwork**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:78

***

### disableCcipRead

> **disableCcipRead**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:79

***

### formatter

> **formatter**: [`Formatter`](Formatter.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:60

## Accessors

### blockNumber

#### Get Signature

> **get** **blockNumber**(): `number`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:101

##### Returns

`number`

***

### network

#### Get Signature

> **get** **network**(): [`Network`](../type-aliases/Network.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:98

##### Returns

[`Network`](../type-aliases/Network.md)

***

### polling

#### Get Signature

> **get** **polling**(): `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:102

##### Returns

`boolean`

#### Set Signature

> **set** **polling**(`value`): `void`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:103

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### pollingInterval

#### Get Signature

> **get** **pollingInterval**(): `number`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:104

##### Returns

`number`

#### Set Signature

> **set** **pollingInterval**(`value`): `void`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:105

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ready

#### Get Signature

> **get** **ready**(): `Promise`\<[`Network`](../type-aliases/Network.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:91

##### Returns

`Promise`\<[`Network`](../type-aliases/Network.md)\>

## Methods

### \_addEventListener()

> **\_addEventListener**(`eventName`, `listener`, `once`): `this`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:147

#### Parameters

##### eventName

[`EventType`](../type-aliases/EventType.md)

##### listener

[`Listener`](../type-aliases/Listener.md)

##### once

`boolean`

#### Returns

`this`

***

### \_call()

> **\_call**(`transaction`, `blockTag`, `attempt`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:127

#### Parameters

##### transaction

[`TransactionRequest`](../type-aliases/TransactionRequest.md)

##### blockTag

[`BlockTag`](../type-aliases/BlockTag.md)

##### attempt

`number`

#### Returns

`Promise`\<`string`\>

***

### \_getAddress()

> **\_getAddress**(`addressOrName`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:130

#### Parameters

##### addressOrName

`string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

***

### \_getBlock()

> **\_getBlock**(`blockHashOrBlockTag`, `includeTransactions?`): `Promise`\<[`Block`](../interfaces/Block-1.md) \| [`BlockWithTransactions`](../interfaces/BlockWithTransactions.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:131

#### Parameters

##### blockHashOrBlockTag

[`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

##### includeTransactions?

`boolean`

#### Returns

`Promise`\<[`Block`](../interfaces/Block-1.md) \| [`BlockWithTransactions`](../interfaces/BlockWithTransactions.md)\>

***

### \_getBlockTag()

> **\_getBlockTag**(`blockTag`): `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:138

#### Parameters

##### blockTag

[`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

***

### \_getFastBlockNumber()

> **\_getFastBlockNumber**(): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:106

#### Returns

`Promise`\<`number`\>

***

### \_getFilter()

> **\_getFilter**(`filter`): `Promise`\<[`Filter`](../interfaces/Filter.md) \| [`FilterByBlockHash`](../interfaces/FilterByBlockHash.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:126

#### Parameters

##### filter

[`Filter`](../interfaces/Filter.md) \| [`FilterByBlockHash`](../interfaces/FilterByBlockHash.md) \| `Promise`\<[`Filter`](../interfaces/Filter.md) \| [`FilterByBlockHash`](../interfaces/FilterByBlockHash.md)\>

#### Returns

`Promise`\<[`Filter`](../interfaces/Filter.md) \| [`FilterByBlockHash`](../interfaces/FilterByBlockHash.md)\>

***

### \_getInternalBlockNumber()

> **\_getInternalBlockNumber**(`maxAge`): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:95

#### Parameters

##### maxAge

`number`

#### Returns

`Promise`\<`number`\>

***

### \_getResolver()

> **\_getResolver**(`name`, `operation?`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:140

#### Parameters

##### name

`string`

##### operation?

`string`

#### Returns

`Promise`\<`string`\>

***

### \_getTransactionRequest()

> **\_getTransactionRequest**(`transaction`): `Promise`\<[`Transaction`](../interfaces/Transaction.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:125

#### Parameters

##### transaction

[`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Returns

`Promise`\<[`Transaction`](../interfaces/Transaction.md)\>

***

### \_ready()

> **\_ready**(): `Promise`\<[`Network`](../type-aliases/Network.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:90

#### Returns

`Promise`\<[`Network`](../type-aliases/Network.md)\>

***

### \_setFastBlockNumber()

> **\_setFastBlockNumber**(`blockNumber`): `void`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:107

#### Parameters

##### blockNumber

`number`

#### Returns

`void`

***

### \_startEvent()

> **\_startEvent**(`event`): `void`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:145

#### Parameters

##### event

[`Event`](Event.md)

#### Returns

`void`

***

### \_stopEvent()

> **\_stopEvent**(`event`): `void`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:146

#### Parameters

##### event

[`Event`](Event.md)

#### Returns

`void`

***

### \_waitForTransaction()

> **\_waitForTransaction**(`transactionHash`, `confirmations`, `timeout`, `replaceable`): `Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:109

#### Parameters

##### transactionHash

`string`

##### confirmations

`number`

##### timeout

`number`

##### replaceable

###### data

`string`

###### from

`string`

###### nonce

`number`

###### startBlock

`number`

###### to

`string`

###### value

[`BigNumber`](BigNumber.md)

#### Returns

`Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

***

### \_wrapTransaction()

> **\_wrapTransaction**(`tx`, `hash?`, `startBlock?`): [`TransactionResponse`](../interfaces/TransactionResponse.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:123

#### Parameters

##### tx

[`Transaction`](../interfaces/Transaction.md)

##### hash?

`string`

##### startBlock?

`number`

#### Returns

[`TransactionResponse`](../interfaces/TransactionResponse.md)

***

### addListener()

> **addListener**(`eventName`, `listener`): [`Provider`](Provider.md)

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:149

#### Parameters

##### eventName

[`EventType`](../type-aliases/EventType.md)

##### listener

[`Listener`](../type-aliases/Listener.md)

#### Returns

[`Provider`](Provider.md)

#### Inherited from

[`Provider`](Provider.md).[`addListener`](Provider.md#addlistener)

***

### call()

> **call**(`transaction`, `blockTag?`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:128

#### Parameters

##### transaction

[`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<`string`\>

#### Overrides

[`Provider`](Provider.md).[`call`](Provider.md#call)

***

### ccipReadFetch()

> **ccipReadFetch**(`tx`, `calldata`, `urls`): `Promise`\<`string` \| `null`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:94

#### Parameters

##### tx

[`Transaction`](../interfaces/Transaction.md)

##### calldata

`string`

##### urls

`string`[]

#### Returns

`Promise`\<`string` \| `null`\>

***

### detectNetwork()

> **detectNetwork**(): `Promise`\<[`Network`](../type-aliases/Network.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:99

#### Returns

`Promise`\<[`Network`](../type-aliases/Network.md)\>

***

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:150

#### Parameters

##### eventName

[`EventType`](../type-aliases/EventType.md)

##### args

...`any`[]

#### Returns

`boolean`

#### Overrides

[`Provider`](Provider.md).[`emit`](Provider.md#emit)

***

### estimateGas()

> **estimateGas**(`transaction`): `Promise`\<[`BigNumber`](BigNumber.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:129

#### Parameters

##### transaction

[`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Returns

`Promise`\<[`BigNumber`](BigNumber.md)\>

#### Overrides

[`Provider`](Provider.md).[`estimateGas`](Provider.md#estimategas)

***

### getAvatar()

> **getAvatar**(`nameOrAddress`): `Promise`\<`string` \| `null`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:143

#### Parameters

##### nameOrAddress

`string`

#### Returns

`Promise`\<`string` \| `null`\>

***

### getBalance()

> **getBalance**(`addressOrName`, `blockTag?`): `Promise`\<[`BigNumber`](BigNumber.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:119

#### Parameters

##### addressOrName

`string` \| `Promise`\<`string`\>

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<[`BigNumber`](BigNumber.md)\>

#### Overrides

[`Provider`](Provider.md).[`getBalance`](Provider.md#getbalance)

***

### getBlock()

> **getBlock**(`blockHashOrBlockTag`): `Promise`\<[`Block`](../interfaces/Block-1.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:132

#### Parameters

##### blockHashOrBlockTag

[`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<[`Block`](../interfaces/Block-1.md)\>

#### Overrides

[`Provider`](Provider.md).[`getBlock`](Provider.md#getblock)

***

### getBlockNumber()

> **getBlockNumber**(): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:117

#### Returns

`Promise`\<`number`\>

#### Overrides

[`Provider`](Provider.md).[`getBlockNumber`](Provider.md#getblocknumber)

***

### getBlockWithTransactions()

> **getBlockWithTransactions**(`blockHashOrBlockTag`): `Promise`\<[`BlockWithTransactions`](../interfaces/BlockWithTransactions.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:133

#### Parameters

##### blockHashOrBlockTag

[`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<[`BlockWithTransactions`](../interfaces/BlockWithTransactions.md)\>

#### Overrides

[`Provider`](Provider.md).[`getBlockWithTransactions`](Provider.md#getblockwithtransactions)

***

### getCode()

> **getCode**(`addressOrName`, `blockTag?`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:121

#### Parameters

##### addressOrName

`string` \| `Promise`\<`string`\>

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<`string`\>

#### Overrides

[`Provider`](Provider.md).[`getCode`](Provider.md#getcode)

***

### getEtherPrice()

> **getEtherPrice**(): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:137

#### Returns

`Promise`\<`number`\>

***

### getFeeData()

> **getFeeData**(): `Promise`\<[`FeeData`](../interfaces/FeeData.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:127

#### Returns

`Promise`\<[`FeeData`](../interfaces/FeeData.md)\>

#### Inherited from

[`Provider`](Provider.md).[`getFeeData`](Provider.md#getfeedata)

***

### getGasPrice()

> **getGasPrice**(): `Promise`\<[`BigNumber`](BigNumber.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:118

#### Returns

`Promise`\<[`BigNumber`](BigNumber.md)\>

#### Overrides

[`Provider`](Provider.md).[`getGasPrice`](Provider.md#getgasprice)

***

### getLogs()

> **getLogs**(`filter`): `Promise`\<[`Log`](../interfaces/Log.md)[]\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:136

#### Parameters

##### filter

[`Filter`](../interfaces/Filter.md) \| [`FilterByBlockHash`](../interfaces/FilterByBlockHash.md) \| `Promise`\<[`Filter`](../interfaces/Filter.md) \| [`FilterByBlockHash`](../interfaces/FilterByBlockHash.md)\>

#### Returns

`Promise`\<[`Log`](../interfaces/Log.md)[]\>

#### Overrides

[`Provider`](Provider.md).[`getLogs`](Provider.md#getlogs)

***

### getNetwork()

> **getNetwork**(): `Promise`\<[`Network`](../type-aliases/Network.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:100

#### Returns

`Promise`\<[`Network`](../type-aliases/Network.md)\>

#### Overrides

[`Provider`](Provider.md).[`getNetwork`](Provider.md#getnetwork)

***

### getResolver()

> **getResolver**(`name`): `Promise`\<[`Resolver`](Resolver.md) \| `null`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:139

#### Parameters

##### name

`string`

#### Returns

`Promise`\<[`Resolver`](Resolver.md) \| `null`\>

#### Implementation of

[`EnsProvider`](../interfaces/EnsProvider.md).[`getResolver`](../interfaces/EnsProvider.md#getresolver)

***

### getStorageAt()

> **getStorageAt**(`addressOrName`, `position`, `blockTag?`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:122

#### Parameters

##### addressOrName

`string` \| `Promise`\<`string`\>

##### position

[`BigNumberish`](../type-aliases/BigNumberish.md) \| `Promise`\<[`BigNumberish`](../type-aliases/BigNumberish.md)\>

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<`string`\>

#### Overrides

[`Provider`](Provider.md).[`getStorageAt`](Provider.md#getstorageat)

***

### getTransaction()

> **getTransaction**(`transactionHash`): `Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:134

#### Parameters

##### transactionHash

`string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

#### Overrides

[`Provider`](Provider.md).[`getTransaction`](Provider.md#gettransaction)

***

### getTransactionCount()

> **getTransactionCount**(`addressOrName`, `blockTag?`): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:120

#### Parameters

##### addressOrName

`string` \| `Promise`\<`string`\>

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<`number`\>

#### Overrides

[`Provider`](Provider.md).[`getTransactionCount`](Provider.md#gettransactioncount)

***

### getTransactionReceipt()

> **getTransactionReceipt**(`transactionHash`): `Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:135

#### Parameters

##### transactionHash

`string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

#### Overrides

[`Provider`](Provider.md).[`getTransactionReceipt`](Provider.md#gettransactionreceipt)

***

### listenerCount()

> **listenerCount**(`eventName?`): `number`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:151

#### Parameters

##### eventName?

[`EventType`](../type-aliases/EventType.md)

#### Returns

`number`

#### Overrides

[`Provider`](Provider.md).[`listenerCount`](Provider.md#listenercount)

***

### listeners()

> **listeners**(`eventName?`): [`Listener`](../type-aliases/Listener.md)[]

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:152

#### Parameters

##### eventName?

[`EventType`](../type-aliases/EventType.md)

#### Returns

[`Listener`](../type-aliases/Listener.md)[]

#### Overrides

[`Provider`](Provider.md).[`listeners`](Provider.md#listeners)

***

### lookupAddress()

> **lookupAddress**(`address`): `Promise`\<`string` \| `null`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:142

#### Parameters

##### address

`string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`string` \| `null`\>

#### Implementation of

[`EnsProvider`](../interfaces/EnsProvider.md).[`lookupAddress`](../interfaces/EnsProvider.md#lookupaddress)

#### Overrides

[`Provider`](Provider.md).[`lookupAddress`](Provider.md#lookupaddress)

***

### off()

> **off**(`eventName`, `listener?`): `this`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:153

#### Parameters

##### eventName

[`EventType`](../type-aliases/EventType.md)

##### listener?

[`Listener`](../type-aliases/Listener.md)

#### Returns

`this`

#### Overrides

[`Provider`](Provider.md).[`off`](Provider.md#off)

***

### on()

> **on**(`eventName`, `listener`): `this`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:148

#### Parameters

##### eventName

[`EventType`](../type-aliases/EventType.md)

##### listener

[`Listener`](../type-aliases/Listener.md)

#### Returns

`this`

#### Overrides

[`Provider`](Provider.md).[`on`](Provider.md#on)

***

### once()

> **once**(`eventName`, `listener`): `this`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:149

#### Parameters

##### eventName

[`EventType`](../type-aliases/EventType.md)

##### listener

[`Listener`](../type-aliases/Listener.md)

#### Returns

`this`

#### Overrides

[`Provider`](Provider.md).[`once`](Provider.md#once)

***

### perform()

> **perform**(`method`, `params`): `Promise`\<`any`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:144

#### Parameters

##### method

`string`

##### params

`any`

#### Returns

`Promise`\<`any`\>

***

### poll()

> **poll**(): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:96

#### Returns

`Promise`\<`void`\>

***

### removeAllListeners()

> **removeAllListeners**(`eventName?`): `this`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:154

#### Parameters

##### eventName?

[`EventType`](../type-aliases/EventType.md)

#### Returns

`this`

#### Overrides

[`Provider`](Provider.md).[`removeAllListeners`](Provider.md#removealllisteners)

***

### removeListener()

> **removeListener**(`eventName`, `listener`): [`Provider`](Provider.md)

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:150

#### Parameters

##### eventName

[`EventType`](../type-aliases/EventType.md)

##### listener

[`Listener`](../type-aliases/Listener.md)

#### Returns

[`Provider`](Provider.md)

#### Inherited from

[`Provider`](Provider.md).[`removeListener`](Provider.md#removelistener)

***

### resetEventsBlock()

> **resetEventsBlock**(`blockNumber`): `void`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:97

#### Parameters

##### blockNumber

`number`

#### Returns

`void`

***

### resolveName()

> **resolveName**(`name`): `Promise`\<`string` \| `null`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:141

#### Parameters

##### name

`string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`string` \| `null`\>

#### Implementation of

[`EnsProvider`](../interfaces/EnsProvider.md).[`resolveName`](../interfaces/EnsProvider.md#resolvename)

#### Overrides

[`Provider`](Provider.md).[`resolveName`](Provider.md#resolvename)

***

### sendTransaction()

> **sendTransaction**(`signedTransaction`): `Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:124

#### Parameters

##### signedTransaction

`string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

#### Overrides

[`Provider`](Provider.md).[`sendTransaction`](Provider.md#sendtransaction)

***

### waitForTransaction()

> **waitForTransaction**(`transactionHash`, `confirmations?`, `timeout?`): `Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:108

#### Parameters

##### transactionHash

`string`

##### confirmations?

`number`

##### timeout?

`number`

#### Returns

`Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

#### Overrides

[`Provider`](Provider.md).[`waitForTransaction`](Provider.md#waitfortransaction)

***

### getFormatter()

> `static` **getFormatter**(): [`Formatter`](Formatter.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:92

#### Returns

[`Formatter`](Formatter.md)

***

### getNetwork()

> `static` **getNetwork**(`network`): [`Network`](../type-aliases/Network.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:93

#### Parameters

##### network

[`Networkish`](../type-aliases/Networkish.md)

#### Returns

[`Network`](../type-aliases/Network.md)

***

### isProvider()

> `static` **isProvider**(`value`): `value is Provider`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:154

#### Parameters

##### value

`any`

#### Returns

`value is Provider`

#### Inherited from

[`Provider`](Provider.md).[`isProvider`](Provider.md#isprovider)
