[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / PreSignExternalDeltaOrderFunctions

# Type Alias: PreSignExternalDeltaOrderFunctions\<T\>

> **PreSignExternalDeltaOrderFunctions**\<`T`\> = `object`

Defined in: [src/methods/delta/preSignExternalDeltaOrder.ts:39](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignExternalDeltaOrder.ts#L39)

## Type Parameters

### T

`T`

## Properties

### hashExternalDeltaOrder

> **hashExternalDeltaOrder**: [`HashExternalDeltaOrder`](../-internal-/type-aliases/HashExternalDeltaOrder.md)

Defined in: [src/methods/delta/preSignExternalDeltaOrder.ts:43](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignExternalDeltaOrder.ts#L43)

#### Description

Resolve the Delta contract, build the EIP-712 typed data for the External order, and return its order hash.

***

### hashExternalDeltaOrderTypedData

> **hashExternalDeltaOrderTypedData**: [`HashExternalDeltaOrderTypedData`](../-internal-/type-aliases/HashExternalDeltaOrderTypedData.md)

Defined in: [src/methods/delta/preSignExternalDeltaOrder.ts:41](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignExternalDeltaOrder.ts#L41)

#### Description

Compute the EIP-712 order hash from already-built signable External order data. Strips any extra fields off `data` before hashing; synchronous, no network call.

***

### preSignExternalDeltaOrder

> **preSignExternalDeltaOrder**: [`PreSignExternalDeltaOrder`](../-internal-/type-aliases/PreSignExternalDeltaOrder.md)\<`T`\>

Defined in: [src/methods/delta/preSignExternalDeltaOrder.ts:47](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignExternalDeltaOrder.ts#L47)

#### Description

Hash the signable External order data and pre-sign it on-chain in one call (`hashExternalDeltaOrderTypedData` → `setExternalDeltaOrderPreSignature`).

***

### setExternalDeltaOrderPreSignature

> **setExternalDeltaOrderPreSignature**: [`SetExternalDeltaOrderPreSignature`](../-internal-/type-aliases/SetExternalDeltaOrderPreSignature.md)\<`T`\>

Defined in: [src/methods/delta/preSignExternalDeltaOrder.ts:45](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignExternalDeltaOrder.ts#L45)

#### Description

On-chain `setPreSignature(orderHash, true)` on the Delta contract — pre-approves an External order hash so it can be filled without an EIP-712 signature. Returns whatever the `contractCaller` returns.
