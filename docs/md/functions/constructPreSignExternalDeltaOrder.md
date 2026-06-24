[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / constructPreSignExternalDeltaOrder

# Function: constructPreSignExternalDeltaOrder()

> **constructPreSignExternalDeltaOrder**\<`T`\>(`options`): [`PreSignExternalDeltaOrderFunctions`](../type-aliases/PreSignExternalDeltaOrderFunctions.md)\<`T`\>

## Type Parameters

• **T**

## Parameters

• **options**: [`ConstructProviderFetchInput`](../interfaces/ConstructProviderFetchInput.md)\<`T`, `"transactCall"`\>

## Returns

[`PreSignExternalDeltaOrderFunctions`](../type-aliases/PreSignExternalDeltaOrderFunctions.md)\<`T`\>

## Description

Construct on-chain pre-signing helpers for External Delta orders:
order hashing (`hashExternalDeltaOrder` / `hashExternalDeltaOrderTypedData`) and
`setPreSignature` transactions (`setExternalDeltaOrderPreSignature` /
`preSignExternalDeltaOrder`). The transact methods return whatever the configured
`contractCaller` returns, for versatility.

## Defined in

[src/methods/delta/preSignExternalDeltaOrder.ts:59](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignExternalDeltaOrder.ts#L59)
