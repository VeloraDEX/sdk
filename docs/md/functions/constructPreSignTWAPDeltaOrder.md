[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / constructPreSignTWAPDeltaOrder

# Function: constructPreSignTWAPDeltaOrder()

> **constructPreSignTWAPDeltaOrder**\<`T`\>(`options`): [`PreSignTWAPDeltaOrderFunctions`](../type-aliases/PreSignTWAPDeltaOrderFunctions.md)\<`T`\>

Defined in: [src/methods/delta/preSignTWAPDeltaOrder.ts:69](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignTWAPDeltaOrder.ts#L69)

## Type Parameters

### T

`T`

## Parameters

### options

[`ConstructProviderFetchInput`](../interfaces/ConstructProviderFetchInput.md)\<`T`, `"transactCall"`\>

## Returns

[`PreSignTWAPDeltaOrderFunctions`](../type-aliases/PreSignTWAPDeltaOrderFunctions.md)\<`T`\>

## Description

Construct on-chain pre-signing helpers for TWAP Delta orders (sell
and buy): order hashing (`hashTWAPDeltaOrder` / `hashTWAPDeltaOrderTypedData`) and
`setPreSignature` transactions (`setTWAPDeltaOrderPreSignature` /
`preSignTWAPDeltaOrder`). The transact methods return whatever the configured
`contractCaller` returns, for versatility.
