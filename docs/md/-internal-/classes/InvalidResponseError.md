[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / InvalidResponseError

# Class: InvalidResponseError\<ErrorType, RequestType\>

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/response\_errors.d.ts:20

Base class for Web3 errors.

## Extends

- [`ResponseError`](ResponseError.md)\<`ErrorType`, `RequestType`\>

## Type Parameters

### ErrorType

`ErrorType` = `unknown`

### RequestType

`RequestType` = `unknown`

## Constructors

### Constructor

> **new InvalidResponseError**\<`ErrorType`, `RequestType`\>(`result`, `request?`): `InvalidResponseError`\<`ErrorType`, `RequestType`\>

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/response\_errors.d.ts:21

#### Parameters

##### result

[`JsonRpcResponse`](../type-aliases/JsonRpcResponse.md)\<`unknown`, `ErrorType`\>

##### request?

[`JsonRpcPayload`](../type-aliases/JsonRpcPayload.md)\<`RequestType`\>

#### Returns

`InvalidResponseError`\<`ErrorType`, `RequestType`\>

#### Overrides

[`ResponseError`](ResponseError.md).[`constructor`](ResponseError.md#constructor)

## Properties

### cause

> **cause**: `Error` \| `undefined`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:9

#### Inherited from

[`ResponseError`](ResponseError.md).[`cause`](ResponseError.md#cause)

***

### code

> **code**: `number`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/response\_errors.d.ts:4

#### Inherited from

[`ResponseError`](ResponseError.md).[`code`](ResponseError.md#code)

***

### data?

> `optional` **data?**: `ErrorType` \| `ErrorType`[]

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/response\_errors.d.ts:5

#### Inherited from

[`ResponseError`](ResponseError.md).[`data`](ResponseError.md#data)

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`ResponseError`](ResponseError.md).[`message`](ResponseError.md#message)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:6

#### Inherited from

[`ResponseError`](ResponseError.md).[`name`](ResponseError.md#name)

***

### request?

> `optional` **request?**: [`JsonRpcPayload`](../type-aliases/JsonRpcPayload.md)\<`RequestType`\>

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/response\_errors.d.ts:6

#### Inherited from

[`ResponseError`](ResponseError.md).[`request`](ResponseError.md#request)

***

### stack

> **stack**: `string` \| `undefined`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:8

#### Inherited from

[`ResponseError`](ResponseError.md).[`stack`](ResponseError.md#stack)

***

### statusCode?

> `optional` **statusCode?**: `number`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/response\_errors.d.ts:7

#### Inherited from

[`ResponseError`](ResponseError.md).[`statusCode`](ResponseError.md#statuscode)

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

[`ResponseError`](ResponseError.md).[`prepareStackTrace`](ResponseError.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:145

#### Inherited from

[`ResponseError`](ResponseError.md).[`stackTraceLimit`](ResponseError.md#stacktracelimit)

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

`ResponseError.innerError`

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/response\_errors.d.ts:9

#### Returns

`object`

##### cause

> **cause**: `Error` \| `undefined`

##### code

> **code**: `number`

##### data

> **data**: `ErrorType` \| `ErrorType`[] \| `undefined`

##### innerError

> **innerError**: `Error` \| `undefined`

##### message

> **message**: `string`

##### name

> **name**: `string`

##### request

> **request**: [`JsonRpcPayload`](../type-aliases/JsonRpcPayload.md)\<`RequestType`\> \| `undefined`

##### statusCode

> **statusCode**: `number` \| `undefined`

#### Inherited from

[`ResponseError`](ResponseError.md).[`toJSON`](ResponseError.md#tojson)

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

[`ResponseError`](ResponseError.md).[`captureStackTrace`](ResponseError.md#capturestacktrace)

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

[`ResponseError`](ResponseError.md).[`convertToString`](ResponseError.md#converttostring)
