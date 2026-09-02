[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3Emitter

# Interface: Web3Emitter\<T\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:5

## Type Parameters

### T

`T` *extends* [`Web3EventMap`](../type-aliases/Web3EventMap.md)

## Methods

### emit()

> **emit**\<`K`\>(`eventName`, `params`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:9

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### eventName

`K`

##### params

`T`\[`K`\]

#### Returns

`void`

***

### off()

> **off**\<`K`\>(`eventName`, `fn`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:8

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### eventName

`K`

##### fn

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`T`\[`K`\]\>

#### Returns

`void`

***

### on()

> **on**\<`K`\>(`eventName`, `fn`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:6

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### eventName

`K`

##### fn

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`T`\[`K`\]\>

#### Returns

`void`

***

### once()

> **once**\<`K`\>(`eventName`, `fn`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:7

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### eventName

`K`

##### fn

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`T`\[`K`\]\>

#### Returns

`void`
