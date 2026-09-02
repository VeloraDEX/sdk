[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetValue

# Type Alias: GetValue\<abi, functionName, valueType, abiFunction, _Narrowable\>

> **GetValue**\<`abi`, `functionName`, `valueType`, `abiFunction`, `_Narrowable`\> = `_Narrowable` *extends* `true` ? `abiFunction`\[`"stateMutability"`\] *extends* `"payable"` ? `object` : `abiFunction`\[`"payable"`\] *extends* `true` ? `object` : `object` : `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/contract.d.ts:62

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[]

### functionName

`functionName` *extends* `string`

### valueType

`valueType` = [`TransactionRequest`](TransactionRequest-1.md)\[`"value"`\]

### abiFunction

`abiFunction` *extends* [`AbiFunction`](AbiFunction.md) = `abi` *extends* [`Abi`](Abi.md) ? [`ExtractAbiFunction`](ExtractAbiFunction.md)\<`abi`, `functionName`\> : [`AbiFunction`](AbiFunction.md)

### _Narrowable

`_Narrowable` *extends* `boolean` = [`IsNarrowable`](IsNarrowable.md)\<`abi`, [`Abi`](Abi.md)\>
