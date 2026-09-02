[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SmartAccount

# Type Alias: SmartAccount\<implementation\>

> **SmartAccount**\<`implementation`\> = [`Assign`](Assign.md)\<`implementation`\[`"extend"`\], [`Assign`](Assign.md)\<`implementation`, \{ `address`: [`Address`](Address-1.md); `getNonce`: [`NonNullable`](NonNullable.md)\<[`SmartAccountImplementation`](SmartAccountImplementation.md)\[`"getNonce"`\]\>; `isDeployed`: () => `Promise`\<`boolean`\>; `type`: `"smart"`; \}\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/account-abstraction/accounts/types.d.ts:180

## Type Parameters

### implementation

`implementation` *extends* [`SmartAccountImplementation`](SmartAccountImplementation.md) = [`SmartAccountImplementation`](SmartAccountImplementation.md)
