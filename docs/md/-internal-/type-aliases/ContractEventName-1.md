[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractEventName

# Type Alias: ContractEventName\<abi\>

> **ContractEventName**\<`abi`\> = [`ExtractAbiEventNames`](ExtractAbiEventNames.md)\<`abi` *extends* [`Abi`](Abi.md) ? `abi` : [`Abi`](Abi.md)\> *extends* infer eventName ? \[`eventName`\] *extends* \[`never`\] ? `string` : `eventName` : `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/contract.d.ts:7

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)
