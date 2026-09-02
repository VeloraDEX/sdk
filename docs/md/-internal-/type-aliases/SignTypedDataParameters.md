[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SignTypedDataParameters

# Type Alias: SignTypedDataParameters\<typedData, primaryType, account, primaryTypes\>

> **SignTypedDataParameters**\<`typedData`, `primaryType`, `account`, `primaryTypes`\> = [`TypedDataDefinition`](TypedDataDefinition.md)\<`typedData`, `primaryType`, `primaryTypes`\> & [`GetAccountParameter`](GetAccountParameter.md)\<`account`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/signTypedData.d.ts:17

## Type Parameters

### typedData

`typedData` *extends* [`TypedData`](TypedData.md) \| [`Record`](Record.md)\<`string`, `unknown`\> = [`TypedData`](TypedData.md)

### primaryType

`primaryType` *extends* keyof `typedData` \| `"EIP712Domain"` = keyof `typedData`

### account

`account` *extends* [`Account`](Account.md) \| `undefined` = `undefined`

### primaryTypes

`primaryTypes` = `typedData` *extends* [`TypedData`](TypedData.md) ? keyof `typedData` : `string`
