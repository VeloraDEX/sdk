[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BaseWeb3Error

# Abstract Class: BaseWeb3Error

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:5

Base class for Web3 errors.

## Extends

- `Error`

## Extended by

- [`RevertInstructionError`](RevertInstructionError.md)
- [`TransactionRevertInstructionError`](TransactionRevertInstructionError.md)
- [`TransactionPollingTimeoutError`](TransactionPollingTimeoutError.md)
- [`TransactionError`](TransactionError.md)
- [`ResponseError`](ResponseError.md)
- [`Web3ContractError`](Web3ContractError.md)

## Implements

- [`Web3Error`](../interfaces/Web3Error.md)

## Constructors

### Constructor

> **new BaseWeb3Error**(`msg?`, `cause?`): `BaseWeb3Error`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:18

#### Parameters

##### msg?

`string`

##### cause?

`Error` \| `Error`[]

#### Returns

`BaseWeb3Error`

#### Overrides

`Error.constructor`

## Properties

### cause

> **cause**: `Error` \| `undefined`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:9

#### Implementation of

[`Web3Error`](../interfaces/Web3Error.md).[`cause`](../interfaces/Web3Error.md#cause)

#### Overrides

`Error.cause`

***

### code

> `abstract` `readonly` **code**: `number`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:7

#### Implementation of

[`Web3Error`](../interfaces/Web3Error.md).[`code`](../interfaces/Web3Error.md#code)

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Implementation of

[`Web3Error`](../interfaces/Web3Error.md).[`message`](../interfaces/Web3Error.md#message)

#### Inherited from

`Error.message`

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:6

#### Implementation of

[`Web3Error`](../interfaces/Web3Error.md).[`name`](../interfaces/Web3Error.md#name)

#### Overrides

`Error.name`

***

### stack

> **stack**: `string` \| `undefined`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:8

#### Implementation of

[`Web3Error`](../interfaces/Web3Error.md).[`stack`](../interfaces/Web3Error.md#stack)

#### Overrides

`Error.stack`

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

`Error.prepareStackTrace`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:145

#### Inherited from

`Error.stackTraceLimit`

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

`Error.captureStackTrace`

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
