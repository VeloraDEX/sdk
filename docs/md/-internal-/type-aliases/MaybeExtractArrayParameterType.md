[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MaybeExtractArrayParameterType

# Type Alias: MaybeExtractArrayParameterType\<type\>

> **MaybeExtractArrayParameterType**\<`type`\> = `type` *extends* \`$\{infer head\}\[$\{"" \| \`$\{SolidityFixedArrayRange\}\`\}\]\` ? `type` *extends* `` `${head}[${infer size}]` `` ? \[`head`, `size`\] : `undefined` : `undefined`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/utils.d.ts:62

## Type Parameters

### type

`type`
