[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / JsonFragment

# Interface: JsonFragment

Defined in: [src/types.ts:228](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L228)

## Properties

### anonymous?

> `readonly` `optional` **anonymous?**: `boolean`

Defined in: [src/types.ts:242](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L242)

If the event is anonymous.

***

### constant?

> `readonly` `optional` **constant?**: `boolean`

Defined in: [src/types.ts:252](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L252)

If the function is constant.

***

### gas?

> `readonly` `optional` **gas?**: `string`

Defined in: [src/types.ts:272](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L272)

The gas limit to use when sending a transaction for this function.

***

### inputs?

> `readonly` `optional` **inputs?**: readonly [`JsonFragmentType`](JsonFragmentType-2.md)[]

Defined in: [src/types.ts:262](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L262)

The input parameters.

***

### name?

> `readonly` `optional` **name?**: `string`

Defined in: [src/types.ts:232](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L232)

The name of the error, event, function, etc.

***

### outputs?

> `readonly` `optional` **outputs?**: readonly [`JsonFragmentType`](JsonFragmentType-2.md)[]

Defined in: [src/types.ts:267](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L267)

The output parameters.

***

### payable?

> `readonly` `optional` **payable?**: `boolean`

Defined in: [src/types.ts:247](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L247)

If the function is payable.

***

### stateMutability?

> `readonly` `optional` **stateMutability?**: `string`

Defined in: [src/types.ts:257](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L257)

The mutability state of the function.

***

### type?

> `readonly` `optional` **type?**: `string`

Defined in: [src/types.ts:237](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L237)

The type of the fragment (e.g. ``event``, ``"function"``, etc.)
