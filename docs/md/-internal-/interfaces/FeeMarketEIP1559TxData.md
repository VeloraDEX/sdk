[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FeeMarketEIP1559TxData

# Interface: FeeMarketEIP1559TxData

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:139

FeeMarketEIP1559Transaction data.

## Extends

- [`AccessListEIP2930TxData`](AccessListEIP2930TxData.md)

## Properties

### accessList?

> `optional` **accessList?**: [`AccessListUint8Array`](../type-aliases/AccessListUint8Array.md) \| [`AccessList`](../type-aliases/AccessList-4.md) \| `null`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:134

The access list which contains the addresses/storage slots which the transaction wishes to access

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`accessList`](AccessListEIP2930TxData.md#accesslist)

***

### chainId?

> `optional` **chainId?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:130

The transaction's chain ID

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`chainId`](AccessListEIP2930TxData.md#chainid)

***

### data?

> `optional` **data?**: [`Uint8ArrayLike`](../type-aliases/Uint8ArrayLike.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:105

This will contain the data of the message or the init of a contract.

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`data`](AccessListEIP2930TxData.md#data)

***

### gasLimit?

> `optional` **gasLimit?**: [`Numbers`](../type-aliases/Numbers.md) \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:93

The transaction's gas limit.

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`gasLimit`](AccessListEIP2930TxData.md#gaslimit)

***

### gasPrice?

> `optional` **gasPrice?**: `null`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:144

The transaction's gas price, inherited from [Transaction](Transaction.md).  This property is not used for EIP1559
transactions and should always be undefined for this specific transaction type.

#### Overrides

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`gasPrice`](AccessListEIP2930TxData.md#gasprice)

***

### maxFeePerGas?

> `optional` **maxFeePerGas?**: [`Numbers`](../type-aliases/Numbers.md) \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:152

The maximum total fee

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas?**: [`Numbers`](../type-aliases/Numbers.md) \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:148

The maximum inclusion fee per gas (this fee is given to the miner)

***

### nonce?

> `optional` **nonce?**: [`Numbers`](../type-aliases/Numbers.md) \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:85

The transaction's nonce.

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`nonce`](AccessListEIP2930TxData.md#nonce)

***

### r?

> `optional` **r?**: [`Numbers`](../type-aliases/Numbers.md) \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:113

EC signature parameter.

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`r`](AccessListEIP2930TxData.md#r)

***

### s?

> `optional` **s?**: [`Numbers`](../type-aliases/Numbers.md) \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:117

EC signature parameter.

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`s`](AccessListEIP2930TxData.md#s)

***

### to?

> `optional` **to?**: `string` \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\> \| [`Address`](../classes/Address.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:97

The transaction's the address is sent to.

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`to`](AccessListEIP2930TxData.md#to)

***

### type?

> `optional` **type?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:121

The transaction type

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`type`](AccessListEIP2930TxData.md#type)

***

### v?

> `optional` **v?**: [`Numbers`](../type-aliases/Numbers.md) \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:109

EC recovery ID.

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`v`](AccessListEIP2930TxData.md#v)

***

### value?

> `optional` **value?**: [`Numbers`](../type-aliases/Numbers.md) \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:101

The amount of Ether sent.

#### Inherited from

[`AccessListEIP2930TxData`](AccessListEIP2930TxData.md).[`value`](AccessListEIP2930TxData.md#value)
