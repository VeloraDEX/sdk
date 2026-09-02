[**@velora-dex/sdk**](../../../../README.md)

***

[@velora-dex/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [internal](../README.md) / StreamOptions

# Interface: StreamOptions\<T\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:954

## Extends

- [`Abortable`](../../EventEmitter/interfaces/Abortable.md)

## Extended by

- [`ReadableOptions`](ReadableOptions.md)
- [`WritableOptions`](WritableOptions.md)

## Type Parameters

### T

`T` *extends* [`Stream`](../../../classes/Stream.md)

## Properties

### autoDestroy?

> `optional` **autoDestroy?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:960

***

### emitClose?

> `optional` **emitClose?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:955

***

### highWaterMark?

> `optional` **highWaterMark?**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:956

***

### objectMode?

> `optional` **objectMode?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:957

***

### signal?

> `optional` **signal?**: `AbortSignal`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:561

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[`Abortable`](../../EventEmitter/interfaces/Abortable.md).[`signal`](../../EventEmitter/interfaces/Abortable.md#signal)

## Methods

### construct()?

> `optional` **construct**(`this`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:958

#### Parameters

##### this

`T`

##### callback

(`error?`) => `void`

#### Returns

`void`

***

### destroy()?

> `optional` **destroy**(`this`, `error`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:959

#### Parameters

##### this

`T`

##### error

`Error` \| `null`

##### callback

(`error?`) => `void`

#### Returns

`void`
