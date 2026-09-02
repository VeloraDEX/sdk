[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FallbackTransport

# Type Alias: FallbackTransport\<transports\>

> **FallbackTransport**\<`transports`\> = [`Transport`](Transport.md)\<`"fallback"`, \{ `onResponse`: (`fn`) => `void`; `transports`: `{ [key in keyof transports]: ReturnType<transports[key]> }`; \}\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/transports/fallback.d.ts:69

## Type Parameters

### transports

`transports` *extends* readonly [`Transport`](Transport.md)[] = readonly [`Transport`](Transport.md)[]
