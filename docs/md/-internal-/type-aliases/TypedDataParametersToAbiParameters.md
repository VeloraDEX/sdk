[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / \_TypedDataParametersToAbiParameters

# Type Alias: \_TypedDataParametersToAbiParameters\<typedDataParameters, typedData, keyReferences\>

> **\_TypedDataParametersToAbiParameters**\<`typedDataParameters`, `typedData`, `keyReferences`\> = `` { [key in keyof typedDataParameters]: typedDataParameters[key] extends infer typedDataParameter extends { name: string; type: unknown } ? typedDataParameter["type"] extends keyof typedData & string ? { components: typedDataParameter["type"] extends keyof keyReferences ? Error<`Circular reference detected. '${typedDataParameter["type"]}' is a circular reference.`> : _TypedDataParametersToAbiParameters<typedData[typedDataParameter["type"]], typedData, keyReferences & { [_ in typedDataParameter["type"]]: true }>; name: typedDataParameter["name"]; type: "tuple" } : typedDataParameter["type"] extends `${infer type extends keyof typedData & string}[${infer tail}]` ? { components: type extends keyof keyReferences ? Error<`Circular reference detected. '${typedDataParameter["type"]}' is a circular reference.`> : _TypedDataParametersToAbiParameters<typedData[type], typedData, keyReferences & { [_ in type]: true }>; name: typedDataParameter["name"]; type: `tuple[${tail}]` } : typedDataParameter : never } ``

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/utils.d.ts:277

## Type Parameters

### typedDataParameters

`typedDataParameters` *extends* readonly [`TypedDataParameter`](TypedDataParameter.md)[]

### typedData

`typedData` *extends* [`TypedData`](TypedData.md)

### keyReferences

`keyReferences` *extends* \{\[`_`: `string`\]: `unknown`; \} \| `unknown` = `unknown`
