[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionReceiptBase

# Interface: TransactionReceiptBase\<numberType, hashByteType, logsBloomByteType, logsType\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:296

## Type Parameters

### numberType

`numberType`

### hashByteType

`hashByteType`

### logsBloomByteType

`logsBloomByteType`

### logsType

`logsType`

## Properties

### blockHash

> `readonly` **blockHash**: `hashByteType`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:299

***

### blockNumber

> `readonly` **blockNumber**: `numberType`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:300

***

### contractAddress?

> `readonly` `optional` **contractAddress?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:306

***

### cumulativeGasUsed

> `readonly` **cumulativeGasUsed**: `numberType`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:303

***

### effectiveGasPrice?

> `readonly` `optional` **effectiveGasPrice?**: `numberType`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:305

***

### events?

> `optional` **events?**: `object`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:312

#### Index Signature

\[`key`: `string`\]: [`EventLog`](EventLog.md)

***

### from

> `readonly` **from**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:301

***

### gasUsed

> `readonly` **gasUsed**: `numberType`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:304

***

### logs

> `readonly` **logs**: `logsType`[]

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:307

***

### logsBloom

> `readonly` **logsBloom**: `logsBloomByteType`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:308

***

### root

> `readonly` **root**: `hashByteType`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:309

***

### status

> `readonly` **status**: `numberType`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:310

***

### to

> `readonly` **to**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:302

***

### transactionHash

> `readonly` **transactionHash**: `hashByteType`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:297

***

### transactionIndex

> `readonly` **transactionIndex**: `numberType`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:298

***

### type?

> `readonly` `optional` **type?**: `numberType`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:311
