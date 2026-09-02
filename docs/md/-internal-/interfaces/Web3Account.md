[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3Account

# Interface: Web3Account

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/types.d.ts:20

## Extends

- [`Web3BaseWalletAccount`](Web3BaseWalletAccount.md)

## Indexable

> \[`key`: `string`\]: `unknown`

## Properties

### address

> **address**: `string`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/types.d.ts:21

#### Overrides

[`Web3BaseWalletAccount`](Web3BaseWalletAccount.md).[`address`](Web3BaseWalletAccount.md#address)

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

#### Inherited from

[`Web3BaseWalletAccount`](Web3BaseWalletAccount.md).[`encrypt`](Web3BaseWalletAccount.md#encrypt)

***

### privateKey

> **privateKey**: `string`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/types.d.ts:22

#### Overrides

[`Web3BaseWalletAccount`](Web3BaseWalletAccount.md).[`privateKey`](Web3BaseWalletAccount.md#privatekey)

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

#### Inherited from

[`Web3BaseWalletAccount`](Web3BaseWalletAccount.md).[`sign`](Web3BaseWalletAccount.md#sign)

***

### signTransaction

> `readonly` **signTransaction**: (`tx`) => `Promise`\<\{ `messageHash`: `string`; `r`: `string`; `rawTransaction`: `string`; `s`: `string`; `transactionHash`: `string`; `v`: `string`; \}\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:46

#### Parameters

##### tx

[`Transaction`](Transaction-1.md)

#### Returns

`Promise`\<\{ `messageHash`: `string`; `r`: `string`; `rawTransaction`: `string`; `s`: `string`; `transactionHash`: `string`; `v`: `string`; \}\>

#### Inherited from

[`Web3BaseWalletAccount`](Web3BaseWalletAccount.md).[`signTransaction`](Web3BaseWalletAccount.md#signtransaction)
