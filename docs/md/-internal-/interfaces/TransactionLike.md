[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionLike

# Interface: TransactionLike\<A\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:10

A **TransactionLike** is an object which is appropriate as a loose
 input for many operations which will populate missing properties of
 a transaction.

## Type Parameters

### A

`A` = `string`

## Properties

### accessList?

> `optional` **accessList?**: [`AccessListish`](../type-aliases/AccessListish-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:66

The access list for berlin and london transactions.

***

### blobs?

> `optional` **blobs?**: [`BlobLike`](../type-aliases/BlobLike.md)[] \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:78

The blobs (if any) attached to this transaction (see [[link-eip-4844]]).

***

### blobVersionedHashes?

> `optional` **blobVersionedHashes?**: `string`[] \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:74

The versioned hashes (see [[link-eip-4844]]).

***

### chainId?

> `optional` **chainId?**: [`BigNumberish`](../type-aliases/BigNumberish-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:54

The chain ID the transaction is valid on.

***

### data?

> `optional` **data?**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:46

The data.

***

### from?

> `optional` **from?**: `A` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:22

The sender.

***

### gasLimit?

> `optional` **gasLimit?**: [`BigNumberish`](../type-aliases/BigNumberish-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:30

The maximum amount of gas that can be used.

***

### gasPrice?

> `optional` **gasPrice?**: [`BigNumberish`](../type-aliases/BigNumberish-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:34

The gas price for legacy and berlin transactions.

***

### hash?

> `optional` **hash?**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:58

The transaction hash.

***

### kzg?

> `optional` **kzg?**: [`KzgLibrary`](KzgLibrary.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:86

An external library for computing the KZG commitments and
 proofs necessary for EIP-4844 transactions (see [[link-eip-4844]]).

 This is generally ``null``, unless you are creating BLOb
 transactions.

***

### maxFeePerBlobGas?

> `optional` **maxFeePerBlobGas?**: [`BigNumberish`](../type-aliases/BigNumberish-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:70

The maximum fee per blob gas (see [[link-eip-4844]]).

***

### maxFeePerGas?

> `optional` **maxFeePerGas?**: [`BigNumberish`](../type-aliases/BigNumberish-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:42

The maximum total fee per gas for london transactions.

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas?**: [`BigNumberish`](../type-aliases/BigNumberish-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:38

The maximum priority fee per gas for london transactions.

***

### nonce?

> `optional` **nonce?**: `number` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:26

The nonce.

***

### signature?

> `optional` **signature?**: [`SignatureLike`](../type-aliases/SignatureLike.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:62

The signature provided by the sender.

***

### to?

> `optional` **to?**: `A` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:18

The recipient address or ``null`` for an ``init`` transaction.

***

### type?

> `optional` **type?**: `number` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:14

The type.

***

### value?

> `optional` **value?**: [`BigNumberish`](../type-aliases/BigNumberish-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:50

The value (in wei) to send.
