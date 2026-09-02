[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / DeltaTokenSideInput

# Type Alias: DeltaTokenSideInput

> **DeltaTokenSideInput** = \{ `amount`: `string`; `chainId`: `number`; `token`: [`Address`](Address.md); \} \| \{ `chainId`: `number`; `executedAmount`: `string` \| `null`; `expectedAmount`: `string` \| `null`; `maxAmount`: `string`; `token`: [`Address`](Address.md); \}

Defined in: [src/methods/delta/types.ts:149](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L149)

## Union Members

### Type Literal

\{ `amount`: `string`; `chainId`: `number`; `token`: [`Address`](Address.md); \}

***

### Type Literal

\{ `chainId`: `number`; `executedAmount`: `string` \| `null`; `expectedAmount`: `string` \| `null`; `maxAmount`: `string`; `token`: [`Address`](Address.md); \}

#### chainId

> **chainId**: `number`

#### executedAmount

> **executedAmount**: `string` \| `null`

#### expectedAmount

> **expectedAmount**: `string` \| `null`

#### maxAmount

> **maxAmount**: `string`

##### Description

Signed spend cap (order.srcAmount or order.maxSrcAmount for TWAP orders).

#### token

> **token**: [`Address`](Address.md)

## Description

Input token side. SELL provides an explicit `amount`; BUY provides expected/executed amounts plus the signed spend cap `maxAmount`.
