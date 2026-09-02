[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / PartialBy

# Type Alias: PartialBy\<T, K\>

> **PartialBy**\<`T`, `K`\> = [`Omit`](Omit-1.md)\<`T`, `K`\> & [`ExactPartial`](ExactPartial.md)\<[`Pick`](Pick.md)\<`T`, `K`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/utils.d.ts:116

## Type Parameters

### T

`T`

### K

`K` *extends* keyof `T`

## Description

Creates a type that is a partial of T, but with the required keys K.

## Example

```ts
PartialBy<{ a: string, b: number }, 'a'>
=> { a?: string, b: number }
```
