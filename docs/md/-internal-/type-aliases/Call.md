[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Call

# Type Alias: Call\<call, extraProperties\>

> **Call**\<`call`, `extraProperties`\> = [`OneOf`](OneOf.md)\<[`Assign`](Assign.md)\<\{ `data?`: [`Hex`](Hex.md); `dataSuffix?`: [`Hex`](Hex.md); `to`: [`Address`](Address-1.md); `value?`: `bigint`; \}, `extraProperties`\> \| [`Assign`](Assign.md)\<[`Omit`](Omit.md)\<[`GetMulticallContractParameters`](GetMulticallContractParameters.md)\<`call`, [`AbiStateMutability`](AbiStateMutability.md)\>, `"address"`\> & `object`, `extraProperties`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/calls.d.ts:5

## Type Parameters

### call

`call` = `unknown`

### extraProperties

`extraProperties` *extends* [`Record`](Record.md)\<`string`, `unknown`\> = \{ \}
