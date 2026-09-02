[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetInferredLogValues

# Type Alias: GetInferredLogValues\<abiEvent, abi, eventName, strict, _EventNames\>

> **GetInferredLogValues**\<`abiEvent`, `abi`, `eventName`, `strict`, `_EventNames`\> = `abi` *extends* [`Abi`](Abi.md) ? `eventName` *extends* `string` ? `object` : `{ [name in _EventNames]: { args: GetEventArgs<abi, name, { EnableUnion: false; IndexedOnly: false; Required: strict extends boolean ? strict : false }>; eventName: name; topics: GetTopics<abiEvent, abi, name> } }`\[`_EventNames`\] : `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/log.d.ts:31

## Type Parameters

### abiEvent

`abiEvent` *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? \[`abiEvent`\] : `undefined`

### eventName

`eventName` *extends* `string` \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? `abiEvent`\[`"name"`\] : `undefined`

### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

### _EventNames

`_EventNames` *extends* `string` = `abi` *extends* [`Abi`](Abi.md) ? [`Abi`](Abi.md) *extends* `abi` ? `string` : [`ExtractAbiEventNames`](ExtractAbiEventNames.md)\<`abi`\> : `string`
