[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FillOTCOrcer

# Type Alias: FillOTCOrcer\<T\>

> **FillOTCOrcer**\<`T`\> = (`orderFillData`, `overrides?`, `requestParams?`) => `Promise`\<`T`\>

Defined in: [src/methods/otcOrders/fillOrderDirectly.ts:42](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/otcOrders/fillOrderDirectly.ts#L42)

## Type Parameters

### T

`T`

## Parameters

### orderFillData

#### order

[`OrderData`](../../type-aliases/OrderData.md)

#### signature

`string`

#### takerPermit?

[`TakerPermitObject`](TakerPermitObject.md)

**Description**

Permit1 data or DAI Permit data or Token.parmit() input params encoded; Permit by taker for Taker Asset with AugustusRFQ as spender

### overrides?

[`TxSendOverrides`](../../interfaces/TxSendOverrides.md)

### requestParams?

[`RequestParameters`](RequestParameters.md)

## Returns

`Promise`\<`T`\>
