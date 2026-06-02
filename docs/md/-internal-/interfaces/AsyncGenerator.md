[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AsyncGenerator

# Interface: AsyncGenerator\<T, TReturn, TNext\>

## Extends

- `AsyncIteratorObject`\<`T`, `TReturn`, `TNext`\>

## Type Parameters

• **T** = `unknown`

• **TReturn** = `any`

• **TNext** = `any`

## Methods

### \[asyncDispose\]()

#### \[asyncDispose\]()

> **\[asyncDispose\]**(): [`PromiseLike`](PromiseLike.md)\<`void`\>

##### Returns

[`PromiseLike`](PromiseLike.md)\<`void`\>

##### Inherited from

`AsyncIteratorObject.[asyncDispose]`

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.esnext.disposable.d.ts:40

#### \[asyncDispose\]()

> **\[asyncDispose\]**(): [`PromiseLike`](PromiseLike.md)\<`void`\>

##### Returns

[`PromiseLike`](PromiseLike.md)\<`void`\>

##### Inherited from

`AsyncIteratorObject.[asyncDispose]`

##### Defined in

node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/compatibility/disposable.d.ts:15

#### \[asyncDispose\]()

> **\[asyncDispose\]**(): [`PromiseLike`](PromiseLike.md)\<`void`\>

##### Returns

[`PromiseLike`](PromiseLike.md)\<`void`\>

##### Inherited from

`AsyncIteratorObject.[asyncDispose]`

##### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/globals.d.ts:286

***

### \[asyncIterator\]()

> **\[asyncIterator\]**(): [`AsyncGenerator`](AsyncGenerator.md)\<`T`, `TReturn`, `TNext`\>

#### Returns

[`AsyncGenerator`](AsyncGenerator.md)\<`T`, `TReturn`, `TNext`\>

#### Overrides

`AsyncIteratorObject.[asyncIterator]`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts:26

***

### next()

> **next**(...`__namedParameters`): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Parameters

• ...**\_\_namedParameters**: [] \| [`TNext`]

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Overrides

`AsyncIteratorObject.next`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts:23

***

### return()

> **return**(`value`): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Parameters

• **value**: `TReturn` \| [`PromiseLike`](PromiseLike.md)\<`TReturn`\>

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Overrides

`AsyncIteratorObject.return`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts:24

***

### throw()

> **throw**(`e`): `Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Parameters

• **e**: `any`

#### Returns

`Promise`\<[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>\>

#### Overrides

`AsyncIteratorObject.throw`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts:25
