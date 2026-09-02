[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CreateContractEventFilterReturnType

# Type Alias: CreateContractEventFilterReturnType\<abi, eventName, args, strict, fromBlock, toBlock\>

> **CreateContractEventFilterReturnType**\<`abi`, `eventName`, `args`, `strict`, `fromBlock`, `toBlock`\> = [`Filter`](Filter.md)\<`"event"`, `abi`, `eventName`, `args`, `strict`, `fromBlock`, `toBlock`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/createContractEventFilter.d.ts:30

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

### eventName

`eventName` *extends* [`ContractEventName`](ContractEventName-1.md)\<`abi`\> \| `undefined` = `undefined`

### args

`args` *extends* [`MaybeExtractEventArgsFromAbi`](MaybeExtractEventArgsFromAbi.md)\<`abi`, `eventName`\> \| `undefined` = `undefined`

### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

### fromBlock

`fromBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

### toBlock

`toBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`
