[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SimpleProvider

# Interface: SimpleProvider\<API\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:28

## Extended by

- [`EIP1193Provider`](EIP1193Provider.md)
- [`MetaMaskProvider`](MetaMaskProvider.md)

## Type Parameters

### API

`API` *extends* [`Web3APISpec`](../type-aliases/Web3APISpec.md)

## Methods

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
