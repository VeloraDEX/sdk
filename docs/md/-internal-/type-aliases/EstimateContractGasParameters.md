[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EstimateContractGasParameters

# Type Alias: EstimateContractGasParameters\<abi, functionName, args, chain\>

> **EstimateContractGasParameters**\<`abi`, `functionName`, `args`, `chain`\>: [`ContractFunctionParameters`](ContractFunctionParameters.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`, `args`\> & [`UnionOmit`](UnionOmit.md)\<[`EstimateGasParameters`](EstimateGasParameters.md)\<`chain`\>, `"data"` \| `"to"` \| `"value"`\> & [`GetValue`](GetValue.md)\<`abi`, `functionName`, [`EstimateGasParameters`](EstimateGasParameters.md)\<`chain`\> *extends* [`EstimateGasParameters`](EstimateGasParameters.md) ? [`EstimateGasParameters`](EstimateGasParameters.md)\<`chain`\>\[`"value"`\] : [`EstimateGasParameters`](EstimateGasParameters.md)\[`"value"`\]\> & `object`

## Type declaration

### dataSuffix?

> `optional` **dataSuffix**: [`Hex`](Hex.md)

Data to append to the end of the calldata. Useful for adding a ["domain" tag](https://opensea.notion.site/opensea/Seaport-Order-Attributions-ec2d69bf455041a5baa490941aad307f).

## Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

• **functionName** *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\> = [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\>

• **args** *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`\> = [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`\>

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

## Defined in

node\_modules/viem/\_types/actions/public/estimateContractGas.d.ts:13
