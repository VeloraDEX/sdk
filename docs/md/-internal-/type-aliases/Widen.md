[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Widen

# Type Alias: Widen\<type\>

> **Widen**\<`type`\> = \[`unknown`\] *extends* \[`type`\] ? `unknown` : `never` \| `type` *extends* `Function` ? `type` : `never` \| `type` *extends* [`ResolvedRegister`](ResolvedRegister.md)\[`"BigIntType"`\] ? `bigint` : `never` \| `type` *extends* `boolean` ? `boolean` : `never` \| `type` *extends* [`ResolvedRegister`](ResolvedRegister.md)\[`"IntType"`\] ? `number` : `never` \| `type` *extends* `string` ? `type` *extends* [`ResolvedRegister`](ResolvedRegister.md)\[`"AddressType"`\] ? [`ResolvedRegister`](ResolvedRegister.md)\[`"AddressType"`\] : `type` *extends* [`ResolvedRegister`](ResolvedRegister.md)\[`"BytesType"`\]\[`"inputs"`\] ? [`ResolvedRegister`](ResolvedRegister.md)\[`"BytesType"`\] : `string` : `never` \| `type` *extends* readonly \[\] ? readonly \[\] : `never` \| `type` *extends* [`Record`](Record.md)\<`string`, `unknown`\> ? `{ [K in keyof type]: Widen<type[K]> }` : `never` \| `type` *extends* `object` ? `{ [K in keyof type]: Widen<type[K]> }` *extends* infer Val ? readonly \[`...Val`\] : `never` : `never`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/contract.d.ts:19

## Type Parameters

### type

`type`
