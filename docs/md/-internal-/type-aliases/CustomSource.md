[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CustomSource

# Type Alias: CustomSource

> **CustomSource**: `object`

## Type declaration

### address

> **address**: [`Address`](Address.md)

### nonceManager?

> `optional` **nonceManager**: [`NonceManager`](NonceManager.md)

### sign()?

> `optional` **sign**: (`parameters`) => `Promise`\<[`Hex`](Hex.md)\>

#### Parameters

• **parameters**

• **parameters.hash**: [`Hash`](Hash.md)

#### Returns

`Promise`\<[`Hex`](Hex.md)\>

### signAuthorization()?

> `optional` **signAuthorization**: (`parameters`) => `Promise`\<[`SignAuthorizationReturnType`](SignAuthorizationReturnType.md)\>

#### Parameters

• **parameters**: [`AuthorizationRequest`](AuthorizationRequest.md)

#### Returns

`Promise`\<[`SignAuthorizationReturnType`](SignAuthorizationReturnType.md)\>

### signMessage()

> **signMessage**: (`{ message }`) => `Promise`\<[`Hex`](Hex.md)\>

#### Parameters

• **\{ message \}**

• **\{ message \}.message**: [`SignableMessage`](SignableMessage.md)

#### Returns

`Promise`\<[`Hex`](Hex.md)\>

### signTransaction()

> **signTransaction**: \<`serializer`, `transaction`\>(`transaction`, `options`?) => `Promise`\<[`Hex`](Hex.md)\>

#### Type Parameters

• **serializer** *extends* [`SerializeTransactionFn`](SerializeTransactionFn.md)\<[`TransactionSerializable`](TransactionSerializable.md)\> = [`SerializeTransactionFn`](SerializeTransactionFn.md)\<[`TransactionSerializable`](TransactionSerializable.md)\>

• **transaction** *extends* [`Parameters`](Parameters.md)\<`serializer`\>\[`0`\] = [`Parameters`](Parameters.md)\<`serializer`\>\[`0`\]

#### Parameters

• **transaction**: `transaction`

• **options?**

• **options.serializer?**: `serializer`

#### Returns

`Promise`\<[`Hex`](Hex.md)\>

### signTypedData()

> **signTypedData**: \<`typedData`, `primaryType`\>(`parameters`) => `Promise`\<[`Hex`](Hex.md)\>

#### Type Parameters

• **typedData** *extends* [`TypedData`](TypedData.md) \| [`Record`](Record.md)\<`string`, `unknown`\>

• **primaryType** *extends* keyof `typedData` \| `"EIP712Domain"` = keyof `typedData`

#### Parameters

• **parameters**: [`TypedDataDefinition`](TypedDataDefinition.md)\<`typedData`, `primaryType`\>

#### Returns

`Promise`\<[`Hex`](Hex.md)\>

## Defined in

node\_modules/viem/\_types/accounts/types.d.ts:14
