[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionSerialized

# Type Alias: TransactionSerialized\<type, result\>

> **TransactionSerialized**\<`type`, `result`\> = [`IsNever`](IsNever.md)\<`result`\> *extends* `true` ? [`TransactionSerializedGeneric`](TransactionSerializedGeneric.md) : `result`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:190

## Type Parameters

### type

`type` *extends* [`TransactionType`](TransactionType.md) = [`TransactionType`](TransactionType.md)

### result

`result` = `type` *extends* `"eip1559"` ? [`TransactionSerializedEIP1559`](TransactionSerializedEIP1559.md) : `never` \| `type` *extends* `"eip2930"` ? [`TransactionSerializedEIP2930`](TransactionSerializedEIP2930.md) : `never` \| `type` *extends* `"eip4844"` ? [`TransactionSerializedEIP4844`](TransactionSerializedEIP4844.md) : `never` \| `type` *extends* `"eip7702"` ? [`TransactionSerializedEIP7702`](TransactionSerializedEIP7702.md) : `never` \| `type` *extends* `"legacy"` ? [`TransactionSerializedLegacy`](TransactionSerializedLegacy.md) : `never`
