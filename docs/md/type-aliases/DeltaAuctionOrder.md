[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / DeltaAuctionOrder

# Type Alias: DeltaAuctionOrder

> **DeltaAuctionOrder**: `object`

## Type declaration

### beneficiary

> **beneficiary**: `string`

#### Description

The address of the order beneficiary

### bridge

> **bridge**: [`Bridge`](Bridge.md)

#### Description

The bridge input

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

Encoded partner address, fee bps, and flags for the order. partnerAndFee = (partner << 96) | (partnerTakesSurplus << 8) | fee in bps (max fee is 2%)

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

[src/methods/delta/helpers/types.ts:13](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L13)
