[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / UnionToTuple

# Type Alias: UnionToTuple\<union, last\>

> **UnionToTuple**\<`union`, `last`\> = \[`union`\] *extends* \[`never`\] ? \[\] : \[`...UnionToTuple<Exclude<union, last>>`, `last`\]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/utils.d.ts:159

## Type Parameters

### union

`union`

### last

`last` = [`LastInUnion`](LastInUnion.md)\<`union`\>
