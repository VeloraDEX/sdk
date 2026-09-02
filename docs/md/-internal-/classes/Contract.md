[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Contract

# Class: Contract

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:134

## Extends

- [`BaseContract`](BaseContract.md)

## Indexable

> \[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new Contract**(`addressOrName`, `contractInterface`, `signerOrProvider?`): `Contract`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:107

#### Parameters

##### addressOrName

`string`

##### contractInterface

[`ContractInterface`](../type-aliases/ContractInterface.md)

##### signerOrProvider?

[`Signer`](Signer.md) \| [`Provider`](Provider.md)

#### Returns

`Contract`

#### Inherited from

[`BaseContract`](BaseContract.md).[`constructor`](BaseContract.md#constructor)

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<`Contract`\>

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:100

#### Inherited from

[`BaseContract`](BaseContract.md).[`_deployedPromise`](BaseContract.md#_deployedpromise)

***

### \_runningEvents

> **\_runningEvents**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:101

#### Index Signature

\[`eventTag`: `string`\]: [`RunningEvent`](RunningEvent.md)

#### Inherited from

[`BaseContract`](BaseContract.md).[`_runningEvents`](BaseContract.md#_runningevents)

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:104

#### Index Signature

\[`eventTag`: `string`\]: (...`args`) => `void`

#### Inherited from

[`BaseContract`](BaseContract.md).[`_wrappedEmits`](BaseContract.md#_wrappedemits)

***

### address

> `readonly` **address**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:79

#### Inherited from

[`BaseContract`](BaseContract.md).[`address`](BaseContract.md#address)

***

### callStatic

> `readonly` **callStatic**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:86

#### Index Signature

\[`name`: `string`\]: [`ContractFunction`](../type-aliases/ContractFunction.md)\<`any`\>

#### Inherited from

[`BaseContract`](BaseContract.md).[`callStatic`](BaseContract.md#callstatic)

***

### deployTransaction

> `readonly` **deployTransaction**: [`TransactionResponse`](../interfaces/TransactionResponse.md)

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:99

#### Inherited from

[`BaseContract`](BaseContract.md).[`deployTransaction`](BaseContract.md#deploytransaction)

***

### estimateGas

> `readonly` **estimateGas**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:89

#### Index Signature

\[`name`: `string`\]: [`ContractFunction`](../type-aliases/ContractFunction.md)\<[`BigNumber`](BigNumber.md)\>

#### Inherited from

[`BaseContract`](BaseContract.md).[`estimateGas`](BaseContract.md#estimategas)

***

### filters

> `readonly` **filters**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:95

#### Index Signature

\[`name`: `string`\]: (...`args`) => [`EventFilter`](../type-aliases/EventFilter.md)

#### Inherited from

[`BaseContract`](BaseContract.md).[`filters`](BaseContract.md#filters)

***

### functions

> `readonly` **functions**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:83

#### Index Signature

\[`name`: `string`\]: [`ContractFunction`](../type-aliases/ContractFunction.md)\<`any`\>

#### Inherited from

[`BaseContract`](BaseContract.md).[`functions`](BaseContract.md#functions)

***

### interface

> `readonly` **interface**: [`Interface`](Interface-1.md)

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:80

#### Inherited from

[`BaseContract`](BaseContract.md).[`interface`](BaseContract.md#interface)

***

### populateTransaction

> `readonly` **populateTransaction**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:92

#### Index Signature

\[`name`: `string`\]: [`ContractFunction`](../type-aliases/ContractFunction.md)\<[`PopulatedTransaction`](../interfaces/PopulatedTransaction.md)\>

#### Inherited from

[`BaseContract`](BaseContract.md).[`populateTransaction`](BaseContract.md#populatetransaction)

***

### provider

> `readonly` **provider**: [`Provider`](Provider.md)

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:82

#### Inherited from

[`BaseContract`](BaseContract.md).[`provider`](BaseContract.md#provider)

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:98

#### Inherited from

[`BaseContract`](BaseContract.md).[`resolvedAddress`](BaseContract.md#resolvedaddress)

***

### signer

> `readonly` **signer**: [`Signer`](Signer.md)

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:81

#### Inherited from

[`BaseContract`](BaseContract.md).[`signer`](BaseContract.md#signer)

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:121

#### Parameters

##### runningEvent

[`RunningEvent`](RunningEvent.md)

#### Returns

`void`

#### Inherited from

[`BaseContract`](BaseContract.md).[`_checkRunningEvents`](BaseContract.md#_checkrunningevents)

***

### \_deployed()

> **\_deployed**(`blockTag?`): `Promise`\<`Contract`\>

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:114

#### Parameters

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag.md)

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

[`BaseContract`](BaseContract.md).[`_deployed`](BaseContract.md#_deployed)

***

### \_wrapEvent()

> **\_wrapEvent**(`runningEvent`, `log`, `listener`): [`Event`](../interfaces/Event.md)

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:122

#### Parameters

##### runningEvent

[`RunningEvent`](RunningEvent.md)

##### log

[`Log`](../interfaces/Log.md)

##### listener

[`Listener`](../type-aliases/Listener.md)

#### Returns

[`Event`](../interfaces/Event.md)

#### Inherited from

[`BaseContract`](BaseContract.md).[`_wrapEvent`](BaseContract.md#_wrapevent)

***

### attach()

> **attach**(`addressOrName`): `Contract`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:117

#### Parameters

##### addressOrName

`string`

#### Returns

`Contract`

#### Inherited from

[`BaseContract`](BaseContract.md).[`attach`](BaseContract.md#attach)

***

### connect()

> **connect**(`signerOrProvider`): `Contract`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:116

#### Parameters

##### signerOrProvider

`string` \| [`Signer`](Signer.md) \| [`Provider`](Provider.md)

#### Returns

`Contract`

#### Inherited from

[`BaseContract`](BaseContract.md).[`connect`](BaseContract.md#connect)

***

### deployed()

> **deployed**(): `Promise`\<`Contract`\>

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:113

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

[`BaseContract`](BaseContract.md).[`deployed`](BaseContract.md#deployed)

***

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:127

#### Parameters

##### eventName

`string` \| [`EventFilter`](../type-aliases/EventFilter.md)

##### args

...`any`[]

#### Returns

`boolean`

#### Inherited from

[`BaseContract`](BaseContract.md).[`emit`](BaseContract.md#emit)

***

### fallback()

> **fallback**(`overrides?`): `Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:115

#### Parameters

##### overrides?

[`TransactionRequest`](../type-aliases/TransactionRequest.md)

#### Returns

`Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

#### Inherited from

[`BaseContract`](BaseContract.md).[`fallback`](BaseContract.md#fallback)

***

### listenerCount()

> **listenerCount**(`eventName?`): `number`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:128

#### Parameters

##### eventName?

`string` \| [`EventFilter`](../type-aliases/EventFilter.md)

#### Returns

`number`

#### Inherited from

[`BaseContract`](BaseContract.md).[`listenerCount`](BaseContract.md#listenercount)

***

### listeners()

> **listeners**(`eventName?`): [`Listener`](../type-aliases/Listener.md)[]

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:129

#### Parameters

##### eventName?

`string` \| [`EventFilter`](../type-aliases/EventFilter.md)

#### Returns

[`Listener`](../type-aliases/Listener.md)[]

#### Inherited from

[`BaseContract`](BaseContract.md).[`listeners`](BaseContract.md#listeners)

***

### off()

> **off**(`eventName`, `listener`): `this`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:131

#### Parameters

##### eventName

`string` \| [`EventFilter`](../type-aliases/EventFilter.md)

##### listener

[`Listener`](../type-aliases/Listener.md)

#### Returns

`this`

#### Inherited from

[`BaseContract`](BaseContract.md).[`off`](BaseContract.md#off)

***

### on()

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:125

#### Parameters

##### event

`string` \| [`EventFilter`](../type-aliases/EventFilter.md)

##### listener

[`Listener`](../type-aliases/Listener.md)

#### Returns

`this`

#### Inherited from

[`BaseContract`](BaseContract.md).[`on`](BaseContract.md#on)

***

### once()

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:126

#### Parameters

##### event

`string` \| [`EventFilter`](../type-aliases/EventFilter.md)

##### listener

[`Listener`](../type-aliases/Listener.md)

#### Returns

`this`

#### Inherited from

[`BaseContract`](BaseContract.md).[`once`](BaseContract.md#once)

***

### queryFilter()

> **queryFilter**(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`\<[`Event`](../interfaces/Event.md)[]\>

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:124

#### Parameters

##### event

`string` \| [`EventFilter`](../type-aliases/EventFilter.md)

##### fromBlockOrBlockhash?

[`BlockTag`](../type-aliases/BlockTag.md)

##### toBlock?

[`BlockTag`](../type-aliases/BlockTag.md)

#### Returns

`Promise`\<[`Event`](../interfaces/Event.md)[]\>

#### Inherited from

[`BaseContract`](BaseContract.md).[`queryFilter`](BaseContract.md#queryfilter)

***

### removeAllListeners()

> **removeAllListeners**(`eventName?`): `this`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:130

#### Parameters

##### eventName?

`string` \| [`EventFilter`](../type-aliases/EventFilter.md)

#### Returns

`this`

#### Inherited from

[`BaseContract`](BaseContract.md).[`removeAllListeners`](BaseContract.md#removealllisteners)

***

### removeListener()

> **removeListener**(`eventName`, `listener`): `this`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:132

#### Parameters

##### eventName

`string` \| [`EventFilter`](../type-aliases/EventFilter.md)

##### listener

[`Listener`](../type-aliases/Listener.md)

#### Returns

`this`

#### Inherited from

[`BaseContract`](BaseContract.md).[`removeListener`](BaseContract.md#removelistener)

***

### getContractAddress()

> `static` **getContractAddress**(`transaction`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:108

#### Parameters

##### transaction

###### from

`string`

###### nonce

[`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`string`

#### Inherited from

[`BaseContract`](BaseContract.md).[`getContractAddress`](BaseContract.md#getcontractaddress)

***

### getInterface()

> `static` **getInterface**(`contractInterface`): [`Interface`](Interface-1.md)

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:112

#### Parameters

##### contractInterface

[`ContractInterface`](../type-aliases/ContractInterface.md)

#### Returns

[`Interface`](Interface-1.md)

#### Inherited from

[`BaseContract`](BaseContract.md).[`getInterface`](BaseContract.md#getinterface)

***

### isIndexed()

> `static` **isIndexed**(`value`): `value is Indexed`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:118

#### Parameters

##### value

`any`

#### Returns

`value is Indexed`

#### Inherited from

[`BaseContract`](BaseContract.md).[`isIndexed`](BaseContract.md#isindexed)
