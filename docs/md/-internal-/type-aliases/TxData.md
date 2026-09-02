[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TxData

# Type Alias: TxData

> **TxData** = `object`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:81

Legacy [Transaction](../interfaces/Transaction.md) Data

## Extended by

- [`AccessListEIP2930TxData`](../interfaces/AccessListEIP2930TxData.md)

## Properties

### data?

> `optional` **data?**: [`Uint8ArrayLike`](Uint8ArrayLike.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:105

This will contain the data of the message or the init of a contract.

***

### gasLimit?

> `optional` **gasLimit?**: [`Numbers`](Numbers.md) \| `Uint8Array`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:93

The transaction's gas limit.

***

### gasPrice?

> `optional` **gasPrice?**: [`Numbers`](Numbers.md) \| `Uint8Array` \| `null`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:89

The transaction's gas price.

***

### nonce?

> `optional` **nonce?**: [`Numbers`](Numbers.md) \| `Uint8Array`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:85

The transaction's nonce.

***

### r?

> `optional` **r?**: [`Numbers`](Numbers.md) \| `Uint8Array`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:113

EC signature parameter.

***

### s?

> `optional` **s?**: [`Numbers`](Numbers.md) \| `Uint8Array`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:117

EC signature parameter.

***

### to?

> `optional` **to?**: [`Address`](../classes/Address.md) \| `Uint8Array` \| [`HexString`](HexString.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:97

The transaction's the address is sent to.

***

### type?

> `optional` **type?**: [`Numbers`](Numbers.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:121

The transaction type

***

### v?

> `optional` **v?**: [`Numbers`](Numbers.md) \| `Uint8Array`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:109

EC recovery ID.

***

### value?

> `optional` **value?**: [`Numbers`](Numbers.md) \| `Uint8Array`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:101

The amount of Ether sent.
