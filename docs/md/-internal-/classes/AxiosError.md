[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AxiosError

# Class: AxiosError\<T, D, P\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:524

## Extends

- `Error`

## Extended by

- [`CanceledError`](CanceledError.md)

## Type Parameters

### T

`T` = `unknown`

### D

`D` = `any`

### P

`P` = `any`

## Constructors

### Constructor

> **new AxiosError**\<`T`, `D`, `P`\>(`message?`, `code?`, `config?`, `request?`, `response?`): `AxiosError`\<`T`, `D`, `P`\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:525

#### Parameters

##### message?

`string`

##### code?

`string`

##### config?

[`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`D`, `P`\>

##### request?

`any`

##### response?

[`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `D`, \{ \}, `P`\>

#### Returns

`AxiosError`\<`T`, `D`, `P`\>

#### Overrides

`Error.constructor`

## Properties

### cause?

> `optional` **cause?**: `Error`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:540

#### Overrides

`Error.cause`

***

### code?

> `optional` **code?**: `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:534

***

### config?

> `optional` **config?**: [`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`D`, `P`\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:533

***

### event?

> `optional` **event?**: `any`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:541

***

### isAxiosError

> **isAxiosError**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:537

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### request?

> `optional` **request?**: `any`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:535

***

### response?

> `optional` **response?**: [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `D`, \{ \}, `P`\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:536

***

### stack?

> `optional` **stack?**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

***

### status?

> `optional` **status?**: `number`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:538

***

### toJSON

> **toJSON**: () => `object`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:539

#### Returns

`object`

***

### ECONNABORTED

> `readonly` `static` **ECONNABORTED**: `"ECONNABORTED"` = `'ECONNABORTED'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:561

***

### ECONNREFUSED

> `readonly` `static` **ECONNREFUSED**: `"ECONNREFUSED"` = `'ECONNREFUSED'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:562

***

### ERR\_BAD\_OPTION

> `readonly` `static` **ERR\_BAD\_OPTION**: `"ERR_BAD_OPTION"` = `'ERR_BAD_OPTION'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:552

***

### ERR\_BAD\_OPTION\_VALUE

> `readonly` `static` **ERR\_BAD\_OPTION\_VALUE**: `"ERR_BAD_OPTION_VALUE"` = `'ERR_BAD_OPTION_VALUE'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:551

***

### ERR\_BAD\_REQUEST

> `readonly` `static` **ERR\_BAD\_REQUEST**: `"ERR_BAD_REQUEST"` = `'ERR_BAD_REQUEST'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:556

***

### ERR\_BAD\_RESPONSE

> `readonly` `static` **ERR\_BAD\_RESPONSE**: `"ERR_BAD_RESPONSE"` = `'ERR_BAD_RESPONSE'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:555

***

### ERR\_CANCELED

> `readonly` `static` **ERR\_CANCELED**: `"ERR_CANCELED"` = `'ERR_CANCELED'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:559

***

### ERR\_DEPRECATED

> `readonly` `static` **ERR\_DEPRECATED**: `"ERR_DEPRECATED"` = `'ERR_DEPRECATED'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:554

***

### ERR\_FORM\_DATA\_DEPTH\_EXCEEDED

> `readonly` `static` **ERR\_FORM\_DATA\_DEPTH\_EXCEEDED**: `"ERR_FORM_DATA_DEPTH_EXCEEDED"` = `'ERR_FORM_DATA_DEPTH_EXCEEDED'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:560

***

### ERR\_FR\_TOO\_MANY\_REDIRECTS

> `readonly` `static` **ERR\_FR\_TOO\_MANY\_REDIRECTS**: `"ERR_FR_TOO_MANY_REDIRECTS"` = `'ERR_FR_TOO_MANY_REDIRECTS'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:550

***

### ERR\_INVALID\_URL

> `readonly` `static` **ERR\_INVALID\_URL**: `"ERR_INVALID_URL"` = `'ERR_INVALID_URL'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:558

***

### ERR\_NETWORK

> `readonly` `static` **ERR\_NETWORK**: `"ERR_NETWORK"` = `'ERR_NETWORK'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:553

***

### ERR\_NOT\_SUPPORT

> `readonly` `static` **ERR\_NOT\_SUPPORT**: `"ERR_NOT_SUPPORT"` = `'ERR_NOT_SUPPORT'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:557

***

### ETIMEDOUT

> `readonly` `static` **ETIMEDOUT**: `"ETIMEDOUT"` = `'ETIMEDOUT'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:563

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

***

### from()

> `static` **from**\<`T`, `D`, `P`\>(`error`, `code?`, `config?`, `request?`, `response?`, `customProps?`): `AxiosError`\<`T`, `D`, `P`\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:542

#### Type Parameters

##### T

`T` = `unknown`

##### D

`D` = `any`

##### P

`P` = `any`

#### Parameters

##### error

`unknown`

##### code?

`string`

##### config?

[`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`D`, `P`\>

##### request?

`any`

##### response?

[`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `D`, \{ \}, `P`\>

##### customProps?

`object`

#### Returns

`AxiosError`\<`T`, `D`, `P`\>
