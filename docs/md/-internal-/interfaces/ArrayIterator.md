[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ArrayIterator

# Interface: ArrayIterator\<T\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:72

## Extends

- `IteratorObject`\<`T`, [`BuiltinIteratorReturn`](../type-aliases/BuiltinIteratorReturn.md), `unknown`\>

## Type Parameters

### T

`T`

## Methods

### \[dispose\]()

#### Call Signature

> **\[dispose\]**(): `void`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.esnext.disposable.d.ts:36

##### Returns

`void`

##### Inherited from

`IteratorObject.[dispose]`

#### Call Signature

> **\[dispose\]**(): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/compatibility/disposable.d.ts:11

##### Returns

`void`

##### Inherited from

`IteratorObject.[dispose]`

***

### \[iterator\]()

> **\[iterator\]**(): `ArrayIterator`\<`T`\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:73

#### Returns

`ArrayIterator`\<`T`\>

#### Overrides

`IteratorObject.[iterator]`

***

### next()

> **next**(...`__namedParameters`): [`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:43

#### Parameters

##### \_\_namedParameters

\[\] \| \[`unknown`\]

#### Returns

[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>

#### Inherited from

`IteratorObject.next`

***

### return()?

> `optional` **return**(`value?`): [`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:44

#### Parameters

##### value?

`undefined`

#### Returns

[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>

#### Inherited from

`IteratorObject.return`

***

### throw()?

> `optional` **throw**(`e?`): [`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:45

#### Parameters

##### e?

`any`

#### Returns

[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `undefined`\>

#### Inherited from

`IteratorObject.throw`
