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

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:380

***

### allowAbsoluteUrls?

> `optional` **allowAbsoluteUrls**: `boolean`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:370

***

### allowedSocketPaths?

> `optional` **allowedSocketPaths**: `null` \| `string` \| `string`[]

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:406

***

### auth?

> `optional` **auth**: [`AxiosBasicCredentials`](AxiosBasicCredentials.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:381

***

### baseURL?

> `optional` **baseURL**: `string`

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

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:393

***

### cancelToken?

> `optional` **cancelToken**: [`CancelToken`](CancelToken.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:411

***

### data?

> `optional` **data**: `D`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:376

***

### decompress?

> `optional` **decompress**: `boolean`

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

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:416

***

### family?

> `optional` **family**: [`AddressFamily`](../type-aliases/AddressFamily.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:426

***

### fetchOptions?

> `optional` **fetchOptions**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\> \| [`Omit`](../type-aliases/Omit.md)\<`RequestInit`, `"signal"` \| `"method"` \| `"headers"` \| `"body"`\>

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:445

***

### formDataHeaderPolicy?

> `optional` **formDataHeaderPolicy**: `"legacy"` \| `"content-only"`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:450

***

### formSerializer?

> `optional` **formSerializer**: [`FormSerializerOptions`](FormSerializerOptions.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:425

***

### headers?

> `optional` **headers**: [`AxiosHeaders`](../classes/AxiosHeaders.md) \| [`Partial`](../type-aliases/Partial.md)\<[`RawAxiosHeaders`](RawAxiosHeaders.md) & `object` & `object`\> & [`Partial`](../type-aliases/Partial.md)\<`object` & `object`\>

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:373

***

### http2Options?

> `optional` **http2Options**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\> & `object`

#### Type declaration

##### sessionTimeout?

> `optional` **sessionTimeout**: `number`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:447

***

### httpAgent?

> `optional` **httpAgent**: `any`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:408

***

### httpsAgent?

> `optional` **httpsAgent**: `any`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:409

***

### httpVersion?

> `optional` **httpVersion**: `1` \| `2`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:446

***

### insecureHTTPParser?

> `optional` **insecureHTTPParser**: `boolean`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:415

***

### lookup?

> `optional` **lookup**: (`hostname`, `options`, `cb`) => `void` \| (`hostname`, `options`) => `Promise`\<[`LookupAddress`](../type-aliases/LookupAddress.md) \| [[`LookupAddressEntry`](LookupAddressEntry.md) \| [`LookupAddressEntry`](LookupAddressEntry.md)[], [`AddressFamily`](../type-aliases/AddressFamily.md)]\>

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:427

***

### maxBodyLength?

> `optional` **maxBodyLength**: `number`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:390

***

### maxContentLength?

> `optional` **maxContentLength**: `number`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:388

***

### maxRate?

> `optional` **maxRate**: `number` \| [`number`, `number`]

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:392

***

### maxRedirects?

> `optional` **maxRedirects**: `number`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:391

***

### method?

> `optional` **method**: [`StringLiteralsOrString`](../type-aliases/StringLiteralsOrString.md)\<[`Method`](../type-aliases/Method.md)\>

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:368

***

### onDownloadProgress()?

> `optional` **onDownloadProgress**: (`progressEvent`) => `void`

#### Parameters

• **progressEvent**: [`AxiosProgressEvent`](AxiosProgressEvent.md)

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:387

***

### onUploadProgress()?

> `optional` **onUploadProgress**: (`progressEvent`) => `void`

#### Parameters

• **progressEvent**: [`AxiosProgressEvent`](AxiosProgressEvent.md)

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:386

***

### params?

> `optional` **params**: `any`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:374

***

### paramsSerializer?

> `optional` **paramsSerializer**: [`ParamsSerializerOptions`](ParamsSerializerOptions.md) \| [`CustomParamsSerializer`](CustomParamsSerializer.md)

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

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:444

***

### proxy?

> `optional` **proxy**: `false` \| [`AxiosProxyConfig`](AxiosProxyConfig.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:410

***

### redact?

> `optional` **redact**: `string`[]

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:451

***

### responseEncoding?

> `optional` **responseEncoding**: [`StringLiteralsOrString`](../type-aliases/StringLiteralsOrString.md)\<[`responseEncoding`](../type-aliases/responseEncoding.md)\>

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:383

***

### responseType?

> `optional` **responseType**: [`ResponseType`](../type-aliases/ResponseType.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:382

***

### signal?

> `optional` **signal**: [`GenericAbortSignal`](GenericAbortSignal.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:414

***

### socketPath?

> `optional` **socketPath**: `null` \| `string`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:405

***

### timeout?

> `optional` **timeout**: `number`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:377

***

### timeoutErrorMessage?

> `optional` **timeoutErrorMessage**: `string`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:378

***

### transformRequest?

> `optional` **transformRequest**: [`AxiosRequestTransformer`](AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](AxiosRequestTransformer.md)[]

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:371

***

### transformResponse?

> `optional` **transformResponse**: [`AxiosResponseTransformer`](AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](AxiosResponseTransformer.md)[]

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:372

***

### transitional?

> `optional` **transitional**: [`TransitionalOptions`](TransitionalOptions.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:413

***

### transport?

> `optional` **transport**: `any`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:407

***

### url?

> `optional` **url**: `string`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:367

***

### validateStatus?

> `optional` **validateStatus**: `null` \| (`status`) => `boolean`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:389

***

### withCredentials?

> `optional` **withCredentials**: `boolean`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:379

***

### withXSRFToken?

> `optional` **withXSRFToken**: `boolean` \| (`config`) => `undefined` \| `boolean`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:443

***

### xsrfCookieName?

> `optional` **xsrfCookieName**: `string`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:384

***

### xsrfHeaderName?

> `optional` **xsrfHeaderName**: `string`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:385
