[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Resolver

# Class: Resolver

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:40

## Implements

- [`EnsResolver`](../interfaces/EnsResolver.md)

## Constructors

### Constructor

> **new Resolver**(`provider`, `address`, `name`, `resolvedAddress?`): `Resolver`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:46

#### Parameters

##### provider

[`BaseProvider`](BaseProvider.md)

##### address

`string`

##### name

`string`

##### resolvedAddress?

`string`

#### Returns

`Resolver`

## Properties

### \_resolvedAddress

> `readonly` **\_resolvedAddress**: `string` \| `null`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:44

***

### \_supportsEip2544

> **\_supportsEip2544**: `Promise`\<`boolean`\> \| `null`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:45

***

### address

> `readonly` **address**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:43

#### Implementation of

[`EnsResolver`](../interfaces/EnsResolver.md).[`address`](../interfaces/EnsResolver.md#address)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:42

#### Implementation of

[`EnsResolver`](../interfaces/EnsResolver.md).[`name`](../interfaces/EnsResolver.md#name)

***

### provider

> `readonly` **provider**: [`BaseProvider`](BaseProvider.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:41

## Methods

### \_fetch()

> **\_fetch**(`selector`, `parameters?`): `Promise`\<`string` \| `null`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:48

#### Parameters

##### selector

`string`

##### parameters?

`string`

#### Returns

`Promise`\<`string` \| `null`\>

***

### \_fetchBytes()

> **\_fetchBytes**(`selector`, `parameters?`): `Promise`\<`string` \| `null`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:49

#### Parameters

##### selector

`string`

##### parameters?

`string`

#### Returns

`Promise`\<`string` \| `null`\>

***

### \_getAddress()

> **\_getAddress**(`coinType`, `hexBytes`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:50

#### Parameters

##### coinType

`number`

##### hexBytes

`string`

#### Returns

`string`

***

### getAddress()

> **getAddress**(`coinType?`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:51

#### Parameters

##### coinType?

`number`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`EnsResolver`](../interfaces/EnsResolver.md).[`getAddress`](../interfaces/EnsResolver.md#getaddress)

***

### getAvatar()

> **getAvatar**(): `Promise`\<[`Avatar`](../interfaces/Avatar.md) \| `null`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:52

#### Returns

`Promise`\<[`Avatar`](../interfaces/Avatar.md) \| `null`\>

***

### getContentHash()

> **getContentHash**(): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:53

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`EnsResolver`](../interfaces/EnsResolver.md).[`getContentHash`](../interfaces/EnsResolver.md#getcontenthash)

***

### getText()

> **getText**(`key`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:54

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`EnsResolver`](../interfaces/EnsResolver.md).[`getText`](../interfaces/EnsResolver.md#gettext)

***

### supportsWildcard()

> **supportsWildcard**(): `Promise`\<`boolean`\>

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:47

#### Returns

`Promise`\<`boolean`\>
