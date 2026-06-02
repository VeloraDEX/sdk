[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BuildTWAPDeltaOrderParamsBase

# Type Alias: BuildTWAPDeltaOrderParamsBase

> **BuildTWAPDeltaOrderParamsBase**: `object`

## Type declaration

### beneficiary?

> `optional` **beneficiary**: `string`

#### Description

The address of the order beneficiary

### capSurplus?

> `optional` **capSurplus**: `boolean`

#### Description

A boolean indicating whether the surplus should be capped. True by default

### deadline?

> `optional` **deadline**: `number`

#### Description

The deadline for the order

### deltaPrice

> **deltaPrice**: [`MarkOptional`](MarkOptional.md)\<[`Pick`](Pick.md)\<[`BridgePrice`](../../type-aliases/BridgePrice.md), `"destAmount"` \| `"partner"` \| `"partnerFee"` \| `"destToken"` \| `"srcAmount"` \| `"bridge"`\>, `"partner"` \| `"partnerFee"`\>

#### Description

price response received from /delta/prices (getDeltaPrice method) for a single slice

### destChainId?

> `optional` **destChainId**: `number`

#### Description

Destination Chain ID for Crosschain Orders

### destToken

> **destToken**: `string`

#### Description

The address of the dest token. For Crosschain Order - destination token on the destination chain

### interval

> **interval**: `number`

#### Description

Seconds between slice executions (min 60)

### metadata?

> `optional` **metadata**: `string`

#### Description

Metadata for the order, hex string

### nonce?

> `optional` **nonce**: `number` \| `string`

#### Description

The nonce of the order

### numSlices

> **numSlices**: `number`

#### Description

Number of slices (min 2)

### owner

> **owner**: `string`

#### Description

The address of the order owner

### partner?

> `optional` **partner**: `string`

#### Description

Partner string

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

Optional permit signature for the src token

### slippage?

> `optional` **slippage**: `number`

#### Description

Slippage in basis points (bps). 10000 = 100%, 50 = 0.5%

### srcToken

> **srcToken**: `string`

#### Description

The address of the src token

## Defined in

[src/methods/delta/buildTWAPDeltaOrder.ts:16](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L16)
