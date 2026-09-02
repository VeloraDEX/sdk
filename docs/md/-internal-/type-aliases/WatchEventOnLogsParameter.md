[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchEventOnLogsParameter

# Type Alias: WatchEventOnLogsParameter\<abiEvent, abiEvents, strict, eventName\>

> **WatchEventOnLogsParameter**\<`abiEvent`, `abiEvents`, `strict`, `eventName`\> = [`Log`](Log.md)\<`bigint`, `number`, `false`, `abiEvent`, `strict`, `abiEvents`, `eventName`\>[]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/watchEvent.d.ts:12

## Type Parameters

### abiEvent

`abiEvent` *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

### abiEvents

`abiEvents` *extends* readonly [`AbiEvent`](AbiEvent.md)[] \| readonly `unknown`[] \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? \[`abiEvent`\] : `undefined`

### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

### eventName

`eventName` *extends* `string` \| `undefined` = [`MaybeAbiEventName`](MaybeAbiEventName.md)\<`abiEvent`\>
