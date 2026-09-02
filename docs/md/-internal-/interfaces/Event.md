[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Event

# Interface: Event

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:46

## Extends

- [`Log`](Log.md)

## Properties

### address

> **address**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:59

#### Inherited from

[`Log`](Log.md).[`address`](Log.md#address)

***

### args?

> `optional` **args?**: [`Result`](Result.md)

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:49

***

### blockHash

> **blockHash**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:56

#### Inherited from

[`Log`](Log.md).[`blockHash`](Log.md#blockhash)

***

### blockNumber

> **blockNumber**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:55

#### Inherited from

[`Log`](Log.md).[`blockNumber`](Log.md#blocknumber)

***

### data

> **data**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:60

#### Inherited from

[`Log`](Log.md).[`data`](Log.md#data)

***

### decode?

> `optional` **decode?**: (`data`, `topics?`) => `any`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:51

#### Parameters

##### data

`string`

##### topics?

`string`[]

#### Returns

`any`

***

### decodeError?

> `optional` **decodeError?**: `Error`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:50

***

### event?

> `optional` **event?**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:47

***

### eventSignature?

> `optional` **eventSignature?**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:48

***

### getBlock

> **getBlock**: () => `Promise`\<[`Block`](Block-1.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:53

#### Returns

`Promise`\<[`Block`](Block-1.md)\>

***

### getTransaction

> **getTransaction**: () => `Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:54

#### Returns

`Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

***

### getTransactionReceipt

> **getTransactionReceipt**: () => `Promise`\<[`TransactionReceipt`](TransactionReceipt.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:55

#### Returns

`Promise`\<[`TransactionReceipt`](TransactionReceipt.md)\>

***

### logIndex

> **logIndex**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:63

#### Inherited from

[`Log`](Log.md).[`logIndex`](Log.md#logindex)

***

### removed

> **removed**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:58

#### Inherited from

[`Log`](Log.md).[`removed`](Log.md#removed)

***

### removeListener

> **removeListener**: () => `void`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:52

#### Returns

`void`

***

### topics

> **topics**: `string`[]

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:61

#### Inherited from

[`Log`](Log.md).[`topics`](Log.md#topics)

***

### transactionHash

> **transactionHash**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:62

#### Inherited from

[`Log`](Log.md).[`transactionHash`](Log.md#transactionhash)

***

### transactionIndex

> **transactionIndex**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:57

#### Inherited from

[`Log`](Log.md).[`transactionIndex`](Log.md#transactionindex)
