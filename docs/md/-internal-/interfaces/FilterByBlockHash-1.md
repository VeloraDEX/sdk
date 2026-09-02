[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FilterByBlockHash

# Interface: FilterByBlockHash

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1024

A **FilterByBlockHash** allows searching a specific block for mathcing
 logs.

## Extends

- [`EventFilter`](EventFilter-1.md)

## Properties

### address?

> `optional` **address?**: [`AddressLike`](../type-aliases/AddressLike.md) \| [`AddressLike`](../type-aliases/AddressLike.md)[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1003

#### Inherited from

[`EventFilter`](EventFilter-1.md).[`address`](EventFilter-1.md#address)

***

### blockHash?

> `optional` **blockHash?**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1028

The blockhash of the specific block for the filter.

***

### topics?

> `optional` **topics?**: [`TopicFilter`](../type-aliases/TopicFilter.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1004

#### Inherited from

[`EventFilter`](EventFilter-1.md).[`topics`](EventFilter-1.md#topics)
