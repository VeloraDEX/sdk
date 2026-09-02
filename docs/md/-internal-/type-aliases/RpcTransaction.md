[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / RpcTransaction

# Type Alias: RpcTransaction\<pending\>

> **RpcTransaction**\<`pending`\> = [`OneOf`](OneOf.md)\<[`Omit`](Omit-1.md)\<[`TransactionLegacy`](TransactionLegacy.md)\<[`Quantity`](Quantity.md), [`Index`](Index.md), `pending`, `"0x0"`\>, `"typeHex"`\> \| [`PartialBy`](PartialBy.md)\<[`Omit`](Omit-1.md)\<[`TransactionEIP2930`](TransactionEIP2930.md)\<[`Quantity`](Quantity.md), [`Index`](Index.md), `pending`, `"0x1"`\>, `"typeHex"`\>, `"yParity"`\> \| [`PartialBy`](PartialBy.md)\<[`Omit`](Omit-1.md)\<[`TransactionEIP1559`](TransactionEIP1559.md)\<[`Quantity`](Quantity.md), [`Index`](Index.md), `pending`, `"0x2"`\>, `"typeHex"`\>, `"yParity"`\> \| [`PartialBy`](PartialBy.md)\<[`Omit`](Omit-1.md)\<[`TransactionEIP4844`](TransactionEIP4844.md)\<[`Quantity`](Quantity.md), [`Index`](Index.md), `pending`, `"0x3"`\>, `"typeHex"`\>, `"yParity"`\> \| [`PartialBy`](PartialBy.md)\<[`Omit`](Omit-1.md)\<[`TransactionEIP7702`](TransactionEIP7702.md)\<[`Quantity`](Quantity.md), [`Index`](Index.md), `pending`, `"0x4"`\>, `"authorizationList"` \| `"typeHex"`\> & `object`, `"yParity"`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/rpc.d.ts:40

## Type Parameters

### pending

`pending` *extends* `boolean` = `boolean`
