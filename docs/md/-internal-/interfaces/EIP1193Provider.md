[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EIP1193Provider

# Interface: EIP1193Provider\<API\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:37

## Extends

- [`SimpleProvider`](SimpleProvider.md)\<`API`\>

## Type Parameters

### API

`API` *extends* [`Web3APISpec`](../type-aliases/Web3APISpec.md)

## Methods

### on()

#### Call Signature

> **on**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:38

##### Parameters

###### event

`"connect"`

###### listener

(`info`) => `void`

##### Returns

`void`

#### Call Signature

> **on**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:39

##### Parameters

###### event

`"disconnect"`

###### listener

(`error`) => `void`

##### Returns

`void`

#### Call Signature

> **on**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:40

##### Parameters

###### event

`"message"`

###### listener

(`message`) => `void`

##### Returns

`void`

#### Call Signature

> **on**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:41

##### Parameters

###### event

`"chainChanged"`

###### listener

(`chainId`) => `void`

##### Returns

`void`

#### Call Signature

> **on**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:42

##### Parameters

###### event

`"accountsChanged"`

###### listener

(`accounts`) => `void`

##### Returns

`void`

***

### removeListener()

#### Call Signature

> **removeListener**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:43

##### Parameters

###### event

`"connect"`

###### listener

(`info`) => `void`

##### Returns

`void`

#### Call Signature

> **removeListener**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:44

##### Parameters

###### event

`"disconnect"`

###### listener

(`error`) => `void`

##### Returns

`void`

#### Call Signature

> **removeListener**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:45

##### Parameters

###### event

`"message"`

###### listener

(`message`) => `void`

##### Returns

`void`

#### Call Signature

> **removeListener**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:46

##### Parameters

###### event

`"chainChanged"`

###### listener

(`chainId`) => `void`

##### Returns

`void`

#### Call Signature

> **removeListener**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:47

##### Parameters

###### event

`"accountsChanged"`

###### listener

(`accounts`) => `void`

##### Returns

`void`

***

### request()

> **request**\<`Method`, `ResponseType`\>(`args`): `Promise`\<`unknown`\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:29

#### Type Parameters

##### Method

`Method` *extends* `string`

##### ResponseType

`ResponseType` = [`Web3APIReturnType`](../type-aliases/Web3APIReturnType.md)\<`API`, `Method`\>

#### Parameters

##### args

[`Web3APIPayload`](Web3APIPayload.md)\<`API`, `Method`\>

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`SimpleProvider`](SimpleProvider.md).[`request`](SimpleProvider.md#request)
