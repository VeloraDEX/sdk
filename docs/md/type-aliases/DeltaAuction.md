[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / DeltaAuction

# Type Alias: DeltaAuction

> **DeltaAuction**: `object`

## Type declaration

### bridgeMetadata

> **bridgeMetadata**: [`BridgeMetadata`](BridgeMetadata.md) \| `null`

### bridgeStatus

> **bridgeStatus**: [`BridgeStatus`](BridgeStatus.md) \| `null`

### chainId

> **chainId**: `number`

### createdAt

> **createdAt**: `string`

### deltaVersion

> **deltaVersion**: `string`

### excludeAgents

> **excludeAgents**: `string`[] \| `null`

### expiresAt

> **expiresAt**: `string`

### id

> **id**: `string`

### includeAgents

> **includeAgents**: `string`[] \| `null`

### order

> **order**: [`DeltaAuctionOrder`](DeltaAuctionOrder.md)

### orderHash

> **orderHash**: `string` \| `null`

### partiallyFillable

> **partiallyFillable**: `boolean`

### partner

> **partner**: `string`

### referrerAddress

> **referrerAddress**: `string` \| `null`

### signature

> **signature**: `string`

### status

> **status**: [`DeltaAuctionStatus`](DeltaAuctionStatus.md)

### transactions

> **transactions**: [`DeltaAuctionTransaction`](../-internal-/type-aliases/DeltaAuctionTransaction.md)[]

### type

> **type**: `"MARKET"` \| `"LIMIT"`

### updatedAt

> **updatedAt**: `string`

### user

> **user**: `string`

## Defined in

[src/methods/delta/helpers/types.ts:91](https://github.com/VeloraDEX/sdk/blob/feat/extend_delta_orders_filtering/src/methods/delta/helpers/types.ts#L91)
