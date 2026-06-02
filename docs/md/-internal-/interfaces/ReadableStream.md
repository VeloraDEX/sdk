[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadableStream

# Interface: ReadableStream\<R\>

This Streams API interface represents a readable stream of byte data.

## Type Parameters

• **R** = `any`

## Properties

### locked

> `readonly` **locked**: `boolean`

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:171

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): [`AsyncIterableIterator`](AsyncIterableIterator.md)\<`R`, `any`, `any`\>

#### Returns

[`AsyncIterableIterator`](AsyncIterableIterator.md)\<`R`, `any`, `any`\>

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:180

***

### cancel()

> **cancel**(`reason`?): `Promise`\<`void`\>

#### Parameters

• **reason?**: `any`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:172

***

### getReader()

#### getReader(options)

> **getReader**(`options`): [`ReadableStreamBYOBReader`](ReadableStreamBYOBReader.md)

##### Parameters

• **options**

• **options.mode**: `"byob"`

##### Returns

[`ReadableStreamBYOBReader`](ReadableStreamBYOBReader.md)

##### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:173

#### getReader()

> **getReader**(): [`ReadableStreamDefaultReader`](ReadableStreamDefaultReader.md)\<`R`\>

##### Returns

[`ReadableStreamDefaultReader`](ReadableStreamDefaultReader.md)\<`R`\>

##### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:174

#### getReader(options)

> **getReader**(`options`?): [`ReadableStreamReader`](../type-aliases/ReadableStreamReader.md)\<`R`\>

##### Parameters

• **options?**: `ReadableStreamGetReaderOptions`

##### Returns

[`ReadableStreamReader`](../type-aliases/ReadableStreamReader.md)\<`R`\>

##### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:175

***

### pipeThrough()

> **pipeThrough**\<`T`\>(`transform`, `options`?): [`ReadableStream`](ReadableStream.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

• **transform**: `ReadableWritablePair`\<`T`, `R`\>

• **options?**: `StreamPipeOptions`

#### Returns

[`ReadableStream`](ReadableStream.md)\<`T`\>

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:176

***

### pipeTo()

> **pipeTo**(`destination`, `options`?): `Promise`\<`void`\>

#### Parameters

• **destination**: [`WritableStream`](WritableStream.md)\<`R`\>

• **options?**: `StreamPipeOptions`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:177

***

### tee()

> **tee**(): [[`ReadableStream`](ReadableStream.md)\<`R`\>, [`ReadableStream`](ReadableStream.md)\<`R`\>]

#### Returns

[[`ReadableStream`](ReadableStream.md)\<`R`\>, [`ReadableStream`](ReadableStream.md)\<`R`\>]

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:178

***

### values()

> **values**(`options`?): [`AsyncIterableIterator`](AsyncIterableIterator.md)\<`R`, `any`, `any`\>

#### Parameters

• **options?**

• **options.preventCancel?**: `boolean`

#### Returns

[`AsyncIterableIterator`](AsyncIterableIterator.md)\<`R`, `any`, `any`\>

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:179
