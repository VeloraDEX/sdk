[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TokenSymbolForChain

# Type Alias: TokenSymbolForChain\<token, chainId\>

> **TokenSymbolForChain**\<`token`, `chainId`\> = `token` *extends* [`Token`](Token.md) ? `chainId` *extends* keyof `token`\[`"addresses"`\] ? `token`\[`"symbol"`\] *extends* `string` ? `string` *extends* `token`\[`"symbol"`\] ? `never` : [`Lowercase`](Lowercase.md)\<`token`\[`"symbol"`\]\> : `never` : `never` : `never`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/token/internal.d.ts:22

## Type Parameters

### token

`token`

### chainId

`chainId` *extends* `number`
