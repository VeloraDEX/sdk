[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MaybeRequired

# Type Alias: MaybeRequired\<T, required\>

> **MaybeRequired**\<`T`, `required`\> = `required` *extends* `true` ? [`ExactRequired`](ExactRequired.md)\<`T`\> : `T`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/utils.d.ts:84

## Type Parameters

### T

`T`

### required

`required` *extends* `boolean`

## Description

Makes attributes on the type T required if required is true.

## Example

```ts
MaybeRequired<{ a: string, b?: number }, true>
=> { a: string, b: number }

MaybeRequired<{ a: string, b?: number }, false>
=> { a: string, b?: number }
```
