[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Branded

# Type Alias: Branded\<T, U\>

> **Branded**\<`T`, `U`\> = `T` & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/utils.d.ts:13

Creates a branded type of [T](#t) with the brand [U](#u).

## Type Declaration

### \[symbol\]

> **\[symbol\]**: `U`

## Type Parameters

### T

`T`

Type to brand

### U

`U`

Label

## Returns

Branded type

## Example

```ts
type Result = Branded<string, 'foo'>
//   ^? type Result = string & { [symbol]: 'foo' }
```
