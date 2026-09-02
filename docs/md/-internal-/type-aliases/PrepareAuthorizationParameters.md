[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / PrepareAuthorizationParameters

# Type Alias: PrepareAuthorizationParameters\<account\>

> **PrepareAuthorizationParameters**\<`account`\> = [`GetAccountParameter`](GetAccountParameter.md)\<`account`\> & [`PartialBy`](PartialBy.md)\<[`AuthorizationRequest`](AuthorizationRequest.md), `"chainId"` \| `"nonce"`\> & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/prepareAuthorization.d.ts:13

## Type Declaration

### executor?

> `optional` **executor?**: `"self"` \| [`Account`](Account.md) \| [`Address`](Address-1.md)

Whether the EIP-7702 Transaction will be executed by the EOA (signing this Authorization) or another Account.

By default, it will be assumed that the EIP-7702 Transaction will
be executed by another Account.

## Type Parameters

### account

`account` *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`
