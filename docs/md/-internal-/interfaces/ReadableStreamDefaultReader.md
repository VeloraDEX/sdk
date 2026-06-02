[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadableStreamDefaultReader

# Interface: ReadableStreamDefaultReader\<R\>

## Extends

- `ReadableStreamGenericReader`

## Type Parameters

• **R** = `any`

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

> **read**(): `Promise`\<[`ReadableStreamReadResult`](../type-aliases/ReadableStreamReadResult.md)\<`R`\>\>

#### Returns

`Promise`\<[`ReadableStreamReadResult`](../type-aliases/ReadableStreamReadResult.md)\<`R`\>\>

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:199

***

### releaseLock()

> **releaseLock**(): `void`

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream/web.d.ts:200
