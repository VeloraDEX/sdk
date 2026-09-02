[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / UnionPartialBy

# Type Alias: UnionPartialBy\<T, K\>

> **UnionPartialBy**\<`T`, `K`\> = `T` *extends* `any` ? [`PartialBy`](PartialBy.md)\<`T`, `K`\> : `never`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/utils.d.ts:202

## Type Parameters

### T

`T`

### K

`K` *extends* keyof `T`

## Description

Creates a type that is a partial of T, but with the required keys K.

## Example

```ts
PartialBy<{ a: string, b: number } | { a: string, b: undefined, c: number }, 'a'>
=> { a?: string, b: number } | { a?: string, b: undefined, c: number }
```
