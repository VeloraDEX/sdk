[**@velora-dex/sdk**](../../../../README.md)

***

[@velora-dex/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [node:stream/promises](../README.md) / pipeline

# Function: pipeline()

## Call Signature

> **pipeline**\<`A`, `B`\>(`source`, `destination`, `options?`): [`PipelinePromise`](../../../namespaces/internal/type-aliases/PipelinePromise.md)\<`B`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/promises.d.ts:21

### Type Parameters

#### A

`A` *extends* [`PipelineSource`](../../../namespaces/internal/type-aliases/PipelineSource.md)\<`any`\>

#### B

`B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>\> \| [`PipelineDestinationPromiseFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>, `any`\> \| [`PipelineDestinationIterableFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

#### source

`A`

#### destination

`B`

#### options?

[`PipelineOptions`](../../../namespaces/internal/interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../../namespaces/internal/type-aliases/PipelinePromise.md)\<`B`\>

## Call Signature

> **pipeline**\<`A`, `T1`, `B`\>(`source`, `transform1`, `destination`, `options?`): [`PipelinePromise`](../../../namespaces/internal/type-aliases/PipelinePromise.md)\<`B`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/promises.d.ts:26

### Type Parameters

#### A

`A` *extends* [`PipelineSource`](../../../namespaces/internal/type-aliases/PipelineSource.md)\<`any`\>

#### T1

`T1` *extends* [`PipelineTransform`](../../../namespaces/internal/type-aliases/PipelineTransform.md)\<`A`, `any`\>

#### B

`B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>\> \| [`PipelineDestinationPromiseFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>, `any`\> \| [`PipelineDestinationIterableFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

#### source

`A`

#### transform1

`T1`

#### destination

`B`

#### options?

[`PipelineOptions`](../../../namespaces/internal/interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../../namespaces/internal/type-aliases/PipelinePromise.md)\<`B`\>

## Call Signature

> **pipeline**\<`A`, `T1`, `T2`, `B`\>(`source`, `transform1`, `transform2`, `destination`, `options?`): [`PipelinePromise`](../../../namespaces/internal/type-aliases/PipelinePromise.md)\<`B`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/promises.d.ts:36

### Type Parameters

#### A

`A` *extends* [`PipelineSource`](../../../namespaces/internal/type-aliases/PipelineSource.md)\<`any`\>

#### T1

`T1` *extends* [`PipelineTransform`](../../../namespaces/internal/type-aliases/PipelineTransform.md)\<`A`, `any`\>

#### T2

`T2` *extends* [`PipelineTransform`](../../../namespaces/internal/type-aliases/PipelineTransform.md)\<`T1`, `any`\>

#### B

`B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>\> \| [`PipelineDestinationPromiseFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>, `any`\> \| [`PipelineDestinationIterableFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

#### source

`A`

#### transform1

`T1`

#### transform2

`T2`

#### destination

`B`

#### options?

[`PipelineOptions`](../../../namespaces/internal/interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../../namespaces/internal/type-aliases/PipelinePromise.md)\<`B`\>

## Call Signature

> **pipeline**\<`A`, `T1`, `T2`, `T3`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `destination`, `options?`): [`PipelinePromise`](../../../namespaces/internal/type-aliases/PipelinePromise.md)\<`B`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/promises.d.ts:48

### Type Parameters

#### A

`A` *extends* [`PipelineSource`](../../../namespaces/internal/type-aliases/PipelineSource.md)\<`any`\>

#### T1

`T1` *extends* [`PipelineTransform`](../../../namespaces/internal/type-aliases/PipelineTransform.md)\<`A`, `any`\>

#### T2

`T2` *extends* [`PipelineTransform`](../../../namespaces/internal/type-aliases/PipelineTransform.md)\<`T1`, `any`\>

#### T3

`T3` *extends* [`PipelineTransform`](../../../namespaces/internal/type-aliases/PipelineTransform.md)\<`T2`, `any`\>

#### B

`B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>\> \| [`PipelineDestinationPromiseFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>, `any`\> \| [`PipelineDestinationIterableFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

#### source

`A`

#### transform1

`T1`

#### transform2

`T2`

#### transform3

`T3`

#### destination

`B`

#### options?

[`PipelineOptions`](../../../namespaces/internal/interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../../namespaces/internal/type-aliases/PipelinePromise.md)\<`B`\>

## Call Signature

> **pipeline**\<`A`, `T1`, `T2`, `T3`, `T4`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `transform4`, `destination`, `options?`): [`PipelinePromise`](../../../namespaces/internal/type-aliases/PipelinePromise.md)\<`B`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/promises.d.ts:62

### Type Parameters

#### A

`A` *extends* [`PipelineSource`](../../../namespaces/internal/type-aliases/PipelineSource.md)\<`any`\>

#### T1

`T1` *extends* [`PipelineTransform`](../../../namespaces/internal/type-aliases/PipelineTransform.md)\<`A`, `any`\>

#### T2

`T2` *extends* [`PipelineTransform`](../../../namespaces/internal/type-aliases/PipelineTransform.md)\<`T1`, `any`\>

#### T3

`T3` *extends* [`PipelineTransform`](../../../namespaces/internal/type-aliases/PipelineTransform.md)\<`T2`, `any`\>

#### T4

`T4` *extends* [`PipelineTransform`](../../../namespaces/internal/type-aliases/PipelineTransform.md)\<`T3`, `any`\>

#### B

`B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>\> \| [`PipelineDestinationPromiseFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>, `any`\> \| [`PipelineDestinationIterableFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../../namespaces/internal/type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

#### source

`A`

#### transform1

`T1`

#### transform2

`T2`

#### transform3

`T3`

#### transform4

`T4`

#### destination

`B`

#### options?

[`PipelineOptions`](../../../namespaces/internal/interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../../namespaces/internal/type-aliases/PipelinePromise.md)\<`B`\>

## Call Signature

> **pipeline**(`streams`, `options?`): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/promises.d.ts:78

### Parameters

#### streams

readonly ([`ReadableStream`](../../../interfaces/ReadableStream-1.md) \| [`WritableStream`](../../../interfaces/WritableStream-1.md) \| [`ReadWriteStream`](../../../interfaces/ReadWriteStream.md))[]

#### options?

[`PipelineOptions`](../../../namespaces/internal/interfaces/PipelineOptions.md)

### Returns

`Promise`\<`void`\>

## Call Signature

> **pipeline**(`stream1`, `stream2`, ...`streams`): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/promises.d.ts:82

### Parameters

#### stream1

[`ReadableStream`](../../../interfaces/ReadableStream-1.md)

#### stream2

[`WritableStream`](../../../interfaces/WritableStream-1.md) \| [`ReadWriteStream`](../../../interfaces/ReadWriteStream.md)

#### streams

...([`WritableStream`](../../../interfaces/WritableStream-1.md) \| [`ReadWriteStream`](../../../interfaces/ReadWriteStream.md) \| [`PipelineOptions`](../../../namespaces/internal/interfaces/PipelineOptions.md))[]

### Returns

`Promise`\<`void`\>
