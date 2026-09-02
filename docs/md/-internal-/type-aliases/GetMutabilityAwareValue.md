[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetMutabilityAwareValue

# Type Alias: GetMutabilityAwareValue\<abi, mutability, functionName, valueType, args, abiFunction, _Narrowable\>

> **GetMutabilityAwareValue**\<`abi`, `mutability`, `functionName`, `valueType`, `args`, `abiFunction`, `_Narrowable`\> = `_Narrowable` *extends* `true` ? `abiFunction`\[`"stateMutability"`\] *extends* `"payable"` ? `object` : `abiFunction`\[`"payable"`\] *extends* `true` ? `object` : `object` : `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/simulateContract.d.ts:17

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[]

### mutability

`mutability` *extends* [`AbiStateMutability`](AbiStateMutability.md) = [`AbiStateMutability`](AbiStateMutability.md)

### functionName

`functionName` *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `mutability`\> = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `mutability`\>

### valueType

`valueType` = [`TransactionRequest`](TransactionRequest-1.md)\[`"value"`\]

### args

`args` *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `mutability`, `functionName`\> = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `mutability`, `functionName`\>

### abiFunction

`abiFunction` *extends* [`AbiFunction`](AbiFunction.md) = `abi` *extends* [`Abi`](Abi.md) ? [`ExtractAbiFunctionForArgs`](ExtractAbiFunctionForArgs.md)\<`abi`, `mutability`, `functionName`, `args`\> : [`AbiFunction`](AbiFunction.md)

### _Narrowable

`_Narrowable` *extends* `boolean` = [`IsNarrowable`](IsNarrowable.md)\<`abi`, [`Abi`](Abi.md)\>
