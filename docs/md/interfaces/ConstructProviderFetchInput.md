[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / ConstructProviderFetchInput

# Interface: ConstructProviderFetchInput\<T, D\>

Defined in: [src/types.ts:127](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L127)

## Extends

- [`ConstructFetchInput`](ConstructFetchInput.md)

## Type Parameters

### T

`T`

### D

`D` *extends* keyof [`ContractCallerFunctions`](ContractCallerFunctions.md)\<`T`\> = keyof [`ContractCallerFunctions`](ContractCallerFunctions.md)\<`T`\>

## Properties

### apiURL?

> `optional` **apiURL?**: `string`

Defined in: [src/types.ts:38](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L38)

#### Inherited from

[`ConstructFetchInput`](ConstructFetchInput.md).[`apiURL`](ConstructFetchInput.md#apiurl)

***

### chainId

> **chainId**: `number`

Defined in: [src/types.ts:40](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L40)

#### Inherited from

[`ConstructFetchInput`](ConstructFetchInput.md).[`chainId`](ConstructFetchInput.md#chainid)

***

### contractCaller

> **contractCaller**: [`Pick`](../-internal-/type-aliases/Pick.md)\<[`ContractCallerFunctions`](ContractCallerFunctions.md)\<`T`\>, `D`\>

Defined in: [src/types.ts:131](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L131)

***

### fetcher

> **fetcher**: [`FetcherFunction`](../type-aliases/FetcherFunction.md)

Defined in: [src/types.ts:72](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L72)

#### Inherited from

[`ConstructFetchInput`](ConstructFetchInput.md).[`fetcher`](ConstructFetchInput.md#fetcher)

***

### version?

> `optional` **version?**: [`APIVersion`](../type-aliases/APIVersion.md)

Defined in: [src/types.ts:39](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L39)

#### Inherited from

[`ConstructFetchInput`](ConstructFetchInput.md).[`version`](ConstructFetchInput.md#version)
