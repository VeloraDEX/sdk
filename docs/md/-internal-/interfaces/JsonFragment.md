[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / JsonFragment

# Interface: JsonFragment

## Properties

### anonymous?

> `readonly` `optional` **anonymous**: `boolean`

If the event is anonymous.

#### Defined in

[src/types.ts:242](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L242)

***

### constant?

> `readonly` `optional` **constant**: `boolean`

If the function is constant.

#### Defined in

[src/types.ts:252](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L252)

***

### gas?

> `readonly` `optional` **gas**: `string`

The gas limit to use when sending a transaction for this function.

#### Defined in

[src/types.ts:272](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L272)

***

### inputs?

> `readonly` `optional` **inputs**: readonly [`JsonFragmentType`](JsonFragmentType.md)[]

The input parameters.

#### Defined in

[src/types.ts:262](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L262)

***

### name?

> `readonly` `optional` **name**: `string`

The name of the error, event, function, etc.

#### Defined in

[src/types.ts:232](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L232)

***

### outputs?

> `readonly` `optional` **outputs**: readonly [`JsonFragmentType`](JsonFragmentType.md)[]

The output parameters.

#### Defined in

[src/types.ts:267](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L267)

***

### payable?

> `readonly` `optional` **payable**: `boolean`

If the function is payable.

#### Defined in

[src/types.ts:247](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L247)

***

### stateMutability?

> `readonly` `optional` **stateMutability**: `string`

The mutability state of the function.

#### Defined in

[src/types.ts:257](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L257)

***

### type?

> `readonly` `optional` **type**: `string`

The type of the fragment (e.g. ``event``, ``"function"``, etc.)

#### Defined in

[src/types.ts:237](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L237)
