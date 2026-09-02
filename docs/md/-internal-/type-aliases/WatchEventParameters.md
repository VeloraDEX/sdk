[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchEventParameters

# Type Alias: WatchEventParameters\<abiEvent, abiEvents, strict, transport, _eventName\>

> **WatchEventParameters**\<`abiEvent`, `abiEvents`, `strict`, `transport`, `_eventName`\> = `object` & [`GetPollOptions`](GetPollOptions.md)\<`transport`\> & \{ `args?`: [`MaybeExtractEventArgsFromAbi`](MaybeExtractEventArgsFromAbi.md)\<`abiEvents`, `_eventName`\>; `event`: `abiEvent`; `events?`: `undefined`; `strict?`: `strict`; \} \| \{ `args?`: `undefined`; `event?`: `undefined`; `events?`: `abiEvents`; `strict?`: `strict`; \} \| \{ `args?`: `undefined`; `event?`: `undefined`; `events?`: `undefined`; `strict?`: `undefined`; \}

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/watchEvent.d.ts:14

## Type Declaration

### address?

> `optional` **address?**: [`Address`](Address-1.md) \| [`Address`](Address-1.md)[]

The address of the contract.

### fromBlock?

> `optional` **fromBlock?**: [`BlockNumber`](BlockNumber.md)\<`bigint`\>

Block to start listening from.

### onError?

> `optional` **onError?**: (`error`) => `void`

The callback to call when an error occurred when trying to get for a new block.

#### Parameters

##### error

`Error`

#### Returns

`void`

### onLogs

> **onLogs**: [`WatchEventOnLogsFn`](WatchEventOnLogsFn.md)\<`abiEvent`, `abiEvents`, `strict`, `_eventName`\>

The callback to call when new event logs are received.

## Type Parameters

### abiEvent

`abiEvent` *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

### abiEvents

`abiEvents` *extends* readonly [`AbiEvent`](AbiEvent.md)[] \| readonly `unknown`[] \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? \[`abiEvent`\] : `undefined`

### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

### transport

`transport` *extends* [`Transport`](Transport.md) = [`Transport`](Transport.md)

### _eventName

`_eventName` *extends* `string` \| `undefined` = [`MaybeAbiEventName`](MaybeAbiEventName.md)\<`abiEvent`\>
