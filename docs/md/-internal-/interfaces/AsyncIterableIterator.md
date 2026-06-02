[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AsyncIterableIterator

# Interface: AsyncIterableIterator\<T, TReturn, TNext\>

Describes a user-defined [AsyncIterator](AsyncIterator.md) that is also async iterable.

## Extends

- [`AsyncIterator`](AsyncIterator.md)\<`T`, `TReturn`, `TNext`\>

## Type Parameters

• **T**

• **TReturn** = `any`

• **TNext** = `any`

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): [`AsyncIterableIterator`](AsyncIterableIterator.md)\<`T`, `TReturn`, `TNext`\>

#### Returns

[`AsyncIterableIterator`](AsyncIterableIterator.md)\<`T`, `TReturn`, `TNext`\>

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:45

***

### next()

> **next**(...`__namedParameters`): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Parameters

• ...**\_\_namedParameters**: [] \| [`TNext`]

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Inherited from

[`AsyncIterator`](AsyncIterator.md).[`next`](AsyncIterator.md#next)

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:32

***

### return()?

> `optional` **return**(`value`?): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Parameters

• **value?**: `TReturn` \| [`PromiseLike`](PromiseLike.md)\<`TReturn`\>

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Inherited from

[`AsyncIterator`](AsyncIterator.md).[`return`](AsyncIterator.md#return)

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:33

***

### throw()?

> `optional` **throw**(`e`?): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Parameters

• **e?**: `any`

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Inherited from

[`AsyncIterator`](AsyncIterator.md).[`throw`](AsyncIterator.md#throw)

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:34
