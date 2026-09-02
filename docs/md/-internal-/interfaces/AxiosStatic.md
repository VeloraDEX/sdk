[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AxiosStatic

# Interface: AxiosStatic()

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:766

## Extends

- [`AxiosInstance`](AxiosInstance.md)

## Call Signature

> **AxiosStatic**\<`T`, `R`, `D`, `P`\>(`config`): `Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:766

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

> **AxiosStatic**\<`T`, `R`, `D`, `P`\>(`url`, `config?`): `Promise`\<[`AxiosResponseResult`](../type-aliases/AxiosResponseResult.md)\<`T`, `R`, `D`, `P`\>\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:766

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

### all

> **all**: \<`T`\>(`values`) => `Promise`\<`T`[]\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:774

#### Type Parameters

##### T

`T`

#### Parameters

##### values

(`T` \| `Promise`\<`T`\>)[]

#### Returns

`Promise`\<`T`[]\>

***

### Axios

> **Axios**: *typeof* [`Axios`](../classes/Axios.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:769

***

### AxiosError

> **AxiosError**: *typeof* [`AxiosError`](../classes/AxiosError.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:770

***

### AxiosHeaders

> **AxiosHeaders**: *typeof* [`AxiosHeaders`](../classes/AxiosHeaders.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:781

***

### Cancel

> **Cancel**: *typeof* [`CanceledError`](../classes/CanceledError.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:767

***

### CanceledError

> **CanceledError**: *typeof* [`CanceledError`](../classes/CanceledError.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:780

***

### CancelToken

> **CancelToken**: [`CancelTokenStatic`](CancelTokenStatic.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:768

***

### defaults

> **defaults**: [`Omit`](../type-aliases/Omit.md)\<[`AxiosDefaults`](AxiosDefaults.md)\<`any`, `any`\>, `"headers"`\> & `object`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:720

#### Type Declaration

##### headers

> **headers**: [`HeadersDefaults`](HeadersDefaults.md) & `object`

#### Inherited from

[`AxiosInstance`](AxiosInstance.md).[`defaults`](AxiosInstance.md#defaults)

***

### formToJSON

> **formToJSON**: (`form`) => `object`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:778

#### Parameters

##### form

[`GenericFormData`](GenericFormData.md) \| [`GenericHTMLFormElement`](GenericHTMLFormElement.md)

#### Returns

`object`

***

### getAdapter

> **getAdapter**: (`adapters`) => [`AxiosAdapter`](AxiosAdapter.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:779

#### Parameters

##### adapters

[`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md) \| [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md)[] \| `undefined`

#### Returns

[`AxiosAdapter`](AxiosAdapter.md)

***

### HttpStatusCode

> **HttpStatusCode**: *typeof* [`HttpStatusCode`](../enumerations/HttpStatusCode.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:771

***

### interceptors

> **interceptors**: `object`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:649

#### request

> **request**: [`AxiosInterceptorManager`](AxiosInterceptorManager.md)\<[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md)\<`any`, `any`\>\>

#### response

> **response**: [`AxiosInterceptorManager`](AxiosInterceptorManager.md)\<[`AxiosResponse`](AxiosResponse.md)\<`any`, `any`, \{ \}, `any`\>\>

#### Inherited from

[`AxiosInstance`](AxiosInstance.md).[`interceptors`](AxiosInstance.md#interceptors)

***

### isAxiosError

> **isAxiosError**: \<`T`, `D`, `P`\>(`payload`) => `payload is AxiosError<T, D, P>`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:776

#### Type Parameters

##### T

`T` = `any`

##### D

`D` = `any`

##### P

`P` = `any`

#### Parameters

##### payload

`any`

#### Returns

`payload is AxiosError<T, D, P>`

***

### isCancel

> **isCancel**: \<`T`, `D`, `P`\>(`value`) => `value is CanceledError<T, D, P>`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:773

#### Type Parameters

##### T

`T` = `any`

##### D

`D` = `any`

##### P

`P` = `any`

#### Parameters

##### value

`any`

#### Returns

`value is CanceledError<T, D, P>`

***

### mergeConfig

> **mergeConfig**: \<`D`, `P`\>(`config1`, `config2`) => [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:782

#### Type Parameters

##### D

`D` = `any`

##### P

`P` = `any`

#### Parameters

##### config1

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

##### config2

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

#### Returns

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

***

### spread

> **spread**: \<`T`, `R`\>(`callback`) => (`array`) => `R`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:775

#### Type Parameters

##### T

`T`

##### R

`R`

#### Parameters

##### callback

(...`args`) => `R`

#### Returns

(`array`) => `R`

***

### toFormData

> **toFormData**: (`sourceObj`, `targetFormData?`, `options?`) => [`GenericFormData`](GenericFormData.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:777

#### Parameters

##### sourceObj

`object`

##### targetFormData?

[`GenericFormData`](GenericFormData.md)

##### options?

[`FormSerializerOptions`](FormSerializerOptions.md)

#### Returns

[`GenericFormData`](GenericFormData.md)

***

### VERSION

> `readonly` **VERSION**: `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:772

## Methods

### create()

> **create**(`config?`): [`AxiosInstance`](AxiosInstance.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:719

#### Parameters

##### config?

[`CreateAxiosDefaults`](CreateAxiosDefaults.md)\<`any`, `any`\>

#### Returns

[`AxiosInstance`](AxiosInstance.md)

#### Inherited from

[`AxiosInstance`](AxiosInstance.md).[`create`](AxiosInstance.md#create)

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

[`AxiosInstance`](AxiosInstance.md).[`delete`](AxiosInstance.md#delete)

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

[`AxiosInstance`](AxiosInstance.md).[`get`](AxiosInstance.md#get)

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

[`AxiosInstance`](AxiosInstance.md).[`getUri`](AxiosInstance.md#geturi)

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

[`AxiosInstance`](AxiosInstance.md).[`head`](AxiosInstance.md#head)

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

[`AxiosInstance`](AxiosInstance.md).[`options`](AxiosInstance.md#options)

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

[`AxiosInstance`](AxiosInstance.md).[`patch`](AxiosInstance.md#patch)

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

[`AxiosInstance`](AxiosInstance.md).[`patchForm`](AxiosInstance.md#patchform)

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

[`AxiosInstance`](AxiosInstance.md).[`post`](AxiosInstance.md#post)

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

[`AxiosInstance`](AxiosInstance.md).[`postForm`](AxiosInstance.md#postform)

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

[`AxiosInstance`](AxiosInstance.md).[`put`](AxiosInstance.md#put)

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

[`AxiosInstance`](AxiosInstance.md).[`putForm`](AxiosInstance.md#putform)

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

[`AxiosInstance`](AxiosInstance.md).[`query`](AxiosInstance.md#query)

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

[`AxiosInstance`](AxiosInstance.md).[`request`](AxiosInstance.md#request)
