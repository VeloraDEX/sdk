[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MulticallBatchOptions

# Type Alias: MulticallBatchOptions

> **MulticallBatchOptions** = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:118

## Properties

### batchSize?

> `optional` **batchSize?**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:120

The maximum size (in bytes) for each calldata chunk.

#### Default

```ts
1_024
```

***

### deployless?

> `optional` **deployless?**: `boolean`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:122

Enable deployless multicall.

***

### wait?

> `optional` **wait?**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:124

The maximum number of milliseconds to wait before sending a batch.

#### Default

```ts
0
```
