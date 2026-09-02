[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Block

# Type Alias: Block\<quantity, includeTransactions, blockTag, transaction\>

> **Block**\<`quantity`, `includeTransactions`, `blockTag`, `transaction`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:5

## Type Parameters

### quantity

`quantity` = `bigint`

### includeTransactions

`includeTransactions` *extends* `boolean` = `boolean`

### blockTag

`blockTag` *extends* [`BlockTag`](BlockTag-2.md) = [`BlockTag`](BlockTag-2.md)

### transaction

`transaction` = [`Transaction`](Transaction.md)\<`bigint`, `number`, `blockTag` *extends* `"pending"` ? `true` : `false`\>

## Properties

### baseFeePerGas

> **baseFeePerGas**: `quantity` \| `null`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:7

Base fee per gas

***

### blobGasUsed

> **blobGasUsed**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:9

Total used blob gas by all transactions in this block

***

### difficulty

> **difficulty**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:11

Difficulty for this block

***

### excessBlobGas

> **excessBlobGas**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:13

Excess blob gas

***

### extraData

> **extraData**: [`Hex`](Hex.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:15

"Extra data" field of this block

***

### gasLimit

> **gasLimit**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:17

Maximum gas allowed in this block

***

### gasUsed

> **gasUsed**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:19

Total used gas by all transactions in this block

***

### hash

> **hash**: `blockTag` *extends* `"pending"` ? `null` : [`Hash`](Hash.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:21

Block hash or `null` if pending

***

### logsBloom

> **logsBloom**: `blockTag` *extends* `"pending"` ? `null` : [`Hex`](Hex.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:23

Logs bloom filter or `null` if pending

***

### miner

> **miner**: [`Address`](Address-1.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:25

Address that received this block’s mining rewards, COINBASE address

***

### mixHash

> **mixHash**: [`Hash`](Hash.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:27

Unique identifier for the block.

***

### nonce

> **nonce**: `blockTag` *extends* `"pending"` ? `null` : [`Hex`](Hex.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:29

Proof-of-work hash or `null` if pending

***

### number

> **number**: `blockTag` *extends* `"pending"` ? `null` : `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:31

Block number or `null` if pending

***

### parentBeaconBlockRoot?

> `optional` **parentBeaconBlockRoot?**: [`Hex`](Hex.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:33

Root of the parent beacon chain block

***

### parentHash

> **parentHash**: [`Hash`](Hash.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:35

Parent block hash

***

### receiptsRoot

> **receiptsRoot**: [`Hex`](Hex.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:37

Root of the this block’s receipts trie

***

### sealFields

> **sealFields**: [`Hex`](Hex.md)[]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:38

***

### sha3Uncles

> **sha3Uncles**: [`Hash`](Hash.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:40

SHA3 of the uncles data in this block

***

### size

> **size**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:42

Size of this block in bytes

***

### stateRoot

> **stateRoot**: [`Hash`](Hash.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:44

Root of this block’s final state trie

***

### timestamp

> **timestamp**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:46

Unix timestamp of when this block was collated

***

### totalDifficulty

> **totalDifficulty**: `quantity` \| `null`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:48

Total difficulty of the chain until this block

***

### transactions

> **transactions**: `includeTransactions` *extends* `true` ? `transaction`[] : [`Hash`](Hash.md)[]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:50

List of transaction objects or hashes

***

### transactionsRoot

> **transactionsRoot**: [`Hash`](Hash.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:52

Root of this block’s transaction trie

***

### uncles

> **uncles**: [`Hash`](Hash.md)[]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:54

List of uncle hashes

***

### withdrawals?

> `optional` **withdrawals?**: [`Withdrawal`](Withdrawal-1.md)[]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:56

List of withdrawal objects

***

### withdrawalsRoot?

> `optional` **withdrawalsRoot?**: [`Hex`](Hex.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:58

Root of the this block’s withdrawals trie
