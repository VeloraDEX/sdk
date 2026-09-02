[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetContractEventsParameters

# Type Alias: GetContractEventsParameters\<abi, eventName, strict, fromBlock, toBlock\>

> **GetContractEventsParameters**\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\> = `object` & \{ `blockHash?`: `undefined`; `fromBlock?`: `fromBlock` \| [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md); `toBlock?`: `toBlock` \| [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md); \} \| \{ `blockHash?`: [`Hash`](Hash.md); `fromBlock?`: `undefined`; `toBlock?`: `undefined`; \}

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/getContractEvents.d.ts:12

## Type Declaration

### abi

> **abi**: `abi`

Contract ABI.

### address?

> `optional` **address?**: [`Address`](Address-1.md) \| [`Address`](Address-1.md)[]

The address of the contract.

### args?

> `optional` **args?**: [`ContractEventArgs`](ContractEventArgs-1.md)\<`abi`, `eventName` *extends* [`ContractEventName`](ContractEventName-1.md)\<`abi`\> ? `eventName` : [`ContractEventName`](ContractEventName-1.md)\<`abi`\>\>

### eventName?

> `optional` **eventName?**: `eventName` \| [`ContractEventName`](ContractEventName-1.md)\<`abi`\>

Contract event.

### strict?

> `optional` **strict?**: `strict` \| `boolean`

Whether or not the logs must match the indexed/non-indexed arguments on `event`.

#### Default

```ts
false
```

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

### eventName

`eventName` *extends* [`ContractEventName`](ContractEventName-1.md)\<`abi`\> \| `undefined` = [`ContractEventName`](ContractEventName-1.md)\<`abi`\> \| `undefined`

### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

### fromBlock

`fromBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

### toBlock

`toBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`
