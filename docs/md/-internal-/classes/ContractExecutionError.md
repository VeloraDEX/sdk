[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractExecutionError

# Class: ContractExecutionError

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:114

Used when an error is raised while executing a function inside a smart contract.
The data is expected to be encoded according to EIP-848.

## Extends

- [`Web3ContractError`](Web3ContractError.md)

## Constructors

### Constructor

> **new ContractExecutionError**(`rpcError`): `ContractExecutionError`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:116

#### Parameters

##### rpcError

[`JsonRpcError`](../interfaces/JsonRpcError.md)

#### Returns

`ContractExecutionError`

#### Overrides

[`Web3ContractError`](Web3ContractError.md).[`constructor`](Web3ContractError.md#constructor)

## Properties

### cause

> **cause**: [`Eip838ExecutionError`](Eip838ExecutionError.md)

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:115

#### Overrides

[`Web3ContractError`](Web3ContractError.md).[`cause`](Web3ContractError.md#cause)

***

### code

> **code**: `number`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/contract\_errors.d.ts:4

#### Inherited from

[`Web3ContractError`](Web3ContractError.md).[`code`](Web3ContractError.md#code)

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`Web3ContractError`](Web3ContractError.md).[`message`](Web3ContractError.md#message)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:6

#### Inherited from

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

### toJSON()

> **toJSON**(): `object`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:20

#### Returns

`object`

##### cause

> **cause**: `Error` \| `undefined`

##### code

> **code**: `number`

##### innerError

> **innerError**: `Error` \| `undefined`

##### message

> **message**: `string`

##### name

> **name**: `string`

#### Inherited from

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
