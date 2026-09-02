[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / NonceManager

# Type Alias: NonceManager

> **NonceManager** = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/nonceManager.d.ts:11

## Properties

### consume

> **consume**: (`parameters`) => `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/nonceManager.d.ts:13

Get and increment a nonce.

#### Parameters

##### parameters

[`FunctionParameters`](FunctionParameters.md) & `object`

#### Returns

`Promise`\<`number`\>

***

### get

> **get**: (`chainId`) => `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/nonceManager.d.ts:19

Get a nonce.

#### Parameters

##### chainId

[`FunctionParameters`](FunctionParameters.md) & `object`

#### Returns

`Promise`\<`number`\>

***

### increment

> **increment**: (`chainId`) => `void`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/nonceManager.d.ts:17

Increment a nonce.

#### Parameters

##### chainId

[`FunctionParameters`](FunctionParameters.md)

#### Returns

`void`

***

### reset

> **reset**: (`chainId`) => `void`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/nonceManager.d.ts:23

Reset a nonce.

#### Parameters

##### chainId

[`FunctionParameters`](FunctionParameters.md)

#### Returns

`void`
