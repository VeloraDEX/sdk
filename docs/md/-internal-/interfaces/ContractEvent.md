[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractEvent

# Interface: ContractEvent()\<A\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:145

## Type Parameters

### A

`A` *extends* `any`[] = `any`[]

> **ContractEvent**(...`args`): [`DeferredTopicFilter`](DeferredTopicFilter.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:146

## Parameters

### args

...[`ContractEventArgs`](../type-aliases/ContractEventArgs.md)\<`A`\>

## Returns

[`DeferredTopicFilter`](DeferredTopicFilter.md)

## Properties

### fragment

> **fragment**: [`EventFragment`](../classes/EventFragment.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:155

The fragment of the Contract event. This will throw on ambiguous
 method names.

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:150

The name of the Contract event.

## Methods

### getFragment()

> **getFragment**(...`args`): [`EventFragment`](../classes/EventFragment.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:160

Returns the fragment constrained by %%args%%. This can be used to
 resolve ambiguous event names.

#### Parameters

##### args

...[`ContractEventArgs`](../type-aliases/ContractEventArgs.md)\<`A`\>

#### Returns

[`EventFragment`](../classes/EventFragment.md)
