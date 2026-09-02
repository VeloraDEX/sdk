[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / PrimitiveTupleType

# Type Alias: PrimitiveTupleType\<Type, TypeComponents\>

> **PrimitiveTupleType**\<`Type`, `TypeComponents`\> = `TypeComponents` *extends* `ReadonlyArray`\<[`AbiParameter`](AbiParameter.md)\> ? `Type` *extends* `"tuple"` ? `{ [Param in TypeComponents[number] as Param["name"]]: MatchPrimitiveType<Param["type"], Param["components"]> }` : `Type` *extends* `` `tuple[${infer Size}]` `` ? [`_TypedArray`](TypedArray.md)\<`{ [Param in TypeComponents[number] as Param["name"]]: MatchPrimitiveType<Param["type"], Param["components"]> }`, `Size`\> : `never` : `never`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_abi\_types.d.ts:110

## Type Parameters

### Type

`Type` *extends* `string`

### TypeComponents

`TypeComponents` *extends* `ReadonlyArray`\<[`AbiParameter`](AbiParameter.md)\> \| `undefined` \| `unknown` = \[\]
