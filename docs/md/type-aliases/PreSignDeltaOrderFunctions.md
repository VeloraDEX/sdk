[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / PreSignDeltaOrderFunctions

# Type Alias: PreSignDeltaOrderFunctions\<T\>

> **PreSignDeltaOrderFunctions**\<`T`\> = `object`

Defined in: [src/methods/delta/preSignDeltaOrder.ts:39](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignDeltaOrder.ts#L39)

## Type Parameters

### T

`T`

## Properties

### hashDeltaOrder

> **hashDeltaOrder**: [`HashDeltaOrder`](../-internal-/type-aliases/HashDeltaOrder.md)

Defined in: [src/methods/delta/preSignDeltaOrder.ts:43](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignDeltaOrder.ts#L43)

#### Description

Resolve the Delta contract, build the EIP-712 typed data for the order, and return its order hash.

***

### hashDeltaOrderTypedData

> **hashDeltaOrderTypedData**: [`HashDeltaOrderTypedData`](../-internal-/type-aliases/HashDeltaOrderTypedData.md)

Defined in: [src/methods/delta/preSignDeltaOrder.ts:41](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignDeltaOrder.ts#L41)

#### Description

Compute the EIP-712 order hash from already-built signable order data. Strips any extra fields off `data` before hashing; synchronous, no network call.

***

### preSignDeltaOrder

> **preSignDeltaOrder**: [`PreSignDeltaOrder`](../-internal-/type-aliases/PreSignDeltaOrder.md)\<`T`\>

Defined in: [src/methods/delta/preSignDeltaOrder.ts:47](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignDeltaOrder.ts#L47)

#### Description

Hash the signable order data and pre-sign it on-chain in one call (`hashDeltaOrderTypedData` → `setDeltaOrderPreSignature`).

***

### setDeltaOrderPreSignature

> **setDeltaOrderPreSignature**: [`SetDeltaOrderPreSignature`](../-internal-/type-aliases/SetDeltaOrderPreSignature.md)\<`T`\>

Defined in: [src/methods/delta/preSignDeltaOrder.ts:45](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignDeltaOrder.ts#L45)

#### Description

On-chain `setPreSignature(orderHash, true)` on the Delta contract — pre-approves an order hash so it can be filled without an EIP-712 signature. Returns whatever the `contractCaller` returns.
