[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / ExternalDeltaOrder

# Type Alias: ExternalDeltaOrder

> **ExternalDeltaOrder**: `object`

## Type declaration

### data

> **data**: `string`

#### Description

Protocol-specific encoded bytes for the external handler

### deadline

> **deadline**: `number`

#### Description

The deadline for the order

### destAmount

> **destAmount**: `string`

#### Description

The minimum amount of dest token to receive

### destToken

> **destToken**: `string`

#### Description

The address of the dest token

### expectedAmount

> **expectedAmount**: `string`

#### Description

The expected amount of token to receive

### handler

> **handler**: `string`

#### Description

The address of the external handler contract

### kind

> **kind**: [`OrderKind`](../-internal-/enumerations/OrderKind.md)

#### Description

The kind of the order

### metadata

> **metadata**: `string`

#### Description

Metadata for the order, hex string

### nonce

> **nonce**: `string`

#### Description

The nonce of the order

### owner

> **owner**: `string`

#### Description

The address of the order owner

### partnerAndFee

> **partnerAndFee**: `string`

#### Description

Encoded partner address, fee bps, and flags for the order

### permit

> **permit**: `string`

#### Description

Optional permit signature for the src token

### srcAmount

> **srcAmount**: `string`

#### Description

The amount of src token to swap

### srcToken

> **srcToken**: `string`

#### Description

The address of the src token

## Defined in

[src/methods/delta/helpers/types.ts:95](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L95)
