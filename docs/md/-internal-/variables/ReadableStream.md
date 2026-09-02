[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadableStream

# Variable: ReadableStream

> **ReadableStream**: \{(`underlyingSource`, `strategy?`): [`ReadableStream`](../interfaces/ReadableStream.md)\<`Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>\>; \<`R`\>(`underlyingSource?`, `strategy?`): [`ReadableStream`](../interfaces/ReadableStream.md)\<`R`\>; `prototype`: [`ReadableStream`](../interfaces/ReadableStream.md); `from`: [`ReadableStream`](../interfaces/ReadableStream.md)\<`T`\>; \}

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:173

## Type Declaration

## Call Signature

> **new ReadableStream**(`underlyingSource`, `strategy?`): [`ReadableStream`](../interfaces/ReadableStream.md)\<`Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>\>

### Parameters

#### underlyingSource

[`UnderlyingByteSource`](../interfaces/UnderlyingByteSource.md)

#### strategy?

[`QueuingStrategy`](../interfaces/QueuingStrategy.md)\<`Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>\>

### Returns

[`ReadableStream`](../interfaces/ReadableStream.md)\<`Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>\>

## Call Signature

> **new ReadableStream**\<`R`\>(`underlyingSource?`, `strategy?`): [`ReadableStream`](../interfaces/ReadableStream.md)\<`R`\>

### Parameters

#### underlyingSource?

[`UnderlyingSource`](../interfaces/UnderlyingSource.md)\<`R`\>

#### strategy?

[`QueuingStrategy`](../interfaces/QueuingStrategy.md)\<`R`\>

### Returns

[`ReadableStream`](../interfaces/ReadableStream.md)\<`R`\>

### prototype

> **prototype**: [`ReadableStream`](../interfaces/ReadableStream.md)

### from()

> **from**\<`T`\>(`iterable`): [`ReadableStream`](../interfaces/ReadableStream.md)\<`T`\>

#### Type Parameters

##### T

`T`

#### Parameters

##### iterable

[`Iterable`](../interfaces/Iterable.md)\<`T`, `any`, `any`\> \| [`AsyncIterable`](../interfaces/AsyncIterable.md)\<`T`, `any`, `any`\>

#### Returns

[`ReadableStream`](../interfaces/ReadableStream.md)\<`T`\>
