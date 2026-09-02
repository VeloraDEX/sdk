[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractTransaction

# Interface: ContractTransaction

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:60

## Extends

- [`TransactionResponse`](TransactionResponse.md)

## Properties

### accessList?

> `optional` **accessList?**: [`AccessList`](../type-aliases/AccessList.md)

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:40

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`accessList`](TransactionResponse.md#accesslist)

***

### blockHash?

> `optional` **blockHash?**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:26

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`blockHash`](TransactionResponse.md#blockhash)

***

### blockNumber?

> `optional` **blockNumber?**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:25

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`blockNumber`](TransactionResponse.md#blocknumber)

***

### chainId

> **chainId**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:35

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`chainId`](TransactionResponse.md#chainid)

***

### confirmations

> **confirmations**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:28

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`confirmations`](TransactionResponse.md#confirmations)

***

### data

> **data**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:33

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`data`](TransactionResponse.md#data)

***

### from

> **from**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:29

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`from`](TransactionResponse.md#from)

***

### gasLimit

> **gasLimit**: [`BigNumber`](../classes/BigNumber.md)

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:31

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`gasLimit`](TransactionResponse.md#gaslimit)

***

### gasPrice?

> `optional` **gasPrice?**: [`BigNumber`](../classes/BigNumber.md)

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:32

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`gasPrice`](TransactionResponse.md#gasprice)

***

### hash

> **hash**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:24

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`hash`](TransactionResponse.md#hash)

***

### maxFeePerGas?

> `optional` **maxFeePerGas?**: [`BigNumber`](../classes/BigNumber.md)

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:42

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`maxFeePerGas`](TransactionResponse.md#maxfeepergas)

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas?**: [`BigNumber`](../classes/BigNumber.md)

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:41

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`maxPriorityFeePerGas`](TransactionResponse.md#maxpriorityfeepergas)

***

### nonce

> **nonce**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:30

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`nonce`](TransactionResponse.md#nonce)

***

### r?

> `optional` **r?**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:36

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`r`](TransactionResponse.md#r)

***

### raw?

> `optional` **raw?**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:30

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`raw`](TransactionResponse.md#raw)

***

### s?

> `optional` **s?**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:37

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`s`](TransactionResponse.md#s)

***

### timestamp?

> `optional` **timestamp?**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:27

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`timestamp`](TransactionResponse.md#timestamp)

***

### to?

> `optional` **to?**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:28

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`to`](TransactionResponse.md#to)

***

### type?

> `optional` **type?**: `number` \| `null`

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:39

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`type`](TransactionResponse.md#type)

***

### v?

> `optional` **v?**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:38

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`v`](TransactionResponse.md#v)

***

### value

> **value**: [`BigNumber`](../classes/BigNumber.md)

Defined in: node\_modules/.pnpm/@ethersproject+transactions@5.8.0/node\_modules/@ethersproject/transactions/lib/index.d.ts:34

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`value`](TransactionResponse.md#value)

## Methods

### wait()

> **wait**(`confirmations?`): `Promise`\<[`ContractReceipt`](ContractReceipt.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:61

#### Parameters

##### confirmations?

`number`

#### Returns

`Promise`\<[`ContractReceipt`](ContractReceipt.md)\>

#### Overrides

`TransactionResponse.wait`
