[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Networkish

# Type Alias: Networkish

> **Networkish** = [`Network`](../classes/Network.md) \| `number` \| `bigint` \| `string` \| \{ `chainId?`: `number`; `ensAddress?`: `string`; `ensNetwork?`: `number`; `name?`: `string`; \}

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/network.d.ts:17

A Networkish can be used to allude to a Network, by specifing:
 - a [[Network]] object
 - a well-known (or registered) network name
 - a well-known (or registered) chain ID
 - an object with sufficient details to describe a network
