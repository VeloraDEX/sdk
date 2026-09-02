[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CreateEventFilterParameters

# Type Alias: CreateEventFilterParameters\<abiEvent, abiEvents, strict, fromBlock, toBlock, _eventName, _args\>

> **CreateEventFilterParameters**\<`abiEvent`, `abiEvents`, `strict`, `fromBlock`, `toBlock`, `_eventName`, `_args`\> = `object` & [`MaybeExtractEventArgsFromAbi`](MaybeExtractEventArgsFromAbi.md)\<`abiEvents`, `_eventName`\> *extends* infer eventFilterArgs ? \{ `args`: `eventFilterArgs` \| `_args` *extends* `eventFilterArgs` ? `_args` : `never`; `event`: `abiEvent`; `events?`: `undefined`; `strict?`: `strict`; \} \| \{ `args?`: `undefined`; `event?`: `abiEvent`; `events?`: `undefined`; `strict?`: `strict`; \} \| \{ `args?`: `undefined`; `event?`: `undefined`; `events`: `abiEvents` \| `undefined`; `strict?`: `strict`; \} \| \{ `args?`: `undefined`; `event?`: `undefined`; `events?`: `undefined`; `strict?`: `undefined`; \} : `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/createEventFilter.d.ts:13

## Type Declaration

### address?

> `optional` **address?**: [`Address`](Address-1.md) \| [`Address`](Address-1.md)[]

### fromBlock?

> `optional` **fromBlock?**: `fromBlock` \| [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md)

### toBlock?

> `optional` **toBlock?**: `toBlock` \| [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md)

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

### _args

`_args` *extends* [`MaybeExtractEventArgsFromAbi`](MaybeExtractEventArgsFromAbi.md)\<`abiEvents`, `_eventName`\> \| `undefined` = `undefined`
