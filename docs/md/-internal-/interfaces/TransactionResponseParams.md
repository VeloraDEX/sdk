[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionResponseParams

# Interface: TransactionResponseParams

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:232

a **TransactionResponseParams** encodes the minimal required properties
 for a formatted transaction response.

## Properties

### accessList

> **accessList**: [`AccessList`](../type-aliases/AccessList-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:308

The transaction access list.

***

### blobVersionedHashes?

> `optional` **blobVersionedHashes?**: `string`[] \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:312

The [[link-eip-4844]] BLOb versioned hashes.

***

### blockHash

> **blockHash**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:240

The block hash of the block that included this transaction.

***

### blockNumber

> **blockNumber**: `number` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:236

The block number of the block that included this transaction.

***

### chainId

> **chainId**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:300

The chain ID this transaction is valid on.

***

### data

> **data**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:292

The transaction data.

***

### from

> **from**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:261

The sender of the transaction.

***

### gasLimit

> **gasLimit**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:269

The maximum amount of gas this transaction is authorized to consume.

***

### gasPrice

> **gasPrice**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:273

For legacy transactions, this is the gas price per gas to pay.

***

### hash

> **hash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:244

The transaction hash.

***

### index

> **index**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:248

The transaction index.

***

### maxFeePerBlobGas?

> `optional` **maxFeePerBlobGas?**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:288

For [[link-eip-4844]] transactions, this is the maximum fee that
 will be paid per BLOb.

***

### maxFeePerGas

> **maxFeePerGas**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:283

For [[link-eip-1559]] transactions, this is the maximum fee that
 will be paid.

***

### maxPriorityFeePerGas

> **maxPriorityFeePerGas**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:278

For [[link-eip-1559]] transactions, this is the maximum priority
 fee to allow a producer to claim.

***

### nonce

> **nonce**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:265

The nonce of the transaction, used for replay protection.

***

### signature

> **signature**: [`Signature`](../classes/Signature.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:304

The signature of the transaction.

***

### to

> **to**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:257

The target of the transaction. If ``null``, the ``data`` is initcode
 and this transaction is a deployment transaction.

***

### type

> **type**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:252

The [[link-eip-2718]] transaction type.

***

### value

> **value**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:296

The transaction value (in wei).
