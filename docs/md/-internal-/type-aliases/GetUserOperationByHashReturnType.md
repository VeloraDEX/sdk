[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetUserOperationByHashReturnType

# Type Alias: GetUserOperationByHashReturnType\<entryPointVersion, uint256, uint32\>

> **GetUserOperationByHashReturnType**\<`entryPointVersion`, `uint256`, `uint32`\>: `object`

## Type Parameters

• **entryPointVersion** *extends* [`EntryPointVersion`](EntryPointVersion.md) = [`EntryPointVersion`](EntryPointVersion.md)

• **uint256** = `bigint`

• **uint32** = `number`

## Type declaration

### blockHash

> **blockHash**: [`Hash`](Hash.md)

### blockNumber

> **blockNumber**: `uint256`

### entryPoint

> **entryPoint**: [`Address`](Address.md)

### transactionHash

> **transactionHash**: [`Hash`](Hash.md)

### userOperation

> **userOperation**: [`UserOperation`](UserOperation.md)\<`entryPointVersion`, `uint256`, `uint32`\>

## Link

https://eips.ethereum.org/EIPS/eip-4337#-eth_getuseroperationbyhash

## Defined in

node\_modules/viem/\_types/account-abstraction/types/userOperation.d.ts:27
