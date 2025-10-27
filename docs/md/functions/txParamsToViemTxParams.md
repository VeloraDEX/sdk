[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / txParamsToViemTxParams

# Function: txParamsToViemTxParams()

> **txParamsToViemTxParams**(`txParams`): [`ViemTxParams`](../-internal-/type-aliases/ViemTxParams.md)

## Parameters

• **txParams**: [`Omit`](../-internal-/type-aliases/Omit.md)\<[`Omit`](../-internal-/type-aliases/Omit.md)\<[`TransactionParams`](../interfaces/TransactionParams.md), `"data"` \| `"value"`\> & [`Partial`](../-internal-/type-aliases/Partial.md)\<[`Pick`](../-internal-/type-aliases/Pick.md)\<[`TransactionParams`](../interfaces/TransactionParams.md), `"data"` \| `"value"`\>\>, `"chainId"` \| `"from"`\>

## Returns

[`ViemTxParams`](../-internal-/type-aliases/ViemTxParams.md)

## Defined in

[src/helpers/providers/viem.ts:164](https://github.com/VeloraDEX/sdk/blob/feat/extend_delta_orders_filtering/src/helpers/providers/viem.ts#L164)
