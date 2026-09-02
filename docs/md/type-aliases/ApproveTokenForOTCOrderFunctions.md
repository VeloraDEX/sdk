[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / ApproveTokenForOTCOrderFunctions

# Type Alias: ApproveTokenForOTCOrderFunctions\<T\>

> **ApproveTokenForOTCOrderFunctions**\<`T`\> = `object`

Defined in: [src/methods/otcOrders/approveForOrder.ts:5](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/otcOrders/approveForOrder.ts#L5)

## Type Parameters

### T

`T`

## Properties

### approveMakerTokenForOTCOrder

> **approveMakerTokenForOTCOrder**: [`ApproveToken`](../-internal-/type-aliases/ApproveToken.md)\<`T`\>

Defined in: [src/methods/otcOrders/approveForOrder.ts:7](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/otcOrders/approveForOrder.ts#L7)

#### Description

approving AugustusRFQ as spender for makerAsset

***

### approveTakerTokenForOTCOrder

> **approveTakerTokenForOTCOrder**: [`ApproveToken`](../-internal-/type-aliases/ApproveToken.md)\<`T`\>

Defined in: [src/methods/otcOrders/approveForOrder.ts:9](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/otcOrders/approveForOrder.ts#L9)

#### Description

approving AugustusRFQ as spender for takerAsset to call SDK.fillOrderDirectly
