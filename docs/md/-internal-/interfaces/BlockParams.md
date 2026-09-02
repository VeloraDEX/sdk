[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BlockParams

# Interface: BlockParams

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:12

a **BlockParams** encodes the minimal required properties for a
 formatted block.

## Properties

### baseFeePerGas

> **baseFeePerGas**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:81

The protocol-defined base fee per gas in an [[link-eip-1559]]
 block.

***

### blobGasUsed?

> `optional` **blobGasUsed?**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:58

The total amount of BLOb gas consumed by transactions within
 the block. See [[link-eip4844].

***

### difficulty

> **difficulty**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:45

For proof-of-work networks, the difficulty target is used to
 adjust the difficulty in mining to ensure a expected block rate.

***

### excessBlobGas?

> `optional` **excessBlobGas?**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:63

The running total of BLOb gas consumed in excess of the target
 prior to the block. See [[link-eip-4844]].

***

### extraData

> **extraData**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:76

Additional data the miner choose to include.

***

### gasLimit

> **gasLimit**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:49

The maximum amount of gas a block can consume.

***

### gasUsed

> **gasUsed**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:53

The amount of gas a block consumed.

***

### hash?

> `optional` **hash?**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:16

The block hash.

***

### miner

> **miner**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:67

The miner (or author) of a block.

***

### nonce

> **nonce**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:40

A random sequence provided during the mining process for
 proof-of-work networks.

***

### number

> **number**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:20

The block number.

***

### parentBeaconBlockRoot?

> `optional` **parentBeaconBlockRoot?**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:35

The hash tree root of the parent beacon block for the given
 execution block. See [[link-eip-4788]].

***

### parentHash

> **parentHash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:30

The hash of the previous block in the blockchain. The genesis block
 has the parentHash of the [[ZeroHash]].

***

### prevRandao?

> `optional` **prevRandao?**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:72

The latest RANDAO mix of the post beacon state of
 the previous block.

***

### receiptsRoot?

> `optional` **receiptsRoot?**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:90

The hash of the transaction receipts trie.

***

### stateRoot?

> `optional` **stateRoot?**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:86

The root hash for the global state after applying changes
 in this block.

***

### timestamp

> **timestamp**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:25

The timestamp for this block, which is the number of seconds
 since epoch that this block was included.

***

### transactions

> **transactions**: readonly (`string` \| [`TransactionResponseParams`](TransactionResponseParams.md))[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:94

The list of transactions in the block.
