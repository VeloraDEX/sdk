[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetFeeHistoryParameters

# Type Alias: GetFeeHistoryParameters

> **GetFeeHistoryParameters** = `object` & \{ `blockNumber?`: `undefined`; `blockTag?`: [`BlockTag`](BlockTag-2.md); \} \| \{ `blockNumber?`: `bigint`; `blockTag?`: `undefined`; \}

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/getFeeHistory.d.ts:9

## Type Declaration

### blockCount

> **blockCount**: `number`

Number of blocks in the requested range. Between 1 and 1024 blocks can be requested in a single query. Less than requested may be returned if not all blocks are available.

### rewardPercentiles

> **rewardPercentiles**: `number`[]

A monotonically increasing list of percentile values to sample from each block's effective priority fees per gas in ascending order, weighted by gas used.
