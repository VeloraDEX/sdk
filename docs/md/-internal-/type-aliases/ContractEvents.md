[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractEvents

# Type Alias: ContractEvents\<Abis\>

> **ContractEvents**\<`Abis`\> = `{ [Abi in FilterAbis<Abis, AbiEventFragment & { type: "event" }> as Abi["name"]]: ContractEvent<Abi> }`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_abi\_types.d.ts:159

## Type Parameters

### Abis

`Abis` *extends* [`ContractAbi`](ContractAbi.md)
