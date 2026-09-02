[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MaybeExtractEventArgsFromAbi

# Type Alias: MaybeExtractEventArgsFromAbi\<abi, eventName\>

> **MaybeExtractEventArgsFromAbi**\<`abi`, `eventName`\> = `abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] ? `eventName` *extends* `string` ? [`GetEventArgs`](GetEventArgs.md)\<`abi`, `eventName`\> : `undefined` : `undefined`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/contract.d.ts:72

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] \| `undefined`

### eventName

`eventName` *extends* `string` \| `undefined`
