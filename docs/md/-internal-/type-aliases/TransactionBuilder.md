[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionBuilder

# Type Alias: TransactionBuilder\<API\>

> **TransactionBuilder**\<`API`\> = \<`ReturnType`\>(`options`) => `Promise`\<`ReturnType`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_context.d.ts:207

## Type Parameters

### API

`API` *extends* [`Web3APISpec`](Web3APISpec.md) = `unknown`

## Type Parameters

### ReturnType

`ReturnType` = [`Transaction`](../interfaces/Transaction-1.md)

## Parameters

### options

#### fillGasPrice?

`boolean`

#### privateKey?

[`HexString`](HexString.md) \| `Uint8Array`

#### transaction

[`Transaction`](../interfaces/Transaction-1.md)

#### web3Context

[`Web3Context`](../classes/Web3Context.md)\<`API`\>

## Returns

`Promise`\<`ReturnType`\>
