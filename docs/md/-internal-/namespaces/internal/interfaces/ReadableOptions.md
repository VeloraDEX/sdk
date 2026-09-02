[**@velora-dex/sdk**](../../../../README.md)

***

[@velora-dex/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [internal](../README.md) / ReadableOptions

# Interface: ReadableOptions

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:962

## Extends

- [`StreamOptions`](StreamOptions.md)\<[`Readable`](../../../classes/Readable.md)\>

## Extended by

- [`DuplexOptions`](../../../interfaces/DuplexOptions.md)

## Properties

### autoDestroy?

> `optional` **autoDestroy?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:960

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`autoDestroy`](StreamOptions.md#autodestroy)

***

### emitClose?

> `optional` **emitClose?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:955

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`emitClose`](StreamOptions.md#emitclose)

***

### encoding?

> `optional` **encoding?**: [`BufferEncoding`](../../../type-aliases/BufferEncoding.md)

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:963

***

### highWaterMark?

> `optional` **highWaterMark?**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:956

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`highWaterMark`](StreamOptions.md#highwatermark)

***

### objectMode?

> `optional` **objectMode?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:957

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`objectMode`](StreamOptions.md#objectmode)

***

### signal?

> `optional` **signal?**: `AbortSignal`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:561

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`signal`](StreamOptions.md#signal)

## Methods

### construct()?

> `optional` **construct**(`this`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:958

#### Parameters

##### this

[`Readable`](../../../classes/Readable.md)

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`construct`](StreamOptions.md#construct)

***

### destroy()?

> `optional` **destroy**(`this`, `error`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:959

#### Parameters

##### this

[`Readable`](../../../classes/Readable.md)

##### error

`Error` \| `null`

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`destroy`](StreamOptions.md#destroy)

***

### read()?

> `optional` **read**(`this`, `size`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:964

#### Parameters

##### this

[`Readable`](../../../classes/Readable.md)

##### size

`number`

#### Returns

`void`
