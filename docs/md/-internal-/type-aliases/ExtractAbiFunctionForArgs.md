[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractAbiFunctionForArgs

# Type Alias: ExtractAbiFunctionForArgs\<abi, mutability, functionName, args\>

> **ExtractAbiFunctionForArgs**\<`abi`, `mutability`, `functionName`, `args`\> = [`ExtractAbiFunction`](ExtractAbiFunction.md)\<`abi`, `functionName`, `mutability`\> *extends* infer abiFunction ? [`IsUnion`](IsUnion.md)\<`abiFunction`\> *extends* `true` ? [`UnionToTuple`](UnionToTuple.md)\<`abiFunction`\> *extends* infer abiFunctions ? `{ [k in keyof abiFunctions]: CheckArgs<abiFunctions[k], args> }`\[`number`\] : `never` : `abiFunction` : `never`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/contract.d.ts:27

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md)

### mutability

`mutability` *extends* [`AbiStateMutability`](AbiStateMutability.md)

### functionName

`functionName` *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `mutability`\>

### args

`args` *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `mutability`, `functionName`\>
