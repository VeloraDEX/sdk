[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractFunctionReturnType

# Type Alias: ContractFunctionReturnType\<abi, mutability, functionName, args\>

> **ContractFunctionReturnType**\<`abi`, `mutability`, `functionName`, `args`\> = `abi` *extends* [`Abi`](Abi.md) ? [`Abi`](Abi.md) *extends* `abi` ? `unknown` : [`AbiParametersToPrimitiveTypes`](AbiParametersToPrimitiveTypes.md)\<[`ExtractAbiFunctionForArgs`](ExtractAbiFunctionForArgs.md)\<`abi`, `mutability`, `functionName`, `args`\>\[`"outputs"`\], `"outputs"`, `true`\> *extends* infer types ? `types` *extends* readonly \[\] ? `void` : `types` *extends* readonly \[infer type\] ? `type` : `types` : `never` : `unknown`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/contract.d.ts:44

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

### mutability

`mutability` *extends* [`AbiStateMutability`](AbiStateMutability.md) = [`AbiStateMutability`](AbiStateMutability.md)

### functionName

`functionName` *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `mutability`\> = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `mutability`\>

### args

`args` *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `mutability`, `functionName`\> = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `mutability`, `functionName`\>
