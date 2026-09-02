[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WriteContractParameters

# Type Alias: WriteContractParameters\<abi, functionName, args, chain, account, chainOverride, allFunctionNames, derivedChain\>

> **WriteContractParameters**\<`abi`, `functionName`, `args`, `chain`, `account`, `chainOverride`, `allFunctionNames`, `derivedChain`\> = [`ContractFunctionParameters`](ContractFunctionParameters.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`, `args`, `false`, `allFunctionNames`\> & [`GetChainParameter`](GetChainParameter.md)\<`chain`, `chainOverride`\> & [`Prettify`](Prettify-1.md)\<[`GetAccountParameter`](GetAccountParameter.md)\<`account`, [`Account`](Account.md) \| [`Address`](Address-1.md), `true`, `true`\> & [`GetMutabilityAwareValue`](GetMutabilityAwareValue.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`, [`FormattedTransactionRequest`](FormattedTransactionRequest.md)\<`derivedChain`\>\[`"value"`\], `args`\> & `object`\> & [`UnionEvaluate`](UnionEvaluate.md)\<[`UnionOmit`](UnionOmit.md)\<[`FormattedTransactionRequest`](FormattedTransactionRequest.md)\<`derivedChain`\>, `"data"` \| `"from"` \| `"to"` \| `"value"`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/writeContract.d.ts:19

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

### allFunctionNames

`allFunctionNames` = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\>

### derivedChain

`derivedChain` *extends* [`Chain`](Chain.md) \| `undefined` = [`DeriveChain`](DeriveChain.md)\<`chain`, `chainOverride`\>
