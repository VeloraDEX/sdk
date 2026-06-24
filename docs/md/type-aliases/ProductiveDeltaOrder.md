[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / ProductiveDeltaOrder

# Type Alias: ProductiveDeltaOrder

> **ProductiveDeltaOrder**: `object`

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

### shares

> **shares**: `string`

#### Description

The number of shares to execute for this order.

### srcAmount

> **srcAmount**: `string`

#### Description

The amount of src token to swap

### srcToken

> **srcToken**: `string`

#### Description

The address of the src token

### strategy

> **strategy**: `string`

#### Description

The strategy address.

### useShares

> **useShares**: `boolean`

#### Description

Whether the order uses shares or raw amounts.

## Defined in

[src/methods/delta/helpers/types.ts:120](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L120)
