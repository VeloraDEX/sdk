[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AxiosError

# Class: AxiosError\<T, D\>

## Extends

- [`Error`](../interfaces/Error.md)

## Extended by

- [`CanceledError`](CanceledError.md)

## Type Parameters

• **T** = `unknown`

• **D** = `any`

## Constructors

### new AxiosError()

> **new AxiosError**\<`T`, `D`\>(`message`?, `code`?, `config`?, `request`?, `response`?): [`AxiosError`](AxiosError.md)\<`T`, `D`\>

#### Parameters

• **message?**: `string`

• **code?**: `string`

• **config?**: [`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`D`\>

• **request?**: `any`

• **response?**: [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `D`, `object`\>

#### Returns

[`AxiosError`](AxiosError.md)\<`T`, `D`\>

#### Overrides

`Error.constructor`

#### Defined in

node\_modules/axios/index.d.ts:417

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Defined in

node\_modules/axios/index.d.ts:432

***

### code?

> `optional` **code**: `string`

#### Defined in

node\_modules/axios/index.d.ts:426

***

### config?

> `optional` **config**: [`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`D`\>

#### Defined in

node\_modules/axios/index.d.ts:425

***

### event?

> `optional` **event**: `any`

#### Defined in

node\_modules/axios/index.d.ts:433

***

### isAxiosError

> **isAxiosError**: `boolean`

#### Defined in

node\_modules/axios/index.d.ts:429

***

### message

> **message**: `string`

#### Inherited from

[`Error`](../interfaces/Error.md).[`message`](../interfaces/Error.md#message)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

[`Error`](../interfaces/Error.md).[`name`](../interfaces/Error.md#name)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### request?

> `optional` **request**: `any`

#### Defined in

node\_modules/axios/index.d.ts:427

***

### response?

> `optional` **response**: [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `D`, `object`\>

#### Defined in

node\_modules/axios/index.d.ts:428

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`Error`](../interfaces/Error.md).[`stack`](../interfaces/Error.md#stack)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### status?

> `optional` **status**: `number`

#### Defined in

node\_modules/axios/index.d.ts:430

***

### toJSON()

> **toJSON**: () => `object`

#### Returns

`object`

#### Defined in

node\_modules/axios/index.d.ts:431

***

### ECONNABORTED

> `readonly` `static` **ECONNABORTED**: `"ECONNABORTED"` = `"ECONNABORTED"`

#### Defined in

node\_modules/axios/index.d.ts:452

***

### ERR\_BAD\_OPTION

> `readonly` `static` **ERR\_BAD\_OPTION**: `"ERR_BAD_OPTION"` = `"ERR_BAD_OPTION"`

#### Defined in

node\_modules/axios/index.d.ts:444

***

### ERR\_BAD\_OPTION\_VALUE

> `readonly` `static` **ERR\_BAD\_OPTION\_VALUE**: `"ERR_BAD_OPTION_VALUE"` = `"ERR_BAD_OPTION_VALUE"`

#### Defined in

node\_modules/axios/index.d.ts:443

***

### ERR\_BAD\_REQUEST

> `readonly` `static` **ERR\_BAD\_REQUEST**: `"ERR_BAD_REQUEST"` = `"ERR_BAD_REQUEST"`

#### Defined in

node\_modules/axios/index.d.ts:448

***

### ERR\_BAD\_RESPONSE

> `readonly` `static` **ERR\_BAD\_RESPONSE**: `"ERR_BAD_RESPONSE"` = `"ERR_BAD_RESPONSE"`

#### Defined in

node\_modules/axios/index.d.ts:447

***

### ERR\_CANCELED

> `readonly` `static` **ERR\_CANCELED**: `"ERR_CANCELED"` = `"ERR_CANCELED"`

#### Defined in

node\_modules/axios/index.d.ts:451

***

### ERR\_DEPRECATED

> `readonly` `static` **ERR\_DEPRECATED**: `"ERR_DEPRECATED"` = `"ERR_DEPRECATED"`

#### Defined in

node\_modules/axios/index.d.ts:446

***

### ERR\_FR\_TOO\_MANY\_REDIRECTS

> `readonly` `static` **ERR\_FR\_TOO\_MANY\_REDIRECTS**: `"ERR_FR_TOO_MANY_REDIRECTS"` = `"ERR_FR_TOO_MANY_REDIRECTS"`

#### Defined in

node\_modules/axios/index.d.ts:442

***

### ERR\_INVALID\_URL

> `readonly` `static` **ERR\_INVALID\_URL**: `"ERR_INVALID_URL"` = `"ERR_INVALID_URL"`

#### Defined in

node\_modules/axios/index.d.ts:450

***

### ERR\_NETWORK

> `readonly` `static` **ERR\_NETWORK**: `"ERR_NETWORK"` = `"ERR_NETWORK"`

#### Defined in

node\_modules/axios/index.d.ts:445

***

### ERR\_NOT\_SUPPORT

> `readonly` `static` **ERR\_NOT\_SUPPORT**: `"ERR_NOT_SUPPORT"` = `"ERR_NOT_SUPPORT"`

#### Defined in

node\_modules/axios/index.d.ts:449

***

### ETIMEDOUT

> `readonly` `static` **ETIMEDOUT**: `"ETIMEDOUT"` = `"ETIMEDOUT"`

#### Defined in

node\_modules/axios/index.d.ts:453

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

`Error.prepareStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:143

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

node\_modules/@types/node/globals.d.ts:145

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:136

***

### from()

> `static` **from**\<`T`, `D`\>(`error`, `code`?, `config`?, `request`?, `response`?, `customProps`?): [`AxiosError`](AxiosError.md)\<`T`, `D`\>

#### Type Parameters

• **T** = `unknown`

• **D** = `any`

#### Parameters

• **error**: `unknown`

• **code?**: `string`

• **config?**: [`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`D`\>

• **request?**: `any`

• **response?**: [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `D`, `object`\>

• **customProps?**: `object`

#### Returns

[`AxiosError`](AxiosError.md)\<`T`, `D`\>

#### Defined in

node\_modules/axios/index.d.ts:434
