[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BaseTransaction

# Abstract Class: BaseTransaction\<TransactionObject\>

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:21

This base class will likely be subject to further
refactoring along the introduction of additional tx types
on the Ethereum network.

It is therefore not recommended to use directly.

## Type Parameters

### TransactionObject

`TransactionObject`

## Constructors

### Constructor

> **new BaseTransaction**\<`TransactionObject`\>(`txData`, `opts`): `BaseTransaction`\<`TransactionObject`\>

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:56

#### Parameters

##### txData

[`TxData`](../type-aliases/TxData.md) \| [`AccessListEIP2930TxData`](../interfaces/AccessListEIP2930TxData.md) \| [`FeeMarketEIP1559TxData`](../interfaces/FeeMarketEIP1559TxData.md)

##### opts

[`TxOptions`](../interfaces/TxOptions.md)

#### Returns

`BaseTransaction`\<`TransactionObject`\>

## Properties

### activeCapabilities

> `protected` **activeCapabilities**: `number`[]

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:39

List of tx type defining EIPs,
e.g. 1559 (fee market) and 2930 (access lists)
for FeeMarketEIP1559Transaction objects

***

### cache

> `protected` **cache**: [`TransactionCache`](../interfaces/TransactionCache.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:32

***

### common

> `readonly` **common**: [`Common`](Common.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:31

***

### data

> `readonly` **data**: `Uint8Array`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:27

***

### gasLimit

> `readonly` **gasLimit**: `bigint`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:24

***

### nonce

> `readonly` **nonce**: `bigint`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:23

***

### r?

> `readonly` `optional` **r?**: `bigint`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:29

***

### s?

> `readonly` `optional` **s?**: `bigint`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:30

***

### to?

> `readonly` `optional` **to?**: [`Address`](Address.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:25

***

### txOptions

> `protected` `readonly` **txOptions**: [`TxOptions`](../interfaces/TxOptions.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:33

***

### v?

> `readonly` `optional` **v?**: `bigint`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:28

***

### value

> `readonly` **value**: `bigint`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:26

## Accessors

### type

#### Get Signature

> **get** **type**(): `number`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:62

Returns the transaction type.

Note: legacy txs will return tx type `0`.

##### Returns

`number`

## Methods

### \_ecsign()

> `protected` **\_ecsign**(`msgHash`, `privateKey`, `chainId?`): [`ECDSASignature`](../interfaces/ECDSASignature.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:193

#### Parameters

##### msgHash

`Uint8Array`

##### privateKey

`Uint8Array`

##### chainId?

`bigint`

#### Returns

[`ECDSASignature`](../interfaces/ECDSASignature.md)

***

### \_getSharedErrorPostfix()

> `protected` **\_getSharedErrorPostfix**(): `string`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:192

Returns the shared error postfix part for _error() method
tx type implementations.

#### Returns

`string`

***

### \_processSignature()

> `abstract` `protected` **\_processSignature**(`v`, `r`, `s`): `TransactionObject`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:155

#### Parameters

##### v

`bigint`

##### r

`Uint8Array`

##### s

`Uint8Array`

#### Returns

`TransactionObject`

***

### \_validateCannotExceedMaxInteger()

> `protected` **\_validateCannotExceedMaxInteger**(`values`, `bits?`, `cannotEqual?`): `void`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:171

Validates that an object with BigInt values cannot exceed the specified bit limit.

#### Parameters

##### values

Object containing string keys and BigInt values

##### bits?

`number`

Number of bits to check (64 or 256)

##### cannotEqual?

`boolean`

Pass true if the number also cannot equal one less the maximum value

#### Returns

`void`

***

### \_validateHighS()

> `protected` **\_validateHighS**(): `void`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:92

EIP-2: All transaction signatures whose s-value is greater than secp256k1n/2are considered invalid.
Reasoning: https://ethereum.stackexchange.com/a/55728

#### Returns

`void`

***

### \_validateYParity()

> `protected` **\_validateYParity**(): `void`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:87

#### Returns

`void`

***

### errorStr()

> `abstract` **errorStr**(): `string`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:180

Return a compact error string representation of the object

#### Returns

`string`

***

### getBaseFee()

> **getBaseFee**(): `bigint`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:96

The minimum amount of gas the tx must have (DataFee + TxFee + Creation Fee)

#### Returns

`bigint`

***

### getDataFee()

> **getDataFee**(): `bigint`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:100

The amount of gas paid for the data in this tx

#### Returns

`bigint`

***

### getMessageToSign()

#### Call Signature

> `abstract` **getMessageToSign**(`hashMessage`): `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\> \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>[]

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:124

##### Parameters

###### hashMessage

`false`

##### Returns

`Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\> \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>[]

#### Call Signature

> `abstract` **getMessageToSign**(`hashMessage?`): `Uint8Array`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:125

##### Parameters

###### hashMessage?

`true`

##### Returns

`Uint8Array`

***

### getMessageToVerifySignature()

> `abstract` **getMessageToVerifySignature**(): `Uint8Array`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:127

#### Returns

`Uint8Array`

***

### getSenderAddress()

> **getSenderAddress**(): [`Address`](Address.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:136

Returns the sender's address

#### Returns

[`Address`](Address.md)

***

### getSenderPublicKey()

> `abstract` **getSenderPublicKey**(): `Uint8Array`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:140

Returns the public key of the sender

#### Returns

`Uint8Array`

***

### getUpfrontCost()

> `abstract` **getUpfrontCost**(): `bigint`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:104

The up front amount that an account must have for this transaction to be valid

#### Returns

`bigint`

***

### hash()

> `abstract` **hash**(): `Uint8Array`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:126

#### Returns

`Uint8Array`

***

### isSigned()

> **isSigned**(): `boolean`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:128

#### Returns

`boolean`

***

### raw()

> `abstract` **raw**(): [`TxValuesArray`](../type-aliases/TxValuesArray.md) \| [`AccessListEIP2930ValuesArray`](../type-aliases/AccessListEIP2930ValuesArray.md) \| [`FeeMarketEIP1559ValuesArray`](../type-aliases/FeeMarketEIP1559ValuesArray.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:119

Returns a Uint8Array Array of the raw Uint8Arrays of this transaction, in order.

Use [BaseTransaction.serialize](#serialize) to add a transaction to a block
with Block.fromValuesArray.

For an unsigned tx this method uses the empty Uint8Array values for the
signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
representation for external signing use [BaseTransaction.getMessageToSign](#getmessagetosign).

#### Returns

[`TxValuesArray`](../type-aliases/TxValuesArray.md) \| [`AccessListEIP2930ValuesArray`](../type-aliases/AccessListEIP2930ValuesArray.md) \| [`FeeMarketEIP1559ValuesArray`](../type-aliases/FeeMarketEIP1559ValuesArray.md)

***

### serialize()

> `abstract` **serialize**(): `Uint8Array`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:123

Returns the encoding of the transaction.

#### Returns

`Uint8Array`

***

### sign()

> **sign**(`privateKey`): `TransactionObject`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:150

Signs a transaction.

Note that the signed tx is returned as a new object,
use as follows:
```javascript
const signedTx = tx.sign(privateKey)
```

#### Parameters

##### privateKey

`Uint8Array`

#### Returns

`TransactionObject`

***

### supports()

> **supports**(`capability`): `boolean`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:79

Checks if a tx type defining capability is active
on a tx, for example the EIP-1559 fee market mechanism
or the EIP-2930 access list feature.

Note that this is different from the tx type itself,
so EIP-2930 access lists can very well be active
on an EIP-1559 tx for example.

This method can be useful for feature checks if the
tx type is unknown (e.g. when instantiated with
the tx factory).

See `Capabilites` in the `types` module for a reference
on all supported capabilities.

#### Parameters

##### capability

[`Capability`](../enumerations/Capability.md)

#### Returns

`boolean`

***

### toCreationAddress()

> **toCreationAddress**(): `boolean`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:108

If the tx's `to` is to the creation address

#### Returns

`boolean`

***

### toJSON()

> `abstract` **toJSON**(): [`JsonTx`](../interfaces/JsonTx.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:154

Returns an object with the JSON representation of the transaction

#### Returns

[`JsonTx`](../interfaces/JsonTx.md)

***

### validate()

#### Call Signature

> **validate**(): `boolean`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:84

Checks if the transaction has the minimum amount of gas required
(DataFee + TxFee + Creation Fee).

##### Returns

`boolean`

#### Call Signature

> **validate**(`stringError`): `boolean`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:85

Checks if the transaction has the minimum amount of gas required
(DataFee + TxFee + Creation Fee).

##### Parameters

###### stringError

`false`

##### Returns

`boolean`

#### Call Signature

> **validate**(`stringError`): `string`[]

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:86

Checks if the transaction has the minimum amount of gas required
(DataFee + TxFee + Creation Fee).

##### Parameters

###### stringError

`true`

##### Returns

`string`[]

***

### verifySignature()

> **verifySignature**(): `boolean`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:132

Determines if the signature is valid

#### Returns

`boolean`

***

### \_validateNotArray()

> `protected` `static` **\_validateNotArray**(`values`): `void`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:174

#### Parameters

##### values

#### Returns

`void`

***

### fromSerializedTx()

> `static` **fromSerializedTx**(`serialized`, `opts?`): `any`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:194

#### Parameters

##### serialized

`Uint8Array`

##### opts?

[`TxOptions`](../interfaces/TxOptions.md)

#### Returns

`any`

***

### fromTxData()

> `static` **fromTxData**(`txData`, `opts?`): `any`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/baseTransaction.d.ts:195

#### Parameters

##### txData

`any`

##### opts?

[`TxOptions`](../interfaces/TxOptions.md)

#### Returns

`any`
