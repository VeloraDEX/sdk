[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractEventArgs

# Type Alias: ContractEventArgs\<abi, eventName\>

> **ContractEventArgs**\<`abi`, `eventName`\> = [`AbiEventParametersToPrimitiveTypes`](AbiEventParametersToPrimitiveTypes.md)\<[`ExtractAbiEvent`](ExtractAbiEvent.md)\<`abi` *extends* [`Abi`](Abi.md) ? `abi` : [`Abi`](Abi.md), `eventName`\>\[`"inputs"`\]\> *extends* infer args ? \[`args`\] *extends* \[`never`\] ? readonly `unknown`[] \| [`Record`](Record.md)\<`string`, `unknown`\> : `args` : readonly `unknown`[] \| [`Record`](Record.md)\<`string`, `unknown`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/contract.d.ts:13

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

### eventName

`eventName` *extends* [`ContractEventName`](ContractEventName-1.md)\<`abi`\> = [`ContractEventName`](ContractEventName-1.md)\<`abi`\>
