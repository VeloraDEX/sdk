[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / RpcTransactionRequest

# Type Alias: RpcTransactionRequest

> **RpcTransactionRequest** = [`OneOf`](OneOf.md)\<[`TransactionRequestLegacy`](TransactionRequestLegacy.md)\<[`Quantity`](Quantity.md), [`Index`](Index.md), `"0x0"`\> \| [`TransactionRequestEIP2930`](TransactionRequestEIP2930.md)\<[`Quantity`](Quantity.md), [`Index`](Index.md), `"0x1"`\> \| [`TransactionRequestEIP1559`](TransactionRequestEIP1559.md)\<[`Quantity`](Quantity.md), [`Index`](Index.md), `"0x2"`\> \| [`TransactionRequestEIP4844`](TransactionRequestEIP4844.md)\<[`Quantity`](Quantity.md), [`Index`](Index.md), `"0x3"`\> \| [`Omit`](Omit-1.md)\<[`TransactionRequestEIP7702`](TransactionRequestEIP7702.md)\<[`Quantity`](Quantity.md), [`Index`](Index.md), `"0x4"`\>, `"authorizationList"`\> & `object`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/rpc.d.ts:37
