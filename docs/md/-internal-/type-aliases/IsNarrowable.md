[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / IsNarrowable

# Type Alias: IsNarrowable\<T, U\>

> **IsNarrowable**\<`T`, `U`\> = [`IsNever`](IsNever.md)\<`T` *extends* `U` ? `true` : `false` & `U` *extends* `T` ? `false` : `true`\> *extends* `true` ? `false` : `true`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/utils.d.ts:36

## Type Parameters

### T

`T`

Type to check

### U

`U`

Type to against

## Description

Checks if [T](#t) can be narrowed further than [U](#u)

## Example

```ts
type Result = IsNarrowable<'foo', string>
//   ^? true
```
