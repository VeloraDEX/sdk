[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ChainFeesFnParameters

# Type Alias: ChainFeesFnParameters\<formatters\>

> **ChainFeesFnParameters**\<`formatters`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:88

## Type Parameters

### formatters

`formatters` *extends* [`ChainFormatters`](ChainFormatters.md) \| `undefined` = [`ChainFormatters`](ChainFormatters.md) \| `undefined`

## Properties

### block

> **block**: [`Prettify`](Prettify-1.md)\<[`FormattedBlock`](FormattedBlock.md)\<[`Omit`](Omit.md)\<[`Chain`](Chain.md), `"formatters"`\> & `object`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:90

The latest block.

***

### client

> **client**: [`Client`](Client.md)\<[`Transport`](Transport.md), [`Chain`](Chain.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:93

***

### request?

> `optional` **request?**: [`PrepareTransactionRequestParameters`](PrepareTransactionRequestParameters.md)\<[`Omit`](Omit.md)\<[`Chain`](Chain.md), `"formatters"`\> & `object`, [`Account`](Account.md) \| `undefined`, `undefined`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:99

A transaction request. This value will be undefined if the caller
is outside of a transaction request context (e.g. a direct call to
the `estimateFeesPerGas` Action).
