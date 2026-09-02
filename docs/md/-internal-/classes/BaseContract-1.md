[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BaseContract

# Class: BaseContract

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:18

An interface for objects which have an address, and can
 resolve it asyncronously.

 This allows objects such as [[Signer]] or [[Contract]] to
 be used most places an address can be, for example getting
 the [balance](Provider-getBalance).

## Implements

- [`Addressable`](../interfaces/Addressable.md)
- [`EventEmitterable`](../interfaces/EventEmitterable.md)\<[`ContractEventName`](../type-aliases/ContractEventName.md)\>

## Constructors

### Constructor

> **new BaseContract**(`target`, `abi`, `runner?`, `_deployTx?`): `BaseContract`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:56

Creates a new contract connected to %%target%% with the %%abi%% and
 optionally connected to a %%runner%% to perform operations on behalf
 of.

#### Parameters

##### target

`string` \| [`Addressable`](../interfaces/Addressable.md)

##### abi

[`Interface`](Interface.md) \| [`InterfaceAbi`](../type-aliases/InterfaceAbi.md)

##### runner?

[`ContractRunner`](../interfaces/ContractRunner.md) \| `null`

##### \_deployTx?

[`TransactionResponse`](TransactionResponse.md) \| `null`

#### Returns

`BaseContract`

## Properties

### \[internal\]

> `readonly` **\[internal\]**: `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:46

@_ignore:

***

### fallback

> `readonly` **fallback**: [`WrappedFallback`](../interfaces/WrappedFallback.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:50

The fallback or receive function if any.

***

### filters

> `readonly` **filters**: [`Record`](../type-aliases/Record.md)\<`string`, [`ContractEvent`](../interfaces/ContractEvent.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:42

All the Events available on this contract.

***

### interface

> `readonly` **interface**: [`Interface`](Interface.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:30

The contract Interface.

***

### runner

> `readonly` **runner**: [`ContractRunner`](../interfaces/ContractRunner.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:38

The connected runner. This is generally a [[Provider]] or a
 [[Signer]], which dictates what operations are supported.

 For example, a **Contract** connected to a [[Provider]] may
 only execute read-only operations.

***

### target

> `readonly` **target**: `string` \| [`Addressable`](../interfaces/Addressable.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:26

The target to connect to.

 This can be an address, ENS name or any [[Addressable]], such as
 another contract. To get the resovled address, use the ``getAddress``
 method.

## Methods

### addListener()

> **addListener**(`event`, `listener`): `Promise`\<`BaseContract`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:147

Alias for [on].

#### Parameters

##### event

[`ContractEventName`](../type-aliases/ContractEventName.md)

##### listener

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`BaseContract`\>

#### Implementation of

[`EventEmitterable`](../interfaces/EventEmitterable.md).[`addListener`](../interfaces/EventEmitterable.md#addlistener)

***

### attach()

> **attach**(`target`): `BaseContract`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:66

Return a new Contract instance with the same ABI and runner, but
 a different %%target%%.

#### Parameters

##### target

`string` \| [`Addressable`](../interfaces/Addressable.md)

#### Returns

`BaseContract`

***

### connect()

> **connect**(`runner`): `BaseContract`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:61

Return a new Contract instance with the same target and ABI, but
 a different %%runner%%.

#### Parameters

##### runner

[`ContractRunner`](../interfaces/ContractRunner.md) \| `null`

#### Returns

`BaseContract`

***

### deploymentTransaction()

> **deploymentTransaction**(): [`ContractTransactionResponse`](ContractTransactionResponse.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:86

Return the transaction used to deploy this contract.

 This is only available if this instance was returned from a
 [[ContractFactory]].

#### Returns

[`ContractTransactionResponse`](ContractTransactionResponse.md) \| `null`

***

### emit()

> **emit**(`event`, ...`args`): `Promise`\<`boolean`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:123

Emit an %%event%% calling all listeners with %%args%%.

 Resolves to ``true`` if any listeners were called.

#### Parameters

##### event

[`ContractEventName`](../type-aliases/ContractEventName.md)

##### args

...`any`[]

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`EventEmitterable`](../interfaces/EventEmitterable.md).[`emit`](../interfaces/EventEmitterable.md#emit)

***

### getAddress()

> **getAddress**(): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:70

Return the resolved address of this Contract.

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`Addressable`](../interfaces/Addressable.md).[`getAddress`](../interfaces/Addressable.md#getaddress)

***

### getDeployedCode()

> **getDeployedCode**(): `Promise`\<`string` \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:74

Return the deployed bytecode or null if no bytecode is found.

#### Returns

`Promise`\<`string` \| `null`\>

***

### getEvent()

> **getEvent**(`key`): [`ContractEvent`](../interfaces/ContractEvent.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:98

Return the event for a given name. This is useful when a contract
 event name conflicts with a JavaScript name such as ``prototype`` or
 when using a Contract programatically.

#### Parameters

##### key

`string` \| [`EventFragment`](EventFragment.md)

#### Returns

[`ContractEvent`](../interfaces/ContractEvent.md)

***

### getFunction()

> **getFunction**\<`T`\>(`key`): `T`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:92

Return the function for a given name. This is useful when a contract
 method name conflicts with a JavaScript name such as ``prototype`` or
 when using a Contract programatically.

#### Type Parameters

##### T

`T` *extends* [`ContractMethod`](../interfaces/ContractMethod.md)\<`any`[], `any`, `any`\> = [`ContractMethod`](../interfaces/ContractMethod.md)\<`any`[], `any`, `any`\>

#### Parameters

##### key

`string` \| [`FunctionFragment`](FunctionFragment.md)

#### Returns

`T`

***

### listenerCount()

> **listenerCount**(`event?`): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:128

Resolves to the number of listeners of %%event%% or the total number
 of listeners if unspecified.

#### Parameters

##### event?

[`ContractEventName`](../type-aliases/ContractEventName.md)

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`EventEmitterable`](../interfaces/EventEmitterable.md).[`listenerCount`](../interfaces/EventEmitterable.md#listenercount)

***

### listeners()

> **listeners**(`event?`): `Promise`\<[`Listener`](../type-aliases/Listener-1.md)[]\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:133

Resolves to the listeners subscribed to %%event%% or all listeners
 if unspecified.

#### Parameters

##### event?

[`ContractEventName`](../type-aliases/ContractEventName.md)

#### Returns

`Promise`\<[`Listener`](../type-aliases/Listener-1.md)[]\>

#### Implementation of

[`EventEmitterable`](../interfaces/EventEmitterable.md).[`listeners`](../interfaces/EventEmitterable.md#listeners)

***

### off()

> **off**(`event`, `listener?`): `Promise`\<`BaseContract`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:138

Remove the %%listener%% from the listeners for %%event%% or remove
 all listeners if unspecified.

#### Parameters

##### event

[`ContractEventName`](../type-aliases/ContractEventName.md)

##### listener?

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`BaseContract`\>

#### Implementation of

[`EventEmitterable`](../interfaces/EventEmitterable.md).[`off`](../interfaces/EventEmitterable.md#off)

***

### on()

> **on**(`event`, `listener`): `Promise`\<`BaseContract`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:112

Add an event %%listener%% for the %%event%%.

#### Parameters

##### event

[`ContractEventName`](../type-aliases/ContractEventName.md)

##### listener

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`BaseContract`\>

#### Implementation of

[`EventEmitterable`](../interfaces/EventEmitterable.md).[`on`](../interfaces/EventEmitterable.md#on)

***

### once()

> **once**(`event`, `listener`): `Promise`\<`BaseContract`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:117

Add an event %%listener%% for the %%event%%, but remove the listener
 after it is fired once.

#### Parameters

##### event

[`ContractEventName`](../type-aliases/ContractEventName.md)

##### listener

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`BaseContract`\>

#### Implementation of

[`EventEmitterable`](../interfaces/EventEmitterable.md).[`once`](../interfaces/EventEmitterable.md#once)

***

### queryFilter()

> **queryFilter**(`event`, `fromBlock?`, `toBlock?`): `Promise`\<([`Log`](Log.md) \| [`EventLog`](EventLog.md))[]\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:108

Provide historic access to event data for %%event%% in the range
 %%fromBlock%% (default: ``0``) to %%toBlock%% (default: ``"latest"``)
 inclusive.

#### Parameters

##### event

[`ContractEventName`](../type-aliases/ContractEventName.md)

##### fromBlock?

[`BlockTag`](../type-aliases/BlockTag-1.md)

##### toBlock?

[`BlockTag`](../type-aliases/BlockTag-1.md)

#### Returns

`Promise`\<([`Log`](Log.md) \| [`EventLog`](EventLog.md))[]\>

***

### queryTransaction()

> **queryTransaction**(`hash`): `Promise`\<[`EventLog`](EventLog.md)[]\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:102

@_ignore:

#### Parameters

##### hash

`string`

#### Returns

`Promise`\<[`EventLog`](EventLog.md)[]\>

***

### removeAllListeners()

> **removeAllListeners**(`event?`): `Promise`\<`BaseContract`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:143

Remove all the listeners for %%event%% or remove all listeners if
 unspecified.

#### Parameters

##### event?

[`ContractEventName`](../type-aliases/ContractEventName.md)

#### Returns

`Promise`\<`BaseContract`\>

#### Implementation of

[`EventEmitterable`](../interfaces/EventEmitterable.md).[`removeAllListeners`](../interfaces/EventEmitterable.md#removealllisteners)

***

### removeListener()

> **removeListener**(`event`, `listener`): `Promise`\<`BaseContract`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:151

Alias for [off].

#### Parameters

##### event

[`ContractEventName`](../type-aliases/ContractEventName.md)

##### listener

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`BaseContract`\>

#### Implementation of

[`EventEmitterable`](../interfaces/EventEmitterable.md).[`removeListener`](../interfaces/EventEmitterable.md#removelistener)

***

### waitForDeployment()

> **waitForDeployment**(): `Promise`\<`BaseContract`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:79

Resolve to this Contract once the bytecode has been deployed, or
 resolve immediately if already deployed.

#### Returns

`Promise`\<`BaseContract`\>

***

### buildClass()

> `static` **buildClass**\<`T`\>(`abi`): (`target`, `runner?`) => `BaseContract` & [`Omit`](../type-aliases/Omit.md)\<`T`, keyof `BaseContract`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:155

Create a new Class for the %%abi%%.

#### Type Parameters

##### T

`T` = [`ContractInterface`](../interfaces/ContractInterface.md)

#### Parameters

##### abi

[`Interface`](Interface.md) \| [`InterfaceAbi`](../type-aliases/InterfaceAbi.md)

#### Returns

(`target`, `runner?`) => `BaseContract` & [`Omit`](../type-aliases/Omit.md)\<`T`, keyof `BaseContract`\>

***

### from()

> `static` **from**\<`T`\>(`target`, `abi`, `runner?`): `BaseContract` & [`Omit`](../type-aliases/Omit.md)\<`T`, keyof `BaseContract`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:159

Create a new BaseContract with a specified Interface.

#### Type Parameters

##### T

`T` = [`ContractInterface`](../interfaces/ContractInterface.md)

#### Parameters

##### target

`string`

##### abi

[`Interface`](Interface.md) \| [`InterfaceAbi`](../type-aliases/InterfaceAbi.md)

##### runner?

[`ContractRunner`](../interfaces/ContractRunner.md) \| `null`

#### Returns

`BaseContract` & [`Omit`](../type-aliases/Omit.md)\<`T`, keyof `BaseContract`\>
