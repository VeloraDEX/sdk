[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetMulticallContractParameters

# Type Alias: GetMulticallContractParameters\<contract, mutability\>

> **GetMulticallContractParameters**\<`contract`, `mutability`\> = `contract` *extends* `object` ? `contract` *extends* `object` ? `contract` *extends* `object` ? [`ContractFunctionParameters`](ContractFunctionParameters.md)\<`abi`, `mutability`, `functionName`, `args`\> : [`ContractFunctionParameters`](ContractFunctionParameters.md)\<`abi`, `mutability`, `functionName`\> : [`Abi`](Abi.md) *extends* `abi` ? [`ContractFunctionParameters`](ContractFunctionParameters.md) : [`ContractFunctionParameters`](ContractFunctionParameters.md)\<`abi`, `mutability`\> : [`ContractFunctionParameters`](ContractFunctionParameters.md)\<readonly `unknown`[]\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/multicall.d.ts:45

## Type Parameters

### contract

`contract`

### mutability

`mutability` *extends* [`AbiStateMutability`](AbiStateMutability.md)
