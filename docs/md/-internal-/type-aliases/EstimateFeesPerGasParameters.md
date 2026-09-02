[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EstimateFeesPerGasParameters

# Type Alias: EstimateFeesPerGasParameters\<chain, chainOverride, type\>

> **EstimateFeesPerGasParameters**\<`chain`, `chainOverride`, `type`\> = `object` & [`GetChainParameter`](GetChainParameter.md)\<`chain`, `chainOverride`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/estimateFeesPerGas.d.ts:12

## Type Declaration

### type?

> `optional` **type?**: `type` \| [`FeeValuesType`](FeeValuesType.md)

The type of fee values to return.

- `legacy`: Returns the legacy gas price.
- `eip1559`: Returns the max fee per gas and max priority fee per gas.

#### Default

```ts
'eip1559'
```

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### chainOverride

`chainOverride` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### type

`type` *extends* [`FeeValuesType`](FeeValuesType.md) = [`FeeValuesType`](FeeValuesType.md)
