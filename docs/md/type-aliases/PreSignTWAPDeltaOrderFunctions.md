[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / PreSignTWAPDeltaOrderFunctions

# Type Alias: PreSignTWAPDeltaOrderFunctions\<T\>

> **PreSignTWAPDeltaOrderFunctions**\<`T`\> = `object`

Defined in: [src/methods/delta/preSignTWAPDeltaOrder.ts:49](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignTWAPDeltaOrder.ts#L49)

## Type Parameters

### T

`T`

## Properties

### hashTWAPDeltaOrder

> **hashTWAPDeltaOrder**: [`HashTWAPDeltaOrder`](../-internal-/type-aliases/HashTWAPDeltaOrder.md)

Defined in: [src/methods/delta/preSignTWAPDeltaOrder.ts:53](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignTWAPDeltaOrder.ts#L53)

#### Description

Resolve the Delta contract, build the EIP-712 typed data for the TWAP order (`'TWAPOrder'` sell or `'TWAPBuyOrder'` buy), and return its order hash.

***

### hashTWAPDeltaOrderTypedData

> **hashTWAPDeltaOrderTypedData**: [`HashTWAPDeltaOrderTypedData`](../-internal-/type-aliases/HashTWAPDeltaOrderTypedData.md)

Defined in: [src/methods/delta/preSignTWAPDeltaOrder.ts:51](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignTWAPDeltaOrder.ts#L51)

#### Description

Compute the EIP-712 order hash from already-built signable TWAP order data. Strips any extra fields off `data` before hashing; synchronous, no network call.

***

### preSignTWAPDeltaOrder

> **preSignTWAPDeltaOrder**: [`PreSignTWAPDeltaOrder`](../-internal-/type-aliases/PreSignTWAPDeltaOrder.md)\<`T`\>

Defined in: [src/methods/delta/preSignTWAPDeltaOrder.ts:57](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignTWAPDeltaOrder.ts#L57)

#### Description

Hash the signable TWAP order data and pre-sign it on-chain in one call (`hashTWAPDeltaOrderTypedData` → `setTWAPDeltaOrderPreSignature`).

***

### setTWAPDeltaOrderPreSignature

> **setTWAPDeltaOrderPreSignature**: [`SetTWAPDeltaOrderPreSignature`](../-internal-/type-aliases/SetTWAPDeltaOrderPreSignature.md)\<`T`\>

Defined in: [src/methods/delta/preSignTWAPDeltaOrder.ts:55](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignTWAPDeltaOrder.ts#L55)

#### Description

On-chain `setPreSignature(orderHash, true)` on the Delta contract — pre-approves a TWAP order hash so it can be filled without an EIP-712 signature. Returns whatever the `contractCaller` returns.
