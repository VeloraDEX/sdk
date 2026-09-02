[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WritableStreamDefaultWriter

# Interface: WritableStreamDefaultWriter\<W\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:304

This Streams API interface is the object returned by
WritableStream.getWriter() and once created locks the < writer to the
WritableStream ensuring that no other streams can write to the underlying
sink.

## Type Parameters

### W

`W` = `any`

## Properties

### closed

> `readonly` **closed**: `Promise`\<`undefined`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:305

***

### desiredSize

> `readonly` **desiredSize**: `number` \| `null`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:306

***

### ready

> `readonly` **ready**: `Promise`\<`undefined`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:307

## Methods

### abort()

> **abort**(`reason?`): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:308

#### Parameters

##### reason?

`any`

#### Returns

`Promise`\<`void`\>

***

### close()

> **close**(): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:309

#### Returns

`Promise`\<`void`\>

***

### releaseLock()

> **releaseLock**(): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:310

#### Returns

`void`

***

### write()

> **write**(`chunk?`): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:311

#### Parameters

##### chunk?

`W`

#### Returns

`Promise`\<`void`\>
