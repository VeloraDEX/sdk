[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadContractParameters

# Type Alias: ReadContractParameters\<abi, functionName, args\>

> **ReadContractParameters**\<`abi`, `functionName`, `args`\> = [`UnionEvaluate`](UnionEvaluate.md)\<[`Pick`](Pick.md)\<[`CallParameters`](CallParameters.md), `"account"` \| `"authorizationList"` \| `"blockHash"` \| `"blockNumber"` \| `"blockOverrides"` \| `"blockTag"` \| `"factory"` \| `"factoryData"` \| `"requireCanonical"` \| `"stateOverride"`\>\> & [`ContractFunctionParameters`](ContractFunctionParameters.md)\<`abi`, `"pure"` \| `"view"`, `functionName`, `args`, `boolean`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/readContract.d.ts:11

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

### functionName

`functionName` *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"pure"` \| `"view"`\> = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"pure"` \| `"view"`\>

### args

`args` *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"pure"` \| `"view"`, `functionName`\> = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"pure"` \| `"view"`, `functionName`\>
