[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / BuiltDeltaOrder

# Type Alias: BuiltDeltaOrder\<T\>

> **BuiltDeltaOrder**\<`T`\> = `object`

Defined in: [src/methods/delta/types.ts:13](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L13)

## Description

Response from POST /v2/delta/orders/build — EIP-712 typed data ready to sign.

## Type Parameters

### T

`T` *extends* [`DeltaOrderUnion`](DeltaOrderUnion.md) = [`DeltaOrderUnion`](DeltaOrderUnion.md)

## Properties

### orderHash

> **orderHash**: `string`

Defined in: [src/methods/delta/types.ts:27](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L27)

EIP-712 order hash.

***

### toSign

> **toSign**: `object`

Defined in: [src/methods/delta/types.ts:14](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L14)

#### domain

> **domain**: `object`

##### domain.chainId

> **chainId**: `number`

##### domain.name

> **name**: `string`

##### domain.verifyingContract

> **verifyingContract**: `string`

##### domain.version

> **version**: `string`

#### types

> **types**: [`Record`](../-internal-/type-aliases/Record.md)\<`string`, [`TypedDataField`](../-internal-/type-aliases/TypedDataField.md)[]\>

EIP-712 type definitions keyed by type name.

#### value

> **value**: `T`

The on-chain order struct value to sign.
