[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SimulateCallsReturnType

# Type Alias: SimulateCallsReturnType\<calls\>

> **SimulateCallsReturnType**\<`calls`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/simulateCalls.d.ts:29

## Type Parameters

### calls

`calls` *extends* readonly `unknown`[] = readonly `unknown`[]

## Properties

### assetChanges

> **assetChanges**: readonly `object`[]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/simulateCalls.d.ts:31

Asset changes.

***

### block

> **block**: [`Block`](Block.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/simulateCalls.d.ts:44

Block results.

***

### results

> **results**: [`MulticallResults`](MulticallResults.md)\<[`Narrow`](Narrow.md)\<`calls`\>, `true`, \{ `error`: `Error`; `extraProperties`: \{ `data`: [`Hex`](Hex.md); `gasUsed`: `bigint`; `logs?`: [`Log`](Log.md)[]; \}; `mutability`: [`AbiStateMutability`](AbiStateMutability.md); \}\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/simulateCalls.d.ts:46

Call results.
