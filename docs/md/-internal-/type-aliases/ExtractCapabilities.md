[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractCapabilities

# Type Alias: ExtractCapabilities\<method, key\>

> **ExtractCapabilities**\<`method`, `key`\> = [`Prettify`](Prettify-1.md)\<`method` *extends* keyof [`CapabilitiesSchema`](CapabilitiesSchema.md) ? [`CapabilitiesSchema`](CapabilitiesSchema.md)\[`method`\] *extends* `{ [k in key]: infer value extends Record<string, any> }` ? [`Capabilities`](Capabilities.md)\<`value`\> : [`Capabilities`](Capabilities.md) : [`Capabilities`](Capabilities.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/capabilities.d.ts:53

## Type Parameters

### method

`method` *extends* `string`

### key

`key` *extends* `"Request"` \| `"ReturnType"`
