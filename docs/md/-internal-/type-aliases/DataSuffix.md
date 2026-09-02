[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / DataSuffix

# Type Alias: DataSuffix

> **DataSuffix** = [`Hex`](Hex.md) \| \{ `required?`: `boolean`; `value`: [`Hex`](Hex.md); \}

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/dataSuffix.d.ts:12

Data suffix configuration for transaction attribution.

Can be specified in two forms:
- Simple hex string: `"0x1234"` - Appended to transaction data, not required
- Object form: `{ value: "0x1234", required: true }` - Explicit required flag

When `required` is `true`, transactions will fail if the suffix cannot be appended.
When `required` is `false` (default), the suffix is best-effort.
