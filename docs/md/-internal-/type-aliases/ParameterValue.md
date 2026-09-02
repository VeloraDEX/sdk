[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ParameterValue

# Type Alias: ParameterValue\<token, key\>

> **ParameterValue**\<`token`, `key`\> = `token` *extends* `{ [_ in key]?: infer value }` ? `value` : `undefined`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/tokens/defineToken.d.ts:67

## Type Parameters

### token

`token` *extends* [`Parameters`](Parameters-9.md)

### key

`key` *extends* keyof [`Parameters`](Parameters-9.md)
