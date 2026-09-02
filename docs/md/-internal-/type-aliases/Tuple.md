[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Tuple

# Type Alias: Tuple\<type, size\>

> **Tuple**\<`type`, `size`\> = `size` *extends* `size` ? `number` *extends* `size` ? `type`[] : [`_TupleOf`](TupleOf.md)\<`type`, `size`, \[\]\> : `never`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/types.d.ts:148

Create tuple of [type](#type) type with [size](#size) size

## Type Parameters

### type

`type`

### size

`size` *extends* `number`

## Param

**Type**

Type of tuple

## Param

**Size**

Size of tuple

## Returns

Tuple of [type](#type) type with [size](#size) size

## Example

```ts
type Result = Tuple<string, 2>
//   ^? type Result = [string, string]
```
