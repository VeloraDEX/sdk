[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CustomCommonOpts

# Interface: CustomCommonOpts

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/types.d.ts:100

Options to be used with the [Common.custom](../classes/Common.md#custom) static constructor.

## Extends

- [`BaseOpts`](BaseOpts.md)

## Properties

### baseChain?

> `optional` **baseChain?**: `string` \| `number` \| `bigint`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/types.d.ts:105

The name (`mainnet`), id (`1`), or [Chain](../enumerations/Chain.md) enum of
a standard chain used to base the custom chain params on.

***

### eips?

> `optional` **eips?**: `number`[]

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/types.d.ts:72

Selected EIPs which can be activated, please use an array for instantiation
(e.g. `eips: [ 2537, ]`)

Currently supported:

- [EIP-2537](https://eips.ethereum.org/EIPS/eip-2537) - BLS12-381 precompiles

#### Inherited from

[`BaseOpts`](BaseOpts.md).[`eips`](BaseOpts.md#eips)

***

### hardfork?

> `optional` **hardfork?**: `string`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/types.d.ts:63

String identifier ('byzantium') for hardfork or Hardfork enum.

Default: Hardfork.London

#### Inherited from

[`BaseOpts`](BaseOpts.md).[`hardfork`](BaseOpts.md#hardfork)
