[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadableStream

# Variable: ReadableStream()

> **ReadableStream**: (`underlyingSource`, `strategy`?) => [`ReadableStream`](../interfaces/ReadableStream.md)\<`Uint8Array`\>\<`R`\>(`underlyingSource`?, `strategy`?) => [`ReadableStream`](../interfaces/ReadableStream.md)\<`R`\>

## Parameters

• **underlyingSource**: `UnderlyingByteSource`

• **strategy?**: `QueuingStrategy`\<`Uint8Array`\>

## Returns

[`ReadableStream`](../interfaces/ReadableStream.md)\<`Uint8Array`\>

## Parameters

• **underlyingSource?**: `UnderlyingSource`\<`R`\>

• **strategy?**: `QueuingStrategy`\<`R`\>

## Returns

[`ReadableStream`](../interfaces/ReadableStream.md)\<`R`\>

## Type declaration

### prototype

> **prototype**: [`ReadableStream`](../interfaces/ReadableStream.md)\<`any`\>

### from()

#### Type Parameters

• **T**

#### Parameters

• **iterable**: [`Iterable`](../interfaces/Iterable.md)\<`T`, `any`, `any`\> \| [`AsyncIterable`](../interfaces/AsyncIterable.md)\<`T`, `any`, `any`\>

#### Returns

[`ReadableStream`](../interfaces/ReadableStream.md)\<`T`\>

## Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:170
