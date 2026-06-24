[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / PreSignTWAPDeltaOrderFunctions

# Type Alias: PreSignTWAPDeltaOrderFunctions\<T\>

> **PreSignTWAPDeltaOrderFunctions**\<`T`\>: `object`

## Type Parameters

• **T**

## Type declaration

### hashTWAPDeltaOrder

> **hashTWAPDeltaOrder**: [`HashTWAPDeltaOrder`](../-internal-/type-aliases/HashTWAPDeltaOrder.md)

#### Description

Resolve the Delta contract, build the EIP-712 typed data for the TWAP order (`'TWAPOrder'` sell or `'TWAPBuyOrder'` buy), and return its order hash.

### hashTWAPDeltaOrderTypedData

> **hashTWAPDeltaOrderTypedData**: [`HashTWAPDeltaOrderTypedData`](../-internal-/type-aliases/HashTWAPDeltaOrderTypedData.md)

#### Description

Compute the EIP-712 order hash from already-built signable TWAP order data. Strips any extra fields off `data` before hashing; synchronous, no network call.

### preSignTWAPDeltaOrder

> **preSignTWAPDeltaOrder**: [`PreSignTWAPDeltaOrder`](../-internal-/type-aliases/PreSignTWAPDeltaOrder.md)\<`T`\>

#### Description

Hash the signable TWAP order data and pre-sign it on-chain in one call (`hashTWAPDeltaOrderTypedData` → `setTWAPDeltaOrderPreSignature`).

### setTWAPDeltaOrderPreSignature

> **setTWAPDeltaOrderPreSignature**: [`SetTWAPDeltaOrderPreSignature`](../-internal-/type-aliases/SetTWAPDeltaOrderPreSignature.md)\<`T`\>

#### Description

On-chain `setPreSignature(orderHash, true)` on the Delta contract — pre-approves a TWAP order hash so it can be filled without an EIP-712 signature. Returns whatever the `contractCaller` returns.

## Defined in

[src/methods/delta/preSignTWAPDeltaOrder.ts:49](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignTWAPDeltaOrder.ts#L49)
