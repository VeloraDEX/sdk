[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Pretty

# Type Alias: Pretty\<type\>

> **Pretty**\<`type`\> = `{ [key in keyof type]: type[key] }` & `unknown`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/types.d.ts:108

Combines members of an intersection into a readable type.

## Type Parameters

### type

`type`

## Link

https://twitter.com/mattpocockuk/status/1622730173446557697?s=20&t=NdpAcmEFXY01xkqU3KO0Mg

## Example

```ts
type Result = Pretty<{ a: string } | { b: string } | { c: number, d: bigint }>
//   ^? type Result = { a: string; b: string; c: number; d: bigint }
```
