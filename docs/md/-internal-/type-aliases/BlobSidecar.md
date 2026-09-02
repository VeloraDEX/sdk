[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BlobSidecar

# Type Alias: BlobSidecar\<type\>

> **BlobSidecar**\<`type`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip4844.d.ts:2

## Type Parameters

### type

`type` *extends* [`Hex`](Hex.md) \| [`ByteArray`](ByteArray.md) = [`Hex`](Hex.md) \| [`ByteArray`](ByteArray.md)

## Properties

### blob

> **blob**: `type`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip4844.d.ts:4

The blob associated with the transaction.

***

### commitment

> **commitment**: `type`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip4844.d.ts:6

The KZG commitment corresponding to this blob.

***

### proof

> **proof**: `type`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip4844.d.ts:8

The KZG proof corresponding to this blob and commitment.
