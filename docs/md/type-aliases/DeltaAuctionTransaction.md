[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / DeltaAuctionTransaction

# Type Alias: DeltaAuctionTransaction

> **DeltaAuctionTransaction**: `object`

## Type declaration

### agent

> **agent**: `string`

### auctionId

> **auctionId**: `string`

### bidId

> **bidId**: `string` \| `null`

### blobGasPrice

> **blobGasPrice**: `bigint`

### blobGasUsed

> **blobGasUsed**: `bigint`

### blockHash

> **blockHash**: `string`

### blockNumber

> **blockNumber**: `number`

### blockTimestamp

> **blockTimestamp**: `string` \| `null`

### bridgeMetadata

> **bridgeMetadata**: [`BridgeMetadata`](BridgeMetadata.md) \| `null`

### bridgeOverride

> **bridgeOverride**: [`Pick`](../-internal-/type-aliases/Pick.md)\<[`Bridge`](Bridge.md), `"protocolSelector"` \| `"protocolData"`\> \| `null`

### bridgeProtocol

> **bridgeProtocol**: `string` \| `null`

### bridgeStatus

> **bridgeStatus**: [`BridgeStatus`](BridgeStatus.md) \| `null`

### filledPercent

> **filledPercent**: `number`

### from

> **from**: `string`

### gasPrice

> **gasPrice**: `bigint`

### gasUsed

> **gasUsed**: `bigint`

### hash

> **hash**: `string`

### id

> **id**: `string`

### index

> **index**: `number`

### orderId

> **orderId**: `string`

### partnerFee

> **partnerFee**: `string`

### protocolFee

> **protocolFee**: `string`

### receivedAmount

> **receivedAmount**: `string`

### receivedAmountUSD

> **receivedAmountUSD**: `number`

### spentAmount

> **spentAmount**: `string`

### spentAmountUSD

> **spentAmountUSD**: `number`

### status

> **status**: `number`

### to

> **to**: `string`

## Defined in

[src/methods/delta/helpers/types.ts:181](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L181)
