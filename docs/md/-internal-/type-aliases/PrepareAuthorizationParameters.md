[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / PrepareAuthorizationParameters

# Type Alias: PrepareAuthorizationParameters\<account\>

> **PrepareAuthorizationParameters**\<`account`\>: [`GetAccountParameter`](GetAccountParameter.md)\<`account`\> & [`PartialBy`](PartialBy.md)\<[`AuthorizationRequest`](AuthorizationRequest.md), `"chainId"` \| `"nonce"`\> & `object`

## Type declaration

### executor?

> `optional` **executor**: `"self"` \| [`Account`](Account.md) \| [`Address`](Address.md)

Whether the EIP-7702 Transaction will be executed by the EOA (signing this Authorization) or another Account.

By default, it will be assumed that the EIP-7702 Transaction will
be executed by another Account.

## Type Parameters

• **account** *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

## Defined in

node\_modules/viem/\_types/actions/wallet/prepareAuthorization.d.ts:13
