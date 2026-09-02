[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / DeltaTokenSideOutput

# Type Alias: DeltaTokenSideOutput

> **DeltaTokenSideOutput** = \{ `amount`: `string`; `chainId`: `number`; `token`: [`Address`](Address.md); \} \| \{ `chainId`: `number`; `executedAmount`: `string` \| `null`; `expectedAmount`: `string` \| `null`; `minAmount`: `string` \| `null`; `token`: [`Address`](Address.md); \}

Defined in: [src/methods/delta/types.ts:165](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L165)

## Union Members

### Type Literal

\{ `amount`: `string`; `chainId`: `number`; `token`: [`Address`](Address.md); \}

***

### Type Literal

\{ `chainId`: `number`; `executedAmount`: `string` \| `null`; `expectedAmount`: `string` \| `null`; `minAmount`: `string` \| `null`; `token`: [`Address`](Address.md); \}

#### chainId

> **chainId**: `number`

#### executedAmount

> **executedAmount**: `string` \| `null`

#### expectedAmount

> **expectedAmount**: `string` \| `null`

#### minAmount

> **minAmount**: `string` \| `null`

##### Description

Signed receive floor. For bridge outputs it's a reporting value (enforcement is per-bridge); `null` when unknown (legacy bridge rows).

#### token

> **token**: [`Address`](Address.md)

## Description

Output token side. BUY provides an explicit `amount`; SELL provides expected/executed amounts plus the signed receive floor `minAmount`.
