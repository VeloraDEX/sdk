[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Iterator

# Interface: Iterator\<T, TReturn, TNext\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:41

## Extended by

- [`IterableIterator`](IterableIterator.md)

## Type Parameters

### T

`T`

### TReturn

`TReturn` = `any`

### TNext

`TNext` = `any`

## Methods

### next()

> **next**(...`__namedParameters`): [`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:43

#### Parameters

##### \_\_namedParameters

\[\] \| \[`TNext`\]

#### Returns

[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

***

### return()?

> `optional` **return**(`value?`): [`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:44

#### Parameters

##### value?

`TReturn`

#### Returns

[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

***

### throw()?

> `optional` **throw**(`e?`): [`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:45

#### Parameters

##### e?

`any`

#### Returns

[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>
