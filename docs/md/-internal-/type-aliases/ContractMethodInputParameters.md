[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractMethodInputParameters

# Type Alias: ContractMethodInputParameters\<Params\>

> **ContractMethodInputParameters**\<`Params`\> = `Params` *extends* readonly \[\] ? \[\] : `Params` *extends* readonly \[infer H, `...(infer R)`\] ? `H` *extends* [`AbiParameter`](AbiParameter.md) ? \[[`MatchPrimitiveType`](MatchPrimitiveType.md)\<`H`\[`"type"`\], `H`\[`"components"`\]\>, `...ContractMethodInputParameters<R>`\] : `ContractMethodInputParameters`\<`R`\> : `Params` *extends* `undefined` \| `unknown` ? \[\] : `Params`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_abi\_types.d.ts:126

## Type Parameters

### Params

`Params` *extends* `ReadonlyArray`\<`unknown`\> \| `undefined`
