[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CreateContractEventFilterParameters

# Type Alias: CreateContractEventFilterParameters\<abi, eventName, args, strict, fromBlock, toBlock\>

> **CreateContractEventFilterParameters**\<`abi`, `eventName`, `args`, `strict`, `fromBlock`, `toBlock`\> = `object` & `undefined` *extends* `eventName` ? `object` : [`MaybeExtractEventArgsFromAbi`](MaybeExtractEventArgsFromAbi.md)\<`abi`, `eventName`\> *extends* infer eventFilterArgs ? `object` : `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/createContractEventFilter.d.ts:12

## Type Declaration

### abi

> **abi**: `abi`

### address?

> `optional` **address?**: [`Address`](Address-1.md) \| [`Address`](Address-1.md)[]

### eventName?

> `optional` **eventName?**: `eventName` \| [`ContractEventName`](ContractEventName-1.md)\<`abi`\>

### fromBlock?

> `optional` **fromBlock?**: `fromBlock` \| [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md)

### strict?

> `optional` **strict?**: `strict` \| `boolean`

Whether or not the logs must match the indexed/non-indexed arguments in the event ABI item.

#### Default

```ts
false
```

### toBlock?

> `optional` **toBlock?**: `toBlock` \| [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md)

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
