[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Assign

# Type Alias: Assign\<T, U\>

> **Assign**\<`T`, `U`\> = [`Assign_`](Assign-1.md)\<`T`, `U`\> & `U`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/utils.d.ts:92

## Type Parameters

### T

`T`

### U

`U`

## Description

Assigns the properties of U onto T.

## Example

```ts
Assign<{ a: string, b: number }, { a: undefined, c: boolean }>
=> { a: undefined, b: number, c: boolean }
```
