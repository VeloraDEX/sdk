[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ReturnType

# Type Alias: ReturnType()\<token\>

> **ReturnType**\<`token`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/tokens/defineToken.d.ts:84

## Type Parameters

### token

`token` *extends* [`Parameters`](Parameters-9.md) = [`Parameters`](Parameters-9.md)

> **ReturnType**\<`chainId`\>(`chainId`): `object`

Resolves the token config (`address`, `currency`, `decimals`, `name`,
`popular`, `symbol`) for a chain id.

## Type Parameters

### chainId

`chainId` *extends* `string` \| `number` \| `symbol`

## Parameters

### chainId

`chainId`

## Returns

`object`

### address

> **address**: `token`\[`"addresses"`\]\[`chainId`\]

### currency

> **currency**: [`ParameterValue`](ParameterValue.md)\<`token`, `"currency"`\>

### decimals

> **decimals**: `token`\[`"decimals"`\]

### name

> **name**: [`ParameterValue`](ParameterValue.md)\<`token`, `"name"`\>

### popular

> **popular**: [`ParameterValue`](ParameterValue.md)\<`token`, `"popular"`\>

### symbol

> **symbol**: [`ParameterValue`](ParameterValue.md)\<`token`, `"symbol"`\>

## Properties

### addresses

> **addresses**: `token`\[`"addresses"`\]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/tokens/defineToken.d.ts:98

Token contract addresses, keyed by chain id.

***

### currency

> **currency**: [`ParameterValue`](ParameterValue.md)\<`token`, `"currency"`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/tokens/defineToken.d.ts:100

Currency denomination of the token (e.g. `'USD'`).

***

### decimals

> **decimals**: `token`\[`"decimals"`\]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/tokens/defineToken.d.ts:102

Number of decimals the token uses.

***

### name

> **name**: [`ParameterValue`](ParameterValue.md)\<`token`, `"name"`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/tokens/defineToken.d.ts:104

Human-readable name of the token.

***

### popular

> **popular**: [`ParameterValue`](ParameterValue.md)\<`token`, `"popular"`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/tokens/defineToken.d.ts:106

Whether the token should be treated as popular in token lists.

***

### symbol

> **symbol**: [`ParameterValue`](ParameterValue.md)\<`token`, `"symbol"`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/tokens/defineToken.d.ts:108

Ticker symbol of the token.
