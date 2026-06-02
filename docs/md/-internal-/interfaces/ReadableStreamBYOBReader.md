[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadableStreamBYOBReader

# Interface: ReadableStreamBYOBReader

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader)

## Extends

- `ReadableStreamGenericReader`

## Properties

### closed

> `readonly` **closed**: `Promise`\<`undefined`\>

#### Inherited from

`ReadableStreamGenericReader.closed`

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:100

## Methods

### cancel()

#### cancel(reason)

> **cancel**(`reason`?): `Promise`\<`void`\>

##### Parameters

• **reason?**: `any`

##### Returns

`Promise`\<`void`\>

##### Inherited from

`ReadableStreamGenericReader.cancel`

##### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:101

#### cancel(reason)

> **cancel**(`reason`?): `Promise`\<`void`\>

##### Parameters

• **reason?**: `any`

##### Returns

`Promise`\<`void`\>

##### Inherited from

`ReadableStreamGenericReader.cancel`

##### Defined in

node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:101

***

### read()

> **read**\<`T`\>(`view`): `Promise`\<[`ReadableStreamReadResult`](../type-aliases/ReadableStreamReadResult.md)\<`T`\>\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/read)

#### Type Parameters

• **T** *extends* [`ArrayBufferView`](ArrayBufferView.md)

#### Parameters

• **view**: `T`

#### Returns

`Promise`\<[`ReadableStreamReadResult`](../type-aliases/ReadableStreamReadResult.md)\<`T`\>\>

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:205

***

### releaseLock()

> **releaseLock**(): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/releaseLock)

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:207
