[**@velora-dex/sdk**](../../../../README.md)

***

[@velora-dex/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [internal](../README.md) / TransformOptions

# Interface: TransformOptions

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1273

## Extends

- [`DuplexOptions`](../../../interfaces/DuplexOptions.md)

## Properties

### allowHalfOpen?

> `optional` **allowHalfOpen?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1026

#### Inherited from

`TransformOptions`.[`allowHalfOpen`](#allowhalfopen)

***

### autoDestroy?

> `optional` **autoDestroy?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:960

#### Inherited from

[`StreamOptions`](StreamOptions.md).[`autoDestroy`](StreamOptions.md#autodestroy)

***

### decodeStrings?

> `optional` **decodeStrings?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:987

#### Inherited from

`TransformOptions`.[`decodeStrings`](#decodestrings)

***

### defaultEncoding?

> `optional` **defaultEncoding?**: [`BufferEncoding`](../../../type-aliases/BufferEncoding.md)

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:988

#### Inherited from

`TransformOptions`.[`defaultEncoding`](#defaultencoding)

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

#### Inherited from

`TransformOptions`.[`encoding`](#encoding)

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

### readableHighWaterMark?

> `optional` **readableHighWaterMark?**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1029

#### Inherited from

`TransformOptions`.[`readableHighWaterMark`](#readablehighwatermark)

***

### readableObjectMode?

> `optional` **readableObjectMode?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1027

#### Inherited from

`TransformOptions`.[`readableObjectMode`](#readableobjectmode)

***

### signal?

> `optional` **signal?**: `AbortSignal`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:561

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`signal`](../../../interfaces/DuplexOptions.md#signal)

***

### writableCorked?

> `optional` **writableCorked?**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1031

#### Inherited from

`TransformOptions`.[`writableCorked`](#writablecorked)

***

### writableHighWaterMark?

> `optional` **writableHighWaterMark?**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1030

#### Inherited from

`TransformOptions`.[`writableHighWaterMark`](#writablehighwatermark)

***

### writableObjectMode?

> `optional` **writableObjectMode?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1028

#### Inherited from

`TransformOptions`.[`writableObjectMode`](#writableobjectmode)

## Methods

### construct()?

> `optional` **construct**(`this`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1274

#### Parameters

##### this

[`Transform`](../classes/Transform.md)

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Overrides

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`construct`](../../../interfaces/DuplexOptions.md#construct)

***

### destroy()?

> `optional` **destroy**(`this`, `error`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1291

#### Parameters

##### this

[`Transform`](../classes/Transform.md)

##### error

`Error` \| `null`

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Overrides

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`destroy`](../../../interfaces/DuplexOptions.md#destroy)

***

### final()?

> `optional` **final**(`this`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1290

#### Parameters

##### this

[`Transform`](../classes/Transform.md)

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Overrides

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`final`](../../../interfaces/DuplexOptions.md#final)

***

### flush()?

> `optional` **flush**(`this`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1293

#### Parameters

##### this

[`Transform`](../classes/Transform.md)

##### callback

[`TransformCallback`](../type-aliases/TransformCallback.md)

#### Returns

`void`

***

### read()?

> `optional` **read**(`this`, `size`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1275

#### Parameters

##### this

[`Transform`](../classes/Transform.md)

##### size

`number`

#### Returns

`void`

#### Overrides

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`read`](../../../interfaces/DuplexOptions.md#read)

***

### transform()?

> `optional` **transform**(`this`, `chunk`, `encoding`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1292

#### Parameters

##### this

[`Transform`](../classes/Transform.md)

##### chunk

`any`

##### encoding

[`BufferEncoding`](../../../type-aliases/BufferEncoding.md)

##### callback

[`TransformCallback`](../type-aliases/TransformCallback.md)

#### Returns

`void`

***

### write()?

> `optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1276

#### Parameters

##### this

[`Transform`](../classes/Transform.md)

##### chunk

`any`

##### encoding

[`BufferEncoding`](../../../type-aliases/BufferEncoding.md)

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Overrides

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`write`](../../../interfaces/DuplexOptions.md#write)

***

### writev()?

> `optional` **writev**(`this`, `chunks`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1282

#### Parameters

##### this

[`Transform`](../classes/Transform.md)

##### chunks

`object`[]

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Overrides

[`DuplexOptions`](../../../interfaces/DuplexOptions.md).[`writev`](../../../interfaces/DuplexOptions.md#writev)
