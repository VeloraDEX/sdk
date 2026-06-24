[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / constructPreSignDeltaOrder

# Function: constructPreSignDeltaOrder()

> **constructPreSignDeltaOrder**\<`T`\>(`options`): [`PreSignDeltaOrderFunctions`](../type-aliases/PreSignDeltaOrderFunctions.md)\<`T`\>

## Type Parameters

• **T**

## Parameters

• **options**: [`ConstructProviderFetchInput`](../interfaces/ConstructProviderFetchInput.md)\<`T`, `"transactCall"`\>

## Returns

[`PreSignDeltaOrderFunctions`](../type-aliases/PreSignDeltaOrderFunctions.md)\<`T`\>

## Description

Construct on-chain pre-signing helpers for standard Delta orders:
order hashing (`hashDeltaOrder` / `hashDeltaOrderTypedData`) and `setPreSignature`
transactions (`setDeltaOrderPreSignature` / `preSignDeltaOrder`). The transact
methods return whatever the configured `contractCaller` returns, for versatility.

## Defined in

[src/methods/delta/preSignDeltaOrder.ts:58](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignDeltaOrder.ts#L58)
