[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractFunctionParameters

# Type Alias: ContractFunctionParameters\<abi, mutability, functionName, args, deployless, allFunctionNames, allArgs, abiFunction\>

> **ContractFunctionParameters**\<`abi`, `mutability`, `functionName`, `args`, `deployless`, `allFunctionNames`, `allArgs`, `abiFunction`\> = `object` & readonly \[\] *extends* `allArgs` ? `object` : `object` & `deployless` *extends* `true` ? `object` : `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/contract.d.ts:31

## Type Declaration

### abi

> **abi**: `abi`

### functionName

> **functionName**: `allFunctionNames` \| `functionName` *extends* `allFunctionNames` ? `functionName` : `never`

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

### mutability

`mutability` *extends* [`AbiStateMutability`](AbiStateMutability.md) = [`AbiStateMutability`](AbiStateMutability.md)

### functionName

`functionName` *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `mutability`\> = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `mutability`\>

### args

`args` *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `mutability`, `functionName`\> = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `mutability`, `functionName`\>

### deployless

`deployless` *extends* `boolean` = `false`

### allFunctionNames

`allFunctionNames` = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `mutability`\>

### allArgs

`allArgs` = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `mutability`, `functionName`\>

### abiFunction

`abiFunction` = [`ExtractAbiFunction`](ExtractAbiFunction.md)\<`abi` *extends* [`Abi`](Abi.md) ? `abi` : [`Abi`](Abi.md), `functionName`, `mutability`\>
