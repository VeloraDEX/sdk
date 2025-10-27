[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SubmitP2POrder

# Type Alias: SubmitP2POrder()

> **SubmitP2POrder**: (`buildLimitOrderParams`, `extra`?, `requestParams`?) => `Promise`\<[`LimitOrderFromApi`](../../type-aliases/LimitOrderFromApi.md)\>

## Parameters

• **buildLimitOrderParams**: [`BuildLimitOrderInput`](../../type-aliases/BuildLimitOrderInput.md) & `object`

• **extra?**

• **extra.permitMakerAsset?**: `string`

• **requestParams?**: [`RequestParameters`](RequestParameters.md)

## Returns

`Promise`\<[`LimitOrderFromApi`](../../type-aliases/LimitOrderFromApi.md)\>

## Defined in

[src/methods/limitOrders/index.ts:42](https://github.com/VeloraDEX/sdk/blob/feat/extend_delta_orders_filtering/src/methods/limitOrders/index.ts#L42)
