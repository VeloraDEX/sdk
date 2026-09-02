[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Kzg

# Type Alias: Kzg

> **Kzg** = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/kzg.d.ts:6

## Methods

### blobToKzgCommitment()

> **blobToKzgCommitment**(`blob`): [`ByteArray`](ByteArray.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/kzg.d.ts:10

Convert a blob to a KZG commitment.

#### Parameters

##### blob

[`ByteArray`](ByteArray.md)

#### Returns

[`ByteArray`](ByteArray.md)

***

### computeBlobKzgProof()

> **computeBlobKzgProof**(`blob`, `commitment`): [`ByteArray`](ByteArray.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/kzg.d.ts:15

Given a blob, return the KZG proof that is used to verify it against the
commitment.

#### Parameters

##### blob

[`ByteArray`](ByteArray.md)

##### commitment

[`ByteArray`](ByteArray.md)

#### Returns

[`ByteArray`](ByteArray.md)
