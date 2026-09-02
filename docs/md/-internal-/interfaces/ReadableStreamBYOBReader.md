[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadableStreamBYOBReader

# Interface: ReadableStreamBYOBReader

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:206

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader)

## Extends

- [`ReadableStreamGenericReader`](ReadableStreamGenericReader.md)

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

> **read**\<`T`\>(`view`): `Promise`\<[`ReadableStreamReadResult`](../type-aliases/ReadableStreamReadResult.md)\<`T`\>\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:208

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/read)

#### Type Parameters

##### T

`T` *extends* [`ArrayBufferView`](ArrayBufferView.md)\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>

#### Parameters

##### view

`T`

#### Returns

`Promise`\<[`ReadableStreamReadResult`](../type-aliases/ReadableStreamReadResult.md)\<`T`\>\>

***

### releaseLock()

> **releaseLock**(): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:210

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/releaseLock)

#### Returns

`void`
