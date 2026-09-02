[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MetaMaskProvider

# Interface: MetaMaskProvider\<API\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:49

## Extends

- [`SimpleProvider`](SimpleProvider.md)\<`API`\>

## Type Parameters

### API

`API` *extends* [`Web3APISpec`](../type-aliases/Web3APISpec.md)

## Properties

### isMetaMask

> **isMetaMask**: `boolean`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:60

## Methods

### on()

#### Call Signature

> **on**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:50

##### Parameters

###### event

`"connect"`

###### listener

(`info`) => `void`

##### Returns

`void`

#### Call Signature

> **on**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:51

##### Parameters

###### event

`"disconnect"`

###### listener

(`error`) => `void`

##### Returns

`void`

#### Call Signature

> **on**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:52

##### Parameters

###### event

`"message"`

###### listener

(`message`) => `void`

##### Returns

`void`

#### Call Signature

> **on**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:53

##### Parameters

###### event

`"chainChanged"`

###### listener

(`chainId`) => `void`

##### Returns

`void`

#### Call Signature

> **on**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:54

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

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:55

##### Parameters

###### event

`"connect"`

###### listener

(`info`) => `void`

##### Returns

`void`

#### Call Signature

> **removeListener**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:56

##### Parameters

###### event

`"disconnect"`

###### listener

(`error`) => `void`

##### Returns

`void`

#### Call Signature

> **removeListener**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:57

##### Parameters

###### event

`"message"`

###### listener

(`message`) => `void`

##### Returns

`void`

#### Call Signature

> **removeListener**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:58

##### Parameters

###### event

`"chainChanged"`

###### listener

(`chainId`) => `void`

##### Returns

`void`

#### Call Signature

> **removeListener**(`event`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:59

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
