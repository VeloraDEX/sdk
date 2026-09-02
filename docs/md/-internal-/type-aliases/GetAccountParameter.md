[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetAccountParameter

# Type Alias: GetAccountParameter\<account, accountOverride, required, nullish\>

> **GetAccountParameter**\<`account`, `accountOverride`, `required`, `nullish`\> = [`MaybeRequired`](MaybeRequired.md)\<\{ `account?`: `accountOverride` \| [`Account`](Account.md) \| [`Address`](Address-1.md) \| `nullish` *extends* `true` ? `null` : `never`; \}, [`IsUndefined`](IsUndefined.md)\<`account`\> *extends* `true` ? `required` *extends* `true` ? `true` : `false` : `false`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/account.d.ts:5

## Type Parameters

### account

`account` *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

### accountOverride

`accountOverride` *extends* [`Account`](Account.md) \| [`Address`](Address-1.md) \| `undefined` = [`Account`](Account.md) \| [`Address`](Address-1.md)

### required

`required` *extends* `boolean` = `true`

### nullish

`nullish` *extends* `boolean` = `false`
