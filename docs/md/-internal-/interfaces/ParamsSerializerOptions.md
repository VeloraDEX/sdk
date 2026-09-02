[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ParamsSerializerOptions

# Interface: ParamsSerializerOptions\<P\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:352

## Extends

- [`SerializerOptions`](SerializerOptions.md)

## Type Parameters

### P

`P` = [`Record`](../type-aliases/Record.md)\<`string`, `any`\>

## Properties

### Blob?

> `optional` **Blob?**: (...`args`) => `any`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:338

#### Parameters

##### args

...`any`[]

#### Returns

`any`

#### Inherited from

[`SerializerOptions`](SerializerOptions.md).[`Blob`](SerializerOptions.md#blob)

***

### dots?

> `optional` **dots?**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:334

#### Inherited from

[`SerializerOptions`](SerializerOptions.md).[`dots`](SerializerOptions.md#dots)

***

### encode?

> `optional` **encode?**: [`ParamEncoder`](ParamEncoder.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:353

***

### indexes?

> `optional` **indexes?**: `boolean` \| `null`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:336

#### Inherited from

[`SerializerOptions`](SerializerOptions.md).[`indexes`](SerializerOptions.md#indexes)

***

### maxDepth?

> `optional` **maxDepth?**: `number`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:337

#### Inherited from

[`SerializerOptions`](SerializerOptions.md).[`maxDepth`](SerializerOptions.md#maxdepth)

***

### metaTokens?

> `optional` **metaTokens?**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:335

#### Inherited from

[`SerializerOptions`](SerializerOptions.md).[`metaTokens`](SerializerOptions.md#metatokens)

***

### serialize?

> `optional` **serialize?**: [`CustomParamsSerializer`](CustomParamsSerializer.md)\<`P`\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:354

***

### visitor?

> `optional` **visitor?**: [`SerializerVisitor`](SerializerVisitor.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:333

#### Inherited from

[`SerializerOptions`](SerializerOptions.md).[`visitor`](SerializerOptions.md#visitor)
