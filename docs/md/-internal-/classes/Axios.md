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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:603

## Properties

### defaults

> **defaults**: [`AxiosDefaults`](../interfaces/AxiosDefaults.md)\<`any`\>

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:604

***

### interceptors

> **interceptors**: `object`

#### request

> **request**: [`AxiosInterceptorManager`](../interfaces/AxiosInterceptorManager.md)\<[`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`any`\>\>

#### response

> **response**: [`AxiosInterceptorManager`](../interfaces/AxiosInterceptorManager.md)\<[`AxiosResponse`](../interfaces/AxiosResponse.md)\<`any`, `any`, `object`\>\>

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:605

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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:615

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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:611

***

### getUri()

> **getUri**(`config`?): `string`

#### Parameters

• **config?**: [`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`any`\>

#### Returns

`string`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:609

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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:619

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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:623

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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:637

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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:652

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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:627

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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:642

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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:632

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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:647

***

### query()

> **query**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:657

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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:610
