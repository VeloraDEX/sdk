[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AxiosDefaults

# Interface: AxiosDefaults\<D, P\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:504

Construct a type with the properties of T except for those in type K.

## Extends

- [`Omit`](../type-aliases/Omit.md)\<[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`, `P`\>, `"headers"`\>

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

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`adapter`](InternalAxiosRequestConfig.md#adapter)

***

### allowAbsoluteUrls?

> `optional` **allowAbsoluteUrls?**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:395

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`allowAbsoluteUrls`](InternalAxiosRequestConfig.md#allowabsoluteurls)

***

### allowedSocketPaths?

> `optional` **allowedSocketPaths?**: `string` \| `string`[] \| `null`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:433

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`allowedSocketPaths`](InternalAxiosRequestConfig.md#allowedsocketpaths)

***

### auth?

> `optional` **auth?**: [`AxiosBasicCredentials`](AxiosBasicCredentials.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:408

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`auth`](InternalAxiosRequestConfig.md#auth)

***

### baseURL?

> `optional` **baseURL?**: `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:394

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`baseURL`](InternalAxiosRequestConfig.md#baseurl)

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

`Omit.beforeRedirect`

***

### cancelToken?

> `optional` **cancelToken?**: [`CancelToken`](CancelToken.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:438

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`cancelToken`](InternalAxiosRequestConfig.md#canceltoken)

***

### data?

> `optional` **data?**: `D`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:403

#### Inherited from

`Omit.data`

***

### decompress?

> `optional` **decompress?**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:439

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`decompress`](InternalAxiosRequestConfig.md#decompress)

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

`Omit.env`

***

### family?

> `optional` **family?**: [`AddressFamily`](../type-aliases/AddressFamily.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:453

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`family`](InternalAxiosRequestConfig.md#family)

***

### fetchOptions?

> `optional` **fetchOptions?**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\> \| [`Omit`](../type-aliases/Omit.md)\<`RequestInit`, `"signal"` \| `"method"` \| `"headers"` \| `"body"`\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:472

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`fetchOptions`](InternalAxiosRequestConfig.md#fetchoptions)

***

### formDataHeaderPolicy?

> `optional` **formDataHeaderPolicy?**: `"legacy"` \| `"content-only"`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:477

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`formDataHeaderPolicy`](InternalAxiosRequestConfig.md#formdataheaderpolicy)

***

### formSerializer?

> `optional` **formSerializer?**: [`FormSerializerOptions`](FormSerializerOptions.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:452

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`formSerializer`](InternalAxiosRequestConfig.md#formserializer)

***

### headers

> **headers**: [`HeadersDefaults`](HeadersDefaults.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:505

***

### http2Options?

> `optional` **http2Options?**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\> & `object`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:474

#### Type Declaration

##### sessionTimeout?

> `optional` **sessionTimeout?**: `number`

#### Inherited from

`Omit.http2Options`

***

### httpAgent?

> `optional` **httpAgent?**: `any`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:435

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`httpAgent`](InternalAxiosRequestConfig.md#httpagent)

***

### httpsAgent?

> `optional` **httpsAgent?**: `any`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:436

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`httpsAgent`](InternalAxiosRequestConfig.md#httpsagent)

***

### httpVersion?

> `optional` **httpVersion?**: `2` \| `1`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:473

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`httpVersion`](InternalAxiosRequestConfig.md#httpversion)

***

### insecureHTTPParser?

> `optional` **insecureHTTPParser?**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:442

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`insecureHTTPParser`](InternalAxiosRequestConfig.md#insecurehttpparser)

***

### lookup?

> `optional` **lookup?**: ((`hostname`, `options`, `cb`) => `void`) \| ((`hostname`, `options`) => `Promise`\<[`LookupAddress`](../type-aliases/LookupAddress.md) \| \[[`LookupAddressEntry`](LookupAddressEntry.md) \| [`LookupAddressEntry`](LookupAddressEntry.md)[], [`AddressFamily`](../type-aliases/AddressFamily.md)\]\>)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:454

#### Inherited from

`Omit.lookup`

***

### maxBodyLength?

> `optional` **maxBodyLength?**: `number`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:417

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`maxBodyLength`](InternalAxiosRequestConfig.md#maxbodylength)

***

### maxContentLength?

> `optional` **maxContentLength?**: `number`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:415

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`maxContentLength`](InternalAxiosRequestConfig.md#maxcontentlength)

***

### maxRate?

> `optional` **maxRate?**: `number` \| \[`number`, `number`\]

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:419

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`maxRate`](InternalAxiosRequestConfig.md#maxrate)

***

### maxRedirects?

> `optional` **maxRedirects?**: `number`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:418

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`maxRedirects`](InternalAxiosRequestConfig.md#maxredirects)

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

`Omit.onDownloadProgress`

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

`Omit.onUploadProgress`

***

### params?

> `optional` **params?**: `P`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:399

#### Inherited from

`Omit.params`

***

### paramsSerializer?

> `optional` **paramsSerializer?**: [`ParamsSerializerOptions`](ParamsSerializerOptions.md)\<`unknown` *extends* `P` ? [`Record`](../type-aliases/Record.md)\<`string`, `any`\> : `P`\> \| [`CustomParamsSerializer`](CustomParamsSerializer.md)\<`unknown` *extends* `P` ? [`Record`](../type-aliases/Record.md)\<`string`, `any`\> : `P`\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:400

#### Inherited from

`Omit.paramsSerializer`

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

`Omit.parseReviver`

***

### proxy?

> `optional` **proxy?**: `false` \| [`AxiosProxyConfig`](AxiosProxyConfig.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:437

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`proxy`](InternalAxiosRequestConfig.md#proxy)

***

### redact?

> `optional` **redact?**: `string`[]

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:478

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`redact`](InternalAxiosRequestConfig.md#redact)

***

### responseEncoding?

> `optional` **responseEncoding?**: [`StringLiteralsOrString`](../type-aliases/StringLiteralsOrString.md)\<[`responseEncoding`](../type-aliases/responseEncoding.md)\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:410

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`responseEncoding`](InternalAxiosRequestConfig.md#responseencoding)

***

### responseType?

> `optional` **responseType?**: [`ResponseType`](../type-aliases/ResponseType.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:409

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`responseType`](InternalAxiosRequestConfig.md#responsetype)

***

### sensitiveHeaders?

> `optional` **sensitiveHeaders?**: `string`[]

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:479

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`sensitiveHeaders`](InternalAxiosRequestConfig.md#sensitiveheaders)

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

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`socketPath`](InternalAxiosRequestConfig.md#socketpath)

***

### timeout?

> `optional` **timeout?**: `number`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:404

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`timeout`](InternalAxiosRequestConfig.md#timeout)

***

### timeoutErrorMessage?

> `optional` **timeoutErrorMessage?**: `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:405

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`timeoutErrorMessage`](InternalAxiosRequestConfig.md#timeouterrormessage)

***

### transformRequest?

> `optional` **transformRequest?**: [`AxiosRequestTransformer`](AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](AxiosRequestTransformer.md)[]

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:396

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`transformRequest`](InternalAxiosRequestConfig.md#transformrequest)

***

### transformResponse?

> `optional` **transformResponse?**: [`AxiosResponseTransformer`](AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](AxiosResponseTransformer.md)[]

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:397

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`transformResponse`](InternalAxiosRequestConfig.md#transformresponse)

***

### transitional?

> `optional` **transitional?**: [`TransitionalOptions`](TransitionalOptions.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:440

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`transitional`](InternalAxiosRequestConfig.md#transitional)

***

### transport?

> `optional` **transport?**: `any`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:434

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`transport`](InternalAxiosRequestConfig.md#transport)

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

`Omit.validateStatus`

***

### withCredentials?

> `optional` **withCredentials?**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:406

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`withCredentials`](InternalAxiosRequestConfig.md#withcredentials)

***

### withXSRFToken?

> `optional` **withXSRFToken?**: `boolean` \| ((`config`) => `boolean` \| `undefined`)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:470

#### Inherited from

`Omit.withXSRFToken`

***

### xsrfCookieName?

> `optional` **xsrfCookieName?**: `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:411

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`xsrfCookieName`](InternalAxiosRequestConfig.md#xsrfcookiename)

***

### xsrfHeaderName?

> `optional` **xsrfHeaderName?**: `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:412

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`xsrfHeaderName`](InternalAxiosRequestConfig.md#xsrfheadername)
