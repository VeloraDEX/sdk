[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TWAPDeltaOrderBase

# Type Alias: TWAPDeltaOrderBase

> **TWAPDeltaOrderBase**: `object`

## Type declaration

### beneficiary

> **beneficiary**: `string`

#### Description

The address of the order beneficiary

### bridge

> **bridge**: [`Bridge`](../../type-aliases/Bridge.md)

#### Description

The bridge input

### deadline

> **deadline**: `number`

#### Description

The deadline for the order

### destToken

> **destToken**: `string`

#### Description

The address of the dest token

### interval

> **interval**: `number`

#### Description

The interval between each slice execution

### metadata

> **metadata**: `string`

#### Description

Metadata for the order, hex string

### nonce

> **nonce**: `string`

#### Description

The nonce of the order

### numSlices

> **numSlices**: `number`

#### Description

The number of slices to execute

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

### srcToken

> **srcToken**: `string`

#### Description

The address of the src token

## Defined in

[src/methods/delta/helpers/types.ts:126](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L126)
