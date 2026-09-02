[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetEventArgs

# Type Alias: GetEventArgs\<abi, eventName, config, abiEvent, args\>

> **GetEventArgs**\<`abi`, `eventName`, `config`, `abiEvent`, `args`\> = `args` *extends* [`Record`](Record.md)\<[`PropertyKey`](PropertyKey.md), `never`\> ? readonly `unknown`[] \| [`Record`](Record.md)\<`string`, `unknown`\> : `args`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/contract.d.ts:73

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[]

### eventName

`eventName` *extends* `string`

### config

`config` *extends* [`EventParameterOptions`](EventParameterOptions.md) = [`DefaultEventParameterOptions`](DefaultEventParameterOptions.md)

### abiEvent

`abiEvent` *extends* [`AbiEvent`](AbiEvent.md) & `object` = `abi` *extends* [`Abi`](Abi.md) ? [`ExtractAbiEvent`](ExtractAbiEvent.md)\<`abi`, `eventName`\> : [`AbiEvent`](AbiEvent.md) & `object`

### args

`args` = [`AbiEventParametersToPrimitiveTypes`](AbiEventParametersToPrimitiveTypes.md)\<`abiEvent`\[`"inputs"`\], `config`\>
