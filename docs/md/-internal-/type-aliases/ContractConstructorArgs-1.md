[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractConstructorArgs

# Type Alias: ContractConstructorArgs\<Abis\>

> **ContractConstructorArgs**\<`Abis`\> = [`FilterAbis`](FilterAbis.md)\<`Abis`, [`AbiConstructorFragment`](AbiConstructorFragment.md) & `object`\> *extends* `never` ? `any` : `{ [Abi in FilterAbis<Abis, AbiConstructorFragment & { type: "constructor" }> as "constructor"]: ContractMethodInputParameters<Abi["inputs"]> }`\[`"constructor"`\]

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_abi\_types.d.ts:138

## Type Parameters

### Abis

`Abis` *extends* [`ContractAbi`](ContractAbi.md)
