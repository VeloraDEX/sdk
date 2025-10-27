[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3ContractError

# Class: Web3ContractError

Base class for Web3 errors.

## Extends

- [`BaseWeb3Error`](BaseWeb3Error.md)

## Extended by

- [`ContractExecutionError`](ContractExecutionError.md)
- [`Eip838ExecutionError`](Eip838ExecutionError.md)

## Constructors

### new Web3ContractError()

> **new Web3ContractError**(`message`, `receipt`?): [`Web3ContractError`](Web3ContractError.md)

#### Parameters

• **message**: `string`

• **receipt?**: [`TransactionReceipt`](../namespaces/Users_andriishymkiv_work_velora_sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md)

#### Returns

[`Web3ContractError`](Web3ContractError.md)

#### Overrides

[`BaseWeb3Error`](BaseWeb3Error.md).[`constructor`](BaseWeb3Error.md#constructors)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:6

## Properties

### cause

> **cause**: `undefined` \| [`Error`](../interfaces/Error.md)

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`cause`](BaseWeb3Error.md#cause)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:9

***

### code

> **code**: `number`

#### Overrides

[`BaseWeb3Error`](BaseWeb3Error.md).[`code`](BaseWeb3Error.md#code)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:4

***

### message

> **message**: `string`

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`message`](BaseWeb3Error.md#message)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`name`](BaseWeb3Error.md#name)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:6

***

### receipt?

> `optional` **receipt**: [`TransactionReceipt`](../namespaces/Users_andriishymkiv_work_velora_sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/TransactionReceipt.md)

#### Defined in

node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:5

***

### stack

> **stack**: `undefined` \| `string`

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`stack`](BaseWeb3Error.md#stack)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:8

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: [`Error`](../interfaces/Error.md)

• **stackTraces**: [`CallSite`](../interfaces/CallSite.md)[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`prepareStackTrace`](BaseWeb3Error.md#preparestacktrace)

#### Defined in

node\_modules/@types/node/globals.d.ts:143

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`stackTraceLimit`](BaseWeb3Error.md#stacktracelimit)

#### Defined in

node\_modules/@types/node/globals.d.ts:145

## Accessors

### innerError

#### Get Signature

> **get** **innerError**(): `undefined` \| [`Error`](../interfaces/Error.md) \| [`Error`](../interfaces/Error.md)[]

##### Deprecated

Use the `cause` property instead.

##### Returns

`undefined` \| [`Error`](../interfaces/Error.md) \| [`Error`](../interfaces/Error.md)[]

#### Set Signature

> **set** **innerError**(`cause`): `void`

##### Deprecated

Use the `cause` property instead.

##### Parameters

• **cause**: `undefined` \| [`Error`](../interfaces/Error.md) \| [`Error`](../interfaces/Error.md)[]

##### Returns

`void`

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`innerError`](BaseWeb3Error.md#innererror)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:13

## Methods

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### cause

> **cause**: `undefined` \| [`Error`](../interfaces/Error.md)

##### code

> **code**: `number`

##### innerError

> **innerError**: `undefined` \| [`Error`](../interfaces/Error.md)

##### message

> **message**: `string`

##### name

> **name**: `string`

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`toJSON`](BaseWeb3Error.md#tojson)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:20

***

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`captureStackTrace`](BaseWeb3Error.md#capturestacktrace)

#### Defined in

node\_modules/@types/node/globals.d.ts:136

***

### convertToString()

> `static` **convertToString**(`value`, `unquotValue`?): `string`

#### Parameters

• **value**: `unknown`

• **unquotValue?**: `boolean`

#### Returns

`string`

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`convertToString`](BaseWeb3Error.md#converttostring)

#### Defined in

node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:19
