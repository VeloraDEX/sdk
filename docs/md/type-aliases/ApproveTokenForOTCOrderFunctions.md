[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / ApproveTokenForOTCOrderFunctions

# Type Alias: ApproveTokenForOTCOrderFunctions\<T\>

> **ApproveTokenForOTCOrderFunctions**\<`T`\>: `object`

## Type Parameters

• **T**

## Type declaration

### approveMakerTokenForOTCOrder

> **approveMakerTokenForOTCOrder**: [`ApproveToken`](../-internal-/type-aliases/ApproveToken.md)\<`T`\>

#### Description

approving AugustusRFQ as spender for makerAsset

### approveTakerTokenForOTCOrder

> **approveTakerTokenForOTCOrder**: [`ApproveToken`](../-internal-/type-aliases/ApproveToken.md)\<`T`\>

#### Description

approving AugustusRFQ as spender for takerAsset to call SDK.fillOrderDirectly

## Defined in

[src/methods/otcOrders/approveForOrder.ts:5](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/otcOrders/approveForOrder.ts#L5)
