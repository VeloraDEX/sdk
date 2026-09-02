[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / OneOf

# Type Alias: OneOf\<union, fallback, keys\>

> **OneOf**\<`union`, `fallback`, `keys`\> = `union` *extends* infer item ? [`Prettify`](Prettify-1.md)\<`item` & `{ [key in Exclude<keys, keyof item>]?: fallback extends object ? key extends keyof fallback ? fallback[key] : undefined : undefined }`\> : `never`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/utils.d.ts:170

## Type Parameters

### union

`union` *extends* `object`

### fallback

`fallback` *extends* `object` \| `undefined` = `undefined`

### keys

`keys` *extends* [`KeyofUnion`](KeyofUnion.md)\<`union`\> = [`KeyofUnion`](KeyofUnion.md)\<`union`\>
