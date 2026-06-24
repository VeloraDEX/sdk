[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / AllSDKMethods

# Type Alias: AllSDKMethods\<TxResponse\>

> **AllSDKMethods**\<`TxResponse`\>: `object` & [`Required`](../-internal-/type-aliases/Required.md)\<[`ConstructBaseInput`](../-internal-/interfaces/ConstructBaseInput.md)\>

## Type declaration

### delta

> **delta**: [`DeltaOrderHandlers`](DeltaOrderHandlers.md)\<`TxResponse`\>

### otcOrders

> **otcOrders**: [`OTCOrderHandlers`](OTCOrderHandlers.md)\<`TxResponse`\>

### quote

> **quote**: [`GetQuoteFunctions`](GetQuoteFunctions.md)

### swap

> **swap**: [`SwapSDKMethods`](SwapSDKMethods.md)\<`TxResponse`\>

## Type Parameters

• **TxResponse**

## Defined in

[src/sdk/full.ts:18](https://github.com/paraswap/paraswap-sdk/blob/master/src/sdk/full.ts#L18)
