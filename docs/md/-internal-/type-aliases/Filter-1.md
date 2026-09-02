[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Filter

# Type Alias: Filter\<T, P, Acc\>

> **Filter**\<`T`, `P`, `Acc`\> = `T` *extends* readonly \[infer F, `...(infer Rest extends readonly unknown[])`\] ? \[`F`\] *extends* \[`P`\] ? `Filter`\<`Rest`, `P`, \[`...Acc`, `F`\]\> : `Filter`\<`Rest`, `P`, `Acc`\> : readonly \[`...Acc`\]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/utils.d.ts:27

Filters out all members of [T](#t) that are not [P](#p)

## Type Parameters

### T

`T` *extends* readonly `unknown`[]

Items to filter

### P

`P`

Type to filter out

### Acc

`Acc` *extends* readonly `unknown`[] = \[\]

## Returns

Filtered items

## Example

```ts
type Result = Filter<['a', 'b', 'c'], 'b'>
//   ^? type Result = ['a', 'c']
```
