[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetFilterLogsReturnType

# Type Alias: GetFilterLogsReturnType\<abi, eventName, strict, fromBlock, toBlock, _AbiEvent, _Pending\>

> **GetFilterLogsReturnType**\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`, `_AbiEvent`, `_Pending`\> = [`Log`](Log.md)\<`bigint`, `number`, `_Pending`, `_AbiEvent`, `strict`, `abi`, `eventName`\>[]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/getFilterLogs.d.ts:15

## Type Parameters

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

### _AbiEvent

`_AbiEvent` *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `abi` *extends* [`Abi`](Abi.md) ? `eventName` *extends* `string` ? [`ExtractAbiEvent`](ExtractAbiEvent.md)\<`abi`, `eventName`\> : `undefined` : `undefined`

### _Pending

`_Pending` *extends* `boolean` = `fromBlock` *extends* `"pending"` ? `true` : `false` \| `toBlock` *extends* `"pending"` ? `true` : `false`
