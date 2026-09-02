[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionResponse

# Interface: TransactionResponse

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:23

## Extends

- [`Transaction`](Transaction.md)

## Extended by

- [`ContractTransaction`](ContractTransaction.md)

## Properties

### accessList?

> `optional` **accessList?**: [`AccessList`](../type-aliases/AccessList.md)

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:40

#### Inherited from

[`Transaction`](Transaction.md).[`accessList`](Transaction.md#accesslist)

***

### blockHash?

> `optional` **blockHash?**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:26

***

### blockNumber?

> `optional` **blockNumber?**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:25

***

### chainId

> **chainId**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:35

#### Inherited from

[`Transaction`](Transaction.md).[`chainId`](Transaction.md#chainid)

***

### confirmations

> **confirmations**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:28

***

### data

> **data**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:33

#### Inherited from

[`Transaction`](Transaction.md).[`data`](Transaction.md#data)

***

### from

> **from**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:29

#### Overrides

[`Transaction`](Transaction.md).[`from`](Transaction.md#from)

***

### gasLimit

> **gasLimit**: [`BigNumber`](../classes/BigNumber.md)

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:31

#### Inherited from

[`Transaction`](Transaction.md).[`gasLimit`](Transaction.md#gaslimit)

***

### gasPrice?

> `optional` **gasPrice?**: [`BigNumber`](../classes/BigNumber.md)

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:32

#### Inherited from

[`Transaction`](Transaction.md).[`gasPrice`](Transaction.md#gasprice)

***

### hash

> **hash**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:24

#### Overrides

[`Transaction`](Transaction.md).[`hash`](Transaction.md#hash)

***

### maxFeePerGas?

> `optional` **maxFeePerGas?**: [`BigNumber`](../classes/BigNumber.md)

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:42

#### Inherited from

[`Transaction`](Transaction.md).[`maxFeePerGas`](Transaction.md#maxfeepergas)

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas?**: [`BigNumber`](../classes/BigNumber.md)

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:41

#### Inherited from

[`Transaction`](Transaction.md).[`maxPriorityFeePerGas`](Transaction.md#maxpriorityfeepergas)

***

### nonce

> **nonce**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:30

#### Inherited from

[`Transaction`](Transaction.md).[`nonce`](Transaction.md#nonce)

***

### r?

> `optional` **r?**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:36

#### Inherited from

[`Transaction`](Transaction.md).[`r`](Transaction.md#r)

***

### raw?

> `optional` **raw?**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:30

***

### s?

> `optional` **s?**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:37

#### Inherited from

[`Transaction`](Transaction.md).[`s`](Transaction.md#s)

***

### timestamp?

> `optional` **timestamp?**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:27

***

### to?

> `optional` **to?**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:28

#### Inherited from

[`Transaction`](Transaction.md).[`to`](Transaction.md#to)

***

### type?

> `optional` **type?**: `number` \| `null`

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:39

#### Inherited from

[`Transaction`](Transaction.md).[`type`](Transaction.md#type)

***

### v?

> `optional` **v?**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:38

#### Inherited from

[`Transaction`](Transaction.md).[`v`](Transaction.md#v)

***

### value

> **value**: [`BigNumber`](../classes/BigNumber.md)

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:34

#### Inherited from

[`Transaction`](Transaction.md).[`value`](Transaction.md#value)

***

### wait

> **wait**: (`confirmations?`) => `Promise`\<[`TransactionReceipt`](TransactionReceipt.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:31

#### Parameters

##### confirmations?

`number`

#### Returns

`Promise`\<[`TransactionReceipt`](TransactionReceipt.md)\>
