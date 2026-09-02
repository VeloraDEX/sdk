[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3AccountProvider

# Interface: Web3AccountProvider\<T\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:64

## Type Parameters

### T

`T`

## Properties

### create

> **create**: () => `T`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:66

#### Returns

`T`

***

### decrypt

> **decrypt**: (`keystore`, `password`, `options?`) => `Promise`\<`T`\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:67

#### Parameters

##### keystore

`string` \| [`KeyStore`](../type-aliases/KeyStore.md)

##### password

`string`

##### options?

[`Record`](../type-aliases/Record.md)\<`string`, `unknown`\>

#### Returns

`Promise`\<`T`\>

***

### privateKeyToAccount

> **privateKeyToAccount**: (`privateKey`) => `T`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:65

#### Parameters

##### privateKey

`string`

#### Returns

`T`
