[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / constructAllDeltaOrdersHandlers

# Function: constructAllDeltaOrdersHandlers()

> **constructAllDeltaOrdersHandlers**\<`TxResponse`\>(`options`): [`DeltaOrderHandlers`](../type-aliases/DeltaOrderHandlers.md)\<`TxResponse`\>

## Type Parameters

• **TxResponse**

## Parameters

• **options**: [`ConstructProviderFetchInput`](../interfaces/ConstructProviderFetchInput.md)\<`TxResponse`, `"transactCall"` \| `"signTypedDataCall"`\>

## Returns

[`DeltaOrderHandlers`](../type-aliases/DeltaOrderHandlers.md)\<`TxResponse`\>

## Description

Construct an SDK bundle exposing every Delta v2 method (queries, build/sign/post, on-chain helpers).

## Defined in

[src/methods/delta/index.ts:281](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/index.ts#L281)
