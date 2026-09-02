[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BlobLike

# Type Alias: BlobLike

> **BlobLike** = [`BytesLike`](BytesLike.md) \| \{ `commitment`: [`BytesLike`](BytesLike.md); `data`: [`BytesLike`](BytesLike.md); `proof`: [`BytesLike`](BytesLike.md); \}

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/transaction/transaction.d.ts:106

A BLOb object that can be passed for [[link-eip-4844]]
 transactions.

 It may have had its commitment and proof already provided
 or rely on an attached [[KzgLibrary]] to compute them.
