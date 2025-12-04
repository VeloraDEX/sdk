[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SimulateCallsReturnType

# Type Alias: SimulateCallsReturnType\<calls\>

> **SimulateCallsReturnType**\<`calls`\>: `object`

## Type Parameters

• **calls** *extends* readonly `unknown`[] = readonly `unknown`[]

## Type declaration

### assetChanges

> **assetChanges**: readonly `object`[]

Asset changes.

### block

> **block**: [`Block`](Block.md)

Block results.

### results

> **results**: [`MulticallResults`](MulticallResults.md)\<[`Narrow`](Narrow.md)\<`calls`\>, `true`, `object`\>

Call results.

## Defined in

node\_modules/viem/\_types/actions/public/simulateCalls.d.ts:27
