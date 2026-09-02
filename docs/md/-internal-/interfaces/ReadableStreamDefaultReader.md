[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadableStreamDefaultReader

# Interface: ReadableStreamDefaultReader\<R\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:201

## Extends

- [`ReadableStreamGenericReader`](ReadableStreamGenericReader.md)

## Type Parameters

### R

`R` = `any`

## Properties

### closed

> `readonly` **closed**: `Promise`\<`undefined`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:100

#### Inherited from

[`ReadableStreamGenericReader`](ReadableStreamGenericReader.md).[`closed`](ReadableStreamGenericReader.md#closed)

## Methods

### cancel()

> **cancel**(`reason?`): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:101

#### Parameters

##### reason?

`any`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ReadableStreamGenericReader`](ReadableStreamGenericReader.md).[`cancel`](ReadableStreamGenericReader.md#cancel)

***

### read()

> **read**(): `Promise`\<[`ReadableStreamReadResult`](../type-aliases/ReadableStreamReadResult.md)\<`R`\>\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:202

#### Returns

`Promise`\<[`ReadableStreamReadResult`](../type-aliases/ReadableStreamReadResult.md)\<`R`\>\>

***

### releaseLock()

> **releaseLock**(): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:203

#### Returns

`void`
