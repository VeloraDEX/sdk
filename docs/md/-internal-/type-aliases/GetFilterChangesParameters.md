[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetFilterChangesParameters

# Type Alias: GetFilterChangesParameters\<filterType, abi, eventName, strict, fromBlock, toBlock\>

> **GetFilterChangesParameters**\<`filterType`, `abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/getFilterChanges.d.ts:13

## Type Parameters

### filterType

`filterType` *extends* [`FilterType`](FilterType.md) = [`FilterType`](FilterType.md)

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] \| `undefined` = `undefined`

### eventName

`eventName` *extends* `string` \| `undefined` = `undefined`

### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

### fromBlock

`fromBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

### toBlock

`toBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

## Properties

### filter

> **filter**: [`Filter`](Filter.md)\<`filterType`, `abi`, `eventName`, `any`, `strict`, `fromBlock`, `toBlock`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/getFilterChanges.d.ts:14
