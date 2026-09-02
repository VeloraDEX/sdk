[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AccessListEIP2930TxData

# Interface: AccessListEIP2930TxData

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:126

AccessListEIP2930Transaction data.

## Extends

- [`TxData`](../type-aliases/TxData.md)

## Extended by

- [`FeeMarketEIP1559TxData`](FeeMarketEIP1559TxData.md)

## Properties

### accessList?

> `optional` **accessList?**: [`AccessListUint8Array`](../type-aliases/AccessListUint8Array.md) \| [`AccessList`](../type-aliases/AccessList-4.md) \| `null`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:134

The access list which contains the addresses/storage slots which the transaction wishes to access

***

### chainId?

> `optional` **chainId?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:130

The transaction's chain ID

***

### data?

> `optional` **data?**: [`Uint8ArrayLike`](../type-aliases/Uint8ArrayLike.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:105

This will contain the data of the message or the init of a contract.

#### Inherited from

`TxData.data`

***

### gasLimit?

> `optional` **gasLimit?**: [`Numbers`](../type-aliases/Numbers.md) \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:93

The transaction's gas limit.

#### Inherited from

`TxData.gasLimit`

***

### gasPrice?

> `optional` **gasPrice?**: [`Numbers`](../type-aliases/Numbers.md) \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\> \| `null`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:89

The transaction's gas price.

#### Inherited from

`TxData.gasPrice`

***

### nonce?

> `optional` **nonce?**: [`Numbers`](../type-aliases/Numbers.md) \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:85

The transaction's nonce.

#### Inherited from

`TxData.nonce`

***

### r?

> `optional` **r?**: [`Numbers`](../type-aliases/Numbers.md) \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:113

EC signature parameter.

#### Inherited from

`TxData.r`

***

### s?

> `optional` **s?**: [`Numbers`](../type-aliases/Numbers.md) \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:117

EC signature parameter.

#### Inherited from

`TxData.s`

***

### to?

> `optional` **to?**: `string` \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\> \| [`Address`](../classes/Address.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:97

The transaction's the address is sent to.

#### Inherited from

`TxData.to`

***

### type?

> `optional` **type?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:121

The transaction type

#### Inherited from

`TxData.type`

***

### v?

> `optional` **v?**: [`Numbers`](../type-aliases/Numbers.md) \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:109

EC recovery ID.

#### Inherited from

`TxData.v`

***

### value?

> `optional` **value?**: [`Numbers`](../type-aliases/Numbers.md) \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:101

The amount of Ether sent.

#### Inherited from

`TxData.value`
