[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TopicFilter

# Type Alias: TopicFilter

> **TopicFilter** = (`null` \| `string` \| `string`[])[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:997

A **TopicFilter** provides a struture to define bloom-filter
 queries.

 Each field that is ``null`` matches **any** value, a field that is
 a ``string`` must match exactly that value and ``array`` is
 effectively an ``OR``-ed set, where any one of those values must
 match.
