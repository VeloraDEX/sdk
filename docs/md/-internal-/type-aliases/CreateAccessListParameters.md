[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CreateAccessListParameters

# Type Alias: CreateAccessListParameters\<chain\>

> **CreateAccessListParameters**\<`chain`\>: [`UnionOmit`](UnionOmit.md)\<[`FormattedTransactionRequest`](FormattedTransactionRequest.md)\<`chain`\>, `"from"` \| `"nonce"` \| `"accessList"`\> & `object` & `object` \| `object`

## Type declaration

### account?

> `optional` **account**: [`Account`](Account.md) \| [`Address`](Address.md)

Account attached to the call (msg.sender).

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

## Defined in

node\_modules/viem/\_types/actions/public/createAccessList.d.ts:15
