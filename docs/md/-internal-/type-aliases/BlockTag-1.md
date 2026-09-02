[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BlockTag

# Type Alias: BlockTag

> **BlockTag** = [`BigNumberish`](BigNumberish-1.md) \| `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:20

A **BlockTag** specifies a specific block.

 **numeric value** - specifies the block height, where
 the genesis block is block 0; many operations accept a negative
 value which indicates the block number should be deducted from
 the most recent block. A numeric value may be a ``number``, ``bigint``,
 or a decimal of hex string.

 **blockhash** - specifies a specific block by its blockhash; this allows
 potentially orphaned blocks to be specifed, without ambiguity, but many
 backends do not support this for some operations.
