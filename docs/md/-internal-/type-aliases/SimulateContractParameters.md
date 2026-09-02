[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SimulateContractParameters

# Type Alias: SimulateContractParameters\<abi, functionName, args, chain, chainOverride, accountOverride, derivedChain, callParameters\>

> **SimulateContractParameters**\<`abi`, `functionName`, `args`, `chain`, `chainOverride`, `accountOverride`, `derivedChain`, `callParameters`\> = `object` & [`ContractFunctionParameters`](ContractFunctionParameters.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`, `args`\> & [`UnionOmit`](UnionOmit.md)\<`callParameters`, `"account"` \| `"batch"` \| `"code"` \| `"to"` \| `"data"` \| `"factory"` \| `"factoryData"` \| `"value"`\> & [`GetMutabilityAwareValue`](GetMutabilityAwareValue.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`, `callParameters`\[`"value"`\], `args`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/simulateContract.d.ts:26

## Type Declaration

### account?

> `optional` **account?**: `accountOverride` \| `null`

### chain?

> `optional` **chain?**: `chainOverride`

### dataSuffix?

> `optional` **dataSuffix?**: [`Hex`](Hex.md)

Data to append to the end of the calldata. Useful for adding a ["domain" tag](https://opensea.notion.site/opensea/Seaport-Order-Attributions-ec2d69bf455041a5baa490941aad307f).

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

### functionName

`functionName` *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\> = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\>

### args

`args` *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`\> = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`\>

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### chainOverride

`chainOverride` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### accountOverride

`accountOverride` *extends* [`Account`](Account.md) \| [`Address`](Address-1.md) \| `null` \| `undefined` = `undefined`

### derivedChain

`derivedChain` *extends* [`Chain`](Chain.md) \| `undefined` = [`DeriveChain`](DeriveChain.md)\<`chain`, `chainOverride`\>

### callParameters

`callParameters` *extends* [`CallParameters`](CallParameters.md)\<`derivedChain`\> = [`CallParameters`](CallParameters.md)\<`derivedChain`\>
