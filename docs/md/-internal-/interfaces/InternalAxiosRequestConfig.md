[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / InternalAxiosRequestConfig

# Interface: InternalAxiosRequestConfig\<D\>

## Extends

- [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

## Type Parameters

• **D** = `any`

## Properties

### adapter?

> `optional` **adapter**: [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md) \| [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md)[]

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`adapter`](AxiosRequestConfig.md#adapter)

#### Defined in

node\_modules/axios/index.d.ts:332

***

### allowAbsoluteUrls?

> `optional` **allowAbsoluteUrls**: `boolean`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`allowAbsoluteUrls`](AxiosRequestConfig.md#allowabsoluteurls)

#### Defined in

node\_modules/axios/index.d.ts:322

***

### auth?

> `optional` **auth**: [`AxiosBasicCredentials`](AxiosBasicCredentials.md)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`auth`](AxiosRequestConfig.md#auth)

#### Defined in

node\_modules/axios/index.d.ts:333

***

### baseURL?

> `optional` **baseURL**: `string`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`baseURL`](AxiosRequestConfig.md#baseurl)

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

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`beforeRedirect`](AxiosRequestConfig.md#beforeredirect)

#### Defined in

node\_modules/axios/index.d.ts:345

***

### cancelToken?

> `optional` **cancelToken**: [`CancelToken`](CancelToken.md)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`cancelToken`](AxiosRequestConfig.md#canceltoken)

#### Defined in

node\_modules/axios/index.d.ts:351

***

### data?

> `optional` **data**: `D`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`data`](AxiosRequestConfig.md#data)

#### Defined in

node\_modules/axios/index.d.ts:328

***

### decompress?

> `optional` **decompress**: `boolean`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`decompress`](AxiosRequestConfig.md#decompress)

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

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`env`](AxiosRequestConfig.md#env)

#### Defined in

node\_modules/axios/index.d.ts:356

***

### family?

> `optional` **family**: [`AddressFamily`](../type-aliases/AddressFamily.md)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`family`](AxiosRequestConfig.md#family)

#### Defined in

node\_modules/axios/index.d.ts:366

***

### fetchOptions?

> `optional` **fetchOptions**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\> \| [`Omit`](../type-aliases/Omit.md)\<`RequestInit`, `"signal"` \| `"method"` \| `"headers"` \| `"body"`\>

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`fetchOptions`](AxiosRequestConfig.md#fetchoptions)

#### Defined in

node\_modules/axios/index.d.ts:371

***

### formSerializer?

> `optional` **formSerializer**: [`FormSerializerOptions`](FormSerializerOptions.md)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`formSerializer`](AxiosRequestConfig.md#formserializer)

#### Defined in

node\_modules/axios/index.d.ts:365

***

### headers

> **headers**: [`AxiosRequestHeaders`](../type-aliases/AxiosRequestHeaders.md)

#### Overrides

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`headers`](AxiosRequestConfig.md#headers)

#### Defined in

node\_modules/axios/index.d.ts:382

***

### http2Options?

> `optional` **http2Options**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\> & `object`

#### Type declaration

##### sessionTimeout?

> `optional` **sessionTimeout**: `number`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`http2Options`](AxiosRequestConfig.md#http2options)

#### Defined in

node\_modules/axios/index.d.ts:373

***

### httpAgent?

> `optional` **httpAgent**: `any`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`httpAgent`](AxiosRequestConfig.md#httpagent)

#### Defined in

node\_modules/axios/index.d.ts:348

***

### httpsAgent?

> `optional` **httpsAgent**: `any`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`httpsAgent`](AxiosRequestConfig.md#httpsagent)

#### Defined in

node\_modules/axios/index.d.ts:349

***

### httpVersion?

> `optional` **httpVersion**: `1` \| `2`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`httpVersion`](AxiosRequestConfig.md#httpversion)

#### Defined in

node\_modules/axios/index.d.ts:372

***

### insecureHTTPParser?

> `optional` **insecureHTTPParser**: `boolean`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`insecureHTTPParser`](AxiosRequestConfig.md#insecurehttpparser)

#### Defined in

node\_modules/axios/index.d.ts:355

***

### lookup?

> `optional` **lookup**: (`hostname`, `options`, `cb`) => `void` \| (`hostname`, `options`) => `Promise`\<[`LookupAddress`](../type-aliases/LookupAddress.md) \| [[`LookupAddressEntry`](LookupAddressEntry.md) \| [`LookupAddressEntry`](LookupAddressEntry.md)[], [`AddressFamily`](../type-aliases/AddressFamily.md)]\>

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`lookup`](AxiosRequestConfig.md#lookup)

#### Defined in

node\_modules/axios/index.d.ts:367

***

### maxBodyLength?

> `optional` **maxBodyLength**: `number`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxBodyLength`](AxiosRequestConfig.md#maxbodylength)

#### Defined in

node\_modules/axios/index.d.ts:342

***

### maxContentLength?

> `optional` **maxContentLength**: `number`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxContentLength`](AxiosRequestConfig.md#maxcontentlength)

#### Defined in

node\_modules/axios/index.d.ts:340

***

### maxRate?

> `optional` **maxRate**: `number` \| [`number`, `number`]

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxRate`](AxiosRequestConfig.md#maxrate)

#### Defined in

node\_modules/axios/index.d.ts:344

***

### maxRedirects?

> `optional` **maxRedirects**: `number`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxRedirects`](AxiosRequestConfig.md#maxredirects)

#### Defined in

node\_modules/axios/index.d.ts:343

***

### method?

> `optional` **method**: `string`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`method`](AxiosRequestConfig.md#method)

#### Defined in

node\_modules/axios/index.d.ts:320

***

### onDownloadProgress()?

> `optional` **onDownloadProgress**: (`progressEvent`) => `void`

#### Parameters

• **progressEvent**: [`AxiosProgressEvent`](AxiosProgressEvent.md)

#### Returns

`void`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`onDownloadProgress`](AxiosRequestConfig.md#ondownloadprogress)

#### Defined in

node\_modules/axios/index.d.ts:339

***

### onUploadProgress()?

> `optional` **onUploadProgress**: (`progressEvent`) => `void`

#### Parameters

• **progressEvent**: [`AxiosProgressEvent`](AxiosProgressEvent.md)

#### Returns

`void`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`onUploadProgress`](AxiosRequestConfig.md#onuploadprogress)

#### Defined in

node\_modules/axios/index.d.ts:338

***

### params?

> `optional` **params**: `any`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`params`](AxiosRequestConfig.md#params)

#### Defined in

node\_modules/axios/index.d.ts:326

***

### paramsSerializer?

> `optional` **paramsSerializer**: [`ParamsSerializerOptions`](ParamsSerializerOptions.md) \| [`CustomParamsSerializer`](CustomParamsSerializer.md)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`paramsSerializer`](AxiosRequestConfig.md#paramsserializer)

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

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`parseReviver`](AxiosRequestConfig.md#parsereviver)

#### Defined in

node\_modules/axios/index.d.ts:370

***

### proxy?

> `optional` **proxy**: `false` \| [`AxiosProxyConfig`](AxiosProxyConfig.md)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`proxy`](AxiosRequestConfig.md#proxy)

#### Defined in

node\_modules/axios/index.d.ts:350

***

### responseEncoding?

> `optional` **responseEncoding**: `string`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`responseEncoding`](AxiosRequestConfig.md#responseencoding)

#### Defined in

node\_modules/axios/index.d.ts:335

***

### responseType?

> `optional` **responseType**: [`ResponseType`](../type-aliases/ResponseType.md)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`responseType`](AxiosRequestConfig.md#responsetype)

#### Defined in

node\_modules/axios/index.d.ts:334

***

### signal?

> `optional` **signal**: [`GenericAbortSignal`](GenericAbortSignal.md)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`signal`](AxiosRequestConfig.md#signal)

#### Defined in

node\_modules/axios/index.d.ts:354

***

### socketPath?

> `optional` **socketPath**: `null` \| `string`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`socketPath`](AxiosRequestConfig.md#socketpath)

#### Defined in

node\_modules/axios/index.d.ts:346

***

### timeout?

> `optional` **timeout**: `number`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`timeout`](AxiosRequestConfig.md#timeout)

#### Defined in

node\_modules/axios/index.d.ts:329

***

### timeoutErrorMessage?

> `optional` **timeoutErrorMessage**: `string`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`timeoutErrorMessage`](AxiosRequestConfig.md#timeouterrormessage)

#### Defined in

node\_modules/axios/index.d.ts:330

***

### transformRequest?

> `optional` **transformRequest**: [`AxiosRequestTransformer`](AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](AxiosRequestTransformer.md)[]

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transformRequest`](AxiosRequestConfig.md#transformrequest)

#### Defined in

node\_modules/axios/index.d.ts:323

***

### transformResponse?

> `optional` **transformResponse**: [`AxiosResponseTransformer`](AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](AxiosResponseTransformer.md)[]

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transformResponse`](AxiosRequestConfig.md#transformresponse)

#### Defined in

node\_modules/axios/index.d.ts:324

***

### transitional?

> `optional` **transitional**: [`TransitionalOptions`](TransitionalOptions.md)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transitional`](AxiosRequestConfig.md#transitional)

#### Defined in

node\_modules/axios/index.d.ts:353

***

### transport?

> `optional` **transport**: `any`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transport`](AxiosRequestConfig.md#transport)

#### Defined in

node\_modules/axios/index.d.ts:347

***

### url?

> `optional` **url**: `string`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`url`](AxiosRequestConfig.md#url)

#### Defined in

node\_modules/axios/index.d.ts:319

***

### validateStatus?

> `optional` **validateStatus**: `null` \| (`status`) => `boolean`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`validateStatus`](AxiosRequestConfig.md#validatestatus)

#### Defined in

node\_modules/axios/index.d.ts:341

***

### withCredentials?

> `optional` **withCredentials**: `boolean`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`withCredentials`](AxiosRequestConfig.md#withcredentials)

#### Defined in

node\_modules/axios/index.d.ts:331

***

### withXSRFToken?

> `optional` **withXSRFToken**: `boolean` \| (`config`) => `undefined` \| `boolean`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`withXSRFToken`](AxiosRequestConfig.md#withxsrftoken)

#### Defined in

node\_modules/axios/index.d.ts:369

***

### xsrfCookieName?

> `optional` **xsrfCookieName**: `string`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`xsrfCookieName`](AxiosRequestConfig.md#xsrfcookiename)

#### Defined in

node\_modules/axios/index.d.ts:336

***

### xsrfHeaderName?

> `optional` **xsrfHeaderName**: `string`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`xsrfHeaderName`](AxiosRequestConfig.md#xsrfheadername)

#### Defined in

node\_modules/axios/index.d.ts:337
