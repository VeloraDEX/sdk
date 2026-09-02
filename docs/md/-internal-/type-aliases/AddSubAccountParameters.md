[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AddSubAccountParameters

# Type Alias: AddSubAccountParameters

> **AddSubAccountParameters** = [`Prettify`](Prettify-1.md)\<[`OneOf`](OneOf.md)\<\{ `keys?`: readonly `object`[]; `type`: `"create"`; \} \| \{ `address`: [`Address`](Address-1.md); `chainId?`: `number`; `type`: `"deployed"`; \} \| \{ `address`: [`Address`](Address-1.md); `chainId?`: `number`; `factory`: [`Address`](Address-1.md); `factoryData`: [`Hex`](Hex.md); `type`: `"undeployed"`; \}\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/experimental/erc7895/actions/addSubAccount.d.ts:8
