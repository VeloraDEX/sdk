[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiEventParameterToPrimitiveType

# Type Alias: AbiEventParameterToPrimitiveType\<abiParameter, _options, _type\>

> **AbiEventParameterToPrimitiveType**\<`abiParameter`, `_options`, `_type`\> = `_options`\[`"EnableUnion"`\] *extends* `true` ? [`LogTopicType`](LogTopicType.md)\<`_type`\> : `_type`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/contract.d.ts:117

**`Internal`**

## Type Parameters

### abiParameter

`abiParameter` *extends* [`AbiParameter`](AbiParameter-1.md)

### _options

`_options` *extends* [`EventParameterOptions`](EventParameterOptions.md) = [`DefaultEventParameterOptions`](DefaultEventParameterOptions.md)

### _type

`_type` = [`AbiParameterToPrimitiveType`](AbiParameterToPrimitiveType.md)\<`abiParameter`\>
