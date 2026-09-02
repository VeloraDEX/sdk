[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SendRawTransactionSyncParameters

# Type Alias: SendRawTransactionSyncParameters

> **SendRawTransactionSyncParameters** = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/sendRawTransactionSync.d.ts:8

## Properties

### serializedTransaction

> **serializedTransaction**: [`TransactionSerializedGeneric`](TransactionSerializedGeneric.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/sendRawTransactionSync.d.ts:10

The signed serialized transaction.

***

### throwOnReceiptRevert?

> `optional` **throwOnReceiptRevert?**: `boolean`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/sendRawTransactionSync.d.ts:12

Whether to throw an error if the transaction was detected as reverted.

#### Default

```ts
true
```

***

### timeout?

> `optional` **timeout?**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/sendRawTransactionSync.d.ts:14

The timeout for the transaction.
