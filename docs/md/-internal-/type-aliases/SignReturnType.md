[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SignReturnType

# Type Alias: SignReturnType\<to\>

> **SignReturnType**\<`to`\> = `to` *extends* `"object"` ? [`Signature`](Signature.md) : `never` \| `to` *extends* `"bytes"` ? [`ByteArray`](ByteArray.md) : `never` \| `to` *extends* `"hex"` ? [`Hex`](Hex.md) : `never`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/accounts/utils/sign.d.ts:12

## Type Parameters

### to

`to` *extends* [`To`](To-1.md) = `"object"`
