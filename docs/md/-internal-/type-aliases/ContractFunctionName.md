[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractFunctionName

# Type Alias: ContractFunctionName\<abi, mutability\>

> **ContractFunctionName**\<`abi`, `mutability`\>: [`ExtractAbiFunctionNames`](ExtractAbiFunctionNames.md)\<`abi` *extends* [`Abi`](Abi.md) ? `abi` : [`Abi`](Abi.md), `mutability`\> *extends* infer functionName ? [`functionName`] *extends* [`never`] ? `string` : `functionName` : `string`

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **mutability** *extends* [`AbiStateMutability`](AbiStateMutability.md) = [`AbiStateMutability`](AbiStateMutability.md)

## Defined in

node\_modules/.pnpm/viem@2.39.0\_typescript@5.6.3\_zod@3.25.76/node\_modules/viem/\_types/types/contract.d.ts:5
