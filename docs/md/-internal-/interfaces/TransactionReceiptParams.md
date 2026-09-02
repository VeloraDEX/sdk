[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionReceiptParams

# Interface: TransactionReceiptParams

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:145

a **TransactionReceiptParams** encodes the minimal required properties
 for a formatted transaction receipt.

## Properties

### blobGasPrice?

> `optional` **blobGasPrice?**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:206

The actual BLOb gas price that was charged. See [[link-eip-4844]].

***

### blobGasUsed?

> `optional` **blobGasUsed?**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:193

The amount of BLOb gas used. See [[link-eip-4844]].

***

### blockHash

> **blockHash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:172

The block hash of the block that included this transaction.

***

### blockNumber

> **blockNumber**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:176

The block number of the block that included this transaction.

***

### contractAddress

> **contractAddress**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:160

If the transaction was directly deploying a contract, the [[to]]
 will be null, the ``data`` will be initcode and if successful, this
 will be the address of the contract deployed.

***

### cumulativeGasUsed

> **cumulativeGasUsed**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:198

The total amount of gas consumed during the entire block up to
 and including this transaction.

***

### effectiveGasPrice?

> `optional` **effectiveGasPrice?**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:210

The actual gas price per gas charged for this transaction.

***

### from

> **from**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:154

The sender of the transaction.

***

### gasPrice?

> `optional` **gasPrice?**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:202

The actual gas price per gas charged for this transaction.

***

### gasUsed

> **gasUsed**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:189

The amount of gas consumed executing this transaciton.

***

### hash

> **hash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:164

The transaction hash.

***

### index

> **index**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:168

The transaction index.

***

### logs

> **logs**: readonly [`LogParams`](LogParams.md)[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:185

The logs emitted during the execution of this transaction.

***

### logsBloom

> **logsBloom**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:181

The bloom filter for the logs emitted during execution of this
 transaction.

***

### root

> **root**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:226

The root of this transaction in a pre-bazatium block. In
 post-byzantium blocks this is null.

***

### status

> **status**: `number` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:221

The status of the transaction execution. If ``1`` then the
 the transaction returned success, if ``0`` then the transaction
 was reverted. For pre-byzantium blocks, this is usually null, but
 some nodes may have backfilled this data.

***

### to

> **to**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:150

The target of the transaction. If null, the transaction was trying
 to deploy a transaction with the ``data`` as the initi=code.

***

### type

> **type**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:214

The [[link-eip-2718]] envelope type.
