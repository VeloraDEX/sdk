[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Narrow

# Type Alias: Narrow\<type\>

> **Narrow**\<`type`\> = `unknown` *extends* `type` ? `unknown` : `never` \| `type` *extends* `Function` ? `type` : `never` \| `type` *extends* `bigint` \| `boolean` \| `number` \| `string` ? `type` : `never` \| `type` *extends* \[\] ? \[\] : `never` \| `{ [K in keyof type]: Narrow<type[K]> }`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/narrow.d.ts:10

Infers embedded primitive type of any type

## Type Parameters

### type

`type`

## Param

**T**

Type to infer

## Returns

Embedded type of [type](#type)

## Example

```ts
type Result = Narrow<['foo', 'bar', 1]>
```
