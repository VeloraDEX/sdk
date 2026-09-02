[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Contract

# Class: Contract

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:165

A [[BaseContract]] with no type guards on its methods or events.

## Extends

- [`Contract_base`](../variables/Contract_base.md)

## Indexable

> \[`key`: `string`\]: [`BaseContractMethod`](../interfaces/BaseContractMethod.md)\<`any`[], `any`, `any`\>

> \[`key`: `number`\]: [`BaseContractMethod`](../interfaces/BaseContractMethod.md)\<`any`[], `any`, `any`\>

## Constructors

### Constructor

> **new Contract**(`target`, `abi`, `runner?`): `Contract`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:161

#### Parameters

##### target

`string` \| [`Addressable`](../interfaces/Addressable.md)

##### abi

[`Interface`](Interface.md) \| [`InterfaceAbi`](../type-aliases/InterfaceAbi.md)

##### runner?

[`ContractRunner`](../interfaces/ContractRunner.md) \| `null`

#### Returns

`Contract`

#### Inherited from

`Contract_base.constructor`

## Properties

### \[internal\]

> `readonly` **\[internal\]**: `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:46

@_ignore:

#### Inherited from

`Contract_base.[internal]`

***

### fallback

> `readonly` **fallback**: [`WrappedFallback`](../interfaces/WrappedFallback.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:50

The fallback or receive function if any.

#### Inherited from

`Contract_base.fallback`

***

### filters

> `readonly` **filters**: [`Record`](../type-aliases/Record.md)\<`string`, [`ContractEvent`](../interfaces/ContractEvent.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:42

All the Events available on this contract.

#### Inherited from

`Contract_base.filters`

***

### interface

> `readonly` **interface**: [`Interface`](Interface.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:30

The contract Interface.

#### Inherited from

`Contract_base.interface`

***

### runner

> `readonly` **runner**: [`ContractRunner`](../interfaces/ContractRunner.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:38

The connected runner. This is generally a [[Provider]] or a
 [[Signer]], which dictates what operations are supported.

 For example, a **Contract** connected to a [[Provider]] may
 only execute read-only operations.

#### Inherited from

`Contract_base.runner`

***

### target

> `readonly` **target**: `string` \| [`Addressable`](../interfaces/Addressable.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:26

The target to connect to.

 This can be an address, ENS name or any [[Addressable]], such as
 another contract. To get the resovled address, use the ``getAddress``
 method.

#### Inherited from

`Contract_base.target`

## Methods

### addListener()

> **addListener**(`event`, `listener`): `Promise`\<`Contract`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:147

Alias for [on].

#### Parameters

##### event

[`ContractEventName`](../type-aliases/ContractEventName.md)

##### listener

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`Contract_base.addListener`

***

### attach()

> **attach**(`target`): [`BaseContract`](BaseContract-1.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:66

Return a new Contract instance with the same ABI and runner, but
 a different %%target%%.

#### Parameters

##### target

`string` \| [`Addressable`](../interfaces/Addressable.md)

#### Returns

[`BaseContract`](BaseContract-1.md)

#### Inherited from

`Contract_base.attach`

***

### connect()

> **connect**(`runner`): [`BaseContract`](BaseContract-1.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:61

Return a new Contract instance with the same target and ABI, but
 a different %%runner%%.

#### Parameters

##### runner

[`ContractRunner`](../interfaces/ContractRunner.md) \| `null`

#### Returns

[`BaseContract`](BaseContract-1.md)

#### Inherited from

`Contract_base.connect`

***

### deploymentTransaction()

> **deploymentTransaction**(): [`ContractTransactionResponse`](ContractTransactionResponse.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:86

Return the transaction used to deploy this contract.

 This is only available if this instance was returned from a
 [[ContractFactory]].

#### Returns

[`ContractTransactionResponse`](ContractTransactionResponse.md) \| `null`

#### Inherited from

`Contract_base.deploymentTransaction`

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

#### Inherited from

`Contract_base.emit`

***

### getAddress()

> **getAddress**(): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:70

Return the resolved address of this Contract.

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Contract_base.getAddress`

***

### getDeployedCode()

> **getDeployedCode**(): `Promise`\<`string` \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:74

Return the deployed bytecode or null if no bytecode is found.

#### Returns

`Promise`\<`string` \| `null`\>

#### Inherited from

`Contract_base.getDeployedCode`

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

#### Inherited from

`Contract_base.getEvent`

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

#### Inherited from

`Contract_base.getFunction`

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

#### Inherited from

`Contract_base.listenerCount`

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

#### Inherited from

`Contract_base.listeners`

***

### off()

> **off**(`event`, `listener?`): `Promise`\<`Contract`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:138

Remove the %%listener%% from the listeners for %%event%% or remove
 all listeners if unspecified.

#### Parameters

##### event

[`ContractEventName`](../type-aliases/ContractEventName.md)

##### listener?

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`Contract_base.off`

***

### on()

> **on**(`event`, `listener`): `Promise`\<`Contract`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:112

Add an event %%listener%% for the %%event%%.

#### Parameters

##### event

[`ContractEventName`](../type-aliases/ContractEventName.md)

##### listener

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`Contract_base.on`

***

### once()

> **once**(`event`, `listener`): `Promise`\<`Contract`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:117

Add an event %%listener%% for the %%event%%, but remove the listener
 after it is fired once.

#### Parameters

##### event

[`ContractEventName`](../type-aliases/ContractEventName.md)

##### listener

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`Contract_base.once`

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

#### Inherited from

`Contract_base.queryFilter`

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

#### Inherited from

`Contract_base.queryTransaction`

***

### removeAllListeners()

> **removeAllListeners**(`event?`): `Promise`\<`Contract`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:143

Remove all the listeners for %%event%% or remove all listeners if
 unspecified.

#### Parameters

##### event?

[`ContractEventName`](../type-aliases/ContractEventName.md)

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`Contract_base.removeAllListeners`

***

### removeListener()

> **removeListener**(`event`, `listener`): `Promise`\<`Contract`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:151

Alias for [off].

#### Parameters

##### event

[`ContractEventName`](../type-aliases/ContractEventName.md)

##### listener

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`Contract_base.removeListener`

***

### waitForDeployment()

> **waitForDeployment**(): `Promise`\<`Contract`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/contract.d.ts:79

Resolve to this Contract once the bytecode has been deployed, or
 resolve immediately if already deployed.

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`Contract_base.waitForDeployment`
