[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / SubmitDeltaOrderParams

# Type Alias: SubmitDeltaOrderParams

> **SubmitDeltaOrderParams**: [`BuildDeltaOrderDataParams`](BuildDeltaOrderDataParams.md) & `object` & [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaOrderToPost`](DeltaOrderToPost.md), `"type"` \| `"includeAgents"` \| `"excludeAgents"`\>

## Type declaration

### degenMode?

> `optional` **degenMode**: `boolean`

### partiallyFillable?

> `optional` **partiallyFillable**: `boolean`

#### Description

designates the Order as being able to be partially filled, as opposed to fill-or-kill

### referrerAddress?

> `optional` **referrerAddress**: `string`

#### Description

Referrer address

## Defined in

[src/methods/delta/index.ts:92](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/index.ts#L92)
