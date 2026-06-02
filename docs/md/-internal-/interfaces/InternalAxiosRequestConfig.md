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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:380

***

### allowAbsoluteUrls?

> `optional` **allowAbsoluteUrls**: `boolean`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`allowAbsoluteUrls`](AxiosRequestConfig.md#allowabsoluteurls)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:370

***

### allowedSocketPaths?

> `optional` **allowedSocketPaths**: `null` \| `string` \| `string`[]

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`allowedSocketPaths`](AxiosRequestConfig.md#allowedsocketpaths)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:406

***

### auth?

> `optional` **auth**: [`AxiosBasicCredentials`](AxiosBasicCredentials.md)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`auth`](AxiosRequestConfig.md#auth)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:381

***

### baseURL?

> `optional` **baseURL**: `string`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`baseURL`](AxiosRequestConfig.md#baseurl)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:369

***

### beforeRedirect()?

> `optional` **beforeRedirect**: (`options`, `responseDetails`, `requestDetails`) => `void`

#### Parameters

• **options**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\>

• **responseDetails**

• **responseDetails.headers**: [`Record`](../type-aliases/Record.md)\<`string`, `string`\>

• **responseDetails.statusCode**: [`HttpStatusCode`](../enumerations/HttpStatusCode.md)

• **requestDetails**

• **requestDetails.headers**: [`Record`](../type-aliases/Record.md)\<`string`, `string`\>

• **requestDetails.method**: `string`

• **requestDetails.url**: `string`

#### Returns

`void`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`beforeRedirect`](AxiosRequestConfig.md#beforeredirect)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:393

***

### cancelToken?

> `optional` **cancelToken**: [`CancelToken`](CancelToken.md)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`cancelToken`](AxiosRequestConfig.md#canceltoken)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:411

***

### data?

> `optional` **data**: `D`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`data`](AxiosRequestConfig.md#data)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:376

***

### decompress?

> `optional` **decompress**: `boolean`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`decompress`](AxiosRequestConfig.md#decompress)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:412

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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:416

***

### family?

> `optional` **family**: [`AddressFamily`](../type-aliases/AddressFamily.md)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`family`](AxiosRequestConfig.md#family)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:426

***

### fetchOptions?

> `optional` **fetchOptions**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\> \| [`Omit`](../type-aliases/Omit.md)\<`RequestInit`, `"signal"` \| `"method"` \| `"headers"` \| `"body"`\>

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`fetchOptions`](AxiosRequestConfig.md#fetchoptions)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:445

***

### formDataHeaderPolicy?

> `optional` **formDataHeaderPolicy**: `"legacy"` \| `"content-only"`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`formDataHeaderPolicy`](AxiosRequestConfig.md#formdataheaderpolicy)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:450

***

### formSerializer?

> `optional` **formSerializer**: [`FormSerializerOptions`](FormSerializerOptions.md)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`formSerializer`](AxiosRequestConfig.md#formserializer)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:425

***

### headers

> **headers**: [`AxiosRequestHeaders`](../type-aliases/AxiosRequestHeaders.md)

#### Overrides

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`headers`](AxiosRequestConfig.md#headers)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:458

***

### http2Options?

> `optional` **http2Options**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\> & `object`

#### Type declaration

##### sessionTimeout?

> `optional` **sessionTimeout**: `number`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`http2Options`](AxiosRequestConfig.md#http2options)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:447

***

### httpAgent?

> `optional` **httpAgent**: `any`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`httpAgent`](AxiosRequestConfig.md#httpagent)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:408

***

### httpsAgent?

> `optional` **httpsAgent**: `any`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`httpsAgent`](AxiosRequestConfig.md#httpsagent)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:409

***

### httpVersion?

> `optional` **httpVersion**: `1` \| `2`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`httpVersion`](AxiosRequestConfig.md#httpversion)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:446

***

### insecureHTTPParser?

> `optional` **insecureHTTPParser**: `boolean`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`insecureHTTPParser`](AxiosRequestConfig.md#insecurehttpparser)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:415

***

### lookup?

> `optional` **lookup**: (`hostname`, `options`, `cb`) => `void` \| (`hostname`, `options`) => `Promise`\<[`LookupAddress`](../type-aliases/LookupAddress.md) \| [[`LookupAddressEntry`](LookupAddressEntry.md) \| [`LookupAddressEntry`](LookupAddressEntry.md)[], [`AddressFamily`](../type-aliases/AddressFamily.md)]\>

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`lookup`](AxiosRequestConfig.md#lookup)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:427

***

### maxBodyLength?

> `optional` **maxBodyLength**: `number`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxBodyLength`](AxiosRequestConfig.md#maxbodylength)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:390

***

### maxContentLength?

> `optional` **maxContentLength**: `number`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxContentLength`](AxiosRequestConfig.md#maxcontentlength)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:388

***

### maxRate?

> `optional` **maxRate**: `number` \| [`number`, `number`]

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxRate`](AxiosRequestConfig.md#maxrate)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:392

***

### maxRedirects?

> `optional` **maxRedirects**: `number`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxRedirects`](AxiosRequestConfig.md#maxredirects)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:391

***

### method?

> `optional` **method**: [`StringLiteralsOrString`](../type-aliases/StringLiteralsOrString.md)\<[`Method`](../type-aliases/Method.md)\>

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`method`](AxiosRequestConfig.md#method)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:368

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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:387

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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:386

***

### params?

> `optional` **params**: `any`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`params`](AxiosRequestConfig.md#params)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:374

***

### paramsSerializer?

> `optional` **paramsSerializer**: [`ParamsSerializerOptions`](ParamsSerializerOptions.md) \| [`CustomParamsSerializer`](CustomParamsSerializer.md)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`paramsSerializer`](AxiosRequestConfig.md#paramsserializer)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:375

***

### parseReviver()?

> `optional` **parseReviver**: (`this`, `key`, `value`, `context`?) => `any`

#### Parameters

• **this**: `any`

• **key**: `string`

• **value**: `any`

• **context?**

• **context.source?**: `string`

#### Returns

`any`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`parseReviver`](AxiosRequestConfig.md#parsereviver)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:444

***

### proxy?

> `optional` **proxy**: `false` \| [`AxiosProxyConfig`](AxiosProxyConfig.md)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`proxy`](AxiosRequestConfig.md#proxy)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:410

***

### redact?

> `optional` **redact**: `string`[]

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`redact`](AxiosRequestConfig.md#redact)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:451

***

### responseEncoding?

> `optional` **responseEncoding**: [`StringLiteralsOrString`](../type-aliases/StringLiteralsOrString.md)\<[`responseEncoding`](../type-aliases/responseEncoding.md)\>

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`responseEncoding`](AxiosRequestConfig.md#responseencoding)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:383

***

### responseType?

> `optional` **responseType**: [`ResponseType`](../type-aliases/ResponseType.md)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`responseType`](AxiosRequestConfig.md#responsetype)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:382

***

### signal?

> `optional` **signal**: [`GenericAbortSignal`](GenericAbortSignal.md)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`signal`](AxiosRequestConfig.md#signal)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:414

***

### socketPath?

> `optional` **socketPath**: `null` \| `string`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`socketPath`](AxiosRequestConfig.md#socketpath)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:405

***

### timeout?

> `optional` **timeout**: `number`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`timeout`](AxiosRequestConfig.md#timeout)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:377

***

### timeoutErrorMessage?

> `optional` **timeoutErrorMessage**: `string`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`timeoutErrorMessage`](AxiosRequestConfig.md#timeouterrormessage)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:378

***

### transformRequest?

> `optional` **transformRequest**: [`AxiosRequestTransformer`](AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](AxiosRequestTransformer.md)[]

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transformRequest`](AxiosRequestConfig.md#transformrequest)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:371

***

### transformResponse?

> `optional` **transformResponse**: [`AxiosResponseTransformer`](AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](AxiosResponseTransformer.md)[]

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transformResponse`](AxiosRequestConfig.md#transformresponse)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:372

***

### transitional?

> `optional` **transitional**: [`TransitionalOptions`](TransitionalOptions.md)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transitional`](AxiosRequestConfig.md#transitional)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:413

***

### transport?

> `optional` **transport**: `any`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transport`](AxiosRequestConfig.md#transport)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:407

***

### url?

> `optional` **url**: `string`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`url`](AxiosRequestConfig.md#url)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:367

***

### validateStatus?

> `optional` **validateStatus**: `null` \| (`status`) => `boolean`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`validateStatus`](AxiosRequestConfig.md#validatestatus)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:389

***

### withCredentials?

> `optional` **withCredentials**: `boolean`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`withCredentials`](AxiosRequestConfig.md#withcredentials)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:379

***

### withXSRFToken?

> `optional` **withXSRFToken**: `boolean` \| (`config`) => `undefined` \| `boolean`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`withXSRFToken`](AxiosRequestConfig.md#withxsrftoken)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:443

***

### xsrfCookieName?

> `optional` **xsrfCookieName**: `string`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`xsrfCookieName`](AxiosRequestConfig.md#xsrfcookiename)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:384

***

### xsrfHeaderName?

> `optional` **xsrfHeaderName**: `string`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`xsrfHeaderName`](AxiosRequestConfig.md#xsrfheadername)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:385
