[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / IsNever

# Type Alias: IsNever\<T\>

> **IsNever**\<`T`\> = \[`T`\] *extends* \[`never`\] ? `true` : `false`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/utils.d.ts:44

## Type Parameters

### T

`T`

Type to check

## Description

Checks if [T](#t) is `never`

## Example

```ts
type Result = IsNever<never>
//   ^? type Result = true
```
