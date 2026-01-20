[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AxiosInstance

# Interface: AxiosInstance()

## Extends

- [`Axios`](../classes/Axios.md)

## Extended by

- [`AxiosStatic`](AxiosStatic.md)

> **AxiosInstance**\<`T`, `R`, `D`\>(`config`): `Promise`\<`R`\>

## Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

## Parameters

• **config**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

## Returns

`Promise`\<`R`\>

## Defined in

node\_modules/axios/index.d.ts:527

> **AxiosInstance**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

## Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

## Parameters

• **url**: `string`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

## Returns

`Promise`\<`R`\>

## Defined in

node\_modules/axios/index.d.ts:528

## Properties

### defaults

> **defaults**: [`Omit`](../type-aliases/Omit.md)\<[`AxiosDefaults`](AxiosDefaults.md)\<`any`\>, `"headers"`\> & `object`

#### Type declaration

##### headers

> **headers**: [`HeadersDefaults`](HeadersDefaults.md) & `object`

#### Overrides

[`Axios`](../classes/Axios.md).[`defaults`](../classes/Axios.md#defaults)

#### Defined in

node\_modules/axios/index.d.ts:531

***

### interceptors

> **interceptors**: `object`

#### request

> **request**: [`AxiosInterceptorManager`](AxiosInterceptorManager.md)\<[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md)\<`any`\>\>

#### response

> **response**: [`AxiosInterceptorManager`](AxiosInterceptorManager.md)\<[`AxiosResponse`](AxiosResponse.md)\<`any`, `any`, `object`\>\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`interceptors`](../classes/Axios.md#interceptors)

#### Defined in

node\_modules/axios/index.d.ts:508

## Methods

### create()

> **create**(`config`?): [`AxiosInstance`](AxiosInstance.md)

#### Parameters

• **config?**: [`CreateAxiosDefaults`](CreateAxiosDefaults.md)\<`any`\>

#### Returns

[`AxiosInstance`](AxiosInstance.md)

#### Defined in

node\_modules/axios/index.d.ts:530

***

### delete()

> **delete**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`delete`](../classes/Axios.md#delete)

#### Defined in

node\_modules/axios/index.d.ts:515

***

### get()

> **get**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`get`](../classes/Axios.md#get)

#### Defined in

node\_modules/axios/index.d.ts:514

***

### getUri()

> **getUri**(`config`?): `string`

#### Parameters

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`any`\>

#### Returns

`string`

#### Inherited from

[`Axios`](../classes/Axios.md).[`getUri`](../classes/Axios.md#geturi)

#### Defined in

node\_modules/axios/index.d.ts:512

***

### head()

> **head**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`head`](../classes/Axios.md#head)

#### Defined in

node\_modules/axios/index.d.ts:516

***

### options()

> **options**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`options`](../classes/Axios.md#options)

#### Defined in

node\_modules/axios/index.d.ts:517

***

### patch()

> **patch**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`patch`](../classes/Axios.md#patch)

#### Defined in

node\_modules/axios/index.d.ts:520

***

### patchForm()

> **patchForm**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`patchForm`](../classes/Axios.md#patchform)

#### Defined in

node\_modules/axios/index.d.ts:523

***

### post()

> **post**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`post`](../classes/Axios.md#post)

#### Defined in

node\_modules/axios/index.d.ts:518

***

### postForm()

> **postForm**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`postForm`](../classes/Axios.md#postform)

#### Defined in

node\_modules/axios/index.d.ts:521

***

### put()

> **put**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`put`](../classes/Axios.md#put)

#### Defined in

node\_modules/axios/index.d.ts:519

***

### putForm()

> **putForm**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`putForm`](../classes/Axios.md#putform)

#### Defined in

node\_modules/axios/index.d.ts:522

***

### request()

> **request**\<`T`, `R`, `D`\>(`config`): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **config**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`request`](../classes/Axios.md#request-1)

#### Defined in

node\_modules/axios/index.d.ts:513
