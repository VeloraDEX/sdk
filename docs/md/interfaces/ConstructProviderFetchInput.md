[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / ConstructProviderFetchInput

# Interface: ConstructProviderFetchInput\<T, D\>

## Extends

- [`ConstructFetchInput`](ConstructFetchInput.md)

## Type Parameters

• **T**

• **D** *extends* keyof [`ContractCallerFunctions`](ContractCallerFunctions.md)\<`T`\> = keyof [`ContractCallerFunctions`](ContractCallerFunctions.md)\<`T`\>

## Properties

### apiURL?

> `optional` **apiURL**: `string`

#### Inherited from

[`ConstructFetchInput`](ConstructFetchInput.md).[`apiURL`](ConstructFetchInput.md#apiurl)

#### Defined in

[src/types.ts:37](https://github.com/VeloraDEX/sdk/blob/feat/extend_delta_orders_filtering/src/types.ts#L37)

***

### chainId

> **chainId**: `number`

#### Inherited from

[`ConstructFetchInput`](ConstructFetchInput.md).[`chainId`](ConstructFetchInput.md#chainid)

#### Defined in

[src/types.ts:39](https://github.com/VeloraDEX/sdk/blob/feat/extend_delta_orders_filtering/src/types.ts#L39)

***

### contractCaller

> **contractCaller**: [`Pick`](../-internal-/type-aliases/Pick.md)\<[`ContractCallerFunctions`](ContractCallerFunctions.md)\<`T`\>, `D`\>

#### Defined in

[src/types.ts:127](https://github.com/VeloraDEX/sdk/blob/feat/extend_delta_orders_filtering/src/types.ts#L127)

***

### fetcher

> **fetcher**: [`FetcherFunction`](../type-aliases/FetcherFunction.md)

#### Inherited from

[`ConstructFetchInput`](ConstructFetchInput.md).[`fetcher`](ConstructFetchInput.md#fetcher)

#### Defined in

[src/types.ts:68](https://github.com/VeloraDEX/sdk/blob/feat/extend_delta_orders_filtering/src/types.ts#L68)

***

### version?

> `optional` **version**: [`APIVersion`](../type-aliases/APIVersion.md)

#### Inherited from

[`ConstructFetchInput`](ConstructFetchInput.md).[`version`](ConstructFetchInput.md#version)

#### Defined in

[src/types.ts:38](https://github.com/VeloraDEX/sdk/blob/feat/extend_delta_orders_filtering/src/types.ts#L38)
