[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractEventEmitterInterface

# Type Alias: ContractEventEmitterInterface\<Abi\>

> **ContractEventEmitterInterface**\<`Abi`\> = `{ [EventAbi in FilterAbis<Abi, AbiFunctionFragment & { type: "event" }> as EventAbi["name"]]: ContractEvent<EventAbi>["Inputs"] }`

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/contract.d.ts:37

## Type Parameters

### Abi

`Abi` *extends* [`ContractAbi`](ContractAbi.md)
