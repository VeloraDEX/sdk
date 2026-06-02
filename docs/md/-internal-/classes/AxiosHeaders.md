[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AxiosHeaders

# Class: AxiosHeaders

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AxiosHeaders()

> **new AxiosHeaders**(`headers`?): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **headers?**: `string` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md) \| [`AxiosHeaders`](AxiosHeaders.md)

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:24

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`IterableIterator`](../interfaces/IterableIterator.md)\<[`string`, [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)], `any`, `any`\>

#### Returns

[`IterableIterator`](../interfaces/IterableIterator.md)\<[`string`, [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)], `any`, `any`\>

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:92

***

### clear()

> **clear**(`matcher`?): `boolean`

#### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:42

***

### concat()

> **concat**(...`targets`): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• ...**targets**: (`undefined` \| `null` \| `string` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md) \| [`AxiosHeaders`](AxiosHeaders.md))[]

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:46

***

### delete()

> **delete**(`header`, `matcher`?): `boolean`

#### Parameters

• **header**: `string` \| `string`[]

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:40

***

### get()

#### get(headerName, parser)

> **get**(`headerName`, `parser`): `null` \| `RegExpExecArray`

##### Parameters

• **headerName**: `string`

• **parser**: `RegExp`

##### Returns

`null` \| `RegExpExecArray`

##### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:35

#### get(headerName, matcher)

> **get**(`headerName`, `matcher`?): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Parameters

• **headerName**: `string`

• **matcher?**: `true` \| [`AxiosHeaderParser`](../type-aliases/AxiosHeaderParser.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:36

***

### getAccept()

#### getAccept(parser)

> **getAccept**(`parser`?): `null` \| `RegExpExecArray`

##### Parameters

• **parser?**: `RegExp`

##### Returns

`null` \| `RegExpExecArray`

##### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:71

#### getAccept(matcher)

> **getAccept**(`matcher`?): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:72

***

### getAuthorization()

#### getAuthorization(parser)

> **getAuthorization**(`parser`?): `null` \| `RegExpExecArray`

##### Parameters

• **parser?**: `RegExp`

##### Returns

`null` \| `RegExpExecArray`

##### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:86

#### getAuthorization(matcher)

> **getAuthorization**(`matcher`?): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:87

***

### getContentEncoding()

#### getContentEncoding(parser)

> **getContentEncoding**(`parser`?): `null` \| `RegExpExecArray`

##### Parameters

• **parser?**: `RegExp`

##### Returns

`null` \| `RegExpExecArray`

##### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:81

#### getContentEncoding(matcher)

> **getContentEncoding**(`matcher`?): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:82

***

### getContentLength()

#### getContentLength(parser)

> **getContentLength**(`parser`?): `null` \| `RegExpExecArray`

##### Parameters

• **parser?**: `RegExp`

##### Returns

`null` \| `RegExpExecArray`

##### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:66

#### getContentLength(matcher)

> **getContentLength**(`matcher`?): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:67

***

### getContentType()

#### getContentType(parser)

> **getContentType**(`parser`?): `null` \| `RegExpExecArray`

##### Parameters

• **parser?**: `RegExp`

##### Returns

`null` \| `RegExpExecArray`

##### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:61

#### getContentType(matcher)

> **getContentType**(`matcher`?): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:62

***

### getSetCookie()

> **getSetCookie**(): `string`[]

#### Returns

`string`[]

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:90

***

### getUserAgent()

#### getUserAgent(parser)

> **getUserAgent**(`parser`?): `null` \| `RegExpExecArray`

##### Parameters

• **parser?**: `RegExp`

##### Returns

`null` \| `RegExpExecArray`

##### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:76

#### getUserAgent(matcher)

> **getUserAgent**(`matcher`?): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:77

***

### has()

> **has**(`header`, `matcher`?): `boolean`

#### Parameters

• **header**: `string`

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:38

***

### hasAccept()

> **hasAccept**(`matcher`?): `boolean`

#### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:73

***

### hasAuthorization()

> **hasAuthorization**(`matcher`?): `boolean`

#### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:88

***

### hasContentEncoding()

> **hasContentEncoding**(`matcher`?): `boolean`

#### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:83

***

### hasContentLength()

> **hasContentLength**(`matcher`?): `boolean`

#### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:68

***

### hasContentType()

> **hasContentType**(`matcher`?): `boolean`

#### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:63

***

### hasUserAgent()

> **hasUserAgent**(`matcher`?): `boolean`

#### Parameters

• **matcher?**: [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:78

***

### normalize()

> **normalize**(`format`): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **format**: `boolean`

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:44

***

### set()

#### set(headerName, value, rewrite)

> **set**(`headerName`?, `value`?, `rewrite`?): [`AxiosHeaders`](AxiosHeaders.md)

##### Parameters

• **headerName?**: `string`

• **value?**: [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

• **rewrite?**: `boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaders`](AxiosHeaders.md)

##### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:28

#### set(headers, rewrite)

> **set**(`headers`?, `rewrite`?): [`AxiosHeaders`](AxiosHeaders.md)

##### Parameters

• **headers?**: `string` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md) \| [`AxiosHeaders`](AxiosHeaders.md)

• **rewrite?**: `boolean`

##### Returns

[`AxiosHeaders`](AxiosHeaders.md)

##### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:33

***

### setAccept()

> **setAccept**(`value`, `rewrite`?): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **value**: [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

• **rewrite?**: `boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:70

***

### setAuthorization()

> **setAuthorization**(`value`, `rewrite`?): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **value**: [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

• **rewrite?**: `boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:85

***

### setContentEncoding()

> **setContentEncoding**(`value`, `rewrite`?): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **value**: [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

• **rewrite?**: `boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:80

***

### setContentLength()

> **setContentLength**(`value`, `rewrite`?): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **value**: [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

• **rewrite?**: `boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:65

***

### setContentType()

> **setContentType**(`value`, `rewrite`?): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **value**: [`ContentType`](../type-aliases/ContentType.md)

• **rewrite?**: `boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:60

***

### setUserAgent()

> **setUserAgent**(`value`, `rewrite`?): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **value**: [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

• **rewrite?**: `boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:75

***

### toJSON()

> **toJSON**(`asStrings`?): [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md)

#### Parameters

• **asStrings?**: `boolean`

#### Returns

[`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:50

***

### accessor()

> `static` **accessor**(`header`): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **header**: `string` \| `string`[]

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:54

***

### concat()

> `static` **concat**(...`targets`): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• ...**targets**: (`undefined` \| `null` \| `string` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md) \| [`AxiosHeaders`](AxiosHeaders.md))[]

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:56

***

### from()

> `static` **from**(`thing`?): [`AxiosHeaders`](AxiosHeaders.md)

#### Parameters

• **thing?**: `string` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md) \| [`AxiosHeaders`](AxiosHeaders.md)

#### Returns

[`AxiosHeaders`](AxiosHeaders.md)

#### Defined in

node\_modules/.pnpm/axios@1.16.0/node\_modules/axios/index.d.ts:52
