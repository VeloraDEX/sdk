[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / KzgLibrary

# Interface: KzgLibrary

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:115

A KZG Library with the necessary functions to compute
 BLOb commitments and proofs.

## Properties

### blobToKzgCommitment

> **blobToKzgCommitment**: (`blob`) => `Uint8Array`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:116

#### Parameters

##### blob

`Uint8Array`

#### Returns

`Uint8Array`

***

### computeBlobKzgProof

> **computeBlobKzgProof**: (`blob`, `commitment`) => `Uint8Array`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:117

#### Parameters

##### blob

`Uint8Array`

##### commitment

`Uint8Array`

#### Returns

`Uint8Array`
