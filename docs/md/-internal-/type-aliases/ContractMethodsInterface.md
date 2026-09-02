[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractMethodsInterface

# Type Alias: ContractMethodsInterface\<Abi\>

> **ContractMethodsInterface**\<`Abi`\> = `{ [MethodAbi in FilterAbis<Abi, AbiFunctionFragment & { type: "function" }> as MethodAbi["name"]]: ContractBoundMethod<MethodAbi> }` & `object`

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/contract.d.ts:10

## Type Parameters

### Abi

`Abi` *extends* [`ContractAbi`](ContractAbi.md)
