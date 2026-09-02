[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AsyncIterator

# Interface: AsyncIterator\<T, TReturn, TNext\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:30

## Type Parameters

### T

`T`

### TReturn

`TReturn` = `any`

### TNext

`TNext` = `any`

## Methods

### next()

> **next**(...`__namedParameters`): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:32

#### Parameters

##### \_\_namedParameters

\[\] \| \[`TNext`\]

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

***

### return()?

> `optional` **return**(`value?`): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:33

#### Parameters

##### value?

`TReturn` \| [`PromiseLike`](PromiseLike.md)\<`TReturn`\>

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

***

### throw()?

> `optional` **throw**(`e?`): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:34

#### Parameters

##### e?

`any`

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>
