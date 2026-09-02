[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchEventOnLogsFn

# Type Alias: WatchEventOnLogsFn\<abiEvent, abiEvents, strict, _eventName\>

> **WatchEventOnLogsFn**\<`abiEvent`, `abiEvents`, `strict`, `_eventName`\> = (`logs`) => `void`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/watchEvent.d.ts:13

## Type Parameters

### abiEvent

`abiEvent` *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

### abiEvents

`abiEvents` *extends* readonly [`AbiEvent`](AbiEvent.md)[] \| readonly `unknown`[] \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? \[`abiEvent`\] : `undefined`

### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

### _eventName

`_eventName` *extends* `string` \| `undefined` = [`MaybeAbiEventName`](MaybeAbiEventName.md)\<`abiEvent`\>

## Parameters

### logs

[`WatchEventOnLogsParameter`](WatchEventOnLogsParameter.md)\<`abiEvent`, `abiEvents`, `strict`, `_eventName`\>

## Returns

`void`
