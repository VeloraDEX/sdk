[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / UnionOmit

# Type Alias: UnionOmit\<type, keys\>

> **UnionOmit**\<`type`, `keys`\> = `type` *extends* `any` ? [`Omit`](Omit-1.md)\<`type`, `keys`\> : `never`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/utils.d.ts:187

## Type Parameters

### type

`type`

### keys

`keys` *extends* keyof `type`

## Description

Construct a type with the properties of union type T except for those in type K.

## Example

```ts
type Result = UnionOmit<{ a: string, b: number } | { a: string, b: undefined, c: number }, 'a'>
=> { b: number } | { b: undefined, c: number }
```
