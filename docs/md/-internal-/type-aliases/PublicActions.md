[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / PublicActions

# Type Alias: PublicActions\<transport, chain, account, tokens\>

> **PublicActions**\<`transport`, `chain`, `account`, `tokens`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:74

## Type Parameters

### transport

`transport` *extends* [`Transport`](Transport.md) = [`Transport`](Transport.md)

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### account

`account` *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

### tokens

`tokens` *extends* [`Tokens`](Tokens.md) \| `undefined` = [`Tokens`](Tokens.md) \| `undefined`

## Properties

### call

> **call**: (`parameters`) => `Promise`\<[`CallReturnType`](CallReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:98

Executes a new message call immediately without submitting a transaction to the network.

- Docs: https://viem.sh/docs/actions/public/call
- JSON-RPC Methods: [`eth_call`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_call)

#### Parameters

##### parameters

[`CallParameters`](CallParameters.md)\<`chain`\>

#### Returns

`Promise`\<[`CallReturnType`](CallReturnType.md)\>

The call data. [CallReturnType](CallReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const data = await client.call({
  account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
  data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
})
```

***

### createAccessList

> **createAccessList**: (`parameters`) => `Promise`\<[`CreateAccessListReturnType`](CreateAccessListReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:122

Creates an EIP-2930 access list that you can include in a transaction.

- Docs: https://viem.sh/docs/actions/public/createAccessList
- JSON-RPC Methods: `eth_createAccessList`

#### Parameters

##### parameters

[`CreateAccessListParameters`](CreateAccessListParameters.md)\<`chain`\>

#### Returns

`Promise`\<[`CreateAccessListReturnType`](CreateAccessListReturnType.md)\>

The call data. [CreateAccessListReturnType](CreateAccessListReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

const data = await client.createAccessList({
  data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
})
```

***

### createBlockFilter

> **createBlockFilter**: () => `Promise`\<[`CreateBlockFilterReturnType`](CreateBlockFilterReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:142

Creates a Filter to listen for new block hashes that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges).

- Docs: https://viem.sh/docs/actions/public/createBlockFilter
- JSON-RPC Methods: [`eth_newBlockFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newBlockFilter)

#### Returns

`Promise`\<[`CreateBlockFilterReturnType`](CreateBlockFilterReturnType.md)\>

Filter. [CreateBlockFilterReturnType](CreateBlockFilterReturnType.md)

#### Example

```ts
import { createPublicClient, createBlockFilter, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await createBlockFilter(client)
// { id: "0x345a6572337856574a76364e457a4366", type: 'block' }
```

***

### createContractEventFilter

> **createContractEventFilter**: \<`abi`, `eventName`, `args`, `strict`, `fromBlock`, `toBlock`\>(`args`) => `Promise`\<[`CreateContractEventFilterReturnType`](CreateContractEventFilterReturnType.md)\<`abi`, `eventName`, `args`, `strict`, `fromBlock`, `toBlock`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:163

Creates a Filter to retrieve event logs that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges) or [`getFilterLogs`](https://viem.sh/docs/actions/public/getFilterLogs).

- Docs: https://viem.sh/docs/contract/createContractEventFilter

#### Type Parameters

##### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[]

##### eventName

`eventName` *extends* [`ContractEventName`](ContractEventName-1.md)\<`abi`\> \| `undefined`

##### args

`args` *extends* [`MaybeExtractEventArgsFromAbi`](MaybeExtractEventArgsFromAbi.md)\<`abi`, `eventName`\> \| `undefined`

##### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

##### fromBlock

`fromBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

##### toBlock

`toBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

#### Parameters

##### args

[`CreateContractEventFilterParameters`](CreateContractEventFilterParameters.md)\<`abi`, `eventName`, `args`, `strict`, `fromBlock`, `toBlock`\>

[CreateContractEventFilterParameters](CreateContractEventFilterParameters.md)

#### Returns

`Promise`\<[`CreateContractEventFilterReturnType`](CreateContractEventFilterReturnType.md)\<`abi`, `eventName`, `args`, `strict`, `fromBlock`, `toBlock`\>\>

[`Filter`](https://viem.sh/docs/glossary/types#filter). [CreateContractEventFilterReturnType](CreateContractEventFilterReturnType.md)

#### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createContractEventFilter({
  abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
})
```

***

### createEventFilter

> **createEventFilter**: \<`abiEvent`, `abiEvents`, `strict`, `fromBlock`, `toBlock`, `_EventName`, `_Args`\>(`args?`) => `Promise`\<[`CreateEventFilterReturnType`](CreateEventFilterReturnType.md)\<`abiEvent`, `abiEvents`, `strict`, `fromBlock`, `toBlock`, `_EventName`, `_Args`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:185

Creates a [`Filter`](https://viem.sh/docs/glossary/types#filter) to listen for new events that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges).

- Docs: https://viem.sh/docs/actions/public/createEventFilter
- JSON-RPC Methods: [`eth_newFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter)

#### Type Parameters

##### abiEvent

`abiEvent` *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

##### abiEvents

`abiEvents` *extends* readonly [`AbiEvent`](AbiEvent.md)[] \| readonly `unknown`[] \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? \[`abiEvent`\] : `undefined`

##### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

##### fromBlock

`fromBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

##### toBlock

`toBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

##### _EventName

`_EventName` *extends* `string` \| `undefined` = [`MaybeAbiEventName`](MaybeAbiEventName.md)\<`abiEvent`\>

##### _Args

`_Args` *extends* [`MaybeExtractEventArgsFromAbi`](MaybeExtractEventArgsFromAbi.md)\<`abiEvents`, `_EventName`\> \| `undefined` = `undefined`

#### Parameters

##### args?

[`CreateEventFilterParameters`](CreateEventFilterParameters.md)\<`abiEvent`, `abiEvents`, `strict`, `fromBlock`, `toBlock`, `_EventName`, `_Args`\>

[CreateEventFilterParameters](CreateEventFilterParameters.md)

#### Returns

`Promise`\<[`CreateEventFilterReturnType`](CreateEventFilterReturnType.md)\<`abiEvent`, `abiEvents`, `strict`, `fromBlock`, `toBlock`, `_EventName`, `_Args`\>\>

[`Filter`](https://viem.sh/docs/glossary/types#filter). [CreateEventFilterReturnType](CreateEventFilterReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createEventFilter({
  address: '0xfba3912ca04dd458c843e2ee08967fc04f3579c2',
})
```

***

### createPendingTransactionFilter

> **createPendingTransactionFilter**: () => `Promise`\<[`CreatePendingTransactionFilterReturnType`](CreatePendingTransactionFilterReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:205

Creates a Filter to listen for new pending transaction hashes that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges).

- Docs: https://viem.sh/docs/actions/public/createPendingTransactionFilter
- JSON-RPC Methods: [`eth_newPendingTransactionFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newpendingtransactionfilter)

#### Returns

`Promise`\<[`CreatePendingTransactionFilterReturnType`](CreatePendingTransactionFilterReturnType.md)\>

[`Filter`](https://viem.sh/docs/glossary/types#filter). [CreateBlockFilterReturnType](CreateBlockFilterReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createPendingTransactionFilter()
// { id: "0x345a6572337856574a76364e457a4366", type: 'transaction' }
```

***

### estimateContractGas

> **estimateContractGas**: \<`chain`, `abi`, `functionName`, `args`\>(`args`) => `Promise`\<[`EstimateContractGasReturnType`](EstimateContractGasReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:232

Estimates the gas required to successfully execute a contract write function call.

- Docs: https://viem.sh/docs/contract/estimateContractGas

#### Type Parameters

##### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined`

##### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[]

##### functionName

`functionName` *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\>

##### args

`args` *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`\>

#### Parameters

##### args

[`EstimateContractGasParameters`](EstimateContractGasParameters.md)\<`abi`, `functionName`, `args`, `chain`\>

[EstimateContractGasParameters](EstimateContractGasParameters.md)

#### Returns

`Promise`\<[`EstimateContractGasReturnType`](EstimateContractGasReturnType.md)\>

The gas estimate (in wei). [EstimateContractGasReturnType](EstimateContractGasReturnType.md)

#### Remarks

Internally, uses a [Public Client](https://viem.sh/docs/clients/public) to call the [`estimateGas` action](https://viem.sh/docs/actions/public/estimateGas) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).

#### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const gas = await client.estimateContractGas({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint() public']),
  functionName: 'mint',
  account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
})
```

***

### estimateFeesPerGas

> **estimateFeesPerGas**: \<`chainOverride`, `type`\>(`args?`) => `Promise`\<[`EstimateFeesPerGasReturnType`](EstimateFeesPerGasReturnType.md)\<`type`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:737

Returns an estimate for the fees per gas for a transaction to be included
in the next block.

- Docs: https://viem.sh/docs/actions/public/estimateFeesPerGas

#### Type Parameters

##### chainOverride

`chainOverride` *extends* [`Chain`](Chain.md) \| `undefined` = `undefined`

##### type

`type` *extends* [`FeeValuesType`](FeeValuesType.md) = `"eip1559"`

#### Parameters

##### args?

[`EstimateFeesPerGasParameters`](EstimateFeesPerGasParameters.md)\<`chain`, `chainOverride`, `type`\>

#### Returns

`Promise`\<[`EstimateFeesPerGasReturnType`](EstimateFeesPerGasReturnType.md)\<`type`\>\>

An estimate (in wei) for the fees per gas. [EstimateFeesPerGasReturnType](EstimateFeesPerGasReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const maxPriorityFeePerGas = await client.estimateFeesPerGas()
// { maxFeePerGas: ..., maxPriorityFeePerGas: ... }
```

***

### estimateGas

> **estimateGas**: (`args`) => `Promise`\<[`EstimateGasReturnType`](EstimateGasReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:256

Estimates the gas necessary to complete a transaction without submitting it to the network.

- Docs: https://viem.sh/docs/actions/public/estimateGas
- JSON-RPC Methods: [`eth_estimateGas`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_estimategas)

#### Parameters

##### args

[`EstimateGasParameters`](EstimateGasParameters.md)\<`chain`\>

[EstimateGasParameters](EstimateGasParameters.md)

#### Returns

`Promise`\<[`EstimateGasReturnType`](EstimateGasReturnType.md)\>

The gas estimate (in wei). [EstimateGasReturnType](EstimateGasReturnType.md)

#### Example

```ts
import { createPublicClient, http, parseEther } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const gasEstimate = await client.estimateGas({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  value: parseEther('1'),
})
```

***

### estimateMaxPriorityFeePerGas

> **estimateMaxPriorityFeePerGas**: \<`chainOverride`\>(`args?`) => `Promise`\<[`EstimateMaxPriorityFeePerGasReturnType`](EstimateMaxPriorityFeePerGasReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:929

Returns an estimate for the max priority fee per gas (in wei) for a transaction
to be included in the next block.

- Docs: https://viem.sh/docs/actions/public/estimateMaxPriorityFeePerGas

#### Type Parameters

##### chainOverride

`chainOverride` *extends* [`Chain`](Chain.md) \| `undefined` = `undefined`

#### Parameters

##### args?

[`EstimateMaxPriorityFeePerGasParameters`](EstimateMaxPriorityFeePerGasParameters.md)\<`chain`, `chainOverride`\>

#### Returns

`Promise`\<[`EstimateMaxPriorityFeePerGasReturnType`](EstimateMaxPriorityFeePerGasReturnType.md)\>

An estimate (in wei) for the max priority fee per gas. [EstimateMaxPriorityFeePerGasReturnType](EstimateMaxPriorityFeePerGasReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const maxPriorityFeePerGas = await client.estimateMaxPriorityFeePerGas()
// 10000000n
```

***

### fillTransaction

> **fillTransaction**: \<`chainOverride`, `accountOverride`\>(`args`) => `Promise`\<[`FillTransactionReturnType`](FillTransactionReturnType.md)\<`chain`, `chainOverride`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:280

Fills a transaction request with the necessary fields to be signed over.

- Docs: https://viem.sh/docs/actions/public/fillTransaction

#### Type Parameters

##### chainOverride

`chainOverride` *extends* [`Chain`](Chain.md) \| `undefined` = `undefined`

##### accountOverride

`accountOverride` *extends* [`Account`](Account.md) \| [`Address`](Address-1.md) \| `undefined` = `undefined`

#### Parameters

##### args

[`FillTransactionParameters`](FillTransactionParameters.md)\<`chain`, `account`, `chainOverride`, `accountOverride`\>

#### Returns

`Promise`\<[`FillTransactionReturnType`](FillTransactionReturnType.md)\<`chain`, `chainOverride`\>\>

The filled transaction. [FillTransactionReturnType](FillTransactionReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const result = await client.fillTransaction({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  value: parseEther('1'),
})
```

***

### getBalance

> **getBalance**: (`args`) => `Promise`\<[`GetBalanceReturnType`](GetBalanceReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:315

Returns the balance of an address in wei.

- Docs: https://viem.sh/docs/actions/public/getBalance
- JSON-RPC Methods: [`eth_getBalance`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getbalance)

#### Parameters

##### args

[`GetBalanceParameters`](GetBalanceParameters.md)

[GetBalanceParameters](GetBalanceParameters.md)

#### Returns

`Promise`\<[`GetBalanceReturnType`](GetBalanceReturnType.md)\>

The balance of the address in wei. [GetBalanceReturnType](GetBalanceReturnType.md)

#### Remarks

You can convert the balance to ether units with [`formatEther`](https://viem.sh/docs/utilities/formatEther).

```ts
const balance = await getBalance(client, {
  address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  blockTag: 'safe'
})
const balanceAsEther = formatEther(balance)
// "6.942"
```

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const balance = await client.getBalance({
  address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})
// 10000000000000000000000n (wei)
```

***

### getBlobBaseFee

> **getBlobBaseFee**: () => `Promise`\<[`GetBlobBaseFeeReturnType`](GetBlobBaseFeeReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:336

Returns the base fee per blob gas in wei.

- Docs: https://viem.sh/docs/actions/public/getBlobBaseFee
- JSON-RPC Methods: [`eth_blobBaseFee`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blobBaseFee)

#### Returns

`Promise`\<[`GetBlobBaseFeeReturnType`](GetBlobBaseFeeReturnType.md)\>

The blob base fee (in wei). [GetBlobBaseFeeReturnType](GetBlobBaseFeeReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { getBlobBaseFee } from 'viem/public'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const blobBaseFee = await client.getBlobBaseFee()
```

***

### getBlock

> **getBlock**: \<`includeTransactions`, `blockTag`\>(`args?`) => `Promise`\<[`GetBlockReturnType`](GetBlockReturnType.md)\<`chain`, `includeTransactions`, `blockTag`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:359

Returns information about a block at a block number, hash, or tag.

- Docs: https://viem.sh/docs/actions/public/getBlock
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks_fetching-blocks
- JSON-RPC Methods:
  - Calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber) for `blockNumber` & `blockTag`.
  - Calls [`eth_getBlockByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbyhash) for `blockHash`.

#### Type Parameters

##### includeTransactions

`includeTransactions` *extends* `boolean` = `false`

##### blockTag

`blockTag` *extends* [`BlockTag`](BlockTag-2.md) = `"latest"`

#### Parameters

##### args?

[`GetBlockParameters`](GetBlockParameters.md)\<`includeTransactions`, `blockTag`\>

[GetBlockParameters](GetBlockParameters.md)

#### Returns

`Promise`\<[`GetBlockReturnType`](GetBlockReturnType.md)\<`chain`, `includeTransactions`, `blockTag`\>\>

Information about the block. [GetBlockReturnType](GetBlockReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const block = await client.getBlock()
```

***

### getBlockNumber

> **getBlockNumber**: (`args?`) => `Promise`\<[`GetBlockNumberReturnType`](GetBlockNumberReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:403

Returns the number of the most recent block seen.

- Docs: https://viem.sh/docs/actions/public/getBlockNumber
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks_fetching-blocks
- JSON-RPC Methods: [`eth_blockNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blocknumber)

#### Parameters

##### args?

[`GetBlockNumberParameters`](GetBlockNumberParameters.md)

[GetBlockNumberParameters](GetBlockNumberParameters.md)

#### Returns

`Promise`\<[`GetBlockNumberReturnType`](GetBlockNumberReturnType.md)\>

The number of the block. [GetBlockNumberReturnType](GetBlockNumberReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const blockNumber = await client.getBlockNumber()
// 69420n
```

***

### getBlockReceipts

> **getBlockReceipts**: (`args?`) => `Promise`\<[`GetBlockReceiptsReturnType`](GetBlockReceiptsReturnType.md)\<`chain`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:381

Returns the transaction receipts of a block at a block number, hash, or tag.

- Docs: https://viem.sh/docs/actions/public/getBlockReceipts
- JSON-RPC Methods: [`eth_getBlockReceipts`](https://ethereum.github.io/execution-apis/api/methods/eth_getBlockReceipts/)

#### Parameters

##### args?

[`GetBlockReceiptsParameters`](GetBlockReceiptsParameters.md)

[GetBlockReceiptsParameters](GetBlockReceiptsParameters.md)

#### Returns

`Promise`\<[`GetBlockReceiptsReturnType`](GetBlockReceiptsReturnType.md)\<`chain`\>\>

The transaction receipts. [GetBlockReceiptsReturnType](GetBlockReceiptsReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const receipts = await client.getBlockReceipts({
  blockNumber: 69420n,
})
```

***

### getBlockTransactionCount

> **getBlockTransactionCount**: (`args?`) => `Promise`\<[`GetBlockTransactionCountReturnType`](GetBlockTransactionCountReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:425

Returns the number of Transactions at a block number, hash, or tag.

- Docs: https://viem.sh/docs/actions/public/getBlockTransactionCount
- JSON-RPC Methods:
  - Calls [`eth_getBlockTransactionCountByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbynumber) for `blockNumber` & `blockTag`.
  - Calls [`eth_getBlockTransactionCountByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbyhash) for `blockHash`.

#### Parameters

##### args?

[`GetBlockTransactionCountParameters`](GetBlockTransactionCountParameters.md)

[GetBlockTransactionCountParameters](GetBlockTransactionCountParameters.md)

#### Returns

`Promise`\<[`GetBlockTransactionCountReturnType`](GetBlockTransactionCountReturnType.md)\>

The block transaction count. [GetBlockTransactionCountReturnType](GetBlockTransactionCountReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const count = await client.getBlockTransactionCount()
```

***

### ~~getBytecode~~

> **getBytecode**: (`args`) => `Promise`\<[`GetCodeReturnType`](GetCodeReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:427

#### Parameters

##### args

[`GetCodeParameters`](GetCodeParameters.md)

#### Returns

`Promise`\<[`GetCodeReturnType`](GetCodeReturnType.md)\>

#### Deprecated

Use `getCode` instead.

***

### getChainId

> **getChainId**: () => `Promise`\<[`GetChainIdReturnType`](GetChainIdReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:447

Returns the chain ID associated with the current network.

- Docs: https://viem.sh/docs/actions/public/getChainId
- JSON-RPC Methods: [`eth_chainId`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_chainid)

#### Returns

`Promise`\<[`GetChainIdReturnType`](GetChainIdReturnType.md)\>

The current chain ID. [GetChainIdReturnType](GetChainIdReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const chainId = await client.getChainId()
// 1
```

***

### getCode

> **getCode**: (`args`) => `Promise`\<[`GetCodeReturnType`](GetCodeReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:469

Retrieves the bytecode at an address.

- Docs: https://viem.sh/docs/contract/getCode
- JSON-RPC Methods: [`eth_getCode`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getcode)

#### Parameters

##### args

[`GetCodeParameters`](GetCodeParameters.md)

GetBytecodeParameters

#### Returns

`Promise`\<[`GetCodeReturnType`](GetCodeReturnType.md)\>

The contract's bytecode. GetBytecodeReturnType

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const code = await client.getCode({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
})
```

***

### getContractEvents

> **getContractEvents**: \<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>(`args`) => `Promise`\<[`GetContractEventsReturnType`](GetContractEventsReturnType.md)\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:495

Returns a list of event logs emitted by a contract.

- Docs: https://viem.sh/docs/actions/public/getContractEvents
- JSON-RPC Methods: [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs)

#### Type Parameters

##### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[]

##### eventName

`eventName` *extends* [`ContractEventName`](ContractEventName-1.md)\<`abi`\> \| `undefined` = `undefined`

##### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

##### fromBlock

`fromBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

##### toBlock

`toBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

#### Parameters

##### args

[`GetContractEventsParameters`](GetContractEventsParameters.md)\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>

#### Returns

`Promise`\<[`GetContractEventsReturnType`](GetContractEventsReturnType.md)\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>\>

A list of event logs. [GetContractEventsReturnType](GetContractEventsReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { wagmiAbi } from './abi'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const logs = await client.getContractEvents(client, {
 address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 abi: wagmiAbi,
 eventName: 'Transfer'
})
```

***

### getDelegation

> **getDelegation**: (`args`) => `Promise`\<[`GetDelegationReturnType`](GetDelegationReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:516

Returns the address that an account has delegated to via EIP-7702.

- Docs: https://viem.sh/docs/actions/public/getDelegation

#### Parameters

##### args

[`GetDelegationParameters`](GetDelegationParameters.md)

[GetDelegationParameters](GetDelegationParameters.md)

#### Returns

`Promise`\<[`GetDelegationReturnType`](GetDelegationReturnType.md)\>

The delegated address, or undefined if not delegated. [GetDelegationReturnType](GetDelegationReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const delegation = await client.getDelegation({
  address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})
```

***

### getEip712Domain

> **getEip712Domain**: (`args`) => `Promise`\<[`GetEip712DomainReturnType`](GetEip712DomainReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:549

Reads the EIP-712 domain from a contract, based on the ERC-5267 specification.

#### Parameters

##### args

[`GetEip712DomainParameters`](GetEip712DomainParameters.md)

#### Returns

`Promise`\<[`GetEip712DomainReturnType`](GetEip712DomainReturnType.md)\>

The EIP-712 domain, fields, and extensions. [GetEip712DomainReturnType](GetEip712DomainReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

const domain = await client.getEip712Domain({
  address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
})
// {
//   domain: {
//     name: 'ExampleContract',
//     version: '1',
//     chainId: 1,
//     verifyingContract: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
//   },
//   fields: '0x0f',
//   extensions: [],
// }
```

***

### getEnsAddress

> **getEnsAddress**: (`args`) => `Promise`\<[`GetEnsAddressReturnType`](GetEnsAddressReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:578

Gets address for ENS name.

- Docs: https://viem.sh/docs/ens/actions/getEnsAddress
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

#### Parameters

##### args

[`GetEnsAddressParameters`](GetEnsAddressParameters.md)

[GetEnsAddressParameters](GetEnsAddressParameters.md)

#### Returns

`Promise`\<[`GetEnsAddressReturnType`](GetEnsAddressReturnType.md)\>

Address for ENS name or `null` if not found. [GetEnsAddressReturnType](GetEnsAddressReturnType.md)

#### Remarks

Calls `resolve(bytes, bytes)` on ENS Universal Resolver Contract.

Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const ensAddress = await client.getEnsAddress({
  name: normalize('wevm.eth'),
})
// '0xd2135CfB216b74109775236E36d4b433F1DF507B'
```

***

### getEnsAvatar

> **getEnsAvatar**: (`args`) => `Promise`\<[`GetEnsAvatarReturnType`](GetEnsAvatarReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:607

Gets the avatar of an ENS name.

- Docs: https://viem.sh/docs/ens/actions/getEnsAvatar
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

#### Parameters

##### args

[`GetEnsAvatarParameters`](GetEnsAvatarParameters.md)

[GetEnsAvatarParameters](GetEnsAvatarParameters.md)

#### Returns

`Promise`\<[`GetEnsAvatarReturnType`](GetEnsAvatarReturnType.md)\>

Avatar URI or `null` if not found. [GetEnsAvatarReturnType](GetEnsAvatarReturnType.md)

#### Remarks

Calls [`getEnsText`](https://viem.sh/docs/ens/actions/getEnsText) with `key` set to `'avatar'`.

Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const ensAvatar = await client.getEnsAvatar({
  name: normalize('wevm.eth'),
})
// 'https://ipfs.io/ipfs/Qma8mnp6xV3J2cRNf3mTth5C8nV11CAnceVinc3y8jSbio'
```

***

### getEnsName

> **getEnsName**: (`args`) => `Promise`\<[`GetEnsNameReturnType`](GetEnsNameReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:633

Gets primary name for specified address.

- Docs: https://viem.sh/docs/ens/actions/getEnsName
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

#### Parameters

##### args

[`GetEnsNameParameters`](GetEnsNameParameters.md)

[GetEnsNameParameters](GetEnsNameParameters.md)

#### Returns

`Promise`\<[`GetEnsNameReturnType`](GetEnsNameReturnType.md)\>

Name or `null` if not found. [GetEnsNameReturnType](GetEnsNameReturnType.md)

#### Remarks

Calls `reverse(bytes)` on ENS Universal Resolver Contract to "reverse resolve" the address to the primary ENS name.

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const ensName = await client.getEnsName({
  address: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
})
// 'wevm.eth'
```

***

### getEnsResolver

> **getEnsResolver**: (`args`) => `Promise`\<[`GetEnsResolverReturnType`](GetEnsResolverReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:662

Gets resolver for ENS name.

- Docs: https://viem.sh/docs/ens/actions/getEnsResolver
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

#### Parameters

##### args

[`GetEnsResolverParameters`](GetEnsResolverParameters.md)

[GetEnsResolverParameters](GetEnsResolverParameters.md)

#### Returns

`Promise`\<[`GetEnsResolverReturnType`](GetEnsResolverReturnType.md)\>

Address for ENS resolver. [GetEnsResolverReturnType](GetEnsResolverReturnType.md)

#### Remarks

Calls `findResolver(bytes)` on ENS Universal Resolver Contract to retrieve the resolver of an ENS name.

Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const resolverAddress = await client.getEnsResolver({
  name: normalize('wevm.eth'),
})
// '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41'
```

***

### getEnsText

> **getEnsText**: (`args`) => `Promise`\<[`GetEnsTextReturnType`](GetEnsTextReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:692

Gets a text record for specified ENS name.

- Docs: https://viem.sh/docs/ens/actions/getEnsResolver
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

#### Parameters

##### args

[`GetEnsTextParameters`](GetEnsTextParameters.md)

[GetEnsTextParameters](GetEnsTextParameters.md)

#### Returns

`Promise`\<[`GetEnsTextReturnType`](GetEnsTextReturnType.md)\>

Address for ENS resolver. [GetEnsTextReturnType](GetEnsTextReturnType.md)

#### Remarks

Calls `resolve(bytes, bytes)` on ENS Universal Resolver Contract.

Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const twitterRecord = await client.getEnsText({
  name: normalize('wevm.eth'),
  key: 'com.twitter',
})
// 'wevm_dev'
```

***

### getFeeHistory

> **getFeeHistory**: (`args`) => `Promise`\<[`GetFeeHistoryReturnType`](GetFeeHistoryReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:715

Returns a collection of historical gas information.

- Docs: https://viem.sh/docs/actions/public/getFeeHistory
- JSON-RPC Methods: [`eth_feeHistory`](https://docs.alchemy.com/reference/eth-feehistory)

#### Parameters

##### args

[`GetFeeHistoryParameters`](GetFeeHistoryParameters.md)

[GetFeeHistoryParameters](GetFeeHistoryParameters.md)

#### Returns

`Promise`\<[`GetFeeHistoryReturnType`](GetFeeHistoryReturnType.md)\>

The gas estimate (in wei). [GetFeeHistoryReturnType](GetFeeHistoryReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const feeHistory = await client.getFeeHistory({
  blockCount: 4,
  rewardPercentiles: [25, 75],
})
```

***

### getFilterChanges

> **getFilterChanges**: \<`filterType`, `abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>(`args`) => `Promise`\<[`GetFilterChangesReturnType`](GetFilterChangesReturnType.md)\<`filterType`, `abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:816

Returns a list of logs or hashes based on a [Filter](/docs/glossary/terms#filter) since the last time it was called.

- Docs: https://viem.sh/docs/actions/public/getFilterChanges
- JSON-RPC Methods: [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges)

#### Type Parameters

##### filterType

`filterType` *extends* [`FilterType`](FilterType.md)

##### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] \| `undefined`

##### eventName

`eventName` *extends* `string` \| `undefined`

##### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

##### fromBlock

`fromBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

##### toBlock

`toBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

#### Parameters

##### args

[`GetFilterChangesParameters`](GetFilterChangesParameters.md)\<`filterType`, `abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>

[GetFilterChangesParameters](GetFilterChangesParameters.md)

#### Returns

`Promise`\<[`GetFilterChangesReturnType`](GetFilterChangesReturnType.md)\<`filterType`, `abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>\>

Logs or hashes. [GetFilterChangesReturnType](GetFilterChangesReturnType.md)

#### Remarks

A Filter can be created from the following actions:

- [`createBlockFilter`](https://viem.sh/docs/actions/public/createBlockFilter)
- [`createContractEventFilter`](https://viem.sh/docs/contract/createContractEventFilter)
- [`createEventFilter`](https://viem.sh/docs/actions/public/createEventFilter)
- [`createPendingTransactionFilter`](https://viem.sh/docs/actions/public/createPendingTransactionFilter)

Depending on the type of filter, the return value will be different:

- If the filter was created with `createContractEventFilter` or `createEventFilter`, it returns a list of logs.
- If the filter was created with `createPendingTransactionFilter`, it returns a list of transaction hashes.
- If the filter was created with `createBlockFilter`, it returns a list of block hashes.

#### Examples

```ts
// Blocks
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createBlockFilter()
const hashes = await client.getFilterChanges({ filter })
```

```ts
// Contract Events
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createContractEventFilter({
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
  eventName: 'Transfer',
})
const logs = await client.getFilterChanges({ filter })
```

```ts
// Raw Events
import { createPublicClient, http, parseAbiItem } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createEventFilter({
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  event: parseAbiItem('event Transfer(address indexed, address indexed, uint256)'),
})
const logs = await client.getFilterChanges({ filter })
```

```ts
// Transactions
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createPendingTransactionFilter()
const hashes = await client.getFilterChanges({ filter })
```

***

### getFilterLogs

> **getFilterLogs**: \<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>(`args`) => `Promise`\<[`GetFilterLogsReturnType`](GetFilterLogsReturnType.md)\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:843

Returns a list of event logs since the filter was created.

- Docs: https://viem.sh/docs/actions/public/getFilterLogs
- JSON-RPC Methods: [`eth_getFilterLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterlogs)

#### Type Parameters

##### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] \| `undefined`

##### eventName

`eventName` *extends* `string` \| `undefined`

##### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

##### fromBlock

`fromBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

##### toBlock

`toBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

#### Parameters

##### args

[`GetFilterLogsParameters`](GetFilterLogsParameters.md)\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>

[GetFilterLogsParameters](GetFilterLogsParameters.md)

#### Returns

`Promise`\<[`GetFilterLogsReturnType`](GetFilterLogsReturnType.md)\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>\>

A list of event logs. [GetFilterLogsReturnType](GetFilterLogsReturnType.md)

#### Remarks

`getFilterLogs` is only compatible with **event filters**.

#### Example

```ts
import { createPublicClient, http, parseAbiItem } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createEventFilter({
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  event: parseAbiItem('event Transfer(address indexed, address indexed, uint256)'),
})
const logs = await client.getFilterLogs({ filter })
```

***

### getGasPrice

> **getGasPrice**: () => `Promise`\<[`GetGasPriceReturnType`](GetGasPriceReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:862

Returns the current price of gas (in wei).

- Docs: https://viem.sh/docs/actions/public/getGasPrice
- JSON-RPC Methods: [`eth_gasPrice`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gasprice)

#### Returns

`Promise`\<[`GetGasPriceReturnType`](GetGasPriceReturnType.md)\>

The gas price (in wei). [GetGasPriceReturnType](GetGasPriceReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const gasPrice = await client.getGasPrice()
```

***

### getLogs

> **getLogs**: \<`abiEvent`, `abiEvents`, `strict`, `fromBlock`, `toBlock`\>(`args?`) => `Promise`\<[`GetLogsReturnType`](GetLogsReturnType.md)\<`abiEvent`, `abiEvents`, `strict`, `fromBlock`, `toBlock`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:883

Returns a list of event logs matching the provided parameters.

- Docs: https://viem.sh/docs/actions/public/getLogs
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/logs_event-logs
- JSON-RPC Methods: [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs)

#### Type Parameters

##### abiEvent

`abiEvent` *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

##### abiEvents

`abiEvents` *extends* readonly [`AbiEvent`](AbiEvent.md)[] \| readonly `unknown`[] \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? \[`abiEvent`\] : `undefined`

##### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

##### fromBlock

`fromBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

##### toBlock

`toBlock` *extends* [`BlockNumber`](BlockNumber.md) \| [`BlockTag`](BlockTag-2.md) \| `undefined` = `undefined`

#### Parameters

##### args?

[`GetLogsParameters`](GetLogsParameters.md)\<`abiEvent`, `abiEvents`, `strict`, `fromBlock`, `toBlock`\>

[GetLogsParameters](GetLogsParameters.md)

#### Returns

`Promise`\<[`GetLogsReturnType`](GetLogsReturnType.md)\<`abiEvent`, `abiEvents`, `strict`, `fromBlock`, `toBlock`\>\>

A list of event logs. [GetLogsReturnType](GetLogsReturnType.md)

#### Example

```ts
import { createPublicClient, http, parseAbiItem } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const logs = await client.getLogs()
```

***

### getProof

> **getProof**: (`args`) => `Promise`\<[`GetProofReturnType`](GetProofReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:908

Returns the account and storage values of the specified account including the Merkle-proof.

- Docs: https://viem.sh/docs/actions/public/getProof
- JSON-RPC Methods:
  - Calls [`eth_getProof`](https://eips.ethereum.org/EIPS/eip-1186)

#### Parameters

##### args

[`GetProofParameters`](GetProofParameters.md)

#### Returns

`Promise`\<[`GetProofReturnType`](GetProofReturnType.md)\>

Proof data. [GetProofReturnType](GetProofReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const block = await client.getProof({
 address: '0x...',
 storageKeys: ['0x...'],
})
```

***

### getRawTransaction

> **getRawTransaction**: (`args`) => `Promise`\<[`GetRawTransactionReturnType`](GetRawTransactionReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:951

Returns the raw, serialized [Transaction](https://viem.sh/docs/glossary/terms#transaction) given a hash.

- Docs: https://viem.sh/docs/actions/public/getRawTransaction
- JSON-RPC Methods: `eth_getRawTransactionByHash`

#### Parameters

##### args

[`GetRawTransactionParameters`](GetRawTransactionParameters.md)

[GetRawTransactionParameters](GetRawTransactionParameters.md)

#### Returns

`Promise`\<[`GetRawTransactionReturnType`](GetRawTransactionReturnType.md)\>

The raw, serialized transaction. [GetRawTransactionReturnType](GetRawTransactionReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const rawTransaction = await client.getRawTransaction({
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```

***

### getStorageAt

> **getStorageAt**: (`args`) => `Promise`\<[`GetStorageAtReturnType`](GetStorageAtReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:975

Returns the value from a storage slot at a given address.

- Docs: https://viem.sh/docs/contract/getStorageAt
- JSON-RPC Methods: [`eth_getStorageAt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getstorageat)

#### Parameters

##### args

[`GetStorageAtParameters`](GetStorageAtParameters.md)

[GetStorageAtParameters](GetStorageAtParameters.md)

#### Returns

`Promise`\<[`GetStorageAtReturnType`](GetStorageAtReturnType.md)\>

The value of the storage slot. [GetStorageAtReturnType](GetStorageAtReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { getStorageAt } from 'viem/contract'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const code = await client.getStorageAt({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  slot: toHex(0),
})
```

***

### getTransaction

> **getTransaction**: \<`blockTag`\>(`args`) => `Promise`\<[`GetTransactionReturnType`](GetTransactionReturnType.md)\<`chain`, `blockTag`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:998

Returns information about a [Transaction](https://viem.sh/docs/glossary/terms#transaction) given a hash or block identifier.

- Docs: https://viem.sh/docs/actions/public/getTransaction
- Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions_fetching-transactions
- JSON-RPC Methods: [`eth_getTransactionByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionByHash)

#### Type Parameters

##### blockTag

`blockTag` *extends* [`BlockTag`](BlockTag-2.md) = `"latest"`

#### Parameters

##### args

[`GetTransactionParameters`](GetTransactionParameters.md)\<`blockTag`\>

[GetTransactionParameters](GetTransactionParameters.md)

#### Returns

`Promise`\<[`GetTransactionReturnType`](GetTransactionReturnType.md)\<`chain`, `blockTag`\>\>

The transaction information. [GetTransactionReturnType](GetTransactionReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const transaction = await client.getTransaction({
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```

***

### getTransactionConfirmations

> **getTransactionConfirmations**: (`args`) => `Promise`\<[`GetTransactionConfirmationsReturnType`](GetTransactionConfirmationsReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1021

Returns the number of blocks passed (confirmations) since the transaction was processed on a block.

- Docs: https://viem.sh/docs/actions/public/getTransactionConfirmations
- Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions_fetching-transactions
- JSON-RPC Methods: [`eth_getTransactionConfirmations`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionConfirmations)

#### Parameters

##### args

[`GetTransactionConfirmationsParameters`](GetTransactionConfirmationsParameters.md)\<`chain`\>

[GetTransactionConfirmationsParameters](GetTransactionConfirmationsParameters.md)

#### Returns

`Promise`\<[`GetTransactionConfirmationsReturnType`](GetTransactionConfirmationsReturnType.md)\>

The number of blocks passed since the transaction was processed. If confirmations is 0, then the Transaction has not been confirmed & processed yet. [GetTransactionConfirmationsReturnType](GetTransactionConfirmationsReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const confirmations = await client.getTransactionConfirmations({
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```

***

### getTransactionCount

> **getTransactionCount**: (`args`) => `Promise`\<[`GetTransactionCountReturnType`](GetTransactionCountReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1043

Returns the number of [Transactions](https://viem.sh/docs/glossary/terms#transaction) an Account has broadcast / sent.

- Docs: https://viem.sh/docs/actions/public/getTransactionCount
- JSON-RPC Methods: [`eth_getTransactionCount`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactioncount)

#### Parameters

##### args

[`GetTransactionCountParameters`](GetTransactionCountParameters.md)

[GetTransactionCountParameters](GetTransactionCountParameters.md)

#### Returns

`Promise`\<[`GetTransactionCountReturnType`](GetTransactionCountReturnType.md)\>

The number of transactions an account has sent. [GetTransactionCountReturnType](GetTransactionCountReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const transactionCount = await client.getTransactionCount({
  address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})
```

***

### getTransactionReceipt

> **getTransactionReceipt**: (`args`) => `Promise`\<[`GetTransactionReceiptReturnType`](GetTransactionReceiptReturnType.md)\<`chain`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1066

Returns the [Transaction Receipt](https://viem.sh/docs/glossary/terms#transaction-receipt) given a [Transaction](https://viem.sh/docs/glossary/terms#transaction) hash.

- Docs: https://viem.sh/docs/actions/public/getTransactionReceipt
- Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions_fetching-transactions
- JSON-RPC Methods: [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt)

#### Parameters

##### args

[`GetTransactionReceiptParameters`](GetTransactionReceiptParameters.md)

[GetTransactionReceiptParameters](GetTransactionReceiptParameters.md)

#### Returns

`Promise`\<[`GetTransactionReceiptReturnType`](GetTransactionReceiptReturnType.md)\<`chain`\>\>

The transaction receipt. [GetTransactionReceiptReturnType](GetTransactionReceiptReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const transactionReceipt = await client.getTransactionReceipt({
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```

***

### multicall

> **multicall**: \<`contracts`, `allowFailure`\>(`args`) => `Promise`\<[`MulticallReturnType`](MulticallReturnType.md)\<`contracts`, `allowFailure`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1104

Similar to [`readContract`](https://viem.sh/docs/contract/readContract), but batches up multiple functions on a contract in a single RPC call via the [`multicall3` contract](https://github.com/mds1/multicall).

- Docs: https://viem.sh/docs/contract/multicall

#### Type Parameters

##### contracts

`contracts` *extends* readonly `unknown`[]

##### allowFailure

`allowFailure` *extends* `boolean` = `true`

#### Parameters

##### args

[`MulticallParameters`](MulticallParameters.md)\<`contracts`, `allowFailure`\>

[MulticallParameters](MulticallParameters.md)

#### Returns

`Promise`\<[`MulticallReturnType`](MulticallReturnType.md)\<`contracts`, `allowFailure`\>\>

An array of results with accompanying status. [MulticallReturnType](MulticallReturnType.md)

#### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const abi = parseAbi([
  'function balanceOf(address) view returns (uint256)',
  'function totalSupply() view returns (uint256)',
])
const result = await client.multicall({
  contracts: [
    {
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'balanceOf',
      args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
    },
    {
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'totalSupply',
    },
  ],
})
// [{ result: 424122n, status: 'success' }, { result: 1000000n, status: 'success' }]
```

***

### prepareTransactionRequest

> **prepareTransactionRequest**: \<`request`, `chainOverride`, `accountOverride`\>(`args`) => `Promise`\<[`PrepareTransactionRequestReturnType`](PrepareTransactionRequestReturnType.md)\<`chain`, `account`, `chainOverride`, `accountOverride`, `request`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1143

Prepares a transaction request for signing.

- Docs: https://viem.sh/docs/actions/wallet/prepareTransactionRequest

#### Type Parameters

##### request

`request` *extends* [`PrepareTransactionRequestRequest`](PrepareTransactionRequestRequest.md)\<`chain`, `chainOverride`\>

##### chainOverride

`chainOverride` *extends* [`Chain`](Chain.md) \| `undefined` = `undefined`

##### accountOverride

`accountOverride` *extends* [`Account`](Account.md) \| [`Address`](Address-1.md) \| `undefined` = `undefined`

#### Parameters

##### args

[`PrepareTransactionRequestParameters`](PrepareTransactionRequestParameters.md)\<`chain`, `account`, `chainOverride`, `accountOverride`, `request`\>

[PrepareTransactionRequestParameters](PrepareTransactionRequestParameters.md)

#### Returns

`Promise`\<[`PrepareTransactionRequestReturnType`](PrepareTransactionRequestReturnType.md)\<`chain`, `account`, `chainOverride`, `accountOverride`, `request`\>\>

The transaction request. [PrepareTransactionRequestReturnType](PrepareTransactionRequestReturnType.md)

#### Examples

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const request = await client.prepareTransactionRequest({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  to: '0x0000000000000000000000000000000000000000',
  value: 1n,
})
```

```ts
// Account Hoisting
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: custom(window.ethereum),
})
const request = await client.prepareTransactionRequest({
  to: '0x0000000000000000000000000000000000000000',
  value: 1n,
})
```

***

### readContract

> **readContract**: \<`abi`, `functionName`, `args`\>(`args`) => `Promise`\<[`ReadContractReturnType`](ReadContractReturnType.md)\<`abi`, `functionName`, `args`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1175

Calls a read-only function on a contract, and returns the response.

- Docs: https://viem.sh/docs/contract/readContract
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts_reading-contracts

#### Type Parameters

##### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[]

##### functionName

`functionName` *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"pure"` \| `"view"`\>

##### args

`args` *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"pure"` \| `"view"`, `functionName`\>

#### Parameters

##### args

[`ReadContractParameters`](ReadContractParameters.md)\<`abi`, `functionName`, `args`\>

[ReadContractParameters](ReadContractParameters.md)

#### Returns

`Promise`\<[`ReadContractReturnType`](ReadContractReturnType.md)\<`abi`, `functionName`, `args`\>\>

The response from the contract. Type is inferred. [ReadContractReturnType](ReadContractReturnType.md)

#### Remarks

A "read-only" function (constant function) on a Solidity contract is denoted by a `view` or `pure` keyword. They can only read the state of the contract, and cannot make any changes to it. Since read-only methods do not change the state of the contract, they do not require any gas to be executed, and can be called by any user without the need to pay for gas.

Internally, uses a [Public Client](https://viem.sh/docs/clients/public) to call the [`call` action](https://viem.sh/docs/actions/public/call) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).

#### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'
import { readContract } from 'viem/contract'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const result = await client.readContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function balanceOf(address) view returns (uint256)']),
  functionName: 'balanceOf',
  args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
})
// 424122n
```

***

### sendRawTransaction

> **sendRawTransaction**: (`args`) => `Promise`\<[`SendRawTransactionReturnType`](SendRawTransactionReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1200

Sends a **signed** transaction to the network

- Docs: https://viem.sh/docs/actions/wallet/sendRawTransaction
- JSON-RPC Method: [`eth_sendRawTransaction`](https://ethereum.github.io/execution-apis/api-documentation/)

#### Parameters

##### args

[`SendRawTransactionParameters`](SendRawTransactionParameters.md)

#### Returns

`Promise`\<[`SendRawTransactionReturnType`](SendRawTransactionReturnType.md)\>

The transaction hash. [SendRawTransactionReturnType](SendRawTransactionReturnType.md)

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'
import { sendRawTransaction } from 'viem/wallet'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})

const hash = await client.sendRawTransaction({
  serializedTransaction: '0x02f850018203118080825208808080c080a04012522854168b27e5dc3d5839bab5e6b39e1a0ffd343901ce1622e3d64b48f1a04e00902ae0502c4728cbf12156290df99c3ed7de85b1dbfe20b5c36931733a33'
})
```

***

### sendRawTransactionSync

> **sendRawTransactionSync**: (`args`) => `Promise`\<[`SendRawTransactionSyncReturnType`](SendRawTransactionSyncReturnType.md)\<`chain`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1225

Sends a **signed** transaction to the network

- Docs: https://viem.sh/docs/actions/wallet/sendRawTransactionSync
- JSON-RPC Method: [`eth_sendRawTransactionSync`](https://eips.ethereum.org/EIPS/eip-7966)

#### Parameters

##### args

[`SendRawTransactionSyncParameters`](SendRawTransactionSyncParameters.md)

#### Returns

`Promise`\<[`SendRawTransactionSyncReturnType`](SendRawTransactionSyncReturnType.md)\<`chain`\>\>

The transaction receipt. [SendRawTransactionSyncReturnType](SendRawTransactionSyncReturnType.md)

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'
import { sendRawTransactionSync } from 'viem/wallet'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})

const receipt = await client.sendRawTransactionSync({
  serializedTransaction: '0x02f850018203118080825208808080c080a04012522854168b27e5dc3d5839bab5e6b39e1a0ffd343901ce1622e3d64b48f1a04e00902ae0502c4728cbf12156290df99c3ed7de85b1dbfe20b5c36931733a33'
})
```

***

### ~~simulate~~

> **simulate**: \<`calls`\>(`args`) => `Promise`\<[`SimulateBlocksReturnType`](SimulateBlocksReturnType.md)\<`calls`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1229

#### Type Parameters

##### calls

`calls` *extends* readonly `unknown`[]

#### Parameters

##### args

[`SimulateBlocksParameters`](SimulateBlocksParameters.md)\<`calls`\>

#### Returns

`Promise`\<[`SimulateBlocksReturnType`](SimulateBlocksReturnType.md)\<`calls`\>\>

#### Deprecated

Use `simulateBlocks` instead.

***

### simulateBlocks

> **simulateBlocks**: \<`calls`\>(`args`) => `Promise`\<[`SimulateBlocksReturnType`](SimulateBlocksReturnType.md)\<`calls`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1272

Simulates a set of calls on block(s) with optional block and state overrides.

#### Type Parameters

##### calls

`calls` *extends* readonly `unknown`[]

#### Parameters

##### args

[`SimulateBlocksParameters`](SimulateBlocksParameters.md)\<`calls`\>

#### Returns

`Promise`\<[`SimulateBlocksReturnType`](SimulateBlocksReturnType.md)\<`calls`\>\>

Simulated blocks. SimulateReturnType

#### Example

```ts
import { createPublicClient, http, parseEther } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

const result = await client.simulateBlocks({
  blocks: [{
    blockOverrides: {
      number: 69420n,
    },
    calls: [{
      {
        account: '0x5a0b54d5dc17e482fe8b0bdca5320161b95fb929',
        data: '0xdeadbeef',
        to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
      },
      {
        account: '0x5a0b54d5dc17e482fe8b0bdca5320161b95fb929',
        to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
        value: parseEther('1'),
      },
    }],
    stateOverrides: [{
      address: '0x5a0b54d5dc17e482fe8b0bdca5320161b95fb929',
      balance: parseEther('10'),
    }],
  }]
})
```

***

### simulateCalls

> **simulateCalls**: \<`calls`\>(`args`) => `Promise`\<[`SimulateCallsReturnType`](SimulateCallsReturnType.md)\<`calls`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1305

Simulates a set of calls.

#### Type Parameters

##### calls

`calls` *extends* readonly `unknown`[]

#### Parameters

##### args

[`SimulateCallsParameters`](SimulateCallsParameters.md)\<`calls`\>

#### Returns

`Promise`\<[`SimulateCallsReturnType`](SimulateCallsReturnType.md)\<`calls`\>\>

Results. [SimulateCallsReturnType](SimulateCallsReturnType.md)

#### Example

```ts
import { createPublicClient, http, parseEther } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

const result = await client.simulateCalls({
  account: '0x5a0b54d5dc17e482fe8b0bdca5320161b95fb929',
  calls: [{
    {
      data: '0xdeadbeef',
      to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    },
    {
      to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
      value: parseEther('1'),
    },
  ]
})
```

***

### simulateContract

> **simulateContract**: \<`abi`, `functionName`, `args`, `chainOverride`, `accountOverride`\>(`args`) => `Promise`\<[`SimulateContractReturnType`](SimulateContractReturnType.md)\<`abi`, `functionName`, `args`, `chain`, `account`, `chainOverride`, `accountOverride`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1336

Simulates/validates a contract interaction. This is useful for retrieving **return data** and **revert reasons** of contract write functions.

- Docs: https://viem.sh/docs/contract/simulateContract
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts_writing-to-contracts

#### Type Parameters

##### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[]

##### functionName

`functionName` *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"nonpayable"` \| `"payable"`\>

##### args

`args` *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"nonpayable"` \| `"payable"`, `functionName`\>

##### chainOverride

`chainOverride` *extends* [`Chain`](Chain.md) \| `undefined`

##### accountOverride

`accountOverride` *extends* [`Account`](Account.md) \| [`Address`](Address-1.md) \| `undefined` = `undefined`

#### Parameters

##### args

[`SimulateContractParameters`](SimulateContractParameters.md)\<`abi`, `functionName`, `args`, `chain`, `chainOverride`, `accountOverride`\>

[SimulateContractParameters](SimulateContractParameters.md)

#### Returns

`Promise`\<[`SimulateContractReturnType`](SimulateContractReturnType.md)\<`abi`, `functionName`, `args`, `chain`, `account`, `chainOverride`, `accountOverride`\>\>

The simulation result and write request. [SimulateContractReturnType](SimulateContractReturnType.md)

#### Remarks

This function does not require gas to execute and _**does not**_ change the state of the blockchain. It is almost identical to [`readContract`](https://viem.sh/docs/contract/readContract), but also supports contract write functions.

Internally, uses a [Public Client](https://viem.sh/docs/clients/public) to call the [`call` action](https://viem.sh/docs/actions/public/call) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const result = await client.simulateContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint(uint32) view returns (uint32)']),
  functionName: 'mint',
  args: ['69420'],
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})
```

***

### token

> **token**: `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1610

Read-only ERC-20 Actions, exposed under the `token` namespace.

Every action selects its token by `token`, which is either a token symbol
(resolved from the Client's `tokens` array) or a contract `address`.

- Docs: https://viem.sh/docs/token

#### getAllowance

> **getAllowance**: (`parameters`) => `Promise`\<[`ReturnValue`](ReturnValue.md)\> & `object`

Gets the amount of tokens a `spender` is allowed to spend on behalf of an
`account`.

- Docs: https://viem.sh/docs/token/getAllowance

##### Type Declaration

###### call

> **call**: (`args`) => [`ReturnType`](ReturnType.md)\<*typeof* [`call`](../functions/call.md)\>

Defines an `allowance` contract call, ready to pass to `multicall`,
`simulateContract`, or any other action that accepts a contract call.

- Docs: https://viem.sh/docs/token/getAllowance#composing-calls

###### Parameters

###### args

[`Args`](Args.md)\<`chain`, `tokens`\>

[getAllowance.Args](Args.md)

###### Returns

[`ReturnType`](ReturnType.md)\<*typeof* [`call`](../functions/call.md)\>

The contract call.

##### Param

**parameters**

[getAllowance.Parameters](Parameters.md)

##### Returns

The remaining allowance, in base units and human-readable form. [getAllowance.ReturnValue](ReturnValue.md)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({ chain: mainnet, transport: http() })

const allowance = await client.token.getAllowance({
  account: '0x…',
  spender: '0x…',
  token: 'usdc',
})
```

#### getBalance

> **getBalance**: (`parameters`) => `Promise`\<[`ReturnValue`](ReturnValue-1.md)\> & `object`

Gets the token balance of an `account`.

- Docs: https://viem.sh/docs/token/getBalance

##### Type Declaration

###### call

> **call**: (`args`) => [`ReturnType`](ReturnType.md)\<*typeof* [`call`](../functions/call-1.md)\>

Defines a `balanceOf` contract call, ready to pass to `multicall`,
`simulateContract`, or any other action that accepts a contract call.

- Docs: https://viem.sh/docs/token/getBalance#composing-calls

###### Parameters

###### args

[`Args`](Args-1.md)\<`chain`, `account`, `tokens`\>

[getTokenBalance.Args](Args-1.md)

###### Returns

[`ReturnType`](ReturnType.md)\<*typeof* [`call`](../functions/call-1.md)\>

The contract call.

##### Param

**parameters**

[getTokenBalance.Parameters](Parameters-1.md)

##### Returns

The token balance, in base units and human-readable form. [getTokenBalance.ReturnValue](ReturnValue-1.md)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({ chain: mainnet, transport: http() })

const balance = await client.token.getBalance({
  account: '0x…',
  token: 'usdc',
})
```

#### getMetadata

> **getMetadata**: (`parameters`) => `Promise`\<[`ReturnValue`](ReturnValue-2.md)\>

Gets the metadata (`decimals`, `name`, `symbol`) of the token. Fields
declared on the Client's `tokens` array are used as-is; any missing field
is fetched from the token contract.

- Docs: https://viem.sh/docs/token/getMetadata

##### Parameters

###### parameters

[`Parameters`](Parameters-2.md)\<`chain`, `tokens`\>

[getMetadata.Parameters](Parameters-2.md)

##### Returns

`Promise`\<[`ReturnValue`](ReturnValue-2.md)\>

The token metadata (`decimals`, `name`, `symbol`). [getMetadata.ReturnValue](ReturnValue-2.md)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({ chain: mainnet, transport: http() })

const metadata = await client.token.getMetadata({ token: 'usdc' })
```

#### getTotalSupply

> **getTotalSupply**: (`parameters`) => `Promise`\<[`ReturnValue`](ReturnValue-3.md)\> & `object`

Gets the total supply of the token.

- Docs: https://viem.sh/docs/token/getTotalSupply

##### Type Declaration

###### call

> **call**: (`args`) => [`ReturnType`](ReturnType.md)\<*typeof* [`call`](../functions/call-2.md)\>

Defines a `totalSupply` contract call, ready to pass to `multicall`,
`simulateContract`, or any other action that accepts a contract call.

- Docs: https://viem.sh/docs/token/getTotalSupply#composing-calls

###### Parameters

###### args

[`Args`](Args-2.md)\<`chain`, `tokens`\>

[getTotalSupply.Args](Args-2.md)

###### Returns

[`ReturnType`](ReturnType.md)\<*typeof* [`call`](../functions/call-2.md)\>

The contract call.

##### Param

**parameters**

[getTotalSupply.Parameters](Parameters-3.md)

##### Returns

The token total supply, in base units and human-readable form. [getTotalSupply.ReturnValue](ReturnValue-3.md)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({ chain: mainnet, transport: http() })

const totalSupply = await client.token.getTotalSupply({ token: 'usdc' })
```

***

### uninstallFilter

> **uninstallFilter**: (`args`) => `Promise`\<[`UninstallFilterReturnType`](UninstallFilterReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1399

Destroys a Filter that was created from one of the following Actions:

- [`createBlockFilter`](https://viem.sh/docs/actions/public/createBlockFilter)
- [`createEventFilter`](https://viem.sh/docs/actions/public/createEventFilter)
- [`createPendingTransactionFilter`](https://viem.sh/docs/actions/public/createPendingTransactionFilter)

- Docs: https://viem.sh/docs/actions/public/uninstallFilter
- JSON-RPC Methods: [`eth_uninstallFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_uninstallFilter)

#### Parameters

##### args

[`UninstallFilterParameters`](UninstallFilterParameters.md)

[UninstallFilterParameters](UninstallFilterParameters.md)

#### Returns

`Promise`\<[`UninstallFilterReturnType`](UninstallFilterReturnType.md)\>

A boolean indicating if the Filter was successfully uninstalled. [UninstallFilterReturnType](UninstallFilterReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { createPendingTransactionFilter, uninstallFilter } from 'viem/public'

const filter = await client.createPendingTransactionFilter()
const uninstalled = await client.uninstallFilter({ filter })
// true
```

***

### verifyHash

> **verifyHash**: (`args`) => `Promise`\<[`VerifyHashReturnType`](VerifyHashReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1345

Verify that a hash was signed by the provided address.

- Docs [https://viem.sh/docs/actions/public/verifyHash](https://viem.sh/docs/actions/public/verifyHash)

#### Parameters

##### args

[`VerifyHashParameters`](VerifyHashParameters.md)

#### Returns

`Promise`\<[`VerifyHashReturnType`](VerifyHashReturnType.md)\>

Whether or not the signature is valid. [VerifyHashReturnType](VerifyHashReturnType.md)

***

### verifyMessage

> **verifyMessage**: (`args`) => `Promise`\<[`VerifyMessageReturnType`](VerifyMessageReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1356

Verify that a message was signed by the provided address.

Compatible with Smart Contract Accounts & Externally Owned Accounts via [ERC-6492](https://eips.ethereum.org/EIPS/eip-6492).

- Docs [https://viem.sh/docs/actions/public/verifyMessage](https://viem.sh/docs/actions/public/verifyMessage)

#### Parameters

##### args

[`VerifyMessageParameters`](VerifyMessageParameters.md)

#### Returns

`Promise`\<[`VerifyMessageReturnType`](VerifyMessageReturnType.md)\>

Whether or not the signature is valid. [VerifyMessageReturnType](VerifyMessageReturnType.md)

***

### verifySiweMessage

> **verifySiweMessage**: (`args`) => `Promise`\<[`VerifySiweMessageReturnType`](VerifySiweMessageReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1367

Verifies [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361) formatted message was signed.

Compatible with Smart Contract Accounts & Externally Owned Accounts via [ERC-6492](https://eips.ethereum.org/EIPS/eip-6492).

- Docs [https://viem.sh/docs/siwe/actions/verifySiweMessage](https://viem.sh/docs/siwe/actions/verifySiweMessage)

#### Parameters

##### args

[`VerifySiweMessageParameters`](VerifySiweMessageParameters.md)

#### Returns

`Promise`\<[`VerifySiweMessageReturnType`](VerifySiweMessageReturnType.md)\>

Whether or not the signature is valid. [VerifySiweMessageReturnType](VerifySiweMessageReturnType.md)

***

### verifyTypedData

> **verifyTypedData**: (`args`) => `Promise`\<[`VerifyTypedDataReturnType`](VerifyTypedDataReturnType.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1376

Verify that typed data was signed by the provided address.

- Docs [https://viem.sh/docs/actions/public/verifyTypedData](https://viem.sh/docs/actions/public/verifyTypedData)

#### Parameters

##### args

[`VerifyTypedDataParameters`](VerifyTypedDataParameters.md)

#### Returns

`Promise`\<[`VerifyTypedDataReturnType`](VerifyTypedDataReturnType.md)\>

Whether or not the signature is valid. [VerifyTypedDataReturnType](VerifyTypedDataReturnType.md)

***

### waitForTransactionReceipt

> **waitForTransactionReceipt**: (`args`) => `Promise`\<[`WaitForTransactionReceiptReturnType`](WaitForTransactionReceiptReturnType.md)\<`chain`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1438

Waits for the [Transaction](https://viem.sh/docs/glossary/terms#transaction) to be included on a [Block](https://viem.sh/docs/glossary/terms#block) (one confirmation), and then returns the [Transaction Receipt](https://viem.sh/docs/glossary/terms#transaction-receipt). If the Transaction reverts, then the action will throw an error.

- Docs: https://viem.sh/docs/actions/public/waitForTransactionReceipt
- Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions_sending-transactions
- JSON-RPC Methods:
  - Polls [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt) on each block until it has been processed.
  - If a Transaction has been replaced:
    - Calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber) and extracts the transactions
    - Checks if one of the Transactions is a replacement
    - If so, calls [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt).

#### Parameters

##### args

[`WaitForTransactionReceiptParameters`](WaitForTransactionReceiptParameters.md)\<`chain`\>

[WaitForTransactionReceiptParameters](WaitForTransactionReceiptParameters.md)

#### Returns

`Promise`\<[`WaitForTransactionReceiptReturnType`](WaitForTransactionReceiptReturnType.md)\<`chain`\>\>

The transaction receipt. [WaitForTransactionReceiptReturnType](WaitForTransactionReceiptReturnType.md)

#### Remarks

The `waitForTransactionReceipt` action additionally supports Replacement detection (e.g. sped up Transactions).

Transactions can be replaced when a user modifies their transaction in their wallet (to speed up or cancel). Transactions are replaced when they are sent from the same nonce.

There are 3 types of Transaction Replacement reasons:

- `repriced`: The gas price has been modified (e.g. different `maxFeePerGas`)
- `cancelled`: The Transaction has been cancelled (e.g. `value === 0n`)
- `replaced`: The Transaction has been replaced (e.g. different `value` or `data`)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const transactionReceipt = await client.waitForTransactionReceipt({
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```

***

### watchBlockHeaders

> **watchBlockHeaders**: (`args`) => [`WatchBlockHeadersReturnType`](WatchBlockHeadersReturnType.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1485

Watches and returns incoming block headers without fetching full blocks.

- Docs: https://viem.sh/docs/actions/public/watchBlockHeaders
- JSON-RPC Methods: Uses a WebSocket or IPC subscription via [`eth_subscribe`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_subscribe) and the `"newHeads"` event.

#### Parameters

##### args

[`HasTransportType`](HasTransportType.md)\<`transport`, `"webSocket"` \| `"ipc"`\> *extends* `true` ? [`WatchBlockHeadersParameters`](WatchBlockHeadersParameters.md)\<`chain`\> : `never`

[WatchBlockHeadersParameters](WatchBlockHeadersParameters.md)

#### Returns

[`WatchBlockHeadersReturnType`](WatchBlockHeadersReturnType.md)

A function that can be invoked to stop watching for new block headers. [WatchBlockHeadersReturnType](WatchBlockHeadersReturnType.md)

#### Example

```ts
import { createPublicClient, webSocket } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: webSocket(),
})
const unwatch = client.watchBlockHeaders({
  onBlockHeader: (blockHeader) => console.log(blockHeader),
})
```

***

### watchBlockNumber

> **watchBlockNumber**: (`args`) => [`WatchBlockNumberReturnType`](WatchBlockNumberReturnType.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1463

Watches and returns incoming block numbers.

- Docs: https://viem.sh/docs/actions/public/watchBlockNumber
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks_watching-blocks
- JSON-RPC Methods:
  - When `poll: true`, calls [`eth_blockNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blocknumber) on a polling interval.
  - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newHeads"` event.

#### Parameters

##### args

[`WatchBlockNumberParameters`](WatchBlockNumberParameters.md)

[WatchBlockNumberParameters](WatchBlockNumberParameters.md)

#### Returns

[`WatchBlockNumberReturnType`](WatchBlockNumberReturnType.md)

A function that can be invoked to stop watching for new block numbers. [WatchBlockNumberReturnType](WatchBlockNumberReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = await client.watchBlockNumber({
  onBlockNumber: (blockNumber) => console.log(blockNumber),
})
```

***

### watchBlocks

> **watchBlocks**: \<`includeTransactions`, `blockTag`\>(`args`) => [`WatchBlocksReturnType`](WatchBlocksReturnType.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1510

Watches and returns information for incoming blocks.

- Docs: https://viem.sh/docs/actions/public/watchBlocks
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks_watching-blocks
- JSON-RPC Methods:
  - When `poll: true`, calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getBlockByNumber) on a polling interval.
  - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newHeads"` event.

#### Type Parameters

##### includeTransactions

`includeTransactions` *extends* `boolean` = `false`

##### blockTag

`blockTag` *extends* [`BlockTag`](BlockTag-2.md) = `"latest"`

#### Parameters

##### args

[`WatchBlocksParameters`](WatchBlocksParameters.md)\<`transport`, `chain`, `includeTransactions`, `blockTag`\>

[WatchBlocksParameters](WatchBlocksParameters.md)

#### Returns

[`WatchBlocksReturnType`](WatchBlocksReturnType.md)

A function that can be invoked to stop watching for new block numbers. [WatchBlocksReturnType](WatchBlocksReturnType.md)

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = await client.watchBlocks({
  onBlock: (block) => console.log(block),
})
```

***

### watchContractEvent

> **watchContractEvent**: \<`abi`, `eventName`, `strict`\>(`args`) => [`WatchContractEventReturnType`](WatchContractEventReturnType.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1540

Watches and returns emitted contract event logs.

- Docs: https://viem.sh/docs/contract/watchContractEvent

#### Type Parameters

##### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[]

##### eventName

`eventName` *extends* [`ContractEventName`](ContractEventName-1.md)\<`abi`\>

##### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

#### Parameters

##### args

[`WatchContractEventParameters`](WatchContractEventParameters.md)\<`abi`, `eventName`, `strict`, `transport`\>

[WatchContractEventParameters](WatchContractEventParameters.md)

#### Returns

[`WatchContractEventReturnType`](WatchContractEventReturnType.md)

A function that can be invoked to stop watching for new event logs. [WatchContractEventReturnType](WatchContractEventReturnType.md)

#### Remarks

This Action will batch up all the event logs found within the [`pollingInterval`](https://viem.sh/docs/contract/watchContractEvent#pollinginterval-optional), and invoke them via [`onLogs`](https://viem.sh/docs/contract/watchContractEvent#onLogs).

`watchContractEvent` will attempt to create an [Event Filter](https://viem.sh/docs/contract/createContractEventFilter) and listen to changes to the Filter per polling interval, however, if the RPC Provider does not support Filters (e.g. `eth_newFilter`), then `watchContractEvent` will fall back to using [`getLogs`](https://viem.sh/docs/actions/public/getLogs) instead.

#### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = client.watchContractEvent({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['event Transfer(address indexed from, address indexed to, uint256 value)']),
  eventName: 'Transfer',
  args: { from: '0xc961145a54C96E3aE9bAA048c4F4D6b04C13916b' },
  onLogs: (logs) => console.log(logs),
})
```

***

### watchEvent

> **watchEvent**: \<`abiEvent`, `abiEvents`, `strict`\>(`args`) => [`WatchEventReturnType`](WatchEventReturnType.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1572

Watches and returns emitted [Event Logs](https://viem.sh/docs/glossary/terms#event-log).

- Docs: https://viem.sh/docs/actions/public/watchEvent
- JSON-RPC Methods:
  - **RPC Provider supports `eth_newFilter`:**
    - Calls [`eth_newFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter) to create a filter (called on initialize).
    - On a polling interval, it will call [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges).
  - **RPC Provider does not support `eth_newFilter`:**
    - Calls [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs) for each block between the polling interval.

#### Type Parameters

##### abiEvent

`abiEvent` *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

##### abiEvents

`abiEvents` *extends* readonly [`AbiEvent`](AbiEvent.md)[] \| readonly `unknown`[] \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? \[`abiEvent`\] : `undefined`

##### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

#### Parameters

##### args

[`WatchEventParameters`](WatchEventParameters.md)\<`abiEvent`, `abiEvents`, `strict`, `transport`\>

[WatchEventParameters](WatchEventParameters.md)

#### Returns

[`WatchEventReturnType`](WatchEventReturnType.md)

A function that can be invoked to stop watching for new Event Logs. [WatchEventReturnType](WatchEventReturnType.md)

#### Remarks

This Action will batch up all the Event Logs found within the [`pollingInterval`](https://viem.sh/docs/actions/public/watchEvent#pollinginterval-optional), and invoke them via [`onLogs`](https://viem.sh/docs/actions/public/watchEvent#onLogs).

`watchEvent` will attempt to create an [Event Filter](https://viem.sh/docs/actions/public/createEventFilter) and listen to changes to the Filter per polling interval, however, if the RPC Provider does not support Filters (e.g. `eth_newFilter`), then `watchEvent` will fall back to using [`getLogs`](https://viem.sh/docs/actions/public/getLogs) instead.

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = client.watchEvent({
  onLogs: (logs) => console.log(logs),
})
```

***

### watchPendingTransactions

> **watchPendingTransactions**: (`args`) => [`WatchPendingTransactionsReturnType`](WatchPendingTransactionsReturnType.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/decorators/public.d.ts:1601

Watches and returns pending transaction hashes.

- Docs: https://viem.sh/docs/actions/public/watchPendingTransactions
- JSON-RPC Methods:
  - When `poll: true`
    - Calls [`eth_newPendingTransactionFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newpendingtransactionfilter) to initialize the filter.
    - Calls [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getFilterChanges) on a polling interval.
  - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newPendingTransactions"` event.

#### Parameters

##### args

[`WatchPendingTransactionsParameters`](WatchPendingTransactionsParameters.md)\<`transport`\>

[WatchPendingTransactionsParameters](WatchPendingTransactionsParameters.md)

#### Returns

[`WatchPendingTransactionsReturnType`](WatchPendingTransactionsReturnType.md)

A function that can be invoked to stop watching for new pending transaction hashes. [WatchPendingTransactionsReturnType](WatchPendingTransactionsReturnType.md)

#### Remarks

This Action will batch up all the pending transactions found within the [`pollingInterval`](https://viem.sh/docs/actions/public/watchPendingTransactions#pollinginterval-optional), and invoke them via [`onTransactions`](https://viem.sh/docs/actions/public/watchPendingTransactions#ontransactions).

#### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = await client.watchPendingTransactions({
  onTransactions: (hashes) => console.log(hashes),
})
```
