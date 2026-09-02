[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CreateAccessListParameters

# Type Alias: CreateAccessListParameters\<chain\>

> **CreateAccessListParameters**\<`chain`\> = [`UnionOmit`](UnionOmit.md)\<[`FormattedTransactionRequest`](FormattedTransactionRequest.md)\<`chain`\>, `"from"` \| `"nonce"` \| `"accessList"`\> & `object` & \{ `blockNumber?`: `bigint`; `blockTag?`: `undefined`; \} \| \{ `blockNumber?`: `undefined`; `blockTag?`: [`BlockTag`](BlockTag-2.md); \}

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/createAccessList.d.ts:16

## Type Declaration

### account?

> `optional` **account?**: [`Account`](Account.md) \| [`Address`](Address-1.md)

Account attached to the call (msg.sender).

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`
