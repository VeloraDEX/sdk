[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / LogParams

# Interface: LogParams

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:100

a **LogParams** encodes the minimal required properties for a
 formatted log.

## Properties

### address

> **address**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:123

The address of the contract that emitted this log.

***

### blockHash

> **blockHash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:109

The block hash of the block that included the transaction for this
 log.

***

### blockNumber

> **blockNumber**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:114

The block number of the block that included the transaction for this
 log.

***

### data

> **data**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:127

The data emitted with this log.

***

### index

> **index**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:135

The index of this log.

***

### removed

> **removed**: `boolean`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:119

Whether this log was removed due to the transaction it was included
 in being removed dur to an orphaned block.

***

### topics

> **topics**: readonly `string`[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:131

The topics emitted with this log.

***

### transactionHash

> **transactionHash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:104

The transaction hash for the transaxction the log occurred in.

***

### transactionIndex

> **transactionIndex**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/formatting.d.ts:139

The transaction index of this log.
