[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Provider

# Abstract Class: Provider

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:123

## Extended by

- [`BaseProvider`](BaseProvider.md)

## Implements

- [`OnceBlockable`](../interfaces/OnceBlockable.md)

## Constructors

### Constructor

> **new Provider**(): `Provider`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:153

#### Returns

`Provider`

## Properties

### \_isProvider

> `readonly` **\_isProvider**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:152

## Methods

### addListener()

> **addListener**(`eventName`, `listener`): `Provider`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:149

#### Parameters

##### eventName

[`EventType`](../type-aliases/EventType.md)

##### listener

[`Listener`](../type-aliases/Listener.md)

#### Returns

`Provider`

***

### call()

> `abstract` **call**(`transaction`, `blockTag?`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:133

#### Parameters

##### transaction

[`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<`string`\>

***

### emit()

> `abstract` **emit**(`eventName`, ...`args`): `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:144

#### Parameters

##### eventName

[`EventType`](../type-aliases/EventType.md)

##### args

...`any`[]

#### Returns

`boolean`

***

### estimateGas()

> `abstract` **estimateGas**(`transaction`): `Promise`\<[`BigNumber`](BigNumber.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:134

#### Parameters

##### transaction

[`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Returns

`Promise`\<[`BigNumber`](BigNumber.md)\>

***

### getBalance()

> `abstract` **getBalance**(`addressOrName`, `blockTag?`): `Promise`\<[`BigNumber`](BigNumber.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:128

#### Parameters

##### addressOrName

`string` \| `Promise`\<`string`\>

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<[`BigNumber`](BigNumber.md)\>

***

### getBlock()

> `abstract` **getBlock**(`blockHashOrBlockTag`): `Promise`\<[`Block`](../interfaces/Block-1.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:135

#### Parameters

##### blockHashOrBlockTag

[`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<[`Block`](../interfaces/Block-1.md)\>

***

### getBlockNumber()

> `abstract` **getBlockNumber**(): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:125

#### Returns

`Promise`\<`number`\>

***

### getBlockWithTransactions()

> `abstract` **getBlockWithTransactions**(`blockHashOrBlockTag`): `Promise`\<[`BlockWithTransactions`](../interfaces/BlockWithTransactions.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:136

#### Parameters

##### blockHashOrBlockTag

[`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<[`BlockWithTransactions`](../interfaces/BlockWithTransactions.md)\>

***

### getCode()

> `abstract` **getCode**(`addressOrName`, `blockTag?`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:130

#### Parameters

##### addressOrName

`string` \| `Promise`\<`string`\>

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<`string`\>

***

### getFeeData()

> **getFeeData**(): `Promise`\<[`FeeData`](../interfaces/FeeData.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:127

#### Returns

`Promise`\<[`FeeData`](../interfaces/FeeData.md)\>

***

### getGasPrice()

> `abstract` **getGasPrice**(): `Promise`\<[`BigNumber`](BigNumber.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:126

#### Returns

`Promise`\<[`BigNumber`](BigNumber.md)\>

***

### getLogs()

> `abstract` **getLogs**(`filter`): `Promise`\<[`Log`](../interfaces/Log.md)[]\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:139

#### Parameters

##### filter

[`Filter`](../interfaces/Filter.md)

#### Returns

`Promise`\<[`Log`](../interfaces/Log.md)[]\>

***

### getNetwork()

> `abstract` **getNetwork**(): `Promise`\<[`Network`](../type-aliases/Network.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:124

#### Returns

`Promise`\<[`Network`](../type-aliases/Network.md)\>

***

### getStorageAt()

> `abstract` **getStorageAt**(`addressOrName`, `position`, `blockTag?`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:131

#### Parameters

##### addressOrName

`string` \| `Promise`\<`string`\>

##### position

[`BigNumberish`](../type-aliases/BigNumberish.md) \| `Promise`\<[`BigNumberish`](../type-aliases/BigNumberish.md)\>

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<`string`\>

***

### getTransaction()

> `abstract` **getTransaction**(`transactionHash`): `Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:137

#### Parameters

##### transactionHash

`string`

#### Returns

`Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

***

### getTransactionCount()

> `abstract` **getTransactionCount**(`addressOrName`, `blockTag?`): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:129

#### Parameters

##### addressOrName

`string` \| `Promise`\<`string`\>

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag.md) \| `Promise`\<[`BlockTag`](../type-aliases/BlockTag.md)\>

#### Returns

`Promise`\<`number`\>

***

### getTransactionReceipt()

> `abstract` **getTransactionReceipt**(`transactionHash`): `Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:138

#### Parameters

##### transactionHash

`string`

#### Returns

`Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

***

### listenerCount()

> `abstract` **listenerCount**(`eventName?`): `number`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:145

#### Parameters

##### eventName?

[`EventType`](../type-aliases/EventType.md)

#### Returns

`number`

***

### listeners()

> `abstract` **listeners**(`eventName?`): [`Listener`](../type-aliases/Listener.md)[]

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:146

#### Parameters

##### eventName?

[`EventType`](../type-aliases/EventType.md)

#### Returns

[`Listener`](../type-aliases/Listener.md)[]

***

### lookupAddress()

> `abstract` **lookupAddress**(`address`): `Promise`\<`string` \| `null`\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:141

#### Parameters

##### address

`string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`string` \| `null`\>

***

### off()

> `abstract` **off**(`eventName`, `listener?`): `Provider`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:147

#### Parameters

##### eventName

[`EventType`](../type-aliases/EventType.md)

##### listener?

[`Listener`](../type-aliases/Listener.md)

#### Returns

`Provider`

***

### on()

> `abstract` **on**(`eventName`, `listener`): `Provider`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:142

#### Parameters

##### eventName

[`EventType`](../type-aliases/EventType.md)

##### listener

[`Listener`](../type-aliases/Listener.md)

#### Returns

`Provider`

***

### once()

> `abstract` **once**(`eventName`, `listener`): `Provider`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:143

#### Parameters

##### eventName

[`EventType`](../type-aliases/EventType.md)

##### listener

[`Listener`](../type-aliases/Listener.md)

#### Returns

`Provider`

#### Implementation of

[`OnceBlockable`](../interfaces/OnceBlockable.md).[`once`](../interfaces/OnceBlockable.md#once)

***

### removeAllListeners()

> `abstract` **removeAllListeners**(`eventName?`): `Provider`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:148

#### Parameters

##### eventName?

[`EventType`](../type-aliases/EventType.md)

#### Returns

`Provider`

***

### removeListener()

> **removeListener**(`eventName`, `listener`): `Provider`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:150

#### Parameters

##### eventName

[`EventType`](../type-aliases/EventType.md)

##### listener

[`Listener`](../type-aliases/Listener.md)

#### Returns

`Provider`

***

### resolveName()

> `abstract` **resolveName**(`name`): `Promise`\<`string` \| `null`\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:140

#### Parameters

##### name

`string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`string` \| `null`\>

***

### sendTransaction()

> `abstract` **sendTransaction**(`signedTransaction`): `Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:132

#### Parameters

##### signedTransaction

`string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

***

### waitForTransaction()

> `abstract` **waitForTransaction**(`transactionHash`, `confirmations?`, `timeout?`): `Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:151

#### Parameters

##### transactionHash

`string`

##### confirmations?

`number`

##### timeout?

`number`

#### Returns

`Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

***

### isProvider()

> `static` **isProvider**(`value`): `value is Provider`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-provider@5.8.0/node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:154

#### Parameters

##### value

`any`

#### Returns

`value is Provider`
