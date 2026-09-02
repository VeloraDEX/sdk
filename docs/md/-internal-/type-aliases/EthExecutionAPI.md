[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EthExecutionAPI

# Type Alias: EthExecutionAPI

> **EthExecutionAPI** = `object`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:103

## Properties

### eth\_accounts

> **eth\_accounts**: () => [`Address`](Address-2.md)[]

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:119

#### Returns

[`Address`](Address-2.md)[]

***

### eth\_blockNumber

> **eth\_blockNumber**: () => [`Uint`](Uint.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:120

#### Returns

[`Uint`](Uint.md)

***

### eth\_call

> **eth\_call**: (`transaction`, `blockNumber`) => [`HexStringBytes`](HexStringBytes.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:121

#### Parameters

##### transaction

[`TransactionCallAPI`](../interfaces/TransactionCallAPI.md)

##### blockNumber

[`BlockNumberOrTag`](BlockNumberOrTag.md)

#### Returns

[`HexStringBytes`](HexStringBytes.md)

***

### eth\_clearSubscriptions

> **eth\_clearSubscriptions**: (`keepSyncing?`) => `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:151

#### Parameters

##### keepSyncing?

`boolean`

#### Returns

`void`

***

### eth\_coinbase

> **eth\_coinbase**: () => [`Address`](Address-2.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:118

#### Returns

[`Address`](Address-2.md)

***

### eth\_compileLLL

> **eth\_compileLLL**: (`code`) => [`HexStringBytes`](HexStringBytes.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:154

#### Parameters

##### code

`string`

#### Returns

[`HexStringBytes`](HexStringBytes.md)

***

### eth\_compileSerpent

> **eth\_compileSerpent**: (`code`) => [`HexStringBytes`](HexStringBytes.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:155

#### Parameters

##### code

`string`

#### Returns

[`HexStringBytes`](HexStringBytes.md)

***

### eth\_compileSolidity

> **eth\_compileSolidity**: (`code`) => [`CompileResultAPI`](../interfaces/CompileResultAPI.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:153

#### Parameters

##### code

`string`

#### Returns

[`CompileResultAPI`](../interfaces/CompileResultAPI.md)

***

### eth\_estimateGas

> **eth\_estimateGas**: (`transaction`, `blockNumber`) => [`Uint`](Uint.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:122

#### Parameters

##### transaction

[`Partial`](Partial.md)\<[`TransactionWithSenderAPI`](TransactionWithSenderAPI.md)\>

##### blockNumber

[`BlockNumberOrTag`](BlockNumberOrTag.md)

#### Returns

[`Uint`](Uint.md)

***

### eth\_feeHistory

> **eth\_feeHistory**: (`blockCount`, `newestBlock`, `rewardPercentiles`) => [`FeeHistoryResultAPI`](FeeHistoryResultAPI.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:124

#### Parameters

##### blockCount

[`Uint`](Uint.md)

##### newestBlock

[`BlockNumberOrTag`](BlockNumberOrTag.md)

##### rewardPercentiles

`number`[]

#### Returns

[`FeeHistoryResultAPI`](FeeHistoryResultAPI.md)

***

### eth\_gasPrice

> **eth\_gasPrice**: () => [`Uint`](Uint.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:123

#### Returns

[`Uint`](Uint.md)

***

### eth\_getBalance

> **eth\_getBalance**: (`address`, `blockNumber`) => [`Uint`](Uint.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:140

#### Parameters

##### address

[`Address`](Address-2.md)

##### blockNumber

[`BlockNumberOrTag`](BlockNumberOrTag.md)

#### Returns

[`Uint`](Uint.md)

***

### eth\_getBlockByHash

> **eth\_getBlockByHash**: (`blockHash`, `hydrated`) => [`BlockAPI`](BlockAPI.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:104

#### Parameters

##### blockHash

[`HexString32Bytes`](HexString32Bytes.md)

##### hydrated

`boolean`

#### Returns

[`BlockAPI`](BlockAPI.md)

***

### eth\_getBlockByNumber

> **eth\_getBlockByNumber**: (`blockNumber`, `hydrated`) => [`BlockAPI`](BlockAPI.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:105

#### Parameters

##### blockNumber

[`BlockNumberOrTag`](BlockNumberOrTag.md)

##### hydrated

`boolean`

#### Returns

[`BlockAPI`](BlockAPI.md)

***

### eth\_getBlockTransactionCountByHash

> **eth\_getBlockTransactionCountByHash**: (`blockHash`) => [`Uint`](Uint.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:106

#### Parameters

##### blockHash

[`HexString32Bytes`](HexString32Bytes.md)

#### Returns

[`Uint`](Uint.md)

***

### eth\_getBlockTransactionCountByNumber

> **eth\_getBlockTransactionCountByNumber**: (`blockNumber`) => [`Uint`](Uint.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:107

#### Parameters

##### blockNumber

[`BlockNumberOrTag`](BlockNumberOrTag.md)

#### Returns

[`Uint`](Uint.md)

***

### eth\_getCode

> **eth\_getCode**: (`address`, `blockNumber`) => [`HexStringBytes`](HexStringBytes.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:143

#### Parameters

##### address

[`Address`](Address-2.md)

##### blockNumber

[`BlockNumberOrTag`](BlockNumberOrTag.md)

#### Returns

[`HexStringBytes`](HexStringBytes.md)

***

### eth\_getCompilers

> **eth\_getCompilers**: () => `string`[]

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:152

#### Returns

`string`[]

***

### eth\_getFilterChanges

> **eth\_getFilterChanges**: (`filterIdentifier`) => [`FilterResultsAPI`](FilterResultsAPI.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:130

#### Parameters

##### filterIdentifier

[`Uint`](Uint.md)

#### Returns

[`FilterResultsAPI`](FilterResultsAPI.md)

***

### eth\_getFilterLogs

> **eth\_getFilterLogs**: (`filterIdentifier`) => [`FilterResultsAPI`](FilterResultsAPI.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:131

#### Parameters

##### filterIdentifier

[`Uint`](Uint.md)

#### Returns

[`FilterResultsAPI`](FilterResultsAPI.md)

***

### eth\_getLogs

> **eth\_getLogs**: (`filter`) => [`FilterResultsAPI`](FilterResultsAPI.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:132

#### Parameters

##### filter

[`Filter`](../interfaces/Filter-2.md)

#### Returns

[`FilterResultsAPI`](FilterResultsAPI.md)

***

### eth\_getStorageAt

> **eth\_getStorageAt**: (`address`, `storageSlot`, `blockNumber`) => [`HexStringBytes`](HexStringBytes.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:141

#### Parameters

##### address

[`Address`](Address-2.md)

##### storageSlot

[`Uint256`](Uint256.md)

##### blockNumber

[`BlockNumberOrTag`](BlockNumberOrTag.md)

#### Returns

[`HexStringBytes`](HexStringBytes.md)

***

### eth\_getTransactionByBlockHashAndIndex

> **eth\_getTransactionByBlockHashAndIndex**: (`blockHash`, `transactionIndex`) => [`TransactionInfoAPI`](TransactionInfoAPI.md) \| `undefined`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:113

#### Parameters

##### blockHash

[`HexString32Bytes`](HexString32Bytes.md)

##### transactionIndex

[`Uint`](Uint.md)

#### Returns

[`TransactionInfoAPI`](TransactionInfoAPI.md) \| `undefined`

***

### eth\_getTransactionByBlockNumberAndIndex

> **eth\_getTransactionByBlockNumberAndIndex**: (`blockNumber`, `transactionIndex`) => [`TransactionInfoAPI`](TransactionInfoAPI.md) \| `undefined`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:114

#### Parameters

##### blockNumber

[`BlockNumberOrTag`](BlockNumberOrTag.md)

##### transactionIndex

[`Uint`](Uint.md)

#### Returns

[`TransactionInfoAPI`](TransactionInfoAPI.md) \| `undefined`

***

### eth\_getTransactionByHash

> **eth\_getTransactionByHash**: (`transactionHash`) => [`TransactionInfoAPI`](TransactionInfoAPI.md) \| `undefined`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:112

#### Parameters

##### transactionHash

[`HexString32Bytes`](HexString32Bytes.md)

#### Returns

[`TransactionInfoAPI`](TransactionInfoAPI.md) \| `undefined`

***

### eth\_getTransactionCount

> **eth\_getTransactionCount**: (`address`, `blockNumber`) => [`Uint`](Uint.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:142

#### Parameters

##### address

[`Address`](Address-2.md)

##### blockNumber

[`BlockNumberOrTag`](BlockNumberOrTag.md)

#### Returns

[`Uint`](Uint.md)

***

### eth\_getTransactionReceipt

> **eth\_getTransactionReceipt**: (`transactionHash`) => [`TransactionReceiptAPI`](TransactionReceiptAPI.md) \| `undefined`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:115

#### Parameters

##### transactionHash

[`HexString32Bytes`](HexString32Bytes.md)

#### Returns

[`TransactionReceiptAPI`](TransactionReceiptAPI.md) \| `undefined`

***

### eth\_getUncleByBlockHashAndIndex

> **eth\_getUncleByBlockHashAndIndex**: (`blockHash`, `uncleIndex`) => [`BlockAPI`](BlockAPI.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:110

#### Parameters

##### blockHash

[`HexString32Bytes`](HexString32Bytes.md)

##### uncleIndex

[`Uint`](Uint.md)

#### Returns

[`BlockAPI`](BlockAPI.md)

***

### eth\_getUncleByBlockNumberAndIndex

> **eth\_getUncleByBlockNumberAndIndex**: (`blockNumber`, `uncleIndex`) => [`BlockAPI`](BlockAPI.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:111

#### Parameters

##### blockNumber

[`BlockNumberOrTag`](BlockNumberOrTag.md)

##### uncleIndex

[`Uint`](Uint.md)

#### Returns

[`BlockAPI`](BlockAPI.md)

***

### eth\_getUncleCountByBlockHash

> **eth\_getUncleCountByBlockHash**: (`blockHash`) => [`Uint`](Uint.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:108

#### Parameters

##### blockHash

[`HexString32Bytes`](HexString32Bytes.md)

#### Returns

[`Uint`](Uint.md)

***

### eth\_getUncleCountByBlockNumber

> **eth\_getUncleCountByBlockNumber**: (`blockNumber`) => [`Uint`](Uint.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:109

#### Parameters

##### blockNumber

[`BlockNumberOrTag`](BlockNumberOrTag.md)

#### Returns

[`Uint`](Uint.md)

***

### eth\_getWork

> **eth\_getWork**: () => \[[`HexString32Bytes`](HexString32Bytes.md), [`HexString32Bytes`](HexString32Bytes.md), [`HexString32Bytes`](HexString32Bytes.md)\]

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:135

#### Returns

\[[`HexString32Bytes`](HexString32Bytes.md), [`HexString32Bytes`](HexString32Bytes.md), [`HexString32Bytes`](HexString32Bytes.md)\]

***

### eth\_hashrate

> **eth\_hashrate**: () => [`Uint`](Uint.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:134

#### Returns

[`Uint`](Uint.md)

***

### eth\_maxPriorityFeePerGas

> **eth\_maxPriorityFeePerGas**: () => [`Uint`](Uint.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:125

#### Returns

[`Uint`](Uint.md)

***

### eth\_mining

> **eth\_mining**: () => `boolean`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:133

#### Returns

`boolean`

***

### eth\_newBlockFilter

> **eth\_newBlockFilter**: () => [`Uint`](Uint.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:127

#### Returns

[`Uint`](Uint.md)

***

### eth\_newFilter

> **eth\_newFilter**: (`filter`) => [`Uint`](Uint.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:126

#### Parameters

##### filter

[`Filter`](../interfaces/Filter-2.md)

#### Returns

[`Uint`](Uint.md)

***

### eth\_newPendingTransactionFilter

> **eth\_newPendingTransactionFilter**: () => [`Uint`](Uint.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:128

#### Returns

[`Uint`](Uint.md)

***

### eth\_protocolVersion

> **eth\_protocolVersion**: () => `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:116

#### Returns

`string`

***

### eth\_sendRawTransaction

> **eth\_sendRawTransaction**: (`transaction`) => [`HexString32Bytes`](HexString32Bytes.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:145

#### Parameters

##### transaction

[`HexStringBytes`](HexStringBytes.md)

#### Returns

[`HexString32Bytes`](HexString32Bytes.md)

***

### eth\_sendTransaction

> **eth\_sendTransaction**: (`transaction`) => [`HexString32Bytes`](HexString32Bytes.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:144

#### Parameters

##### transaction

[`TransactionWithSenderAPI`](TransactionWithSenderAPI.md) \| [`Partial`](Partial.md)\<[`TransactionWithSenderAPI`](TransactionWithSenderAPI.md)\>

#### Returns

[`HexString32Bytes`](HexString32Bytes.md)

***

### eth\_sign

> **eth\_sign**: (`address`, `message`) => [`HexString256Bytes`](HexString256Bytes.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:138

#### Parameters

##### address

[`Address`](Address-2.md)

##### message

[`HexStringBytes`](HexStringBytes.md)

#### Returns

[`HexString256Bytes`](HexString256Bytes.md)

***

### eth\_signTransaction

> **eth\_signTransaction**: (`transaction`) => [`HexStringBytes`](HexStringBytes.md) \| [`SignedTransactionInfoAPI`](../interfaces/SignedTransactionInfoAPI.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:139

#### Parameters

##### transaction

[`TransactionWithSenderAPI`](TransactionWithSenderAPI.md) \| [`Partial`](Partial.md)\<[`TransactionWithSenderAPI`](TransactionWithSenderAPI.md)\>

#### Returns

[`HexStringBytes`](HexStringBytes.md) \| [`SignedTransactionInfoAPI`](../interfaces/SignedTransactionInfoAPI.md)

***

### eth\_submitHashrate

> **eth\_submitHashrate**: (`hashRate`, `id`) => `boolean`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:137

#### Parameters

##### hashRate

[`HexString32Bytes`](HexString32Bytes.md)

##### id

[`HexString32Bytes`](HexString32Bytes.md)

#### Returns

`boolean`

***

### eth\_submitWork

> **eth\_submitWork**: (`nonce`, `hash`, `digest`) => `boolean`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:136

#### Parameters

##### nonce

[`HexString8Bytes`](HexString8Bytes.md)

##### hash

[`HexString32Bytes`](HexString32Bytes.md)

##### digest

[`HexString32Bytes`](HexString32Bytes.md)

#### Returns

`boolean`

***

### eth\_subscribe

> **eth\_subscribe**: (...`params`) => [`HexString`](HexString.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:146

#### Parameters

##### params

\[`"newHeads"`\] \| \[`"newPendingTransactions"`\] \| \[`"syncing"`\] \| \[`"logs"`, \{ `address?`: [`HexString`](HexString.md); `topics?`: [`HexString`](HexString.md)[]; \}\]

#### Returns

[`HexString`](HexString.md)

***

### eth\_syncing

> **eth\_syncing**: () => [`SyncingStatusAPI`](SyncingStatusAPI.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:117

#### Returns

[`SyncingStatusAPI`](SyncingStatusAPI.md)

***

### eth\_uninstallFilter

> **eth\_uninstallFilter**: (`filterIdentifier`) => `boolean`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:129

#### Parameters

##### filterIdentifier

[`Uint`](Uint.md)

#### Returns

`boolean`

***

### eth\_unsubscribe

> **eth\_unsubscribe**: (`subscriptionId`) => [`HexString`](HexString.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_execution\_api.d.ts:150

#### Parameters

##### subscriptionId

[`HexString`](HexString.md)

#### Returns

[`HexString`](HexString.md)
