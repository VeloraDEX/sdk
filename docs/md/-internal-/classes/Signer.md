[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Signer

# Abstract Class: Signer

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:23

## Constructors

### Constructor

> **new Signer**(): `Signer`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:30

#### Returns

`Signer`

## Properties

### \_isSigner

> `readonly` **\_isSigner**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:29

***

### provider?

> `readonly` `optional` **provider?**: [`Provider`](Provider.md)

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:24

## Methods

### \_checkProvider()

> **\_checkProvider**(`operation?`): `void`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:42

#### Parameters

##### operation?

`string`

#### Returns

`void`

***

### call()

> **call**(`transaction`, `blockTag?`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:34

#### Parameters

##### transaction

[`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag.md)

#### Returns

`Promise`\<`string`\>

***

### checkTransaction()

> **checkTransaction**(`transaction`): [`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:40

#### Parameters

##### transaction

[`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Returns

[`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

***

### connect()

> `abstract` **connect**(`provider`): `Signer`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:28

#### Parameters

##### provider

[`Provider`](Provider.md)

#### Returns

`Signer`

***

### estimateGas()

> **estimateGas**(`transaction`): `Promise`\<[`BigNumber`](BigNumber.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:33

#### Parameters

##### transaction

[`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Returns

`Promise`\<[`BigNumber`](BigNumber.md)\>

***

### getAddress()

> `abstract` **getAddress**(): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:25

#### Returns

`Promise`\<`string`\>

***

### getBalance()

> **getBalance**(`blockTag?`): `Promise`\<[`BigNumber`](BigNumber.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:31

#### Parameters

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag.md)

#### Returns

`Promise`\<[`BigNumber`](BigNumber.md)\>

***

### getChainId()

> **getChainId**(): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:36

#### Returns

`Promise`\<`number`\>

***

### getFeeData()

> **getFeeData**(): `Promise`\<[`FeeData`](../interfaces/FeeData.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:38

#### Returns

`Promise`\<[`FeeData`](../interfaces/FeeData.md)\>

***

### getGasPrice()

> **getGasPrice**(): `Promise`\<[`BigNumber`](BigNumber.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:37

#### Returns

`Promise`\<[`BigNumber`](BigNumber.md)\>

***

### getTransactionCount()

> **getTransactionCount**(`blockTag?`): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:32

#### Parameters

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag.md)

#### Returns

`Promise`\<`number`\>

***

### populateTransaction()

> **populateTransaction**(`transaction`): `Promise`\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:41

#### Parameters

##### transaction

[`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Returns

`Promise`\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

***

### resolveName()

> **resolveName**(`name`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:39

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`string`\>

***

### sendTransaction()

> **sendTransaction**(`transaction`): `Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:35

#### Parameters

##### transaction

[`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Returns

`Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

***

### signMessage()

> `abstract` **signMessage**(`message`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:26

#### Parameters

##### message

`string` \| [`Bytes`](../type-aliases/Bytes.md)

#### Returns

`Promise`\<`string`\>

***

### signTransaction()

> `abstract` **signTransaction**(`transaction`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:27

#### Parameters

##### transaction

[`Deferrable`](../type-aliases/Deferrable.md)\<[`TransactionRequest`](../type-aliases/TransactionRequest.md)\>

#### Returns

`Promise`\<`string`\>

***

### isSigner()

> `static` **isSigner**(`value`): `value is Signer`

Defined in: node\_modules/.pnpm/@ethersproject+abstract-signer@5.8.0/node\_modules/@ethersproject/abstract-signer/lib/index.d.ts:43

#### Parameters

##### value

`any`

#### Returns

`value is Signer`
