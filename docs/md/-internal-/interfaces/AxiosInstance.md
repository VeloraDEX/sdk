[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AxiosInstance

# Interface: AxiosInstance()

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:710

## Extends

- [`Axios`](../classes/Axios.md)

## Extended by

- [`AxiosStatic`](AxiosStatic.md)

## Call Signature

> **AxiosInstance**\<`T`, `R`, `D`, `P`\>(`config`): `Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:711

### Type Parameters

#### T

`T` = `any`

#### R

`R` = *typeof* [`axiosResponseDefault`](../variables/axiosResponseDefault.md)

#### D

`D` = `any`

#### P

`P` = `any`

### Parameters

#### config

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

## Call Signature

> **AxiosInstance**\<`T`, `R`, `D`, `P`\>(`url`, `config?`): `Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:714

### Type Parameters

#### T

`T` = `any`

#### R

`R` = *typeof* [`axiosResponseDefault`](../variables/axiosResponseDefault.md)

#### D

`D` = `any`

#### P

`P` = `any`

### Parameters

#### url

`string`

#### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

## Properties

### defaults

> **defaults**: [`Omit`](../type-aliases/Omit.md)\<[`AxiosDefaults`](AxiosDefaults.md)\<`any`, `any`\>, `"headers"`\> & `object`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:720

#### Type Declaration

##### headers

> **headers**: [`HeadersDefaults`](HeadersDefaults.md) & `object`

#### Overrides

[`Axios`](../classes/Axios.md).[`defaults`](../classes/Axios.md#defaults)

***

### interceptors

> **interceptors**: `object`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:649

#### request

> **request**: [`AxiosInterceptorManager`](AxiosInterceptorManager.md)\<[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md)\<`any`, `any`\>\>

#### response

> **response**: [`AxiosInterceptorManager`](AxiosInterceptorManager.md)\<[`AxiosResponse`](AxiosResponse.md)\<`any`, `any`, \{ \}, `any`\>\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`interceptors`](../classes/Axios.md#interceptors)

## Methods

### create()

> **create**(`config?`): `AxiosInstance`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:719

#### Parameters

##### config?

[`CreateAxiosDefaults`](CreateAxiosDefaults.md)\<`any`, `any`\>

#### Returns

`AxiosInstance`

***

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

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`delete`](../classes/Axios.md#delete)

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

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`get`](../classes/Axios.md#get)

***

### getUri()

> **getUri**(`config?`): `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:653

#### Parameters

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`any`, `any`\>

#### Returns

`string`

#### Inherited from

[`Axios`](../classes/Axios.md).[`getUri`](../classes/Axios.md#geturi)

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

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`head`](../classes/Axios.md#head)

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

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`options`](../classes/Axios.md#options)

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

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`patch`](../classes/Axios.md#patch)

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

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`patchForm`](../classes/Axios.md#patchform)

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

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`post`](../classes/Axios.md#post)

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

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`postForm`](../classes/Axios.md#postform)

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

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`put`](../classes/Axios.md#put)

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

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`putForm`](../classes/Axios.md#putform)

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

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`query`](../classes/Axios.md#query)

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

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

`Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`request`](../classes/Axios.md#request)
