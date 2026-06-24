[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadableStreamAsyncIterator

# Interface: ReadableStreamAsyncIterator\<T\>

## Extends

- `AsyncIterator`\<`T`, [`BuiltinIteratorReturn`](../type-aliases/BuiltinIteratorReturn.md), `unknown`\>

## Type Parameters

• **T**

## Methods

### \[asyncDispose\]()

#### \[asyncDispose\]()

> **\[asyncDispose\]**(): [`PromiseLike`](PromiseLike.md)\<`void`\>

##### Returns

[`PromiseLike`](PromiseLike.md)\<`void`\>

##### Inherited from

`NodeJS.AsyncIterator.[asyncDispose]`

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.esnext.disposable.d.ts:40

#### \[asyncDispose\]()

> **\[asyncDispose\]**(): [`PromiseLike`](PromiseLike.md)\<`void`\>

##### Returns

[`PromiseLike`](PromiseLike.md)\<`void`\>

##### Inherited from

`NodeJS.AsyncIterator.[asyncDispose]`

##### Defined in

node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/compatibility/disposable.d.ts:15

***

### \[asyncIterator\]()

> **\[asyncIterator\]**(): [`ReadableStreamAsyncIterator`](ReadableStreamAsyncIterator.md)\<`T`\>

#### Returns

[`ReadableStreamAsyncIterator`](ReadableStreamAsyncIterator.md)\<`T`\>

#### Overrides

`NodeJS.AsyncIterator.[asyncIterator]`

#### Defined in

node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:170

***

### next()

> **next**(...`__namedParameters`): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>\>

#### Parameters

• ...**\_\_namedParameters**: [] \| [`unknown`]

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>\>

#### Inherited from

`NodeJS.AsyncIterator.next`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:32

***

### return()?

> `optional` **return**(`value`?): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>\>

#### Parameters

• **value?**: [`PromiseLike`](PromiseLike.md)\<`undefined`\>

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>\>

#### Inherited from

`NodeJS.AsyncIterator.return`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:33

***

### throw()?

> `optional` **throw**(`e`?): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>\>

#### Parameters

• **e?**: `any`

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>\>

#### Inherited from

`NodeJS.AsyncIterator.throw`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:34
