[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AsyncGenerator

# Interface: AsyncGenerator\<T, TReturn, TNext\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts:21

## Extends

- `AsyncIteratorObject`\<`T`, `TReturn`, `TNext`\>

## Type Parameters

### T

`T` = `unknown`

### TReturn

`TReturn` = `any`

### TNext

`TNext` = `any`

## Methods

### \[asyncDispose\]()

#### Call Signature

> **\[asyncDispose\]**(): [`PromiseLike`](PromiseLike.md)\<`void`\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.esnext.disposable.d.ts:40

##### Returns

[`PromiseLike`](PromiseLike.md)\<`void`\>

##### Inherited from

`AsyncIteratorObject.[asyncDispose]`

#### Call Signature

> **\[asyncDispose\]**(): [`PromiseLike`](PromiseLike.md)\<`void`\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/compatibility/disposable.d.ts:15

##### Returns

[`PromiseLike`](PromiseLike.md)\<`void`\>

##### Inherited from

`AsyncIteratorObject.[asyncDispose]`

***

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncGenerator`\<`T`, `TReturn`, `TNext`\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts:26

#### Returns

`AsyncGenerator`\<`T`, `TReturn`, `TNext`\>

#### Overrides

`AsyncIteratorObject.[asyncIterator]`

***

### next()

> **next**(...`__namedParameters`): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts:23

#### Parameters

##### \_\_namedParameters

\[\] \| \[`TNext`\]

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Overrides

`AsyncIteratorObject.next`

***

### return()

> **return**(`value`): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts:24

#### Parameters

##### value

`TReturn` \| [`PromiseLike`](PromiseLike.md)\<`TReturn`\>

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Overrides

`AsyncIteratorObject.return`

***

### throw()

> **throw**(`e`): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts:25

#### Parameters

##### e

`any`

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Overrides

`AsyncIteratorObject.throw`
