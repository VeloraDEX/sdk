[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Axios

# Class: Axios

## Extended by

- [`AxiosInstance`](../interfaces/AxiosInstance.md)

## Constructors

### new Axios()

> **new Axios**(`config`?): [`Axios`](Axios.md)

#### Parameters

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`any`\>

#### Returns

[`Axios`](Axios.md)

#### Defined in

node\_modules/axios/index.d.ts:506

## Properties

### defaults

> **defaults**: [`AxiosDefaults`](../interfaces/AxiosDefaults.md)\<`any`\>

#### Defined in

node\_modules/axios/index.d.ts:507

***

### interceptors

> **interceptors**: `object`

#### request

> **request**: [`AxiosInterceptorManager`](../interfaces/AxiosInterceptorManager.md)\<[`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`any`\>\>

#### response

> **response**: [`AxiosInterceptorManager`](../interfaces/AxiosInterceptorManager.md)\<[`AxiosResponse`](../interfaces/AxiosResponse.md)\<`any`, `any`, `object`\>\>

#### Defined in

node\_modules/axios/index.d.ts:508

## Methods

### delete()

> **delete**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:515

***

### get()

> **get**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:514

***

### getUri()

> **getUri**(`config`?): `string`

#### Parameters

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`any`\>

#### Returns

`string`

#### Defined in

node\_modules/axios/index.d.ts:512

***

### head()

> **head**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:516

***

### options()

> **options**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:517

***

### patch()

> **patch**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:520

***

### patchForm()

> **patchForm**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:523

***

### post()

> **post**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:518

***

### postForm()

> **postForm**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:521

***

### put()

> **put**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:519

***

### putForm()

> **putForm**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **url**: `string`

• **data?**: `D`

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:522

***

### request()

> **request**\<`T`, `R`, `D`\>(`config`): `Promise`\<`R`\>

#### Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

#### Parameters

• **config**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

node\_modules/axios/index.d.ts:513
