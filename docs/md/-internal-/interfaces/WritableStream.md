[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WritableStream

# Interface: WritableStream\<W\>

This Streams API interface provides a standard abstraction for writing
streaming data to a destination, known as a sink. This object comes with
built-in back pressure and queuing.

## Type Parameters

• **W** = `any`

## Properties

### locked

> `readonly` **locked**: `boolean`

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:286

## Methods

### abort()

> **abort**(`reason`?): `Promise`\<`void`\>

#### Parameters

• **reason?**: `any`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:287

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:288

***

### getWriter()

> **getWriter**(): [`WritableStreamDefaultWriter`](WritableStreamDefaultWriter.md)\<`W`\>

#### Returns

[`WritableStreamDefaultWriter`](WritableStreamDefaultWriter.md)\<`W`\>

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:289
