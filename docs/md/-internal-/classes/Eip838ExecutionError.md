[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Eip838ExecutionError

# Class: Eip838ExecutionError

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:82

This class is expected to be set as an `cause` inside ContractExecutionError
The properties would be typically decoded from the `data` if it was encoded according to EIP-838

## Extends

- [`Web3ContractError`](Web3ContractError.md)

## Constructors

### Constructor

> **new Eip838ExecutionError**(`error`): `Eip838ExecutionError`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:92

#### Parameters

##### error

`Eip838ExecutionError` \| [`JsonRpcError`](../interfaces/JsonRpcError.md)\<[`ProviderErrorData`](../type-aliases/ProviderErrorData.md)\>

#### Returns

`Eip838ExecutionError`

#### Overrides

[`Web3ContractError`](Web3ContractError.md).[`constructor`](Web3ContractError.md#constructor)

## Properties

### cause

> **cause**: `Eip838ExecutionError` \| `undefined`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:91

#### Overrides

[`Web3ContractError`](Web3ContractError.md).[`cause`](Web3ContractError.md#cause)

***

### code

> **code**: `number`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:84

#### Overrides

[`Web3ContractError`](Web3ContractError.md).[`code`](Web3ContractError.md#code)

***

### data?

> `optional` **data?**: `string`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:85

***

### errorArgs?

> `optional` **errorArgs?**: `object`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:88

#### Index Signature

\[`key`: `string`\]: `unknown`

***

### errorName?

> `optional` **errorName?**: `string`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:86

***

### errorSignature?

> `optional` **errorSignature?**: `string`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:87

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`Web3ContractError`](Web3ContractError.md).[`message`](Web3ContractError.md#message)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:83

#### Overrides

[`Web3ContractError`](Web3ContractError.md).[`name`](Web3ContractError.md#name)

***

### receipt?

> `optional` **receipt?**: [`TransactionReceipt`](../type-aliases/TransactionReceipt.md)

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:5

#### Inherited from

[`Web3ContractError`](Web3ContractError.md).[`receipt`](Web3ContractError.md#receipt)

***

### stack

> **stack**: `string` \| `undefined`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:8

#### Inherited from

[`Web3ContractError`](Web3ContractError.md).[`stack`](Web3ContractError.md#stack)

***

### prepareStackTrace?

> `static` `optional` **prepareStackTrace?**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:143

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

[`CallSite`](../interfaces/CallSite.md)[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[`Web3ContractError`](Web3ContractError.md).[`prepareStackTrace`](Web3ContractError.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:145

#### Inherited from

[`Web3ContractError`](Web3ContractError.md).[`stackTraceLimit`](Web3ContractError.md#stacktracelimit)

## Accessors

### innerError

#### Get Signature

> **get** **innerError**(): `Error` \| `Error`[] \| `undefined`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:13

##### Deprecated

Use the `cause` property instead.

##### Returns

`Error` \| `Error`[] \| `undefined`

#### Set Signature

> **set** **innerError**(`cause`): `void`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:17

##### Deprecated

Use the `cause` property instead.

##### Parameters

###### cause

`Error` \| `Error`[] \| `undefined`

##### Returns

`void`

#### Inherited from

`Web3ContractError.innerError`

## Methods

### setDecodedProperties()

> **setDecodedProperties**(`errorName`, `errorSignature?`, `errorArgs?`): `void`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:93

#### Parameters

##### errorName

`string`

##### errorSignature?

`string`

##### errorArgs?

#### Returns

`void`

***

### toJSON()

> **toJSON**(): `object`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:96

#### Returns

`object`

##### cause

> **cause**: `Eip838ExecutionError` \| `undefined`

##### code

> **code**: `number`

##### data

> **data**: `string`

##### errorArgs?

> `optional` **errorArgs?**: `object`

###### Index Signature

\[`x`: `string`\]: `unknown`

##### errorName?

> `optional` **errorName?**: `string`

##### errorSignature?

> `optional` **errorSignature?**: `string`

##### innerError

> **innerError**: `Eip838ExecutionError` \| `undefined`

##### message

> **message**: `string`

##### name

> **name**: `string`

#### Overrides

[`Web3ContractError`](Web3ContractError.md).[`toJSON`](Web3ContractError.md#tojson)

***

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

[`Web3ContractError`](Web3ContractError.md).[`captureStackTrace`](Web3ContractError.md#capturestacktrace)

***

### convertToString()

> `static` **convertToString**(`value`, `unquotValue?`): `string`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:19

#### Parameters

##### value

`unknown`

##### unquotValue?

`boolean`

#### Returns

`string`

#### Inherited from

[`Web3ContractError`](Web3ContractError.md).[`convertToString`](Web3ContractError.md#converttostring)
