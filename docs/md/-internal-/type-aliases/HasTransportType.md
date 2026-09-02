[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / HasTransportType

# Type Alias: HasTransportType\<transport, type\>

> **HasTransportType**\<`transport`, `type`\> = [`GetTransportConfig`](GetTransportConfig.md)\<`transport`\>\[`"type"`\] *extends* `type` ? `true` : `transport` *extends* [`FallbackTransport`](FallbackTransport.md)\<infer transports\> ? [`Some`](Some.md)\<`{ [key in keyof transports]: GetTransportConfig<transports[key]>["type"] }`, `type`\> : `false`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transport.d.ts:26

## Type Parameters

### transport

`transport` *extends* [`Transport`](Transport.md)

### type

`type` *extends* `string`
