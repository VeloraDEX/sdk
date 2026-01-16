[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AxiosRequestConfig

# Interface: AxiosRequestConfig\<D\>

## Extended by

- [`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md)

## Type Parameters

• **D** = `any`

## Properties

### adapter?

> `optional` **adapter**: [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md) \| [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md)[]

#### Defined in

node\_modules/axios/index.d.ts:332

***

### allowAbsoluteUrls?

> `optional` **allowAbsoluteUrls**: `boolean`

#### Defined in

node\_modules/axios/index.d.ts:322

***

### auth?

> `optional` **auth**: [`AxiosBasicCredentials`](AxiosBasicCredentials.md)

#### Defined in

node\_modules/axios/index.d.ts:333

***

### baseURL?

> `optional` **baseURL**: `string`

#### Defined in

node\_modules/axios/index.d.ts:321

***

### beforeRedirect()?

> `optional` **beforeRedirect**: (`options`, `responseDetails`) => `void`

#### Parameters

• **options**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\>

• **responseDetails**

• **responseDetails.headers**: [`Record`](../type-aliases/Record.md)\<`string`, `string`\>

• **responseDetails.statusCode**: [`HttpStatusCode`](../enumerations/HttpStatusCode.md)

#### Returns

`void`

#### Defined in

node\_modules/axios/index.d.ts:345

***

### cancelToken?

> `optional` **cancelToken**: [`CancelToken`](CancelToken.md)

#### Defined in

node\_modules/axios/index.d.ts:351

***

### data?

> `optional` **data**: `D`

#### Defined in

node\_modules/axios/index.d.ts:328

***

### decompress?

> `optional` **decompress**: `boolean`

#### Defined in

node\_modules/axios/index.d.ts:352

***

### env?

> `optional` **env**: `object`

#### fetch()?

> `optional` **fetch**: (`input`, `init`?) => `Promise`\<`Response`\>

##### Parameters

• **input**: `string` \| `URL` \| `Request`

• **init?**: `RequestInit`

##### Returns

`Promise`\<`Response`\>

#### FormData()?

> `optional` **FormData**: (...`args`) => `object`

##### Parameters

• ...**args**: `any`[]

##### Returns

`object`

#### Request()?

> `optional` **Request**: (`input`, `init`?) => `Request`

##### Parameters

• **input**: `string` \| `URL` \| `Request`

• **init?**: `RequestInit`

##### Returns

`Request`

#### Response()?

> `optional` **Response**: (`body`?, `init`?) => `Response`

##### Parameters

• **body?**: `null` \| `string` \| `URLSearchParams` \| `Blob` \| [`ArrayBufferView`](ArrayBufferView.md) \| `ArrayBuffer` \| `FormData`

• **init?**: `ResponseInit`

##### Returns

`Response`

#### Defined in

node\_modules/axios/index.d.ts:356

***

### family?

> `optional` **family**: [`AddressFamily`](../type-aliases/AddressFamily.md)

#### Defined in

node\_modules/axios/index.d.ts:366

***

### fetchOptions?

> `optional` **fetchOptions**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\> \| [`Omit`](../type-aliases/Omit.md)\<`RequestInit`, `"signal"` \| `"method"` \| `"headers"` \| `"body"`\>

#### Defined in

node\_modules/axios/index.d.ts:371

***

### formSerializer?

> `optional` **formSerializer**: [`FormSerializerOptions`](FormSerializerOptions.md)

#### Defined in

node\_modules/axios/index.d.ts:365

***

### headers?

> `optional` **headers**: [`AxiosHeaders`](../classes/AxiosHeaders.md) \| [`Partial`](../type-aliases/Partial.md)\<[`RawAxiosHeaders`](RawAxiosHeaders.md) & `object` & `object`\> & [`Partial`](../type-aliases/Partial.md)\<`object` & `object`\>

#### Defined in

node\_modules/axios/index.d.ts:325

***

### http2Options?

> `optional` **http2Options**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\> & `object`

#### Type declaration

##### sessionTimeout?

> `optional` **sessionTimeout**: `number`

#### Defined in

node\_modules/axios/index.d.ts:373

***

### httpAgent?

> `optional` **httpAgent**: `any`

#### Defined in

node\_modules/axios/index.d.ts:348

***

### httpsAgent?

> `optional` **httpsAgent**: `any`

#### Defined in

node\_modules/axios/index.d.ts:349

***

### httpVersion?

> `optional` **httpVersion**: `1` \| `2`

#### Defined in

node\_modules/axios/index.d.ts:372

***

### insecureHTTPParser?

> `optional` **insecureHTTPParser**: `boolean`

#### Defined in

node\_modules/axios/index.d.ts:355

***

### lookup?

> `optional` **lookup**: (`hostname`, `options`, `cb`) => `void` \| (`hostname`, `options`) => `Promise`\<[`LookupAddress`](../type-aliases/LookupAddress.md) \| [[`LookupAddressEntry`](LookupAddressEntry.md) \| [`LookupAddressEntry`](LookupAddressEntry.md)[], [`AddressFamily`](../type-aliases/AddressFamily.md)]\>

#### Defined in

node\_modules/axios/index.d.ts:367

***

### maxBodyLength?

> `optional` **maxBodyLength**: `number`

#### Defined in

node\_modules/axios/index.d.ts:342

***

### maxContentLength?

> `optional` **maxContentLength**: `number`

#### Defined in

node\_modules/axios/index.d.ts:340

***

### maxRate?

> `optional` **maxRate**: `number` \| [`number`, `number`]

#### Defined in

node\_modules/axios/index.d.ts:344

***

### maxRedirects?

> `optional` **maxRedirects**: `number`

#### Defined in

node\_modules/axios/index.d.ts:343

***

### method?

> `optional` **method**: `string`

#### Defined in

node\_modules/axios/index.d.ts:320

***

### onDownloadProgress()?

> `optional` **onDownloadProgress**: (`progressEvent`) => `void`

#### Parameters

• **progressEvent**: [`AxiosProgressEvent`](AxiosProgressEvent.md)

#### Returns

`void`

#### Defined in

node\_modules/axios/index.d.ts:339

***

### onUploadProgress()?

> `optional` **onUploadProgress**: (`progressEvent`) => `void`

#### Parameters

• **progressEvent**: [`AxiosProgressEvent`](AxiosProgressEvent.md)

#### Returns

`void`

#### Defined in

node\_modules/axios/index.d.ts:338

***

### params?

> `optional` **params**: `any`

#### Defined in

node\_modules/axios/index.d.ts:326

***

### paramsSerializer?

> `optional` **paramsSerializer**: [`ParamsSerializerOptions`](ParamsSerializerOptions.md) \| [`CustomParamsSerializer`](CustomParamsSerializer.md)

#### Defined in

node\_modules/axios/index.d.ts:327

***

### parseReviver()?

> `optional` **parseReviver**: (`this`, `key`, `value`) => `any`

#### Parameters

• **this**: `any`

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Defined in

node\_modules/axios/index.d.ts:370

***

### proxy?

> `optional` **proxy**: `false` \| [`AxiosProxyConfig`](AxiosProxyConfig.md)

#### Defined in

node\_modules/axios/index.d.ts:350

***

### responseEncoding?

> `optional` **responseEncoding**: `string`

#### Defined in

node\_modules/axios/index.d.ts:335

***

### responseType?

> `optional` **responseType**: [`ResponseType`](../type-aliases/ResponseType.md)

#### Defined in

node\_modules/axios/index.d.ts:334

***

### signal?

> `optional` **signal**: [`GenericAbortSignal`](GenericAbortSignal.md)

#### Defined in

node\_modules/axios/index.d.ts:354

***

### socketPath?

> `optional` **socketPath**: `null` \| `string`

#### Defined in

node\_modules/axios/index.d.ts:346

***

### timeout?

> `optional` **timeout**: `number`

#### Defined in

node\_modules/axios/index.d.ts:329

***

### timeoutErrorMessage?

> `optional` **timeoutErrorMessage**: `string`

#### Defined in

node\_modules/axios/index.d.ts:330

***

### transformRequest?

> `optional` **transformRequest**: [`AxiosRequestTransformer`](AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](AxiosRequestTransformer.md)[]

#### Defined in

node\_modules/axios/index.d.ts:323

***

### transformResponse?

> `optional` **transformResponse**: [`AxiosResponseTransformer`](AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](AxiosResponseTransformer.md)[]

#### Defined in

node\_modules/axios/index.d.ts:324

***

### transitional?

> `optional` **transitional**: [`TransitionalOptions`](TransitionalOptions.md)

#### Defined in

node\_modules/axios/index.d.ts:353

***

### transport?

> `optional` **transport**: `any`

#### Defined in

node\_modules/axios/index.d.ts:347

***

### url?

> `optional` **url**: `string`

#### Defined in

node\_modules/axios/index.d.ts:319

***

### validateStatus?

> `optional` **validateStatus**: `null` \| (`status`) => `boolean`

#### Defined in

node\_modules/axios/index.d.ts:341

***

### withCredentials?

> `optional` **withCredentials**: `boolean`

#### Defined in

node\_modules/axios/index.d.ts:331

***

### withXSRFToken?

> `optional` **withXSRFToken**: `boolean` \| (`config`) => `undefined` \| `boolean`

#### Defined in

node\_modules/axios/index.d.ts:369

***

### xsrfCookieName?

> `optional` **xsrfCookieName**: `string`

#### Defined in

node\_modules/axios/index.d.ts:336

***

### xsrfHeaderName?

> `optional` **xsrfHeaderName**: `string`

#### Defined in

node\_modules/axios/index.d.ts:337
