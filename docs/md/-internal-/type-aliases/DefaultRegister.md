[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / DefaultRegister

# Type Alias: DefaultRegister

> **DefaultRegister** = `object`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:115

## Properties

### addressType

> **addressType**: `` `0x${string}` ``

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:123

TypeScript type to use for `address` values

***

### ~~AddressType~~

> **AddressType**: `DefaultRegister`\[`"addressType"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:146

#### Deprecated

Use `addressType` instead

***

### arrayMaxDepth

> **arrayMaxDepth**: `false`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:117

Maximum depth for nested array types (e.g. string[][])

***

### ~~ArrayMaxDepth~~

> **ArrayMaxDepth**: `DefaultRegister`\[`"arrayMaxDepth"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:140

#### Deprecated

Use `arrayMaxDepth` instead

***

### bigIntType

> **bigIntType**: `bigint`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:132

TypeScript type to use for `int<M>` and `uint<M>` values, where `M > 48`

***

### ~~BigIntType~~

> **BigIntType**: `DefaultRegister`\[`"bigIntType"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:153

#### Deprecated

Use `bigIntType` instead

***

### bytesType

> **bytesType**: `object`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:125

TypeScript type to use for `bytes` values

#### inputs

> **inputs**: `` `0x${string}` ``

TypeScript type to use for `bytes` input values

#### outputs

> **outputs**: `` `0x${string}` ``

TypeScript type to use for `bytes` output values

***

### ~~BytesType~~

> **BytesType**: `object`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:148

#### ~~inputs~~

> **inputs**: `DefaultRegister`\[`"bytesType"`\]\[`"inputs"`\]

#### ~~outputs~~

> **outputs**: `DefaultRegister`\[`"bytesType"`\]\[`"outputs"`\]

#### Deprecated

Use `bytesType` instead

***

### experimental\_namedTuples

> **experimental\_namedTuples**: `false`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:136

Enables named tuple generation in [AbiParametersToPrimitiveTypes](AbiParametersToPrimitiveTypes.md) for common ABI parameter names

***

### fixedArrayMaxLength

> **fixedArrayMaxLength**: `99`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:121

Upper bound for fixed array length

***

### ~~FixedArrayMaxLength~~

> **FixedArrayMaxLength**: `DefaultRegister`\[`"fixedArrayMaxLength"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:144

#### Deprecated

Use `fixedArrayMaxLength` instead

***

### fixedArrayMinLength

> **fixedArrayMinLength**: `1`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:119

Lower bound for fixed array length

***

### ~~FixedArrayMinLength~~

> **FixedArrayMinLength**: `DefaultRegister`\[`"fixedArrayMinLength"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:142

#### Deprecated

Use `fixedArrayMinLength` instead

***

### intType

> **intType**: `number`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:134

TypeScript type to use for `int<M>` and `uint<M>` values, where `M <= 48`

***

### ~~IntType~~

> **IntType**: `DefaultRegister`\[`"intType"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:155

#### Deprecated

Use `intType` instead

***

### strictAbiType

> **strictAbiType**: `false`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:138

When set, validates [AbiParameter](AbiParameter.md)'s `type` against [AbiType](AbiType.md)

***

### ~~StrictAbiType~~

> **StrictAbiType**: `DefaultRegister`\[`"strictAbiType"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/register.d.ts:157

#### Deprecated

Use `strictAbiType` instead
