[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WriteParameters

# Type Alias: WriteParameters\<chain, account\>

> **WriteParameters**\<`chain`, `account`\> = [`UnionPick`](UnionPick.md)\<[`WriteContractSyncParameters`](WriteContractSyncParameters.md)\<`never`, `never`, `never`, `chain`, `account`\>, `"account"` \| `"chain"` \| `"gas"` \| `"maxFeePerGas"` \| `"maxPriorityFeePerGas"` \| `"nonce"` \| `"throwOnReceiptRevert"`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/token/internal.d.ts:160

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### account

`account` *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`
