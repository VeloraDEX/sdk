[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AxiosStatic

# Interface: AxiosStatic()

## Extends

- [`AxiosInstance`](AxiosInstance.md)

> **AxiosStatic**\<`T`, `R`, `D`\>(`config`): `Promise`\<`R`\>

## Type Parameters

• **T** = `any`

• **R** = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, `object`\>

• **D** = `any`

## Parameters

• **config**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

## Returns

`Promise`\<`R`\>

## Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:713

> **AxiosStatic**\<`T`, `R`, `D`\>(`url`, `config`?): `Promise`\<`R`\>

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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:713

## Properties

### all()

> **all**: \<`T`\>(`values`) => `Promise`\<`T`[]\>

#### Type Parameters

• **T**

#### Parameters

• **values**: (`T` \| `Promise`\<`T`\>)[]

#### Returns

`Promise`\<`T`[]\>

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:721

***

### Axios

> **Axios**: *typeof* [`Axios`](../classes/Axios.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:716

***

### AxiosError

> **AxiosError**: *typeof* [`AxiosError`](../classes/AxiosError.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:717

***

### AxiosHeaders

> **AxiosHeaders**: *typeof* [`AxiosHeaders`](../classes/AxiosHeaders.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:728

***

### Cancel

> **Cancel**: [`CancelStatic`](CancelStatic.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:714

***

### CanceledError

> **CanceledError**: *typeof* [`CanceledError`](../classes/CanceledError.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:727

***

### CancelToken

> **CancelToken**: [`CancelTokenStatic`](CancelTokenStatic.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:715

***

### defaults

> **defaults**: [`Omit`](../type-aliases/Omit.md)\<[`AxiosDefaults`](AxiosDefaults.md)\<`any`\>, `"headers"`\> & `object`

#### Type declaration

##### headers

> **headers**: [`HeadersDefaults`](HeadersDefaults.md) & `object`

#### Inherited from

[`AxiosInstance`](AxiosInstance.md).[`defaults`](AxiosInstance.md#defaults)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:669

***

### formToJSON()

> **formToJSON**: (`form`) => `object`

#### Parameters

• **form**: [`GenericFormData`](GenericFormData.md) \| [`GenericHTMLFormElement`](GenericHTMLFormElement.md)

#### Returns

`object`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:725

***

### getAdapter()

> **getAdapter**: (`adapters`) => [`AxiosAdapter`](AxiosAdapter.md)

#### Parameters

• **adapters**: `undefined` \| [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md) \| [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md)[]

#### Returns

[`AxiosAdapter`](AxiosAdapter.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:726

***

### HttpStatusCode

> **HttpStatusCode**: *typeof* [`HttpStatusCode`](../enumerations/HttpStatusCode.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:718

***

### interceptors

> **interceptors**: `object`

#### request

> **request**: [`AxiosInterceptorManager`](AxiosInterceptorManager.md)\<[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md)\<`any`\>\>

#### response

> **response**: [`AxiosInterceptorManager`](AxiosInterceptorManager.md)\<[`AxiosResponse`](AxiosResponse.md)\<`any`, `any`, `object`\>\>

#### Inherited from

[`AxiosInstance`](AxiosInstance.md).[`interceptors`](AxiosInstance.md#interceptors)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:605

***

### isAxiosError()

> **isAxiosError**: \<`T`, `D`\>(`payload`) => `payload is AxiosError<T, D>`

#### Type Parameters

• **T** = `any`

• **D** = `any`

#### Parameters

• **payload**: `any`

#### Returns

`payload is AxiosError<T, D>`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:723

***

### isCancel()

> **isCancel**: \<`T`\>(`value`) => `value is CanceledError<T>`

#### Type Parameters

• **T** = `any`

#### Parameters

• **value**: `any`

#### Returns

`value is CanceledError<T>`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:720

***

### mergeConfig()

> **mergeConfig**: \<`D`\>(`config1`, `config2`) => [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Type Parameters

• **D** = `any`

#### Parameters

• **config1**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

• **config2**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:729

***

### spread()

> **spread**: \<`T`, `R`\>(`callback`) => (`array`) => `R`

#### Type Parameters

• **T**

• **R**

#### Parameters

• **callback**

#### Returns

`Function`

##### Parameters

• **array**: `T`[]

##### Returns

`R`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:722

***

### toFormData()

> **toFormData**: (`sourceObj`, `targetFormData`?, `options`?) => [`GenericFormData`](GenericFormData.md)

#### Parameters

• **sourceObj**: `object`

• **targetFormData?**: [`GenericFormData`](GenericFormData.md)

• **options?**: [`FormSerializerOptions`](FormSerializerOptions.md)

#### Returns

[`GenericFormData`](GenericFormData.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:724

***

### VERSION

> `readonly` **VERSION**: `string`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:719

## Methods

### create()

> **create**(`config`?): [`AxiosInstance`](AxiosInstance.md)

#### Parameters

• **config?**: [`CreateAxiosDefaults`](CreateAxiosDefaults.md)\<`any`\>

#### Returns

[`AxiosInstance`](AxiosInstance.md)

#### Inherited from

[`AxiosInstance`](AxiosInstance.md).[`create`](AxiosInstance.md#create)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:668

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

[`AxiosInstance`](AxiosInstance.md).[`delete`](AxiosInstance.md#delete)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:615

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

[`AxiosInstance`](AxiosInstance.md).[`get`](AxiosInstance.md#get)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:611

***

### getUri()

> **getUri**(`config`?): `string`

#### Parameters

• **config?**: [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`any`\>

#### Returns

`string`

#### Inherited from

[`AxiosInstance`](AxiosInstance.md).[`getUri`](AxiosInstance.md#geturi)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:609

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

[`AxiosInstance`](AxiosInstance.md).[`head`](AxiosInstance.md#head)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:619

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

[`AxiosInstance`](AxiosInstance.md).[`options`](AxiosInstance.md#options)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:623

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

[`AxiosInstance`](AxiosInstance.md).[`patch`](AxiosInstance.md#patch)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:637

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

[`AxiosInstance`](AxiosInstance.md).[`patchForm`](AxiosInstance.md#patchform)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:652

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

[`AxiosInstance`](AxiosInstance.md).[`post`](AxiosInstance.md#post)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:627

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

[`AxiosInstance`](AxiosInstance.md).[`postForm`](AxiosInstance.md#postform)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:642

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

[`AxiosInstance`](AxiosInstance.md).[`put`](AxiosInstance.md#put)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:632

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

[`AxiosInstance`](AxiosInstance.md).[`putForm`](AxiosInstance.md#putform)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:647

***

### query()

> **query**\<`T`, `R`, `D`\>(`url`, `data`?, `config`?): `Promise`\<`R`\>

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

[`AxiosInstance`](AxiosInstance.md).[`query`](AxiosInstance.md#query)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:657

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

[`AxiosInstance`](AxiosInstance.md).[`request`](AxiosInstance.md#request-1)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:610
