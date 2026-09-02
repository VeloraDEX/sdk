[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadableStream

# Interface: ReadableStream\<R\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:173

This Streams API interface represents a readable stream of byte data.

## Type Parameters

### R

`R` = `any`

## Properties

### locked

> `readonly` **locked**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:174

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): [`ReadableStreamAsyncIterator`](ReadableStreamAsyncIterator.md)\<`R`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:183

#### Returns

[`ReadableStreamAsyncIterator`](ReadableStreamAsyncIterator.md)\<`R`\>

***

### cancel()

> **cancel**(`reason?`): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:175

#### Parameters

##### reason?

`any`

#### Returns

`Promise`\<`void`\>

***

### getReader()

#### Call Signature

> **getReader**(`options`): [`ReadableStreamBYOBReader`](ReadableStreamBYOBReader.md)

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:176

##### Parameters

###### options

###### mode

`"byob"`

##### Returns

[`ReadableStreamBYOBReader`](ReadableStreamBYOBReader.md)

#### Call Signature

> **getReader**(): [`ReadableStreamDefaultReader`](ReadableStreamDefaultReader.md)\<`R`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:177

##### Returns

[`ReadableStreamDefaultReader`](ReadableStreamDefaultReader.md)\<`R`\>

#### Call Signature

> **getReader**(`options?`): [`ReadableStreamReader`](../type-aliases/ReadableStreamReader.md)\<`R`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:178

##### Parameters

###### options?

[`ReadableStreamGetReaderOptions`](ReadableStreamGetReaderOptions.md)

##### Returns

[`ReadableStreamReader`](../type-aliases/ReadableStreamReader.md)\<`R`\>

***

### pipeThrough()

> **pipeThrough**\<`T`\>(`transform`, `options?`): `ReadableStream`\<`T`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:179

#### Type Parameters

##### T

`T`

#### Parameters

##### transform

[`ReadableWritablePair`](ReadableWritablePair.md)\<`T`, `R`\>

##### options?

[`StreamPipeOptions`](StreamPipeOptions.md)

#### Returns

`ReadableStream`\<`T`\>

***

### pipeTo()

> **pipeTo**(`destination`, `options?`): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:180

#### Parameters

##### destination

[`WritableStream`](WritableStream.md)\<`R`\>

##### options?

[`StreamPipeOptions`](StreamPipeOptions.md)

#### Returns

`Promise`\<`void`\>

***

### tee()

> **tee**(): \[`ReadableStream`\<`R`\>, `ReadableStream`\<`R`\>\]

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:181

#### Returns

\[`ReadableStream`\<`R`\>, `ReadableStream`\<`R`\>\]

***

### values()

> **values**(`options?`): [`ReadableStreamAsyncIterator`](ReadableStreamAsyncIterator.md)\<`R`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:182

#### Parameters

##### options?

###### preventCancel?

`boolean`

#### Returns

[`ReadableStreamAsyncIterator`](ReadableStreamAsyncIterator.md)\<`R`\>
