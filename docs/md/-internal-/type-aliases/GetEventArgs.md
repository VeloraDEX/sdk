[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetEventArgs

# Type Alias: GetEventArgs\<abi, eventName, config, abiEvent, args\>

> **GetEventArgs**\<`abi`, `eventName`, `config`, `abiEvent`, `args`\>: `args` *extends* [`Record`](Record.md)\<[`PropertyKey`](PropertyKey.md), `never`\> ? readonly `unknown`[] \| [`Record`](Record.md)\<`string`, `unknown`\> : `args`

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[]

• **eventName** *extends* `string`

• **config** *extends* [`EventParameterOptions`](EventParameterOptions.md) = [`DefaultEventParameterOptions`](DefaultEventParameterOptions.md)

• **abiEvent** *extends* [`AbiEvent`](AbiEvent.md) & `object` = `abi` *extends* [`Abi`](Abi.md) ? [`ExtractAbiEvent`](ExtractAbiEvent.md)\<`abi`, `eventName`\> : [`AbiEvent`](AbiEvent.md) & `object`

• **args** = [`AbiEventParametersToPrimitiveTypes`](AbiEventParametersToPrimitiveTypes.md)\<`abiEvent`\[`"inputs"`\], `config`\>

## Defined in

node\_modules/viem/\_types/types/contract.d.ts:72
