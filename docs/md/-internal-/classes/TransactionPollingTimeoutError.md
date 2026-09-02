[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionPollingTimeoutError

# Class: TransactionPollingTimeoutError

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:246

Base class for Web3 errors.

## Extends

- [`BaseWeb3Error`](BaseWeb3Error.md)

## Constructors

### Constructor

> **new TransactionPollingTimeoutError**(`value`): `TransactionPollingTimeoutError`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:248

#### Parameters

##### value

###### numberOfSeconds

`number`

###### transactionHash

[`Bytes`](../type-aliases/Bytes-1.md)

#### Returns

`TransactionPollingTimeoutError`

#### Overrides

[`BaseWeb3Error`](BaseWeb3Error.md).[`constructor`](BaseWeb3Error.md#constructor)

## Properties

### cause

> **cause**: `Error` \| `undefined`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:9

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`cause`](BaseWeb3Error.md#cause)

***

### code

> **code**: `number`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:247

#### Overrides

[`BaseWeb3Error`](BaseWeb3Error.md).[`code`](BaseWeb3Error.md#code)

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`message`](BaseWeb3Error.md#message)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:6

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`name`](BaseWeb3Error.md#name)

***

### stack

> **stack**: `string` \| `undefined`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:8

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`stack`](BaseWeb3Error.md#stack)

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

[`BaseWeb3Error`](BaseWeb3Error.md).[`prepareStackTrace`](BaseWeb3Error.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:145

#### Inherited from

[`BaseWeb3Error`](BaseWeb3Error.md).[`stackTraceLimit`](BaseWeb3Error.md#stacktracelimit)

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

`BaseWeb3Error.innerError`

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

[`BaseWeb3Error`](BaseWeb3Error.md).[`toJSON`](BaseWeb3Error.md#tojson)

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

[`BaseWeb3Error`](BaseWeb3Error.md).[`captureStackTrace`](BaseWeb3Error.md#capturestacktrace)

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

[`BaseWeb3Error`](BaseWeb3Error.md).[`convertToString`](BaseWeb3Error.md#converttostring)
