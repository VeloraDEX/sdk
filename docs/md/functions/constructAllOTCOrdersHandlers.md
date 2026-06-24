[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / constructAllOTCOrdersHandlers

# Function: constructAllOTCOrdersHandlers()

> **constructAllOTCOrdersHandlers**\<`TxResponse`\>(`options`): [`OTCOrderHandlers`](../type-aliases/OTCOrderHandlers.md)\<`TxResponse`\>

## Type Parameters

• **TxResponse**

## Parameters

• **options**: [`ConstructProviderFetchInput`](../interfaces/ConstructProviderFetchInput.md)\<`TxResponse`, `"staticCall"` \| `"transactCall"` \| `"signTypedDataCall"`\>

## Returns

[`OTCOrderHandlers`](../type-aliases/OTCOrderHandlers.md)\<`TxResponse`\>

## Description

construct SDK with every OTCOrders-related method, fetching from API and contract calls

## Defined in

[src/methods/otcOrders/index.ts:101](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/otcOrders/index.ts#L101)
