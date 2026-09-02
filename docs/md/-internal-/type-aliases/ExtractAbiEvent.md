[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractAbiEvent

# Type Alias: ExtractAbiEvent\<abi, eventName\>

> **ExtractAbiEvent**\<`abi`, `eventName`\> = [`Extract`](Extract.md)\<[`ExtractAbiEvents`](ExtractAbiEvents.md)\<`abi`\>, \{ `name`: `eventName`; \}\>

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/utils.d.ts:213

Extracts [AbiEvent](AbiEvent.md) with name from [Abi](Abi.md).

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md)

[Abi](Abi.md) to extract [AbiEvent](AbiEvent.md) from

### eventName

`eventName` *extends* [`ExtractAbiEventNames`](ExtractAbiEventNames.md)\<`abi`\>

String name of event to extract from [Abi](Abi.md)

## Returns

Matching [AbiEvent](AbiEvent.md)
