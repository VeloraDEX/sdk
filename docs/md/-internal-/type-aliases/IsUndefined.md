[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / IsUndefined

# Type Alias: IsUndefined\<T\>

> **IsUndefined**\<`T`\> = \[`undefined`\] *extends* \[`T`\] ? `true` : `false`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/utils.d.ts:72

## Type Parameters

### T

`T`

Type to check

## Description

Checks if [T](#t) is `undefined`

## Example

```ts
type Result = IsUndefined<undefined>
//   ^? type Result = true
```
