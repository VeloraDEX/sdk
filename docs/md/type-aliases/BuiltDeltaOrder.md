[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / BuiltDeltaOrder

# Type Alias: BuiltDeltaOrder\<T\>

> **BuiltDeltaOrder**\<`T`\>: `object`

## Type Parameters

• **T** *extends* [`DeltaOrderUnion`](DeltaOrderUnion.md) = [`DeltaOrderUnion`](DeltaOrderUnion.md)

## Type declaration

### orderHash

> **orderHash**: `string`

EIP-712 order hash.

### toSign

> **toSign**: `object`

### toSign.domain

> **domain**: `object`

### toSign.domain.chainId

> **chainId**: `number`

### toSign.domain.name

> **name**: `string`

### toSign.domain.verifyingContract

> **verifyingContract**: `string`

### toSign.domain.version

> **version**: `string`

### toSign.types

> **types**: [`Record`](../-internal-/type-aliases/Record.md)\<`string`, [`TypedDataField`](../-internal-/type-aliases/TypedDataField.md)[]\>

EIP-712 type definitions keyed by type name.

### toSign.value

> **value**: `T`

The on-chain order struct value to sign.

## Description

Response from POST /v2/delta/orders/build — EIP-712 typed data ready to sign.

## Defined in

[src/methods/delta/types.ts:13](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L13)
