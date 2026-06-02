[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / JsonFragment

# Interface: JsonFragment

## Properties

### anonymous?

> `readonly` `optional` **anonymous**: `boolean`

If the event is anonymous.

#### Defined in

[src/types.ts:212](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L212)

***

### constant?

> `readonly` `optional` **constant**: `boolean`

If the function is constant.

#### Defined in

[src/types.ts:222](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L222)

***

### gas?

> `readonly` `optional` **gas**: `string`

The gas limit to use when sending a transaction for this function.

#### Defined in

[src/types.ts:242](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L242)

***

### inputs?

> `readonly` `optional` **inputs**: readonly [`JsonFragmentType`](JsonFragmentType.md)[]

The input parameters.

#### Defined in

[src/types.ts:232](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L232)

***

### name?

> `readonly` `optional` **name**: `string`

The name of the error, event, function, etc.

#### Defined in

[src/types.ts:202](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L202)

***

### outputs?

> `readonly` `optional` **outputs**: readonly [`JsonFragmentType`](JsonFragmentType.md)[]

The output parameters.

#### Defined in

[src/types.ts:237](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L237)

***

### payable?

> `readonly` `optional` **payable**: `boolean`

If the function is payable.

#### Defined in

[src/types.ts:217](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L217)

***

### stateMutability?

> `readonly` `optional` **stateMutability**: `string`

The mutability state of the function.

#### Defined in

[src/types.ts:227](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L227)

***

### type?

> `readonly` `optional` **type**: `string`

The type of the fragment (e.g. ``event``, ``"function"``, etc.)

#### Defined in

[src/types.ts:207](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L207)
