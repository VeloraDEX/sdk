[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SendTransactionEventsBase

# Type Alias: SendTransactionEventsBase\<ReturnFormat, TxType\>

> **SendTransactionEventsBase**\<`ReturnFormat`, `TxType`\> = `object`

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/types.d.ts:5

## Type Parameters

### ReturnFormat

`ReturnFormat` *extends* [`DataFormat`](DataFormat.md)

### TxType

`TxType`

## Properties

### confirmation

> **confirmation**: `object`

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/types.d.ts:10

#### confirmations

> **confirmations**: [`FormatType`](FormatType.md)\<[`Numbers`](Numbers.md), `ReturnFormat`\>

#### latestBlockHash

> **latestBlockHash**: [`FormatType`](FormatType.md)\<[`Bytes`](Bytes-1.md), `ReturnFormat`\>

#### receipt

> **receipt**: [`FormatType`](FormatType.md)\<[`TransactionReceipt`](TransactionReceipt.md), `ReturnFormat`\>

***

### error

> **error**: [`TransactionRevertedWithoutReasonError`](../classes/TransactionRevertedWithoutReasonError.md)\<[`FormatType`](FormatType.md)\<[`TransactionReceipt`](TransactionReceipt.md), `ReturnFormat`\>\> \| [`TransactionRevertInstructionError`](../classes/TransactionRevertInstructionError.md)\<[`FormatType`](FormatType.md)\<[`TransactionReceipt`](TransactionReceipt.md), `ReturnFormat`\>\> \| [`TransactionRevertWithCustomError`](../classes/TransactionRevertWithCustomError.md)\<[`FormatType`](FormatType.md)\<[`TransactionReceipt`](TransactionReceipt.md), `ReturnFormat`\>\> \| [`TransactionPollingTimeoutError`](../classes/TransactionPollingTimeoutError.md) \| [`InvalidResponseError`](../classes/InvalidResponseError.md) \| [`ContractExecutionError`](../classes/ContractExecutionError.md)

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/types.d.ts:15

***

### receipt

> **receipt**: [`FormatType`](FormatType.md)\<[`TransactionReceipt`](TransactionReceipt.md), `ReturnFormat`\>

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/types.d.ts:9

***

### sending

> **sending**: [`FormatType`](FormatType.md)\<`TxType`, *typeof* [`ETH_DATA_FORMAT`](../variables/ETH_DATA_FORMAT.md)\>

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/types.d.ts:6

***

### sent

> **sent**: [`FormatType`](FormatType.md)\<`TxType`, *typeof* [`ETH_DATA_FORMAT`](../variables/ETH_DATA_FORMAT.md)\>

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/types.d.ts:7

***

### transactionHash

> **transactionHash**: [`FormatType`](FormatType.md)\<[`Bytes`](Bytes-1.md), `ReturnFormat`\>

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/types.d.ts:8
