[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3BaseWalletAccount

# Interface: Web3BaseWalletAccount

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:42

## Extended by

- [`Web3Account`](Web3Account.md)

## Indexable

> \[`key`: `string`\]: `unknown`

## Properties

### address

> `readonly` **address**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:44

***

### encrypt

> `readonly` **encrypt**: (`password`, `options?`) => `Promise`\<[`KeyStore`](../type-aliases/KeyStore.md)\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:62

#### Parameters

##### password

`string`

##### options?

[`Record`](../type-aliases/Record.md)\<`string`, `unknown`\>

#### Returns

`Promise`\<[`KeyStore`](../type-aliases/KeyStore.md)\>

***

### privateKey

> `readonly` **privateKey**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:45

***

### sign

> `readonly` **sign**: (`data`) => `object`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:54

#### Parameters

##### data

`string` \| [`Record`](../type-aliases/Record.md)\<`string`, `unknown`\>

#### Returns

`object`

##### message?

> `readonly` `optional` **message?**: `string`

##### messageHash

> `readonly` **messageHash**: `string`

##### r

> `readonly` **r**: `string`

##### s

> `readonly` **s**: `string`

##### signature

> `readonly` **signature**: `string`

##### v

> `readonly` **v**: `string`

***

### signTransaction

> `readonly` **signTransaction**: (`tx`) => `Promise`\<\{ `messageHash`: `string`; `r`: `string`; `rawTransaction`: `string`; `s`: `string`; `transactionHash`: `string`; `v`: `string`; \}\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:46

#### Parameters

##### tx

[`Transaction`](Transaction-1.md)

#### Returns

`Promise`\<\{ `messageHash`: `string`; `r`: `string`; `rawTransaction`: `string`; `s`: `string`; `transactionHash`: `string`; `v`: `string`; \}\>
