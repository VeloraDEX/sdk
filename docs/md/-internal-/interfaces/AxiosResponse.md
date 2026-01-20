[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AxiosResponse

# Interface: AxiosResponse\<T, D, H\>

## Type Parameters

• **T** = `any`

• **D** = `any`

• **H** = `object`

## Properties

### config

> **config**: [`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md)\<`D`\>

#### Defined in

node\_modules/axios/index.d.ts:412

***

### data

> **data**: `T`

#### Defined in

node\_modules/axios/index.d.ts:408

***

### headers

> **headers**: [`AxiosResponseHeaders`](../type-aliases/AxiosResponseHeaders.md) \| `H` & [`Partial`](../type-aliases/Partial.md)\<[`RawAxiosHeaders`](RawAxiosHeaders.md) & `object` & `object`\>

#### Defined in

node\_modules/axios/index.d.ts:411

***

### request?

> `optional` **request**: `any`

#### Defined in

node\_modules/axios/index.d.ts:413

***

### status

> **status**: `number`

#### Defined in

node\_modules/axios/index.d.ts:409

***

### statusText

> **statusText**: `string`

#### Defined in

node\_modules/axios/index.d.ts:410
