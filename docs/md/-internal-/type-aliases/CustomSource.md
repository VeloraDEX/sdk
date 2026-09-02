[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CustomSource

# Type Alias: CustomSource

> **CustomSource** = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/accounts/types.d.ts:14

## Properties

### address

> **address**: [`Address`](Address-1.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/accounts/types.d.ts:15

***

### nonceManager?

> `optional` **nonceManager?**: [`NonceManager`](NonceManager.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/accounts/types.d.ts:16

***

### sign?

> `optional` **sign?**: (`parameters`) => `Promise`\<[`Hex`](Hex.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/accounts/types.d.ts:17

#### Parameters

##### parameters

###### hash

[`Hash`](Hash.md)

#### Returns

`Promise`\<[`Hex`](Hex.md)\>

***

### signAuthorization?

> `optional` **signAuthorization?**: (`parameters`) => `Promise`\<[`SignAuthorizationReturnType`](SignAuthorizationReturnType-1.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/accounts/types.d.ts:20

#### Parameters

##### parameters

[`AuthorizationRequest`](AuthorizationRequest.md)

#### Returns

`Promise`\<[`SignAuthorizationReturnType`](SignAuthorizationReturnType-1.md)\>

***

### signMessage

> **signMessage**: (`{ message }`) => `Promise`\<[`Hex`](Hex.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/accounts/types.d.ts:21

#### Parameters

##### \{ message \}

###### message

[`SignableMessage`](SignableMessage.md)

#### Returns

`Promise`\<[`Hex`](Hex.md)\>

***

### signTransaction

> **signTransaction**: \<`serializer`, `transaction`\>(`transaction`, `options?`) => `Promise`\<[`Hex`](Hex.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/accounts/types.d.ts:24

#### Type Parameters

##### serializer

`serializer` *extends* [`SerializeTransactionFn`](SerializeTransactionFn.md)\<[`TransactionSerializable`](TransactionSerializable.md)\> = [`SerializeTransactionFn`](SerializeTransactionFn.md)\<[`TransactionSerializable`](TransactionSerializable.md)\>

##### transaction

`transaction` *extends* [`Parameters`](Parameters-8.md)\<`serializer`\>\[`0`\] = [`Parameters`](Parameters-8.md)\<`serializer`\>\[`0`\]

#### Parameters

##### transaction

`transaction`

##### options?

###### serializer?

`serializer`

#### Returns

`Promise`\<[`Hex`](Hex.md)\>

***

### signTypedData

> **signTypedData**: \<`typedData`, `primaryType`\>(`parameters`) => `Promise`\<[`Hex`](Hex.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/accounts/types.d.ts:27

#### Type Parameters

##### typedData

`typedData` *extends* [`TypedData`](TypedData.md) \| [`Record`](Record.md)\<`string`, `unknown`\>

##### primaryType

`primaryType` *extends* keyof `typedData` \| `"EIP712Domain"` = keyof `typedData`

#### Parameters

##### parameters

[`TypedDataDefinition`](TypedDataDefinition.md)\<`typedData`, `primaryType`\>

#### Returns

`Promise`\<[`Hex`](Hex.md)\>
