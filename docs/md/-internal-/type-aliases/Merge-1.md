[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Merge

# Type Alias: Merge\<object1, object2\>

> **Merge**\<`object1`, `object2`\> = [`Omit`](Omit.md)\<`object1`, keyof `object2`\> & `object2`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/types.d.ts:86

Merges two object types into new type

## Type Parameters

### object1

`object1`

Object to merge into

### object2

`object2`

Object to merge and override keys from [object1](#object1)

## Returns

New object type with keys from [object1](#object1) and [object2](#object2). If a key exists in both [object1](#object1) and [object2](#object2), the key from [object2](#object2) will be used.

## Example

```ts
type Result = Merge<{ foo: string }, { foo: number; bar: string }>
//   ^? type Result = { foo: number; bar: string }
```
