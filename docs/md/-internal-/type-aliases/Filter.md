[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Filter

# Type Alias: Filter\<filterType, abi, eventName, args, strict, fromBlock, toBlock\>

> **Filter**\<`filterType`, `abi`, `eventName`, `args`, `strict`, `fromBlock`, `toBlock`\> = `object` & `filterType` *extends* `"event"` ? `object` & `abi` *extends* [`Abi`](Abi.md) ? `undefined` *extends* `eventName` ? `object` : `args` *extends* [`MaybeExtractEventArgsFromAbi`](MaybeExtractEventArgsFromAbi.md)\<`abi`, `eventName`\> ? `object` : `object` : `object` : `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/filter.d.ts:11

## Type Declaration

### id

> **id**: [`Hex`](Hex.md)

### request

> **request**: [`EIP1193RequestFn`](EIP1193RequestFn.md)\<[`FilterRpcSchema`](FilterRpcSchema.md)\>

### type

> **type**: `filterType`

## Type Parameters

### filterType

`filterType` *extends* [`FilterType`](FilterType.md) = `"event"`

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] \| `undefined` = `undefined`

### eventName

`eventName` *extends* `string` \| `undefined` = `undefined`

### args

`args` *extends* [`MaybeExtractEventArgsFromAbi`](MaybeExtractEventArgsFromAbi.md)\<`abi`, `eventName`\> \| `undefined` = [`MaybeExtractEventArgsFromAbi`](MaybeExtractEventArgsFromAbi.md)\<`abi`, `eventName`\>

### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

### fromBlock

`fromBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

### toBlock

`toBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`
