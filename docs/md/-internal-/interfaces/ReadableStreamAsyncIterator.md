[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadableStreamAsyncIterator

# Interface: ReadableStreamAsyncIterator\<T\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:169

## Extends

- `AsyncIterator`\<`T`, [`BuiltinIteratorReturn`](../type-aliases/BuiltinIteratorReturn-1.md), `unknown`\>

## Type Parameters

### T

`T`

## Methods

### \[asyncDispose\]()

#### Call Signature

> **\[asyncDispose\]**(): [`PromiseLike`](PromiseLike.md)\<`void`\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.esnext.disposable.d.ts:40

##### Returns

[`PromiseLike`](PromiseLike.md)\<`void`\>

##### Inherited from

`NodeJS.AsyncIterator.[asyncDispose]`

#### Call Signature

> **\[asyncDispose\]**(): [`PromiseLike`](PromiseLike.md)\<`void`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/compatibility/disposable.d.ts:15

##### Returns

[`PromiseLike`](PromiseLike.md)\<`void`\>

##### Inherited from

`NodeJS.AsyncIterator.[asyncDispose]`

***

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `ReadableStreamAsyncIterator`\<`T`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:170

#### Returns

`ReadableStreamAsyncIterator`\<`T`\>

#### Overrides

`NodeJS.AsyncIterator.[asyncIterator]`

***

### next()

> **next**(...`__namedParameters`): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:32

#### Parameters

##### \_\_namedParameters

\[\] \| \[`unknown`\]

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>\>

#### Inherited from

`NodeJS.AsyncIterator.next`

***

### return()?

> `optional` **return**(`value?`): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:33

#### Parameters

##### value?

[`PromiseLike`](PromiseLike.md)\<`undefined`\>

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>\>

#### Inherited from

`NodeJS.AsyncIterator.return`

***

### throw()?

> `optional` **throw**(`e?`): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:34

#### Parameters

##### e?

`any`

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>\>

#### Inherited from

`NodeJS.AsyncIterator.throw`
