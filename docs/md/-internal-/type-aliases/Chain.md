[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Chain

# Type Alias: Chain\<formatters, extendSchema\>

> **Chain**\<`formatters`, `extendSchema`\> = `object` & [`ChainConfig`](ChainConfig.md)\<`formatters`, `extendSchema`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:13

## Type Declaration

### blockExplorers?

> `optional` **blockExplorers?**: `object`

Collection of block explorers

#### Index Signature

\[`key`: `string`\]: [`ChainBlockExplorer`](ChainBlockExplorer.md)

#### blockExplorers.default

> **default**: [`ChainBlockExplorer`](ChainBlockExplorer.md)

### blockTime?

> `optional` **blockTime?**: `number`

Block time in milliseconds.

### contracts?

> `optional` **contracts?**: [`Prettify`](Prettify-1.md)\<`object` & `object`\>

Collection of contracts

### ensTlds?

> `optional` **ensTlds?**: readonly `string`[]

Collection of ENS TLDs for the chain.

### experimental\_preconfirmationTime?

> `optional` **experimental\_preconfirmationTime?**: `number`

Preconfirmation time in milliseconds.

### id

> **id**: `number`

ID in number form

### name

> **name**: `string`

Human-readable name

### nativeCurrency

> **nativeCurrency**: [`ChainNativeCurrency`](ChainNativeCurrency.md)

Currency used by chain

### rpcUrls

> **rpcUrls**: `object`

Collection of RPC endpoints

#### Index Signature

\[`key`: `string`\]: [`ChainRpcUrls`](ChainRpcUrls.md)

#### rpcUrls.default

> **default**: [`ChainRpcUrls`](ChainRpcUrls.md)

### sourceId?

> `optional` **sourceId?**: `number`

Source Chain ID (ie. the L1 chain)

### supportsTransactionReplacementDetection?

> `optional` **supportsTransactionReplacementDetection?**: `boolean`

Whether transaction replacement detection is supported.

#### Default

```ts
true
```

### testnet?

> `optional` **testnet?**: `boolean`

Flag for test networks

## Type Parameters

### formatters

`formatters` *extends* [`ChainFormatters`](ChainFormatters.md) \| `undefined` = [`ChainFormatters`](ChainFormatters.md) \| `undefined`

### extendSchema

`extendSchema` *extends* [`Record`](Record.md)\<`string`, `unknown`\> \| `undefined` = [`Record`](Record.md)\<`string`, `unknown`\> \| `undefined`
