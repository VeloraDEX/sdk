[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CallExtraProperties

# Type Alias: CallExtraProperties

> **CallExtraProperties**: [`ExactPartial`](ExactPartial.md)\<[`UnionOmit`](UnionOmit.md)\<[`TransactionRequest`](TransactionRequest.md), `"blobs"` \| `"data"` \| `"kzg"` \| `"to"` \| `"sidecars"` \| `"value"`\>\> & `object`

## Type declaration

### account?

> `optional` **account**: [`Account`](Account.md) \| [`Address`](Address.md)

Account attached to the call (msg.sender).

### to?

> `optional` **to**: [`Address`](Address.md) \| `null`

Recipient. `null` if contract deployment.

## Defined in

node\_modules/viem/\_types/actions/public/simulateBlocks.d.ts:25
