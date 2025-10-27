[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / BuildDeltaOrderDataParams

# Type Alias: BuildDeltaOrderDataParams

> **BuildDeltaOrderDataParams**: `object`

## Type declaration

### beneficiary?

> `optional` **beneficiary**: `string`

#### Description

The address of the order beneficiary

### deadline?

> `optional` **deadline**: `number`

#### Description

The deadline for the order

### deltaPrice

> **deltaPrice**: [`MarkOptional`](../-internal-/type-aliases/MarkOptional.md)\<[`Pick`](../-internal-/type-aliases/Pick.md)\<[`BridgePrice`](BridgePrice.md), `"destAmount"` \| `"partner"` \| `"partnerFee"` \| `"destToken"` \| `"srcAmount"` \| `"bridge"`\>, `"partner"` \| `"partnerFee"`\>

#### Description

price response received from /delta/prices (getDeltaPrice method)

### destAmount

> **destAmount**: `string`

#### Description

The minimum amount of dest token to receive

### destChainId?

> `optional` **destChainId**: `number`

#### Description

Destination Chain ID for Crosschain Orders

### destToken

> **destToken**: `string`

#### Description

The address of the dest token. For Crosschain Order - destination token on the destination chain

### metadata?

> `optional` **metadata**: `string`

#### Description

Metadata for the order, hex string

### nonce?

> `optional` **nonce**: `number` \| `string`

#### Description

The nonce of the order

### owner

> **owner**: `string`

#### Description

The address of the order owner

### partner?

> `optional` **partner**: `string`

#### Description

Partner string.

### partnerAddress?

> `optional` **partnerAddress**: `string`

#### Description

partner address

### partnerFeeBps?

> `optional` **partnerFeeBps**: `number`

#### Description

partner fee in basis points (bps), 50bps=0.5%

### partnerTakesSurplus?

> `optional` **partnerTakesSurplus**: `boolean`

#### Description

take surplus

### permit?

> `optional` **permit**: `string`

#### Description

Optional permit signature for the src token https://developers.velora.xyz/api/velora-api/velora-delta-api/build-a-delta-order-to-sign#supported-permits-order#supported-permits

### side?

> `optional` **side**: [`SwapSideUnion`](SwapSideUnion.md)

#### Description

The side of the order. Default is SELL

### srcAmount

> **srcAmount**: `string`

#### Description

The amount of src token to swap

### srcToken

> **srcToken**: `string`

#### Description

The address of the src token

## Defined in

[src/methods/delta/buildDeltaOrder.ts:22](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L22)
