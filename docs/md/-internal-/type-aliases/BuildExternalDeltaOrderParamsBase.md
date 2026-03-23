[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BuildExternalDeltaOrderParamsBase

# Type Alias: BuildExternalDeltaOrderParamsBase

> **BuildExternalDeltaOrderParamsBase**: `object`

## Type declaration

### capSurplus?

> `optional` **capSurplus**: `boolean`

#### Description

A boolean indicating whether the surplus should be capped. True by default

### data

> **data**: `string`

#### Description

Protocol-specific encoded bytes for the external handler

### deadline?

> `optional` **deadline**: `number`

#### Description

The deadline for the order

### deltaPrice

> **deltaPrice**: [`MarkOptional`](MarkOptional.md)\<[`Pick`](Pick.md)\<[`DeltaPrice`](../../type-aliases/DeltaPrice.md), `"destAmount"` \| `"partner"` \| `"partnerFee"` \| `"destToken"` \| `"srcAmount"`\>, `"partner"` \| `"partnerFee"`\>

#### Description

price response received from /delta/prices (getDeltaPrice method)

### destToken

> **destToken**: `string`

#### Description

The address of the dest token

### handler

> **handler**: `string`

#### Description

The address of the external handler contract

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

### srcToken

> **srcToken**: `string`

#### Description

The address of the src token

## Defined in

[src/methods/delta/buildExternalDeltaOrder.ts:16](https://github.com/VeloraDEX/sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L16)
