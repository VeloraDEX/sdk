[**@velora-dex/sdk**](../../../../README.md)

***

[@velora-dex/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [internal](../README.md) / WritableOptions

# Interface: WritableOptions

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:986

## Extends

- [`StreamOptions`](StreamOptions.md)\<[`Writable`](../classes/Writable.md)\>

## Extended by

- [`DuplexOptions`](../../../interfaces/DuplexOptions.md)

## Properties

### autoDestroy?

> `optional` **autoDestroy?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:960

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`autoDestroy`](StreamOptions.md#autodestroy)

***

### decodeStrings?

> `optional` **decodeStrings?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:987

***

### defaultEncoding?

> `optional` **defaultEncoding?**: [`BufferEncoding`](../../../type-aliases/BufferEncoding.md)

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:988

***

### emitClose?

> `optional` **emitClose?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:955

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`emitClose`](StreamOptions.md#emitclose)

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

[`Writable`](../classes/Writable.md)

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

[`Writable`](../classes/Writable.md)

##### error

`Error` \| `null`

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`destroy`](StreamOptions.md#destroy)

***

### final()?

> `optional` **final**(`this`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1003

#### Parameters

##### this

[`Writable`](../classes/Writable.md)

##### callback

(`error?`) => `void`

#### Returns

`void`

***

### write()?

> `optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:989

#### Parameters

##### this

[`Writable`](../classes/Writable.md)

##### chunk

`any`

##### encoding

[`BufferEncoding`](../../../type-aliases/BufferEncoding.md)

##### callback

(`error?`) => `void`

#### Returns

`void`

***

### writev()?

> `optional` **writev**(`this`, `chunks`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:995

#### Parameters

##### this

[`Writable`](../classes/Writable.md)

##### chunks

`object`[]

##### callback

(`error?`) => `void`

#### Returns

`void`
