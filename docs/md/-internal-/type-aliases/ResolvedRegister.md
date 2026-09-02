[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ResolvedRegister

# Type Alias: ResolvedRegister

> **ResolvedRegister** = `object`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:3

## Properties

### addressType

> **addressType**: [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`DefaultRegister`](DefaultRegister.md)\[`"addressType"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:8

TypeScript type to use for `address` values

#### Default

`0x${string}`

***

### ~~AddressType~~

> **AddressType**: `ResolvedRegister`\[`"addressType"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:99

#### Deprecated

Use `addressType` instead

***

### arrayMaxDepth

> **arrayMaxDepth**: [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`DefaultRegister`](DefaultRegister.md)\[`"arrayMaxDepth"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:54

Maximum depth for nested array types (e.g. string[][])

Note: You probably only want to set this to a specific number if parsed types are returning as `unknown`
and you want to figure out why. If you set this, you should probably also reduce `FixedArrayMaxLength`.

#### Default

```ts
false
```

***

### ~~ArrayMaxDepth~~

> **ArrayMaxDepth**: `ResolvedRegister`\[`"arrayMaxDepth"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:107

#### Deprecated

Use `arrayMaxDepth` instead

***

### bigIntType

> **bigIntType**: [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`DefaultRegister`](DefaultRegister.md)\[`"bigIntType"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:17

TypeScript type to use for `int<M>` and `uint<M>` values, where `M > 48`

#### Default

```ts
bigint
```

***

### ~~BigIntType~~

> **BigIntType**: `ResolvedRegister`\[`"bigIntType"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:101

#### Deprecated

Use `addressType` instead

***

### bytesType

> **bytesType**: [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`DefaultRegister`](DefaultRegister.md)\[`"bytesType"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:26

TypeScript type to use for `bytes` values

#### Default

```ts
{ inputs: `0x${string}`; outputs: `0x${string}`; }
```

***

### ~~BytesType~~

> **BytesType**: `ResolvedRegister`\[`"bytesType"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:103

#### Deprecated

Use `bytesType` instead

***

### experimental\_namedTuples

> **experimental\_namedTuples**: [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`DefaultRegister`](DefaultRegister.md)\[`"experimental_namedTuples"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:82

Enables named tuple generation in [AbiParametersToPrimitiveTypes](AbiParametersToPrimitiveTypes.md) for common ABI parameter names.

#### Default

```ts
false
```

***

### fixedArrayMaxLength

> **fixedArrayMaxLength**: [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`DefaultRegister`](DefaultRegister.md)\[`"fixedArrayMaxLength"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:72

Upper bound for fixed array length

#### Default

```ts
99
```

***

### ~~FixedArrayMaxLength~~

> **FixedArrayMaxLength**: `ResolvedRegister`\[`"fixedArrayMaxLength"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:111

#### Deprecated

Use `fixedArrayMaxLength` instead

***

### fixedArrayMinLength

> **fixedArrayMinLength**: [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`DefaultRegister`](DefaultRegister.md)\[`"fixedArrayMinLength"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:63

Lower bound for fixed array length

#### Default

```ts
1
```

***

### ~~FixedArrayMinLength~~

> **FixedArrayMinLength**: `ResolvedRegister`\[`"fixedArrayMinLength"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:109

#### Deprecated

Use `fixedArrayMinLength` instead

***

### intType

> **intType**: [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`DefaultRegister`](DefaultRegister.md)\[`"intType"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:41

TypeScript type to use for `int<M>` and `uint<M>` values, where `M <= 48`

#### Default

```ts
number
```

***

### ~~IntType~~

> **IntType**: `ResolvedRegister`\[`"intType"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:105

#### Deprecated

Use `intType` instead

***

### strictAbiType

> **strictAbiType**: [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`Register`](../interfaces/Register.md) *extends* `object` ? `type` : [`DefaultRegister`](DefaultRegister.md)\[`"strictAbiType"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:93

When set, validates [AbiParameter](AbiParameter.md)'s `type` against [AbiType](AbiType.md)

Note: You probably only want to set this to `true` if parsed types are returning as `unknown`
and you want to figure out why.

#### Default

```ts
false
```

***

### ~~StrictAbiType~~

> **StrictAbiType**: `ResolvedRegister`\[`"strictAbiType"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:113

#### Deprecated

Use `strictAbiType` instead
