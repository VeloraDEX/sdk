[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractCapabilities

# Type Alias: ExtractCapabilities\<method, key\>

> **ExtractCapabilities**\<`method`, `key`\>: [`Prettify`](Prettify.md)\<`method` *extends* keyof [`CapabilitiesSchema`](CapabilitiesSchema.md) ? [`CapabilitiesSchema`](CapabilitiesSchema.md)\[`method`\] *extends* `{ [k in key]: infer value extends Record<string, any> }` ? [`Capabilities`](Capabilities.md)\<`value`\> : [`Capabilities`](Capabilities.md) : [`Capabilities`](Capabilities.md)\>

## Type Parameters

• **method** *extends* `string`

• **key** *extends* `"Request"` \| `"ReturnType"`

## Defined in

node\_modules/viem/\_types/types/capabilities.d.ts:53
