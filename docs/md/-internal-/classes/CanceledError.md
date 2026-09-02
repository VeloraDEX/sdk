[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CanceledError

# Class: CanceledError\<T, D, P\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:566

## Extends

- [`AxiosError`](AxiosError.md)\<`T`, `D`, `P`\>

## Type Parameters

### T

`T`

### D

`D` = `any`

### P

`P` = `any`

## Constructors

### Constructor

> **new CanceledError**\<`T`, `D`, `P`\>(`message?`, `config?`, `request?`): `CanceledError`\<`T`, `D`, `P`\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:567

#### Parameters

##### message?

`string`

##### config?

[`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`D`, `P`\>

##### request?

`any`

#### Returns

`CanceledError`\<`T`, `D`, `P`\>

#### Overrides

[`AxiosError`](AxiosError.md).[`constructor`](AxiosError.md#constructor)

## Properties

### \_\_CANCEL\_\_?

> `optional` **\_\_CANCEL\_\_?**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:569

***

### cause?

> `optional` **cause?**: `Error`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:540

#### Inherited from

[`AxiosError`](AxiosError.md).[`cause`](AxiosError.md#cause)

***

### code?

> `optional` **code?**: `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:534

#### Inherited from

[`AxiosError`](AxiosError.md).[`code`](AxiosError.md#code)

***

### config?

> `optional` **config?**: [`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`D`, `P`\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:533

#### Inherited from

[`AxiosError`](AxiosError.md).[`config`](AxiosError.md#config)

***

### event?

> `optional` **event?**: `any`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:541

#### Inherited from

[`AxiosError`](AxiosError.md).[`event`](AxiosError.md#event)

***

### isAxiosError

> **isAxiosError**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:537

#### Inherited from

[`AxiosError`](AxiosError.md).[`isAxiosError`](AxiosError.md#isaxioserror)

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`AxiosError`](AxiosError.md).[`message`](AxiosError.md#message)

***

### name

> `readonly` **name**: `"CanceledError"`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:568

#### Overrides

[`AxiosError`](AxiosError.md).[`name`](AxiosError.md#name)

***

### request?

> `optional` **request?**: `any`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:535

#### Inherited from

[`AxiosError`](AxiosError.md).[`request`](AxiosError.md#request)

***

### response?

> `optional` **response?**: [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `D`, \{ \}, `P`\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:536

#### Inherited from

[`AxiosError`](AxiosError.md).[`response`](AxiosError.md#response)

***

### stack?

> `optional` **stack?**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

[`AxiosError`](AxiosError.md).[`stack`](AxiosError.md#stack)

***

### status?

> `optional` **status?**: `number`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:538

#### Inherited from

[`AxiosError`](AxiosError.md).[`status`](AxiosError.md#status)

***

### toJSON

> **toJSON**: () => `object`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:539

#### Returns

`object`

#### Inherited from

[`AxiosError`](AxiosError.md).[`toJSON`](AxiosError.md#tojson)

***

### ECONNABORTED

> `readonly` `static` **ECONNABORTED**: `"ECONNABORTED"` = `'ECONNABORTED'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:561

#### Inherited from

[`AxiosError`](AxiosError.md).[`ECONNABORTED`](AxiosError.md#econnaborted)

***

### ECONNREFUSED

> `readonly` `static` **ECONNREFUSED**: `"ECONNREFUSED"` = `'ECONNREFUSED'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:562

#### Inherited from

[`AxiosError`](AxiosError.md).[`ECONNREFUSED`](AxiosError.md#econnrefused)

***

### ERR\_BAD\_OPTION

> `readonly` `static` **ERR\_BAD\_OPTION**: `"ERR_BAD_OPTION"` = `'ERR_BAD_OPTION'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:552

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_BAD_OPTION`](AxiosError.md#err_bad_option)

***

### ERR\_BAD\_OPTION\_VALUE

> `readonly` `static` **ERR\_BAD\_OPTION\_VALUE**: `"ERR_BAD_OPTION_VALUE"` = `'ERR_BAD_OPTION_VALUE'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:551

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_BAD_OPTION_VALUE`](AxiosError.md#err_bad_option_value)

***

### ERR\_BAD\_REQUEST

> `readonly` `static` **ERR\_BAD\_REQUEST**: `"ERR_BAD_REQUEST"` = `'ERR_BAD_REQUEST'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:556

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_BAD_REQUEST`](AxiosError.md#err_bad_request)

***

### ERR\_BAD\_RESPONSE

> `readonly` `static` **ERR\_BAD\_RESPONSE**: `"ERR_BAD_RESPONSE"` = `'ERR_BAD_RESPONSE'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:555

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_BAD_RESPONSE`](AxiosError.md#err_bad_response)

***

### ERR\_CANCELED

> `readonly` `static` **ERR\_CANCELED**: `"ERR_CANCELED"` = `'ERR_CANCELED'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:559

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_CANCELED`](AxiosError.md#err_canceled)

***

### ERR\_DEPRECATED

> `readonly` `static` **ERR\_DEPRECATED**: `"ERR_DEPRECATED"` = `'ERR_DEPRECATED'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:554

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_DEPRECATED`](AxiosError.md#err_deprecated)

***

### ERR\_FORM\_DATA\_DEPTH\_EXCEEDED

> `readonly` `static` **ERR\_FORM\_DATA\_DEPTH\_EXCEEDED**: `"ERR_FORM_DATA_DEPTH_EXCEEDED"` = `'ERR_FORM_DATA_DEPTH_EXCEEDED'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:560

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_FORM_DATA_DEPTH_EXCEEDED`](AxiosError.md#err_form_data_depth_exceeded)

***

### ERR\_FR\_TOO\_MANY\_REDIRECTS

> `readonly` `static` **ERR\_FR\_TOO\_MANY\_REDIRECTS**: `"ERR_FR_TOO_MANY_REDIRECTS"` = `'ERR_FR_TOO_MANY_REDIRECTS'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:550

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_FR_TOO_MANY_REDIRECTS`](AxiosError.md#err_fr_too_many_redirects)

***

### ERR\_INVALID\_URL

> `readonly` `static` **ERR\_INVALID\_URL**: `"ERR_INVALID_URL"` = `'ERR_INVALID_URL'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:558

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_INVALID_URL`](AxiosError.md#err_invalid_url)

***

### ERR\_NETWORK

> `readonly` `static` **ERR\_NETWORK**: `"ERR_NETWORK"` = `'ERR_NETWORK'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:553

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_NETWORK`](AxiosError.md#err_network)

***

### ERR\_NOT\_SUPPORT

> `readonly` `static` **ERR\_NOT\_SUPPORT**: `"ERR_NOT_SUPPORT"` = `'ERR_NOT_SUPPORT'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:557

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_NOT_SUPPORT`](AxiosError.md#err_not_support)

***

### ETIMEDOUT

> `readonly` `static` **ETIMEDOUT**: `"ETIMEDOUT"` = `'ETIMEDOUT'`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:563

#### Inherited from

[`AxiosError`](AxiosError.md).[`ETIMEDOUT`](AxiosError.md#etimedout)

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

[`AxiosError`](AxiosError.md).[`prepareStackTrace`](AxiosError.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:145

#### Inherited from

[`AxiosError`](AxiosError.md).[`stackTraceLimit`](AxiosError.md#stacktracelimit)

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

[`AxiosError`](AxiosError.md).[`captureStackTrace`](AxiosError.md#capturestacktrace)

***

### from()

> `static` **from**\<`T`, `D`, `P`\>(`error`, `code?`, `config?`, `request?`, `response?`, `customProps?`): [`AxiosError`](AxiosError.md)\<`T`, `D`, `P`\>

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

[`AxiosError`](AxiosError.md)\<`T`, `D`, `P`\>

#### Inherited from

[`AxiosError`](AxiosError.md).[`from`](AxiosError.md#from)
