[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WriteContractSyncParameters

# Type Alias: WriteContractSyncParameters\<abi, functionName, args, chain, account, chainOverride\>

> **WriteContractSyncParameters**\<`abi`, `functionName`, `args`, `chain`, `account`, `chainOverride`\>: [`WriteContractParameters`](WriteContractParameters.md)\<`abi`, `functionName`, `args`, `chain`, `account`, `chainOverride`\> & [`Pick`](Pick.md)\<[`SendTransactionSyncParameters`](SendTransactionSyncParameters.md)\<`chain`\>, `"pollingInterval"` \| `"throwOnReceiptRevert"` \| `"timeout"`\>

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **functionName** *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\> = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\>

• **args** *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`\> = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`\>

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **account** *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

## Defined in

node\_modules/viem/\_types/actions/wallet/writeContractSync.d.ts:10
