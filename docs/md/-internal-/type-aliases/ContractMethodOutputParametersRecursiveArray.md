[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractMethodOutputParametersRecursiveArray

# Type Alias: ContractMethodOutputParametersRecursiveArray\<Params\>

> **ContractMethodOutputParametersRecursiveArray**\<`Params`\> = `Params` *extends* readonly \[\] ? \[\] : `Params` *extends* readonly \[infer H, `...(infer R)`\] ? `H` *extends* [`AbiParameter`](AbiParameter.md) ? \[[`MatchPrimitiveType`](MatchPrimitiveType.md)\<`H`\[`"type"`\], `H`\[`"components"`\]\>, `...ContractMethodOutputParametersRecursiveArray<R>`\] : \[\] : \[\]

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_abi\_types.d.ts:118

## Type Parameters

### Params

`Params` *extends* `ReadonlyArray`\<`unknown`\> \| `undefined`
