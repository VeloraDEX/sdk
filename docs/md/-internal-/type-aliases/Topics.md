[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Topics

# Type Alias: Topics\<head, base\>

> **Topics**\<`head`, `base`\> = `head` *extends* readonly \[infer \_Head, `...(infer Tail extends AbiEvent["inputs"])`\] ? `_Head` *extends* `object` ? \[[`Hex`](Hex.md), `...Topics<Tail>`\] : `Topics`\<`Tail`\> : `base`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/log.d.ts:24

## Type Parameters

### head

`head` *extends* [`AbiEvent`](AbiEvent.md)\[`"inputs"`\]

### base

`base` = \[[`Hex`](Hex.md)\]
