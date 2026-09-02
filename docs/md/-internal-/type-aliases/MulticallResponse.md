[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MulticallResponse

# Type Alias: MulticallResponse\<result, error, allowFailure, extraProperties\>

> **MulticallResponse**\<`result`, `error`, `allowFailure`, `extraProperties`\> = `allowFailure` *extends* `true` ? `extraProperties` & `object` \| `extraProperties` & `object` : `result`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/multicall.d.ts:36

## Type Parameters

### result

`result` = `unknown`

### error

`error` = `unknown`

### allowFailure

`allowFailure` *extends* `boolean` = `true`

### extraProperties

`extraProperties` *extends* [`Record`](Record.md)\<`string`, `unknown`\> \| `undefined` = \{ \}
