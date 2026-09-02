[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractMethodOutputParameters

# Type Alias: ContractMethodOutputParameters\<Params\>

> **ContractMethodOutputParameters**\<`Params`\> = `Params` *extends* readonly \[\] ? `void` : `Params` *extends* readonly \[infer H, `...(infer R)`\] ? `R` *extends* readonly \[\] ? `H` *extends* [`AbiParameter`](AbiParameter.md) ? [`MatchPrimitiveType`](MatchPrimitiveType.md)\<`H`\[`"type"`\], `H`\[`"components"`\]\> : \[\] : [`ArrToObjectWithFunctions`](ArrToObjectWithFunctions.md)\<\[`...ContractMethodOutputParametersRecursiveArray<Params>`\]\> & [`ContractMethodOutputParametersRecursiveRecord`](ContractMethodOutputParametersRecursiveRecord.md)\<`Params`\> : \[\]

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_abi\_types.d.ts:124

## Type Parameters

### Params

`Params` *extends* `ReadonlyArray`\<`unknown`\> \| `undefined`
