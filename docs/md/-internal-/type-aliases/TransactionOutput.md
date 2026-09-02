[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionOutput

# Type Alias: TransactionOutput

> **TransactionOutput** = `object` & \{ `gasPrice?`: `never`; `maxFeePerGas`: [`Numbers`](Numbers.md); `maxPriorityFeePerGas`: [`Numbers`](Numbers.md); \} \| \{ `gasPrice`: [`Numbers`](Numbers.md); `maxFeePerGas?`: `never`; `maxPriorityFeePerGas?`: `never`; \}

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:48

## Type Declaration

### blockNumber?

> `readonly` `optional` **blockNumber?**: [`Numbers`](Numbers.md)

### from?

> `readonly` `optional` **from?**: [`HexString`](HexString.md)

### gas?

> `readonly` `optional` **gas?**: [`Numbers`](Numbers.md)

### gasLimit?

> `readonly` `optional` **gasLimit?**: `string`

### input

> `readonly` **input**: `string`

### nonce

> `readonly` **nonce**: [`Numbers`](Numbers.md)

### to?

> `readonly` `optional` **to?**: [`HexString`](HexString.md)

### transactionIndex?

> `readonly` `optional` **transactionIndex?**: [`Numbers`](Numbers.md)

### value

> `readonly` **value**: [`Numbers`](Numbers.md)
