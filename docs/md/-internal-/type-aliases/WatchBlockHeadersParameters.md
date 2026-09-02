[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchBlockHeadersParameters

# Type Alias: WatchBlockHeadersParameters\<chain\>

> **WatchBlockHeadersParameters**\<`chain`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/watchBlockHeaders.d.ts:12

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md)

## Properties

### onBlockHeader

> **onBlockHeader**: [`OnBlockHeader`](OnBlockHeader.md)\<`chain`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/watchBlockHeaders.d.ts:14

The callback to call when a new block header is received.

***

### onError?

> `optional` **onError?**: (`error`) => `void`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/watchBlockHeaders.d.ts:16

The callback to call when an error occurs while watching block headers.

#### Parameters

##### error

`Error`

#### Returns

`void`
