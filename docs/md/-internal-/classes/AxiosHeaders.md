[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AxiosHeaders

# Class: AxiosHeaders

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:25

## Indexable

> \[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AxiosHeaders**(`headers?`): `AxiosHeaders`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:26

#### Parameters

##### headers?

`string` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md) \| `AxiosHeaders`

#### Returns

`AxiosHeaders`

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`IterableIterator`](../interfaces/IterableIterator.md)\<\[`string`, [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)\]\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:102

#### Returns

[`IterableIterator`](../interfaces/IterableIterator.md)\<\[`string`, [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)\]\>

***

### clear()

> **clear**(`matcher?`): `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:46

#### Parameters

##### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

***

### concat()

> **concat**(...`targets`): `AxiosHeaders`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:50

#### Parameters

##### targets

...(`string` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md) \| `AxiosHeaders` \| `null` \| `undefined`)[]

#### Returns

`AxiosHeaders`

***

### delete()

> **delete**(`header`, `matcher?`): `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:44

#### Parameters

##### header

`string` \| `string`[]

##### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

***

### get()

#### Call Signature

> **get**(`headerName`, `parser`): [`AxiosHeaderParameters`](../type-aliases/AxiosHeaderParameters.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:38

##### Parameters

###### headerName

`string`

###### parser

(`value`) => [`AxiosHeaderParameters`](../type-aliases/AxiosHeaderParameters.md)

##### Returns

[`AxiosHeaderParameters`](../type-aliases/AxiosHeaderParameters.md)

#### Call Signature

> **get**(`headerName`, `parser`): `RegExpExecArray` \| `null`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:39

##### Parameters

###### headerName

`string`

###### parser

`RegExp`

##### Returns

`RegExpExecArray` \| `null`

#### Call Signature

> **get**(`headerName`, `matcher?`): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:40

##### Parameters

###### headerName

`string`

###### matcher?

`true` \| [`AxiosHeaderParser`](../type-aliases/AxiosHeaderParser.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

***

### getAccept()

#### Call Signature

> **getAccept**(`parser?`): `RegExpExecArray` \| `null`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:79

##### Parameters

###### parser?

`RegExp`

##### Returns

`RegExpExecArray` \| `null`

#### Call Signature

> **getAccept**(`matcher?`): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:80

##### Parameters

###### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

***

### getAuthorization()

#### Call Signature

> **getAuthorization**(`parser?`): `RegExpExecArray` \| `null`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:94

##### Parameters

###### parser?

`RegExp`

##### Returns

`RegExpExecArray` \| `null`

#### Call Signature

> **getAuthorization**(`matcher?`): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:95

##### Parameters

###### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

***

### getContentEncoding()

#### Call Signature

> **getContentEncoding**(`parser?`): `RegExpExecArray` \| `null`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:89

##### Parameters

###### parser?

`RegExp`

##### Returns

`RegExpExecArray` \| `null`

#### Call Signature

> **getContentEncoding**(`matcher?`): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:90

##### Parameters

###### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

***

### getContentLength()

#### Call Signature

> **getContentLength**(`parser?`): `RegExpExecArray` \| `null`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:74

##### Parameters

###### parser?

`RegExp`

##### Returns

`RegExpExecArray` \| `null`

#### Call Signature

> **getContentLength**(`matcher?`): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:75

##### Parameters

###### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

***

### getContentType()

#### Call Signature

> **getContentType**(`parser?`): `RegExpExecArray` \| `null`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:69

##### Parameters

###### parser?

`RegExp`

##### Returns

`RegExpExecArray` \| `null`

#### Call Signature

> **getContentType**(`matcher?`): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:70

##### Parameters

###### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

***

### getSetCookie()

> **getSetCookie**(): `string`[]

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:98

#### Returns

`string`[]

***

### getUserAgent()

#### Call Signature

> **getUserAgent**(`parser?`): `RegExpExecArray` \| `null`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:84

##### Parameters

###### parser?

`RegExp`

##### Returns

`RegExpExecArray` \| `null`

#### Call Signature

> **getUserAgent**(`matcher?`): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:85

##### Parameters

###### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

***

### has()

> **has**(`header`, `matcher?`): `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:42

#### Parameters

##### header

`string`

##### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

***

### hasAccept()

> **hasAccept**(`matcher?`): `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:81

#### Parameters

##### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

***

### hasAuthorization()

> **hasAuthorization**(`matcher?`): `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:96

#### Parameters

##### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

***

### hasContentEncoding()

> **hasContentEncoding**(`matcher?`): `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:91

#### Parameters

##### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

***

### hasContentLength()

> **hasContentLength**(`matcher?`): `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:76

#### Parameters

##### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

***

### hasContentType()

> **hasContentType**(`matcher?`): `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:71

#### Parameters

##### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

***

### hasUserAgent()

> **hasUserAgent**(`matcher?`): `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:86

#### Parameters

##### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

***

### normalize()

> **normalize**(`format`): `AxiosHeaders`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:48

#### Parameters

##### format

`boolean`

#### Returns

`AxiosHeaders`

***

### set()

#### Call Signature

> **set**(`headerName?`, `value?`, `rewrite?`): `AxiosHeaders`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:30

##### Parameters

###### headerName?

`string`

###### value?

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

###### rewrite?

`boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

`AxiosHeaders`

#### Call Signature

> **set**(`headers?`, `rewrite?`): `AxiosHeaders`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:35

##### Parameters

###### headers?

`string` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md) \| `AxiosHeaders`

###### rewrite?

`boolean`

##### Returns

`AxiosHeaders`

#### Call Signature

> **set**(`headers?`, `rewrite?`): `AxiosHeaders`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:36

##### Parameters

###### headers?

[`Iterable`](../interfaces/Iterable.md)\<\[`string`, [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)\], `any`, `any`\>

###### rewrite?

`boolean`

##### Returns

`AxiosHeaders`

***

### setAccept()

> **setAccept**(`value`, `rewrite?`): `AxiosHeaders`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:78

#### Parameters

##### value

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### rewrite?

`boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`AxiosHeaders`

***

### setAuthorization()

> **setAuthorization**(`value`, `rewrite?`): `AxiosHeaders`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:93

#### Parameters

##### value

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### rewrite?

`boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`AxiosHeaders`

***

### setContentEncoding()

> **setContentEncoding**(`value`, `rewrite?`): `AxiosHeaders`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:88

#### Parameters

##### value

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### rewrite?

`boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`AxiosHeaders`

***

### setContentLength()

> **setContentLength**(`value`, `rewrite?`): `AxiosHeaders`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:73

#### Parameters

##### value

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### rewrite?

`boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`AxiosHeaders`

***

### setContentType()

> **setContentType**(`value`, `rewrite?`): `AxiosHeaders`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:68

#### Parameters

##### value

[`ContentType`](../type-aliases/ContentType.md)

##### rewrite?

`boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`AxiosHeaders`

***

### setUserAgent()

> **setUserAgent**(`value`, `rewrite?`): `AxiosHeaders`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:83

#### Parameters

##### value

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### rewrite?

`boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`AxiosHeaders`

***

### toJSON()

#### Call Signature

> **toJSON**(`asStrings`): [`Record`](../type-aliases/Record.md)\<`string`, `string`\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:54

##### Parameters

###### asStrings

`true`

##### Returns

[`Record`](../type-aliases/Record.md)\<`string`, `string`\>

#### Call Signature

> **toJSON**(`asStrings?`): [`Record`](../type-aliases/Record.md)\<`string`, `string` \| `string`[]\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:55

##### Parameters

###### asStrings?

`false`

##### Returns

[`Record`](../type-aliases/Record.md)\<`string`, `string` \| `string`[]\>

#### Call Signature

> **toJSON**(`asStrings?`): [`Record`](../type-aliases/Record.md)\<`string`, `string` \| `string`[]\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:56

##### Parameters

###### asStrings?

`boolean`

##### Returns

[`Record`](../type-aliases/Record.md)\<`string`, `string` \| `string`[]\>

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:100

#### Returns

`string`

***

### accessor()

> `static` **accessor**(`header`): `AxiosHeaders`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:62

#### Parameters

##### header

`string` \| `string`[]

#### Returns

`AxiosHeaders`

***

### concat()

> `static` **concat**(...`targets`): `AxiosHeaders`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:64

#### Parameters

##### targets

...(`string` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md) \| `AxiosHeaders` \| `null` \| `undefined`)[]

#### Returns

`AxiosHeaders`

***

### from()

> `static` **from**(`thing?`): `AxiosHeaders`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:58

#### Parameters

##### thing?

`string` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md) \| `AxiosHeaders`

#### Returns

`AxiosHeaders`

***

### parseParameters()

> `static` **parseParameters**(`value`): [`AxiosHeaderParameters`](../type-aliases/AxiosHeaderParameters.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:60

#### Parameters

##### value

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

#### Returns

[`AxiosHeaderParameters`](../type-aliases/AxiosHeaderParameters.md)
