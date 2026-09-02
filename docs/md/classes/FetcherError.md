[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / FetcherError

# Class: FetcherError

Defined in: [src/helpers/misc.ts:56](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/misc.ts#L56)

## Extends

- `Error`

## Implements

- [`FetcherErrorInterface`](../interfaces/FetcherErrorInterface.md)

## Constructors

### Constructor

> **new FetcherError**(`__namedParameters`): `FetcherError`

Defined in: [src/helpers/misc.ts:63](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/misc.ts#L63)

#### Parameters

##### \_\_namedParameters

[`FetcherErrorConstructorInput`](../-internal-/type-aliases/FetcherErrorConstructorInput.md)

#### Returns

`FetcherError`

#### Overrides

`Error.constructor`

## Properties

### cause?

> `optional` **cause?**: `unknown`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`Error.cause`

***

### code

> **code**: `string` \| `undefined`

Defined in: [src/helpers/misc.ts:57](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/misc.ts#L57)

#### Implementation of

[`FetcherErrorInterface`](../interfaces/FetcherErrorInterface.md).[`code`](../interfaces/FetcherErrorInterface.md#code)

***

### isAxiosError

> **isAxiosError**: `boolean` = `false`

Defined in: [src/helpers/misc.ts:61](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/misc.ts#L61)

#### Implementation of

[`FetcherErrorInterface`](../interfaces/FetcherErrorInterface.md).[`isAxiosError`](../interfaces/FetcherErrorInterface.md#isaxioserror)

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Implementation of

[`FetcherErrorInterface`](../interfaces/FetcherErrorInterface.md).[`message`](../interfaces/FetcherErrorInterface.md#message)

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### request

> **request**: `any`

Defined in: [src/helpers/misc.ts:59](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/misc.ts#L59)

#### Implementation of

[`FetcherErrorInterface`](../interfaces/FetcherErrorInterface.md).[`request`](../interfaces/FetcherErrorInterface.md#request)

***

### response

> **response**: [`MinAxiosResponse`](../-internal-/type-aliases/MinAxiosResponse.md) \| `undefined`

Defined in: [src/helpers/misc.ts:60](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/misc.ts#L60)

#### Implementation of

[`FetcherErrorInterface`](../interfaces/FetcherErrorInterface.md).[`response`](../interfaces/FetcherErrorInterface.md#response)

***

### stack?

> `optional` **stack?**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

***

### status

> **status**: `number` \| `undefined`

Defined in: [src/helpers/misc.ts:58](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/misc.ts#L58)

#### Implementation of

[`FetcherErrorInterface`](../interfaces/FetcherErrorInterface.md).[`status`](../interfaces/FetcherErrorInterface.md#status)

***

### prepareStackTrace?

> `static` `optional` **prepareStackTrace?**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:143

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

[`CallSite`](../-internal-/interfaces/CallSite.md)[]

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

## Methods

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
