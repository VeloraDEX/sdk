[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Eip1193Compatible

# Type Alias: Eip1193Compatible\<API\>

> **Eip1193Compatible**\<`API`\> = [`Omit`](Omit.md)\<[`Omit`](Omit.md)\<[`Web3BaseProvider`](../classes/Web3BaseProvider.md), `"request"`\>, `"asEIP1193Provider"`\> & `object`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:62

## Type Declaration

### request()

> **request**\<`Method`, `ResultType`\>(`request`): `Promise`\<`ResultType`\>

#### Type Parameters

##### Method

`Method` *extends* `string`

##### ResultType

`ResultType` = `unknown`

#### Parameters

##### request

[`Web3APIPayload`](../interfaces/Web3APIPayload.md)\<`API`, `Method`\>

#### Returns

`Promise`\<`ResultType`\>

## Type Parameters

### API

`API` *extends* [`Web3APISpec`](Web3APISpec.md) = [`EthExecutionAPI`](EthExecutionAPI.md)
