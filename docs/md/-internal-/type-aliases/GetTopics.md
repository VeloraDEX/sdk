[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetTopics

# Type Alias: GetTopics\<abiEvent, abi, eventName, _AbiEvent, _Args, _FailedToParseArgs\>

> **GetTopics**\<`abiEvent`, `abi`, `eventName`, `_AbiEvent`, `_Args`, `_FailedToParseArgs`\> = `true` *extends* `_FailedToParseArgs` ? \[[`Hex`](Hex.md), `...Hex[]`\] \| \[\] : `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? [`Topics`](Topics.md)\<`abiEvent`\[`"inputs"`\]\> : `_AbiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? [`Topics`](Topics.md)\<`_AbiEvent`\[`"inputs"`\]\> : \[[`Hex`](Hex.md), `...Hex[]`\] \| \[\]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/log.d.ts:30

## Type Parameters

### abiEvent

`abiEvent` *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = \[`abiEvent`\]

### eventName

`eventName` *extends* `string` \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? `abiEvent`\[`"name"`\] : `undefined`

### _AbiEvent

`_AbiEvent` *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `abi` *extends* [`Abi`](Abi.md) ? `eventName` *extends* `string` ? [`ExtractAbiEvent`](ExtractAbiEvent.md)\<`abi`, `eventName`\> : `undefined` : `undefined`

### _Args

`_Args` = `_AbiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? [`AbiEventParametersToPrimitiveTypes`](AbiEventParametersToPrimitiveTypes.md)\<`_AbiEvent`\[`"inputs"`\]\> : `never`

### _FailedToParseArgs

`_FailedToParseArgs` = \[`_Args`\] *extends* \[`never`\] ? `true` : `false` \| readonly `unknown`[] *extends* `_Args` ? `true` : `false`
