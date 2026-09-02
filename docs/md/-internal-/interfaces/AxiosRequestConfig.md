[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AxiosRequestConfig

# Interface: AxiosRequestConfig\<D, P\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:391

## Extended by

- [`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md)

## Type Parameters

### D

`D` = `any`

### P

`P` = `any`

## Properties

### adapter?

> `optional` **adapter?**: [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md) \| [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md)[]

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:407

***

### allowAbsoluteUrls?

> `optional` **allowAbsoluteUrls?**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:395

***

### allowedSocketPaths?

> `optional` **allowedSocketPaths?**: `string` \| `string`[] \| `null`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:433

***

### auth?

> `optional` **auth?**: [`AxiosBasicCredentials`](AxiosBasicCredentials.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:408

***

### baseURL?

> `optional` **baseURL?**: `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:394

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

***

### cancelToken?

> `optional` **cancelToken?**: [`CancelToken`](CancelToken.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:438

***

### data?

> `optional` **data?**: `D`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:403

***

### decompress?

> `optional` **decompress?**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:439

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

***

### family?

> `optional` **family?**: [`AddressFamily`](../type-aliases/AddressFamily.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:453

***

### fetchOptions?

> `optional` **fetchOptions?**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\> \| [`Omit`](../type-aliases/Omit.md)\<`RequestInit`, `"signal"` \| `"method"` \| `"headers"` \| `"body"`\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:472

***

### formDataHeaderPolicy?

> `optional` **formDataHeaderPolicy?**: `"legacy"` \| `"content-only"`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:477

***

### formSerializer?

> `optional` **formSerializer?**: [`FormSerializerOptions`](FormSerializerOptions.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:452

***

### headers?

> `optional` **headers?**: [`AxiosHeaders`](../classes/AxiosHeaders.md) \| [`Partial`](../type-aliases/Partial.md)\<[`RawAxiosHeaders`](RawAxiosHeaders.md) & `object` & `object`\> & [`Partial`](../type-aliases/Partial.md)\<`object` & `object`\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:398

***

### http2Options?

> `optional` **http2Options?**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\> & `object`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:474

#### Type Declaration

##### sessionTimeout?

> `optional` **sessionTimeout?**: `number`

***

### httpAgent?

> `optional` **httpAgent?**: `any`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:435

***

### httpsAgent?

> `optional` **httpsAgent?**: `any`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:436

***

### httpVersion?

> `optional` **httpVersion?**: `2` \| `1`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:473

***

### insecureHTTPParser?

> `optional` **insecureHTTPParser?**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:442

***

### lookup?

> `optional` **lookup?**: ((`hostname`, `options`, `cb`) => `void`) \| ((`hostname`, `options`) => `Promise`\<[`LookupAddress`](../type-aliases/LookupAddress.md) \| \[[`LookupAddressEntry`](LookupAddressEntry.md) \| [`LookupAddressEntry`](LookupAddressEntry.md)[], [`AddressFamily`](../type-aliases/AddressFamily.md)\]\>)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:454

***

### maxBodyLength?

> `optional` **maxBodyLength?**: `number`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:417

***

### maxContentLength?

> `optional` **maxContentLength?**: `number`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:415

***

### maxRate?

> `optional` **maxRate?**: `number` \| \[`number`, `number`\]

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:419

***

### maxRedirects?

> `optional` **maxRedirects?**: `number`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:418

***

### method?

> `optional` **method?**: [`StringLiteralsOrString`](../type-aliases/StringLiteralsOrString.md)\<[`Method`](../type-aliases/Method.md)\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:393

***

### onDownloadProgress?

> `optional` **onDownloadProgress?**: (`progressEvent`) => `void`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:414

#### Parameters

##### progressEvent

[`AxiosProgressEvent`](AxiosProgressEvent.md)

#### Returns

`void`

***

### onUploadProgress?

> `optional` **onUploadProgress?**: (`progressEvent`) => `void`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:413

#### Parameters

##### progressEvent

[`AxiosProgressEvent`](AxiosProgressEvent.md)

#### Returns

`void`

***

### params?

> `optional` **params?**: `P`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:399

***

### paramsSerializer?

> `optional` **paramsSerializer?**: [`ParamsSerializerOptions`](ParamsSerializerOptions.md)\<`unknown` *extends* `P` ? [`Record`](../type-aliases/Record.md)\<`string`, `any`\> : `P`\> \| [`CustomParamsSerializer`](CustomParamsSerializer.md)\<`unknown` *extends* `P` ? [`Record`](../type-aliases/Record.md)\<`string`, `any`\> : `P`\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:400

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

***

### proxy?

> `optional` **proxy?**: `false` \| [`AxiosProxyConfig`](AxiosProxyConfig.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:437

***

### redact?

> `optional` **redact?**: `string`[]

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:478

***

### responseEncoding?

> `optional` **responseEncoding?**: [`StringLiteralsOrString`](../type-aliases/StringLiteralsOrString.md)\<[`responseEncoding`](../type-aliases/responseEncoding.md)\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:410

***

### responseType?

> `optional` **responseType?**: [`ResponseType`](../type-aliases/ResponseType.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:409

***

### sensitiveHeaders?

> `optional` **sensitiveHeaders?**: `string`[]

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:479

***

### signal?

> `optional` **signal?**: [`GenericAbortSignal`](GenericAbortSignal.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:441

***

### socketPath?

> `optional` **socketPath?**: `string` \| `null`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:432

***

### timeout?

> `optional` **timeout?**: `number`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:404

***

### timeoutErrorMessage?

> `optional` **timeoutErrorMessage?**: `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:405

***

### transformRequest?

> `optional` **transformRequest?**: [`AxiosRequestTransformer`](AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](AxiosRequestTransformer.md)[]

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:396

***

### transformResponse?

> `optional` **transformResponse?**: [`AxiosResponseTransformer`](AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](AxiosResponseTransformer.md)[]

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:397

***

### transitional?

> `optional` **transitional?**: [`TransitionalOptions`](TransitionalOptions.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:440

***

### transport?

> `optional` **transport?**: `any`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:434

***

### url?

> `optional` **url?**: `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:392

***

### validateStatus?

> `optional` **validateStatus?**: ((`status`) => `boolean`) \| `null`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:416

***

### withCredentials?

> `optional` **withCredentials?**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:406

***

### withXSRFToken?

> `optional` **withXSRFToken?**: `boolean` \| ((`config`) => `boolean` \| `undefined`)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:470

***

### xsrfCookieName?

> `optional` **xsrfCookieName?**: `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:411

***

### xsrfHeaderName?

> `optional` **xsrfHeaderName?**: `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:412
