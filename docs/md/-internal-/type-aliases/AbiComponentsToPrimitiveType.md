[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiComponentsToPrimitiveType

# Type Alias: AbiComponentsToPrimitiveType\<components, abiParameterKind\>

> **AbiComponentsToPrimitiveType**\<`components`, `abiParameterKind`\> = `components` *extends* readonly \[\] ? \[\] : `components`\[`number`\]\[`"name"`\] *extends* [`Exclude`](Exclude.md)\<`components`\[`number`\]\[`"name"`\] & `string`, `undefined` \| `""`\> ? `{ [component in components[number] as component["name"] & {}]: AbiParameterToPrimitiveType<component, abiParameterKind> }` : `{ [key in keyof components]: AbiParameterToPrimitiveType<components[key], abiParameterKind> }`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/utils.d.ts:57

## Type Parameters

### components

`components` *extends* readonly [`AbiParameter`](AbiParameter-1.md)[]

### abiParameterKind

`abiParameterKind` *extends* [`AbiParameterKind`](AbiParameterKind.md)
