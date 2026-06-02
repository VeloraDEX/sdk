[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WritableStreamDefaultWriter

# Interface: WritableStreamDefaultWriter\<W\>

This Streams API interface is the object returned by
WritableStream.getWriter() and once created locks the < writer to the
WritableStream ensuring that no other streams can write to the underlying
sink.

## Type Parameters

• **W** = `any`

## Properties

### closed

> `readonly` **closed**: `Promise`\<`undefined`\>

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:302

***

### desiredSize

> `readonly` **desiredSize**: `null` \| `number`

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:303

***

### ready

> `readonly` **ready**: `Promise`\<`undefined`\>

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:304

## Methods

### abort()

> **abort**(`reason`?): `Promise`\<`void`\>

#### Parameters

• **reason?**: `any`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:305

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:306

***

### releaseLock()

> **releaseLock**(): `void`

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:307

***

### write()

> **write**(`chunk`?): `Promise`\<`void`\>

#### Parameters

• **chunk?**: `W`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:308
