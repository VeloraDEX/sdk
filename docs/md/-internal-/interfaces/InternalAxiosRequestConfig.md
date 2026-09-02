[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / InternalAxiosRequestConfig

# Interface: InternalAxiosRequestConfig\<D, P\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:485

## Extends

- [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>

## Type Parameters

### D

`D` = `any`

### P

`P` = `any`

## Properties

### adapter?

> `optional` **adapter?**: [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md) \| [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md)[]

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:407

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`adapter`](AxiosRequestConfig.md#adapter)

***

### allowAbsoluteUrls?

> `optional` **allowAbsoluteUrls?**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:395

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`allowAbsoluteUrls`](AxiosRequestConfig.md#allowabsoluteurls)

***

### allowedSocketPaths?

> `optional` **allowedSocketPaths?**: `string` \| `string`[] \| `null`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:433

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`allowedSocketPaths`](AxiosRequestConfig.md#allowedsocketpaths)

***

### auth?

> `optional` **auth?**: [`AxiosBasicCredentials`](AxiosBasicCredentials.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:408

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`auth`](AxiosRequestConfig.md#auth)

***

### baseURL?

> `optional` **baseURL?**: `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:394

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`baseURL`](AxiosRequestConfig.md#baseurl)

***

### beforeRedirect?

> `optional` **beforeRedirect?**: (`options`, `responseDetails`, `requestDetails`) => `void`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:420

#### Parameters

##### options

[`Record`](../type-aliases/Record.md)\<`string`, `any`\>

##### responseDetails

###### headers

[`Record`](../type-aliases/Record.md)\<`string`, `string`\>

###### statusCode

[`HttpStatusCode`](../enumerations/HttpStatusCode.md)

##### requestDetails

###### headers

[`Record`](../type-aliases/Record.md)\<`string`, `string`\>

###### method

`string`

###### url

`string`

#### Returns

`void`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`beforeRedirect`](AxiosRequestConfig.md#beforeredirect)

***

### cancelToken?

> `optional` **cancelToken?**: [`CancelToken`](CancelToken.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:438

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`cancelToken`](AxiosRequestConfig.md#canceltoken)

***

### data?

> `optional` **data?**: `D`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:403

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`data`](AxiosRequestConfig.md#data)

***

### decompress?

> `optional` **decompress?**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:439

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`decompress`](AxiosRequestConfig.md#decompress)

***

### env?

> `optional` **env?**: `object`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:443

#### fetch?

> `optional` **fetch?**: (`input`, `init?`) => `Promise`\<`Response`\>

##### Parameters

###### input

`string` \| `URL` \| `Request`

###### init?

`RequestInit`

##### Returns

`Promise`\<`Response`\>

#### FormData?

> `optional` **FormData?**: (...`args`) => `object`

##### Parameters

###### args

...`any`[]

##### Returns

`object`

#### Request?

> `optional` **Request?**: (`input`, `init?`) => `Request`

##### Parameters

###### input

`string` \| `URL` \| `Request`

###### init?

`RequestInit`

##### Returns

`Request`

#### Response?

> `optional` **Response?**: (`body?`, `init?`) => `Response`

##### Parameters

###### body?

`string` \| `URLSearchParams` \| `ArrayBuffer` \| `Blob` \| `FormData` \| [`ArrayBufferView`](ArrayBufferView.md)\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\> \| `null`

###### init?

`ResponseInit`

##### Returns

`Response`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`env`](AxiosRequestConfig.md#env)

***

### family?

> `optional` **family?**: [`AddressFamily`](../type-aliases/AddressFamily.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:453

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`family`](AxiosRequestConfig.md#family)

***

### fetchOptions?

> `optional` **fetchOptions?**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\> \| [`Omit`](../type-aliases/Omit.md)\<`RequestInit`, `"signal"` \| `"method"` \| `"headers"` \| `"body"`\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:472

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`fetchOptions`](AxiosRequestConfig.md#fetchoptions)

***

### formDataHeaderPolicy?

> `optional` **formDataHeaderPolicy?**: `"legacy"` \| `"content-only"`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:477

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`formDataHeaderPolicy`](AxiosRequestConfig.md#formdataheaderpolicy)

***

### formSerializer?

> `optional` **formSerializer?**: [`FormSerializerOptions`](FormSerializerOptions.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:452

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`formSerializer`](AxiosRequestConfig.md#formserializer)

***

### headers

> **headers**: [`AxiosRequestHeaders`](../type-aliases/AxiosRequestHeaders.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:486

#### Overrides

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`headers`](AxiosRequestConfig.md#headers)

***

### http2Options?

> `optional` **http2Options?**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\> & `object`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:474

#### Type Declaration

##### sessionTimeout?

> `optional` **sessionTimeout?**: `number`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`http2Options`](AxiosRequestConfig.md#http2options)

***

### httpAgent?

> `optional` **httpAgent?**: `any`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:435

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`httpAgent`](AxiosRequestConfig.md#httpagent)

***

### httpsAgent?

> `optional` **httpsAgent?**: `any`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:436

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`httpsAgent`](AxiosRequestConfig.md#httpsagent)

***

### httpVersion?

> `optional` **httpVersion?**: `2` \| `1`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:473

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`httpVersion`](AxiosRequestConfig.md#httpversion)

***

### insecureHTTPParser?

> `optional` **insecureHTTPParser?**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:442

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`insecureHTTPParser`](AxiosRequestConfig.md#insecurehttpparser)

***

### lookup?

> `optional` **lookup?**: ((`hostname`, `options`, `cb`) => `void`) \| ((`hostname`, `options`) => `Promise`\<[`LookupAddress`](../type-aliases/LookupAddress.md) \| \[[`LookupAddressEntry`](LookupAddressEntry.md) \| [`LookupAddressEntry`](LookupAddressEntry.md)[], [`AddressFamily`](../type-aliases/AddressFamily.md)\]\>)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:454

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`lookup`](AxiosRequestConfig.md#lookup)

***

### maxBodyLength?

> `optional` **maxBodyLength?**: `number`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:417

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxBodyLength`](AxiosRequestConfig.md#maxbodylength)

***

### maxContentLength?

> `optional` **maxContentLength?**: `number`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:415

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxContentLength`](AxiosRequestConfig.md#maxcontentlength)

***

### maxRate?

> `optional` **maxRate?**: `number` \| \[`number`, `number`\]

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:419

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxRate`](AxiosRequestConfig.md#maxrate)

***

### maxRedirects?

> `optional` **maxRedirects?**: `number`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:418

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxRedirects`](AxiosRequestConfig.md#maxredirects)

***

### method?

> `optional` **method?**: [`StringLiteralsOrString`](../type-aliases/StringLiteralsOrString.md)\<[`Method`](../type-aliases/Method.md)\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:393

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`method`](AxiosRequestConfig.md#method)

***

### onDownloadProgress?

> `optional` **onDownloadProgress?**: (`progressEvent`) => `void`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:414

#### Parameters

##### progressEvent

[`AxiosProgressEvent`](AxiosProgressEvent.md)

#### Returns

`void`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`onDownloadProgress`](AxiosRequestConfig.md#ondownloadprogress)

***

### onUploadProgress?

> `optional` **onUploadProgress?**: (`progressEvent`) => `void`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:413

#### Parameters

##### progressEvent

[`AxiosProgressEvent`](AxiosProgressEvent.md)

#### Returns

`void`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`onUploadProgress`](AxiosRequestConfig.md#onuploadprogress)

***

### params?

> `optional` **params?**: `P`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:399

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`params`](AxiosRequestConfig.md#params)

***

### paramsSerializer?

> `optional` **paramsSerializer?**: [`ParamsSerializerOptions`](ParamsSerializerOptions.md)\<`unknown` *extends* `P` ? [`Record`](../type-aliases/Record.md)\<`string`, `any`\> : `P`\> \| [`CustomParamsSerializer`](CustomParamsSerializer.md)\<`unknown` *extends* `P` ? [`Record`](../type-aliases/Record.md)\<`string`, `any`\> : `P`\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:400

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`paramsSerializer`](AxiosRequestConfig.md#paramsserializer)

***

### parseReviver?

> `optional` **parseReviver?**: (`this`, `key`, `value`, `context?`) => `any`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:471

#### Parameters

##### this

`any`

##### key

`string`

##### value

`any`

##### context?

###### source?

`string`

#### Returns

`any`

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`parseReviver`](AxiosRequestConfig.md#parsereviver)

***

### proxy?

> `optional` **proxy?**: `false` \| [`AxiosProxyConfig`](AxiosProxyConfig.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:437

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`proxy`](AxiosRequestConfig.md#proxy)

***

### redact?

> `optional` **redact?**: `string`[]

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:478

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`redact`](AxiosRequestConfig.md#redact)

***

### responseEncoding?

> `optional` **responseEncoding?**: [`StringLiteralsOrString`](../type-aliases/StringLiteralsOrString.md)\<[`responseEncoding`](../type-aliases/responseEncoding.md)\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:410

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`responseEncoding`](AxiosRequestConfig.md#responseencoding)

***

### responseType?

> `optional` **responseType?**: [`ResponseType`](../type-aliases/ResponseType.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:409

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`responseType`](AxiosRequestConfig.md#responsetype)

***

### sensitiveHeaders?

> `optional` **sensitiveHeaders?**: `string`[]

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:479

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`sensitiveHeaders`](AxiosRequestConfig.md#sensitiveheaders)

***

### signal?

> `optional` **signal?**: [`GenericAbortSignal`](GenericAbortSignal.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:441

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`signal`](AxiosRequestConfig.md#signal)

***

### socketPath?

> `optional` **socketPath?**: `string` \| `null`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:432

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`socketPath`](AxiosRequestConfig.md#socketpath)

***

### timeout?

> `optional` **timeout?**: `number`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:404

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`timeout`](AxiosRequestConfig.md#timeout)

***

### timeoutErrorMessage?

> `optional` **timeoutErrorMessage?**: `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:405

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`timeoutErrorMessage`](AxiosRequestConfig.md#timeouterrormessage)

***

### transformRequest?

> `optional` **transformRequest?**: [`AxiosRequestTransformer`](AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](AxiosRequestTransformer.md)[]

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:396

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transformRequest`](AxiosRequestConfig.md#transformrequest)

***

### transformResponse?

> `optional` **transformResponse?**: [`AxiosResponseTransformer`](AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](AxiosResponseTransformer.md)[]

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:397

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transformResponse`](AxiosRequestConfig.md#transformresponse)

***

### transitional?

> `optional` **transitional?**: [`TransitionalOptions`](TransitionalOptions.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:440

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transitional`](AxiosRequestConfig.md#transitional)

***

### transport?

> `optional` **transport?**: `any`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:434

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transport`](AxiosRequestConfig.md#transport)

***

### url?

> `optional` **url?**: `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:392

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`url`](AxiosRequestConfig.md#url)

***

### validateStatus?

> `optional` **validateStatus?**: ((`status`) => `boolean`) \| `null`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:416

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`validateStatus`](AxiosRequestConfig.md#validatestatus)

***

### withCredentials?

> `optional` **withCredentials?**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:406

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`withCredentials`](AxiosRequestConfig.md#withcredentials)

***

### withXSRFToken?

> `optional` **withXSRFToken?**: `boolean` \| ((`config`) => `boolean` \| `undefined`)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:470

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`withXSRFToken`](AxiosRequestConfig.md#withxsrftoken)

***

### xsrfCookieName?

> `optional` **xsrfCookieName?**: `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:411

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`xsrfCookieName`](AxiosRequestConfig.md#xsrfcookiename)

***

### xsrfHeaderName?

> `optional` **xsrfHeaderName?**: `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:412

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`xsrfHeaderName`](AxiosRequestConfig.md#xsrfheadername)
