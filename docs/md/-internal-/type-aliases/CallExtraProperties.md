[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CallExtraProperties

# Type Alias: CallExtraProperties

> **CallExtraProperties** = [`ExactPartial`](ExactPartial.md)\<[`UnionOmit`](UnionOmit.md)\<[`TransactionRequest`](TransactionRequest-1.md), `"blobs"` \| `"data"` \| `"kzg"` \| `"to"` \| `"sidecars"` \| `"value"`\>\> & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/simulateBlocks.d.ts:25

## Type Declaration

### account?

> `optional` **account?**: [`Account`](Account.md) \| [`Address`](Address-1.md)

Account attached to the call (msg.sender).

### to?

> `optional` **to?**: [`Address`](Address-1.md) \| `null`

Recipient. `null` if contract deployment.
