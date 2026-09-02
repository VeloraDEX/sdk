[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WritableStream

# Interface: WritableStream\<W\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:288

This Streams API interface provides a standard abstraction for writing
streaming data to a destination, known as a sink. This object comes with
built-in back pressure and queuing.

## Type Parameters

### W

`W` = `any`

## Properties

### locked

> `readonly` **locked**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:289

## Methods

### abort()

> **abort**(`reason?`): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:290

#### Parameters

##### reason?

`any`

#### Returns

`Promise`\<`void`\>

***

### close()

> **close**(): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:291

#### Returns

`Promise`\<`void`\>

***

### getWriter()

> **getWriter**(): [`WritableStreamDefaultWriter`](WritableStreamDefaultWriter.md)\<`W`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:292

#### Returns

[`WritableStreamDefaultWriter`](WritableStreamDefaultWriter.md)\<`W`\>
