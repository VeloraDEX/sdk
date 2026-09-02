[**@velora-dex/sdk**](../../../../../../README.md)

***

[@velora-dex/sdk](../../../../../../globals.md) / [\<internal\>](../../../../../README.md) / [internal](../../../README.md) / [pipeline](../README.md) / \_\_promisify\_\_

# Function: \_\_promisify\_\_()

## Call Signature

> **\_\_promisify\_\_**\<`A`, `B`\>(`source`, `destination`, `options?`): [`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1633

### Type Parameters

#### A

`A` *extends* [`PipelineSource`](../../../type-aliases/PipelineSource.md)\<`any`\>

#### B

`B` *extends* [`WritableStream`](../../../../../interfaces/WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../../../type-aliases/ArrayBufferLike.md)\>\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../../../type-aliases/ArrayBufferLike.md)\>, `any`\> \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

#### source

`A`

#### destination

`B`

#### options?

[`PipelineOptions`](../../../interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

## Call Signature

> **\_\_promisify\_\_**\<`A`, `T1`, `B`\>(`source`, `transform1`, `destination`, `options?`): [`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1638

### Type Parameters

#### A

`A` *extends* [`PipelineSource`](../../../type-aliases/PipelineSource.md)\<`any`\>

#### T1

`T1` *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`A`, `any`\>

#### B

`B` *extends* [`WritableStream`](../../../../../interfaces/WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../../../type-aliases/ArrayBufferLike.md)\>\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../../../type-aliases/ArrayBufferLike.md)\>, `any`\> \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

#### source

`A`

#### transform1

`T1`

#### destination

`B`

#### options?

[`PipelineOptions`](../../../interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

## Call Signature

> **\_\_promisify\_\_**\<`A`, `T1`, `T2`, `B`\>(`source`, `transform1`, `transform2`, `destination`, `options?`): [`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1648

### Type Parameters

#### A

`A` *extends* [`PipelineSource`](../../../type-aliases/PipelineSource.md)\<`any`\>

#### T1

`T1` *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`A`, `any`\>

#### T2

`T2` *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`T1`, `any`\>

#### B

`B` *extends* [`WritableStream`](../../../../../interfaces/WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../../../type-aliases/ArrayBufferLike.md)\>\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../../../type-aliases/ArrayBufferLike.md)\>, `any`\> \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

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

[`PipelineOptions`](../../../interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

## Call Signature

> **\_\_promisify\_\_**\<`A`, `T1`, `T2`, `T3`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `destination`, `options?`): [`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1660

### Type Parameters

#### A

`A` *extends* [`PipelineSource`](../../../type-aliases/PipelineSource.md)\<`any`\>

#### T1

`T1` *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`A`, `any`\>

#### T2

`T2` *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`T1`, `any`\>

#### T3

`T3` *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`T2`, `any`\>

#### B

`B` *extends* [`WritableStream`](../../../../../interfaces/WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../../../type-aliases/ArrayBufferLike.md)\>\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../../../type-aliases/ArrayBufferLike.md)\>, `any`\> \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

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

[`PipelineOptions`](../../../interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

## Call Signature

> **\_\_promisify\_\_**\<`A`, `T1`, `T2`, `T3`, `T4`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `transform4`, `destination`, `options?`): [`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1674

### Type Parameters

#### A

`A` *extends* [`PipelineSource`](../../../type-aliases/PipelineSource.md)\<`any`\>

#### T1

`T1` *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`A`, `any`\>

#### T2

`T2` *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`T1`, `any`\>

#### T3

`T3` *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`T2`, `any`\>

#### T4

`T4` *extends* [`PipelineTransform`](../../../type-aliases/PipelineTransform.md)\<`T3`, `any`\>

#### B

`B` *extends* [`WritableStream`](../../../../../interfaces/WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../../../type-aliases/ArrayBufferLike.md)\>\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../../../type-aliases/ArrayBufferLike.md)\>, `any`\> \| [`PipelineDestinationIterableFunction`](../../../type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../../../type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

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

[`PipelineOptions`](../../../interfaces/PipelineOptions.md)

### Returns

[`PipelinePromise`](../../../type-aliases/PipelinePromise.md)\<`B`\>

## Call Signature

> **\_\_promisify\_\_**(`streams`, `options?`): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1690

### Parameters

#### streams

readonly ([`ReadableStream`](../../../../../interfaces/ReadableStream-1.md) \| [`WritableStream`](../../../../../interfaces/WritableStream-1.md) \| [`ReadWriteStream`](../../../../../interfaces/ReadWriteStream.md))[]

#### options?

[`PipelineOptions`](../../../interfaces/PipelineOptions.md)

### Returns

`Promise`\<`void`\>

## Call Signature

> **\_\_promisify\_\_**(`stream1`, `stream2`, ...`streams`): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1694

### Parameters

#### stream1

[`ReadableStream`](../../../../../interfaces/ReadableStream-1.md)

#### stream2

[`WritableStream`](../../../../../interfaces/WritableStream-1.md) \| [`ReadWriteStream`](../../../../../interfaces/ReadWriteStream.md)

#### streams

...([`WritableStream`](../../../../../interfaces/WritableStream-1.md) \| [`ReadWriteStream`](../../../../../interfaces/ReadWriteStream.md) \| [`PipelineOptions`](../../../interfaces/PipelineOptions.md))[]

### Returns

`Promise`\<`void`\>
