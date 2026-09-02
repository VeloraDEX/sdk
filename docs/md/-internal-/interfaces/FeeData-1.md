[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FeeData

# Interface: FeeData

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:470

To contain the gas Fee Data to be used with EIP-1559 transactions.
EIP-1559 was applied to Ethereum after London hardfork.

Typically you will only need `maxFeePerGas` and `maxPriorityFeePerGas` for a transaction following EIP-1559.
However, if you want to get informed about the fees of last block, you can use `baseFeePerGas` too.

## See

https://eips.ethereum.org/EIPS/eip-1559

## Properties

### baseFeePerGas?

> `readonly` `optional` **baseFeePerGas?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:483

The baseFeePerGas returned from the last available block.

If EIP-1559 is not supported, this will be `undefined`

However, the user will only pay (the future baseFeePerGas + the maxPriorityFeePerGas).
And this value is just for getting informed about the fees of last block.

***

### gasPrice?

> `readonly` `optional` **gasPrice?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:474

This filed is used for legacy networks that does not support EIP-1559.

***

### maxFeePerGas?

> `readonly` `optional` **maxFeePerGas?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:492

The maximum fee that the user would be willing to pay per-gas.

However, the user will only pay (the future baseFeePerGas + the maxPriorityFeePerGas).
And the `maxFeePerGas` could be used to prevent paying more than it, if `baseFeePerGas` went too high.

If EIP-1559 is not supported, this will be `undefined`

***

### maxPriorityFeePerGas?

> `readonly` `optional` **maxPriorityFeePerGas?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:498

The validator's tip for including a transaction in a block.

If EIP-1559 is not supported, this will be `undefined`
