[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BaseOpts

# Interface: BaseOpts

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/types.d.ts:57

## Extended by

- [`CustomCommonOpts`](CustomCommonOpts.md)
- [`GethConfigOpts`](GethConfigOpts.md)
- [`CommonOpts`](CommonOpts.md)

## Properties

### eips?

> `optional` **eips?**: `number`[]

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/types.d.ts:72

Selected EIPs which can be activated, please use an array for instantiation
(e.g. `eips: [ 2537, ]`)

Currently supported:

- [EIP-2537](https://eips.ethereum.org/EIPS/eip-2537) - BLS12-381 precompiles

***

### hardfork?

> `optional` **hardfork?**: `string`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/types.d.ts:63

String identifier ('byzantium') for hardfork or Hardfork enum.

Default: Hardfork.London
