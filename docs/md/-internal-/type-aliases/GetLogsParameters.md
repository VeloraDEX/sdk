[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetLogsParameters

# Type Alias: GetLogsParameters\<abiEvent, abiEvents, strict, fromBlock, toBlock, _eventName\>

> **GetLogsParameters**\<`abiEvent`, `abiEvents`, `strict`, `fromBlock`, `toBlock`, `_eventName`\> = `object` & \{ `args?`: [`MaybeExtractEventArgsFromAbi`](MaybeExtractEventArgsFromAbi.md)\<`abiEvents`, `_eventName`\>; `event`: `abiEvent`; `events?`: `undefined`; `strict?`: `strict`; \} \| \{ `args?`: `undefined`; `event?`: `undefined`; `events`: `abiEvents`; `strict?`: `strict`; \} \| \{ `args?`: `undefined`; `event?`: `undefined`; `events?`: `undefined`; `strict?`: `undefined`; \} & \{ `blockHash?`: `undefined`; `fromBlock?`: `fromBlock` \| [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md); `toBlock?`: `toBlock` \| [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md); \} \| \{ `blockHash?`: [`Hash`](Hash.md); `fromBlock?`: `undefined`; `toBlock?`: `undefined`; \}

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/getLogs.d.ts:15

## Type Declaration

### address?

> `optional` **address?**: [`Address`](Address-1.md) \| [`Address`](Address-1.md)[]

Address or list of addresses from which logs originated

## Type Parameters

### abiEvent

`abiEvent` *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

### abiEvents

`abiEvents` *extends* readonly [`AbiEvent`](AbiEvent.md)[] \| readonly `unknown`[] \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? \[`abiEvent`\] : `undefined`

### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

### fromBlock

`fromBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

### toBlock

`toBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

### _eventName

`_eventName` *extends* `string` \| `undefined` = [`MaybeAbiEventName`](MaybeAbiEventName.md)\<`abiEvent`\>
