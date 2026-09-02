[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / DuplexOptions

# Interface: DuplexOptions

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1025

## Extends

- [`ReadableOptions`](../namespaces/internal/interfaces/ReadableOptions.md).[`WritableOptions`](../namespaces/internal/interfaces/WritableOptions.md)

## Extended by

- [`TransformOptions`](../namespaces/internal/interfaces/TransformOptions.md)

## Properties

### allowHalfOpen?

> `optional` **allowHalfOpen?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1026

***

### autoDestroy?

> `optional` **autoDestroy?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:960

#### Inherited from

[`StreamOptions`](../namespaces/internal/interfaces/StreamOptions.md).[`autoDestroy`](../namespaces/internal/interfaces/StreamOptions.md#autodestroy)

***

### decodeStrings?

> `optional` **decodeStrings?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:987

#### Inherited from

[`TransformOptions`](../namespaces/internal/interfaces/TransformOptions.md).[`decodeStrings`](../namespaces/internal/interfaces/TransformOptions.md#decodestrings)

***

### defaultEncoding?

> `optional` **defaultEncoding?**: [`BufferEncoding`](../type-aliases/BufferEncoding.md)

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:988

#### Inherited from

[`TransformOptions`](../namespaces/internal/interfaces/TransformOptions.md).[`defaultEncoding`](../namespaces/internal/interfaces/TransformOptions.md#defaultencoding)

***

### emitClose?

> `optional` **emitClose?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:955

#### Inherited from

[`StreamOptions`](../namespaces/internal/interfaces/StreamOptions.md).[`emitClose`](../namespaces/internal/interfaces/StreamOptions.md#emitclose)

***

### encoding?

> `optional` **encoding?**: [`BufferEncoding`](../type-aliases/BufferEncoding.md)

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:963

#### Inherited from

[`TransformOptions`](../namespaces/internal/interfaces/TransformOptions.md).[`encoding`](../namespaces/internal/interfaces/TransformOptions.md#encoding)

***

### highWaterMark?

> `optional` **highWaterMark?**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:956

#### Inherited from

[`StreamOptions`](../namespaces/internal/interfaces/StreamOptions.md).[`highWaterMark`](../namespaces/internal/interfaces/StreamOptions.md#highwatermark)

***

### objectMode?

> `optional` **objectMode?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:957

#### Inherited from

[`StreamOptions`](../namespaces/internal/interfaces/StreamOptions.md).[`objectMode`](../namespaces/internal/interfaces/StreamOptions.md#objectmode)

***

### readableHighWaterMark?

> `optional` **readableHighWaterMark?**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1029

***

### readableObjectMode?

> `optional` **readableObjectMode?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1027

***

### signal?

> `optional` **signal?**: `AbortSignal`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:561

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[`ReadableOptions`](../namespaces/internal/interfaces/ReadableOptions.md).[`signal`](../namespaces/internal/interfaces/ReadableOptions.md#signal)

***

### writableCorked?

> `optional` **writableCorked?**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1031

***

### writableHighWaterMark?

> `optional` **writableHighWaterMark?**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1030

***

### writableObjectMode?

> `optional` **writableObjectMode?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1028

## Methods

### construct()?

> `optional` **construct**(`this`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1032

#### Parameters

##### this

[`Duplex`](../classes/Duplex.md)

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Overrides

[`ReadableOptions`](../namespaces/internal/interfaces/ReadableOptions.md).[`construct`](../namespaces/internal/interfaces/ReadableOptions.md#construct)

***

### destroy()?

> `optional` **destroy**(`this`, `error`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1044

#### Parameters

##### this

[`Duplex`](../classes/Duplex.md)

##### error

`Error` \| `null`

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Overrides

[`ReadableOptions`](../namespaces/internal/interfaces/ReadableOptions.md).[`destroy`](../namespaces/internal/interfaces/ReadableOptions.md#destroy)

***

### final()?

> `optional` **final**(`this`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1043

#### Parameters

##### this

[`Duplex`](../classes/Duplex.md)

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Overrides

[`WritableOptions`](../namespaces/internal/interfaces/WritableOptions.md).[`final`](../namespaces/internal/interfaces/WritableOptions.md#final)

***

### read()?

> `optional` **read**(`this`, `size`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1033

#### Parameters

##### this

[`Duplex`](../classes/Duplex.md)

##### size

`number`

#### Returns

`void`

#### Overrides

[`ReadableOptions`](../namespaces/internal/interfaces/ReadableOptions.md).[`read`](../namespaces/internal/interfaces/ReadableOptions.md#read)

***

### write()?

> `optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1034

#### Parameters

##### this

[`Duplex`](../classes/Duplex.md)

##### chunk

`any`

##### encoding

[`BufferEncoding`](../type-aliases/BufferEncoding.md)

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Overrides

[`WritableOptions`](../namespaces/internal/interfaces/WritableOptions.md).[`write`](../namespaces/internal/interfaces/WritableOptions.md#write)

***

### writev()?

> `optional` **writev**(`this`, `chunks`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1035

#### Parameters

##### this

[`Duplex`](../classes/Duplex.md)

##### chunks

`object`[]

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Overrides

[`WritableOptions`](../namespaces/internal/interfaces/WritableOptions.md).[`writev`](../namespaces/internal/interfaces/WritableOptions.md#writev)
