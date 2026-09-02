[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Provider

# Interface: Provider

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1075

A **Provider** is the primary method to interact with the read-only
 content on Ethereum.

 It allows access to details about accounts, blocks and transactions
 and the ability to query event logs and simulate contract execution.

 Account data includes the [balance](getBalance),
 [transaction count](getTransactionCount), [code](getCode) and
 [state trie storage](getStorage).

 Simulating execution can be used to [call](call),
 [estimate gas](estimateGas) and
 [get transaction results](getTransactionResult).

 The [[broadcastTransaction]] is the only method which allows updating
 the blockchain, but it is usually accessed by a [[Signer]], since a
 private key must be used to sign the transaction before it can be
 broadcast.

## Extends

- [`ContractRunner`](ContractRunner.md).[`EventEmitterable`](EventEmitterable.md)\<[`ProviderEvent`](../type-aliases/ProviderEvent.md)\>.[`NameResolver`](NameResolver.md)

## Properties

### provider

> **provider**: `Provider`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1083

The provider iteself.

 This is part of the necessary API for executing a contract, as
 it provides a common property on any [[ContractRunner]] that
 can be used to access the read-only portion of the runner.

#### Overrides

[`ContractRunner`](ContractRunner.md).[`provider`](ContractRunner.md#provider)

***

### sendTransaction?

> `optional` **sendTransaction?**: (`tx`) => `Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/contracts.d.ts:34

Required for state mutating calls

#### Parameters

##### tx

[`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

#### Inherited from

[`ContractRunner`](ContractRunner.md).[`sendTransaction`](ContractRunner.md#sendtransaction)

## Methods

### addListener()

> **addListener**(`event`, `listener`): `Promise`\<`Provider`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:46

Alias for [[on]].

#### Parameters

##### event

[`ProviderEvent`](../type-aliases/ProviderEvent.md)

##### listener

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`Provider`\>

#### Inherited from

[`EventEmitterable`](EventEmitterable.md).[`addListener`](EventEmitterable.md#addlistener)

***

### broadcastTransaction()

> **broadcastTransaction**(`signedTx`): `Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1149

Broadcasts the %%signedTx%% to the network, adding it to the
 memory pool of any node for which the transaction meets the
 rebroadcast requirements.

#### Parameters

##### signedTx

`string`

#### Returns

`Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

***

### call()

> **call**(`tx`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1143

Simulate the execution of %%tx%%. If the call reverts, it will
 throw a [[CallExceptionError]] which includes the revert data.

#### Parameters

##### tx

[`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<`string`\>

#### Overrides

`ContractRunner.call`

***

### destroy()

> **destroy**(): `void`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1088

Shutdown any resources this provider is using. No additional
 calls should be made to this provider after calling this.

#### Returns

`void`

***

### emit()

> **emit**(`event`, ...`args`): `Promise`\<`boolean`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:25

Triggers each listener for %%event%% with the %%args%%.

#### Parameters

##### event

[`ProviderEvent`](../type-aliases/ProviderEvent.md)

##### args

...`any`[]

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`EventEmitterable`](EventEmitterable.md).[`emit`](EventEmitterable.md#emit)

***

### estimateGas()

> **estimateGas**(`tx`): `Promise`\<`bigint`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1138

Estimates the amount of gas required to execute %%tx%%.

#### Parameters

##### tx

[`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<`bigint`\>

#### Overrides

`ContractRunner.estimateGas`

***

### getBalance()

> **getBalance**(`address`, `blockTag?`): `Promise`\<`bigint`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1109

Get the account balance (in wei) of %%address%%. If %%blockTag%%
 is specified and the node supports archive access for that
 %%blockTag%%, the balance is as of that [[BlockTag]].

#### Parameters

##### address

[`AddressLike`](../type-aliases/AddressLike.md)

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag-1.md)

#### Returns

`Promise`\<`bigint`\>

#### Note

On nodes without archive access enabled, the %%blockTag%% may be
       **silently ignored** by the node, which may cause issues if relied on.

***

### getBlock()

> **getBlock**(`blockHashOrBlockTag`, `prefetchTxs?`): `Promise`\<[`Block`](../classes/Block.md) \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1158

Resolves to the block for %%blockHashOrBlockTag%%.

 If %%prefetchTxs%%, and the backend supports including transactions
 with block requests, all transactions will be included and the
 [[Block]] object will not need to make remote calls for getting
 transactions.

#### Parameters

##### blockHashOrBlockTag

[`BlockTag`](../type-aliases/BlockTag-1.md)

##### prefetchTxs?

`boolean`

#### Returns

`Promise`\<[`Block`](../classes/Block.md) \| `null`\>

***

### getBlockNumber()

> **getBlockNumber**(): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1092

Get the current block number.

#### Returns

`Promise`\<`number`\>

***

### getCode()

> **getCode**(`address`, `blockTag?`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1127

Get the bytecode for %%address%%.

#### Parameters

##### address

[`AddressLike`](../type-aliases/AddressLike.md)

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag-1.md)

#### Returns

`Promise`\<`string`\>

#### Note

On nodes without archive access enabled, the %%blockTag%% may be
       **silently ignored** by the node, which may cause issues if relied on.

***

### getFeeData()

> **getFeeData**(): `Promise`\<[`FeeData`](../classes/FeeData.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1100

Get the best guess at the recommended [[FeeData]].

#### Returns

`Promise`\<[`FeeData`](../classes/FeeData.md)\>

***

### getLogs()

> **getLogs**(`filter`): `Promise`\<[`Log`](../classes/Log.md)[]\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1184

Resolves to the list of Logs that match %%filter%%

#### Parameters

##### filter

[`Filter`](Filter-1.md) \| [`FilterByBlockHash`](FilterByBlockHash-1.md)

#### Returns

`Promise`\<[`Log`](../classes/Log.md)[]\>

***

### getNetwork()

> **getNetwork**(): `Promise`\<[`Network`](../classes/Network.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1096

Get the connected [[Network]].

#### Returns

`Promise`\<[`Network`](../classes/Network.md)\>

***

### getStorage()

> **getStorage**(`address`, `position`, `blockTag?`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1134

Get the storage slot value for %%address%% at slot %%position%%.

#### Parameters

##### address

[`AddressLike`](../type-aliases/AddressLike.md)

##### position

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag-1.md)

#### Returns

`Promise`\<`string`\>

#### Note

On nodes without archive access enabled, the %%blockTag%% may be
       **silently ignored** by the node, which may cause issues if relied on.

***

### getTransaction()

> **getTransaction**(`hash`): `Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md) \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1165

Resolves to the transaction for %%hash%%.

 If the transaction is unknown or on pruning nodes which
 discard old transactions this resolves to ``null``.

#### Parameters

##### hash

`string`

#### Returns

`Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md) \| `null`\>

***

### getTransactionCount()

> **getTransactionCount**(`address`, `blockTag?`): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1120

Get the number of transactions ever sent for %%address%%, which
 is used as the ``nonce`` when sending a transaction. If
 %%blockTag%% is specified and the node supports archive access
 for that %%blockTag%%, the transaction count is as of that
 [[BlockTag]].

#### Parameters

##### address

[`AddressLike`](../type-aliases/AddressLike.md)

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag-1.md)

#### Returns

`Promise`\<`number`\>

#### Note

On nodes without archive access enabled, the %%blockTag%% may be
       **silently ignored** by the node, which may cause issues if relied on.

***

### getTransactionReceipt()

> **getTransactionReceipt**(`hash`): `Promise`\<[`TransactionReceipt`](../classes/TransactionReceipt.md) \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1173

Resolves to the transaction receipt for %%hash%%, if mined.

 If the transaction has not been mined, is unknown or on
 pruning nodes which discard old transactions this resolves to
 ``null``.

#### Parameters

##### hash

`string`

#### Returns

`Promise`\<[`TransactionReceipt`](../classes/TransactionReceipt.md) \| `null`\>

***

### getTransactionResult()

> **getTransactionResult**(`hash`): `Promise`\<`string` \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1180

Resolves to the result returned by the executions of %%hash%%.

 This is only supported on nodes with archive access and with
 the necessary debug APIs enabled.

#### Parameters

##### hash

`string`

#### Returns

`Promise`\<`string` \| `null`\>

***

### listenerCount()

> **listenerCount**(`event?`): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:29

Resolves to the number of listeners for %%event%%.

#### Parameters

##### event?

[`ProviderEvent`](../type-aliases/ProviderEvent.md)

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`EventEmitterable`](EventEmitterable.md).[`listenerCount`](EventEmitterable.md#listenercount)

***

### listeners()

> **listeners**(`event?`): `Promise`\<[`Listener`](../type-aliases/Listener-1.md)[]\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:33

Resolves to the listeners for %%event%%.

#### Parameters

##### event?

[`ProviderEvent`](../type-aliases/ProviderEvent.md)

#### Returns

`Promise`\<[`Listener`](../type-aliases/Listener-1.md)[]\>

#### Inherited from

[`EventEmitterable`](EventEmitterable.md).[`listeners`](EventEmitterable.md#listeners)

***

### lookupAddress()

> **lookupAddress**(`address`): `Promise`\<`string` \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1197

Resolves to the ENS name associated for the %%address%% or
 ``null`` if the //primary name// is not configured.

 Users must perform additional steps to configure a //primary name//,
 which is not currently common.

#### Parameters

##### address

`string`

#### Returns

`Promise`\<`string` \| `null`\>

***

### off()

> **off**(`event`, `listener?`): `Promise`\<`Provider`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:38

Unregister the %%listener%% for %%event%%. If %%listener%%
 is unspecified, all listeners are unregistered.

#### Parameters

##### event

[`ProviderEvent`](../type-aliases/ProviderEvent.md)

##### listener?

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`Provider`\>

#### Inherited from

[`EventEmitterable`](EventEmitterable.md).[`off`](EventEmitterable.md#off)

***

### on()

> **on**(`event`, `listener`): `Promise`\<`Provider`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:16

Registers a %%listener%% that is called whenever the
 %%event%% occurs until unregistered.

#### Parameters

##### event

[`ProviderEvent`](../type-aliases/ProviderEvent.md)

##### listener

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`Provider`\>

#### Inherited from

[`EventEmitterable`](EventEmitterable.md).[`on`](EventEmitterable.md#on)

***

### once()

> **once**(`event`, `listener`): `Promise`\<`Provider`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:21

Registers a %%listener%% that is called the next time
 %%event%% occurs.

#### Parameters

##### event

[`ProviderEvent`](../type-aliases/ProviderEvent.md)

##### listener

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`Provider`\>

#### Inherited from

[`EventEmitterable`](EventEmitterable.md).[`once`](EventEmitterable.md#once)

***

### removeAllListeners()

> **removeAllListeners**(`event?`): `Promise`\<`Provider`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:42

Unregister all listeners for %%event%%.

#### Parameters

##### event?

[`ProviderEvent`](../type-aliases/ProviderEvent.md)

#### Returns

`Promise`\<`Provider`\>

#### Inherited from

[`EventEmitterable`](EventEmitterable.md).[`removeAllListeners`](EventEmitterable.md#removealllisteners)

***

### removeListener()

> **removeListener**(`event`, `listener`): `Promise`\<`Provider`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:50

Alias for [[off]].

#### Parameters

##### event

[`ProviderEvent`](../type-aliases/ProviderEvent.md)

##### listener

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`Provider`\>

#### Inherited from

[`EventEmitterable`](EventEmitterable.md).[`removeListener`](EventEmitterable.md#removelistener)

***

### resolveName()

> **resolveName**(`ensName`): `Promise`\<`string` \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1189

Resolves to the address configured for the %%ensName%% or
 ``null`` if unconfigured.

#### Parameters

##### ensName

`string`

#### Returns

`Promise`\<`string` \| `null`\>

#### Overrides

[`NameResolver`](NameResolver.md).[`resolveName`](NameResolver.md#resolvename)

***

### waitForBlock()

> **waitForBlock**(`blockTag?`): `Promise`\<[`Block`](../classes/Block.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1209

Resolves to the block at %%blockTag%% once it has been mined.

 This can be useful for waiting some number of blocks by using
 the ``currentBlockNumber + N``.

#### Parameters

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag-1.md)

#### Returns

`Promise`\<[`Block`](../classes/Block.md)\>

***

### waitForTransaction()

> **waitForTransaction**(`hash`, `confirms?`, `timeout?`): `Promise`\<[`TransactionReceipt`](../classes/TransactionReceipt.md) \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1202

Waits until the transaction %%hash%% is mined and has %%confirms%%
 confirmations.

#### Parameters

##### hash

`string`

##### confirms?

`number`

##### timeout?

`number`

#### Returns

`Promise`\<[`TransactionReceipt`](../classes/TransactionReceipt.md) \| `null`\>
