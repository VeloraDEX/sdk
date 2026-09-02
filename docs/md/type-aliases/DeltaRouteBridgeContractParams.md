[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / DeltaRouteBridgeContractParams

# Type Alias: DeltaRouteBridgeContractParams

> **DeltaRouteBridgeContractParams** = [`Omit`](../-internal-/type-aliases/Omit.md)\<[`Bridge`](Bridge.md), `"destinationChainId"`\>

Defined in: [src/methods/delta/types.ts:50](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L50)

## Description

Subset of the on-chain Bridge struct returned in v2 price responses.
 (the full `route` object is passed to the server when building an order).
