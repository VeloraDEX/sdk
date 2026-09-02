[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiEventParametersToPrimitiveTypes

# Type Alias: AbiEventParametersToPrimitiveTypes\<abiParameters, _options\>

> **AbiEventParametersToPrimitiveTypes**\<`abiParameters`, `_options`\> = `abiParameters` *extends* readonly \[\] ? readonly \[\] : [`Filter`](Filter-1.md)\<`abiParameters`, `_options`\[`"IndexedOnly"`\] *extends* `true` ? `object` : `object`\> *extends* infer Filtered ? [`_HasUnnamedAbiParameter`](HasUnnamedAbiParameter.md)\<`Filtered`\> *extends* `true` ? readonly \[`...{ [K in keyof Filtered]: AbiEventParameterToPrimitiveType<Filtered[K], _options> }`\] \| `_options`\[`"Required"`\] *extends* `true` ? `never` : `Filtered` *extends* readonly \[`...(infer Head extends (...))`, infer \_\] ? `AbiEventParametersToPrimitiveTypes`\<readonly \[`...(...)`\], `_options`\> : `never` : `{ [Parameter in Filtered[number] as Parameter extends { name: infer Name extends string } ? Name : never]?: AbiEventParameterToPrimitiveType<Parameter, _options> }` *extends* infer Mapped ? [`Prettify`](Prettify-1.md)\<[`MaybeRequired`](MaybeRequired.md)\<`Mapped`, `_options`\[`"Required"`\] *extends* `boolean` ? `_options`\[`"Required"`\] : `false`\>\> : `never` : `never`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/contract.d.ts:88

## Type Parameters

### abiParameters

`abiParameters` *extends* readonly [`AbiParameter`](AbiParameter-1.md)[]

### _options

`_options` *extends* [`EventParameterOptions`](EventParameterOptions.md) = [`DefaultEventParameterOptions`](DefaultEventParameterOptions.md)
