[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WriteContractSyncParameters

# Type Alias: WriteContractSyncParameters\<abi, functionName, args, chain, account, chainOverride\>

> **WriteContractSyncParameters**\<`abi`, `functionName`, `args`, `chain`, `account`, `chainOverride`\> = [`WriteContractParameters`](WriteContractParameters.md)\<`abi`, `functionName`, `args`, `chain`, `account`, `chainOverride`\> & [`Pick`](Pick.md)\<[`SendTransactionSyncParameters`](SendTransactionSyncParameters.md)\<`chain`\>, `"pollingInterval"` \| `"throwOnReceiptRevert"` \| `"timeout"`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/writeContractSync.d.ts:10

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

### functionName

`functionName` *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\> = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\>

### args

`args` *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`\> = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`\>

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### account

`account` *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

### chainOverride

`chainOverride` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`
