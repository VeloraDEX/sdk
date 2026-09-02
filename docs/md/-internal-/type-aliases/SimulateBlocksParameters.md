[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SimulateBlocksParameters

# Type Alias: SimulateBlocksParameters\<calls\>

> **SimulateBlocksParameters**\<`calls`\> = `object` & \{ `blockNumber?`: `bigint`; `blockTag?`: `undefined`; \} \| \{ `blockNumber?`: `undefined`; `blockTag?`: [`BlockTag`](BlockTag-2.md); \}

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/simulateBlocks.d.ts:31

## Type Declaration

### blocks

> **blocks**: readonly `object`[]

Blocks to simulate.

### returnFullTransactions?

> `optional` **returnFullTransactions?**: `boolean`

Whether to return the full transactions.

### traceTransfers?

> `optional` **traceTransfers?**: `boolean`

Whether to trace transfers.

### validation?

> `optional` **validation?**: `boolean`

Whether to enable validation mode.

## Type Parameters

### calls

`calls` *extends* readonly `unknown`[] = readonly `unknown`[]
