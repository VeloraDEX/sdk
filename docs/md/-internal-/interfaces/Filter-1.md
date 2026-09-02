[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Filter

# Interface: Filter

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1010

A **Filter** allows searching a specific range of blocks for mathcing
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

### fromBlock?

> `optional` **fromBlock?**: [`BlockTag`](../type-aliases/BlockTag-1.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1014

The start block for the filter (inclusive).

***

### toBlock?

> `optional` **toBlock?**: [`BlockTag`](../type-aliases/BlockTag-1.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1018

The end block for the filter (inclusive).

***

### topics?

> `optional` **topics?**: [`TopicFilter`](../type-aliases/TopicFilter.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1004

#### Inherited from

[`EventFilter`](EventFilter-1.md).[`topics`](EventFilter-1.md#topics)
