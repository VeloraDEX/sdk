[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SimulateContractReturnType

# Type Alias: SimulateContractReturnType\<abi, functionName, args, chain, account, chainOverride, accountOverride, minimizedAbi, resolvedAccount\>

> **SimulateContractReturnType**\<`abi`, `functionName`, `args`, `chain`, `account`, `chainOverride`, `accountOverride`, `minimizedAbi`, `resolvedAccount`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/simulateContract.d.ts:32

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

### accountOverride

`accountOverride` *extends* [`Account`](Account.md) \| [`Address`](Address-1.md) \| `null` \| `undefined` = [`Account`](Account.md) \| [`Address`](Address-1.md) \| `null` \| `undefined`

### minimizedAbi

`minimizedAbi` *extends* [`Abi`](Abi.md) = readonly \[[`ExtractAbiFunctionForArgs`](ExtractAbiFunctionForArgs.md)\<`abi` *extends* [`Abi`](Abi.md) ? `abi` : [`Abi`](Abi.md), `"nonpayable"` \| `"payable"`, `functionName`, `args`\>\]

### resolvedAccount

`resolvedAccount` *extends* [`Account`](Account.md) \| `null` \| `undefined` = `accountOverride` *extends* [`Account`](Account.md) \| [`Address`](Address-1.md) \| `null` ? [`ParseAccount`](ParseAccount.md)\<`accountOverride`\> : `account`

## Properties

### request

> **request**: [`Prettify`](Prettify-1.md)\<[`UnionEvaluate`](UnionEvaluate.md)\<[`UnionOmit`](UnionOmit.md)\<[`WriteContractParameters`](WriteContractParameters.md)\<`minimizedAbi`, `functionName`, `args`, `chain`, `undefined`, `chainOverride`\>, `"account"` \| `"abi"` \| `"args"` \| `"chain"` \| `"functionName"`\>\> & [`ContractFunctionParameters`](ContractFunctionParameters.md)\<`minimizedAbi`, `"nonpayable"` \| `"payable"`, `functionName`, `args`\> & `object` & `resolvedAccount` *extends* [`Account`](Account.md) \| `null` ? `object` : `object`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/simulateContract.d.ts:38

***

### result

> **result**: [`ContractFunctionReturnType`](ContractFunctionReturnType.md)\<`minimizedAbi`, `"nonpayable"` \| `"payable"`, `functionName`, `args`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/simulateContract.d.ts:37
