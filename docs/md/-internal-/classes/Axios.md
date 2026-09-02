[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Axios

# Class: Axios

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:646

## Extended by

- [`AxiosInstance`](../interfaces/AxiosInstance.md)

## Constructors

### Constructor

> **new Axios**(`config?`): `Axios`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:647

#### Parameters

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`any`, `any`\>

#### Returns

`Axios`

## Properties

### defaults

> **defaults**: [`AxiosDefaults`](../interfaces/AxiosDefaults.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:648

***

### interceptors

> **interceptors**: `object`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:649

#### request

> **request**: [`AxiosInterceptorManager`](../interfaces/AxiosInterceptorManager.md)\<[`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`any`, `any`\>\>

#### response

> **response**: [`AxiosInterceptorManager`](../interfaces/AxiosInterceptorManager.md)\<[`AxiosResponse`](../interfaces/AxiosResponse.md)\<`any`, `any`, \{ \}, `any`\>\>

## Methods

### delete()

> **delete**\<`T`, `R`, `D`, `P`\>(`url`, `config?`): `Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:661

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = *typeof* [`axiosResponseDefault`](../variables/axiosResponseDefault.md)

##### D

`D` = `any`

##### P

`P` = `any`

#### Parameters

##### url

`string`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

***

### get()

> **get**\<`T`, `R`, `D`, `P`\>(`url`, `config?`): `Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:657

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = *typeof* [`axiosResponseDefault`](../variables/axiosResponseDefault.md)

##### D

`D` = `any`

##### P

`P` = `any`

#### Parameters

##### url

`string`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

***

### getUri()

> **getUri**(`config?`): `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:653

#### Parameters

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`any`, `any`\>

#### Returns

`string`

***

### head()

> **head**\<`T`, `R`, `D`, `P`\>(`url`, `config?`): `Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:665

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = *typeof* [`axiosResponseDefault`](../variables/axiosResponseDefault.md)

##### D

`D` = `any`

##### P

`P` = `any`

#### Parameters

##### url

`string`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

***

### options()

> **options**\<`T`, `R`, `D`, `P`\>(`url`, `config?`): `Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:669

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = *typeof* [`axiosResponseDefault`](../variables/axiosResponseDefault.md)

##### D

`D` = `any`

##### P

`P` = `any`

#### Parameters

##### url

`string`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

***

### patch()

> **patch**\<`T`, `R`, `D`, `P`\>(`url`, `data?`, `config?`): `Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:683

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = *typeof* [`axiosResponseDefault`](../variables/axiosResponseDefault.md)

##### D

`D` = `any`

##### P

`P` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

***

### patchForm()

> **patchForm**\<`T`, `R`, `D`, `P`\>(`url`, `data?`, `config?`): `Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:698

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = *typeof* [`axiosResponseDefault`](../variables/axiosResponseDefault.md)

##### D

`D` = `any`

##### P

`P` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

***

### post()

> **post**\<`T`, `R`, `D`, `P`\>(`url`, `data?`, `config?`): `Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:673

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = *typeof* [`axiosResponseDefault`](../variables/axiosResponseDefault.md)

##### D

`D` = `any`

##### P

`P` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

***

### postForm()

> **postForm**\<`T`, `R`, `D`, `P`\>(`url`, `data?`, `config?`): `Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:688

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = *typeof* [`axiosResponseDefault`](../variables/axiosResponseDefault.md)

##### D

`D` = `any`

##### P

`P` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

***

### put()

> **put**\<`T`, `R`, `D`, `P`\>(`url`, `data?`, `config?`): `Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:678

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = *typeof* [`axiosResponseDefault`](../variables/axiosResponseDefault.md)

##### D

`D` = `any`

##### P

`P` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

***

### putForm()

> **putForm**\<`T`, `R`, `D`, `P`\>(`url`, `data?`, `config?`): `Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:693

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = *typeof* [`axiosResponseDefault`](../variables/axiosResponseDefault.md)

##### D

`D` = `any`

##### P

`P` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

***

### query()

> **query**\<`T`, `R`, `D`, `P`\>(`url`, `data?`, `config?`): `Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:703

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = *typeof* [`axiosResponseDefault`](../variables/axiosResponseDefault.md)

##### D

`D` = `any`

##### P

`P` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

***

### request()

> **request**\<`T`, `R`, `D`, `P`\>(`config`): `Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:654

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = *typeof* [`axiosResponseDefault`](../variables/axiosResponseDefault.md)

##### D

`D` = `any`

##### P

`P` = `any`

#### Parameters

##### config

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>
