[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BaseContract

# Class: BaseContract

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:78

## Extended by

- [`Contract`](Contract.md)

## Constructors

### Constructor

> **new BaseContract**(`addressOrName`, `contractInterface`, `signerOrProvider?`): `BaseContract`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:107

#### Parameters

##### addressOrName

`string`

##### contractInterface

[`ContractInterface`](../type-aliases/ContractInterface.md)

##### signerOrProvider?

[`Signer`](Signer.md) \| [`Provider`](Provider.md)

#### Returns

`BaseContract`

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<[`Contract`](Contract.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:100

***

### \_runningEvents

> **\_runningEvents**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:101

#### Index Signature

\[`eventTag`: `string`\]: [`RunningEvent`](RunningEvent.md)

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:104

#### Index Signature

\[`eventTag`: `string`\]: (...`args`) => `void`

***

### address

> `readonly` **address**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:79

***

### callStatic

> `readonly` **callStatic**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:86

#### Index Signature

\[`name`: `string`\]: [`ContractFunction`](../type-aliases/ContractFunction.md)\<`any`\>

***

### deployTransaction

> `readonly` **deployTransaction**: [`TransactionResponse`](../interfaces/TransactionResponse.md)

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:99

***

### estimateGas

> `readonly` **estimateGas**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:89

#### Index Signature

\[`name`: `string`\]: [`ContractFunction`](../type-aliases/ContractFunction.md)\<[`BigNumber`](BigNumber.md)\>

***

### filters

> `readonly` **filters**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:95

#### Index Signature

\[`name`: `string`\]: (...`args`) => [`EventFilter`](../type-aliases/EventFilter.md)

***

### functions

> `readonly` **functions**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:83

#### Index Signature

\[`name`: `string`\]: [`ContractFunction`](../type-aliases/ContractFunction.md)\<`any`\>

***

### interface

> `readonly` **interface**: [`Interface`](Interface-1.md)

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:80

***

### populateTransaction

> `readonly` **populateTransaction**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:92

#### Index Signature

\[`name`: `string`\]: [`ContractFunction`](../type-aliases/ContractFunction.md)\<[`PopulatedTransaction`](../interfaces/PopulatedTransaction.md)\>

***

### provider

> `readonly` **provider**: [`Provider`](Provider.md)

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:82

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:98

***

### signer

> `readonly` **signer**: [`Signer`](Signer.md)

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:81

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:121

#### Parameters

##### runningEvent

[`RunningEvent`](RunningEvent.md)

#### Returns

`void`

***

### \_deployed()

> **\_deployed**(`blockTag?`): `Promise`\<[`Contract`](Contract.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:114

#### Parameters

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag.md)

#### Returns

`Promise`\<[`Contract`](Contract.md)\>

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

***

### attach()

> **attach**(`addressOrName`): [`Contract`](Contract.md)

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:117

#### Parameters

##### addressOrName

`string`

#### Returns

[`Contract`](Contract.md)

***

### connect()

> **connect**(`signerOrProvider`): [`Contract`](Contract.md)

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:116

#### Parameters

##### signerOrProvider

`string` \| [`Signer`](Signer.md) \| [`Provider`](Provider.md)

#### Returns

[`Contract`](Contract.md)

***

### deployed()

> **deployed**(): `Promise`\<[`Contract`](Contract.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:113

#### Returns

`Promise`\<[`Contract`](Contract.md)\>

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

***

### fallback()

> **fallback**(`overrides?`): `Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:115

#### Parameters

##### overrides?

[`TransactionRequest`](../type-aliases/TransactionRequest.md)

#### Returns

`Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

***

### listenerCount()

> **listenerCount**(`eventName?`): `number`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:128

#### Parameters

##### eventName?

`string` \| [`EventFilter`](../type-aliases/EventFilter.md)

#### Returns

`number`

***

### listeners()

> **listeners**(`eventName?`): [`Listener`](../type-aliases/Listener.md)[]

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:129

#### Parameters

##### eventName?

`string` \| [`EventFilter`](../type-aliases/EventFilter.md)

#### Returns

[`Listener`](../type-aliases/Listener.md)[]

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

***

### removeAllListeners()

> **removeAllListeners**(`eventName?`): `this`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:130

#### Parameters

##### eventName?

`string` \| [`EventFilter`](../type-aliases/EventFilter.md)

#### Returns

`this`

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

***

### getInterface()

> `static` **getInterface**(`contractInterface`): [`Interface`](Interface-1.md)

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:112

#### Parameters

##### contractInterface

[`ContractInterface`](../type-aliases/ContractInterface.md)

#### Returns

[`Interface`](Interface-1.md)

***

### isIndexed()

> `static` **isIndexed**(`value`): `value is Indexed`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:118

#### Parameters

##### value

`any`

#### Returns

`value is Indexed`
