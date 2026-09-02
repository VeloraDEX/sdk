[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetContractEventsReturnType

# Type Alias: GetContractEventsReturnType\<abi, eventName, strict, fromBlock, toBlock, isPending\>

> **GetContractEventsReturnType**\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`, `isPending`\> = [`Log`](Log.md)\<`bigint`, `number`, `isPending`, `undefined`, `strict`, `abi`, `eventName`\>[]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/getContractEvents.d.ts:37

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = readonly `unknown`[]

### eventName

`eventName` *extends* [`ContractEventName`](ContractEventName-1.md)\<`abi`\> \| `undefined` = [`ContractEventName`](ContractEventName-1.md)\<`abi`\> \| `undefined`

### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

### fromBlock

`fromBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

### toBlock

`toBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

### isPending

`isPending` *extends* `boolean` = `fromBlock` *extends* `"pending"` ? `true` : `false` \| `toBlock` *extends* `"pending"` ? `true` : `false`
