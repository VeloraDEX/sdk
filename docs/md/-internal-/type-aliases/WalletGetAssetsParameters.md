[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WalletGetAssetsParameters

# Type Alias: WalletGetAssetsParameters

> **WalletGetAssetsParameters**: `object`

## Type declaration

### account

> **account**: [`Address`](Address.md)

### assetFilter?

> `optional` **assetFilter**: `object`

#### Index Signature

 \[`chainId`: [`Hex`](Hex.md)\]: readonly `object`[]

### assetTypeFilter?

> `optional` **assetTypeFilter**: readonly (`"native"` \| `"erc20"` \| `"erc721"` \| `string` & `object`)[]

### chainFilter?

> `optional` **chainFilter**: readonly [`Hex`](Hex.md)[]

## Defined in

node\_modules/viem/\_types/types/eip1193.d.ts:116
