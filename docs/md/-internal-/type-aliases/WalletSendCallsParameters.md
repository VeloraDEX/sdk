[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WalletSendCallsParameters

# Type Alias: WalletSendCallsParameters\<capabilities, chainId, quantity\>

> **WalletSendCallsParameters**\<`capabilities`, `chainId`, `quantity`\> = \[\{ `atomicRequired`: `boolean`; `calls`: readonly `object`[]; `capabilities?`: `capabilities` \| [`Capabilities`](Capabilities.md); `chainId?`: `chainId`; `from?`: [`Address`](Address-1.md); `id?`: `string`; `version`: `string`; \}\]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:155

## Type Parameters

### capabilities

`capabilities` *extends* [`Capabilities`](Capabilities.md) = [`Capabilities`](Capabilities.md)

### chainId

`chainId` *extends* [`Hex`](Hex.md) \| `number` = [`Hex`](Hex.md)

### quantity

`quantity` *extends* [`Quantity`](Quantity.md) \| `bigint` = [`Quantity`](Quantity.md)
