[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SendRawTransactionSyncParameters

# Type Alias: SendRawTransactionSyncParameters

> **SendRawTransactionSyncParameters**: `object`

## Type declaration

### serializedTransaction

> **serializedTransaction**: [`TransactionSerializedGeneric`](TransactionSerializedGeneric.md)

The signed serialized transaction.

### throwOnReceiptRevert?

> `optional` **throwOnReceiptRevert**: `boolean`

Whether to throw an error if the transaction was detected as reverted.

#### Default

```ts
true
```

### timeout?

> `optional` **timeout**: `number`

The timeout for the transaction.

## Defined in

node\_modules/viem/\_types/actions/wallet/sendRawTransactionSync.d.ts:8
