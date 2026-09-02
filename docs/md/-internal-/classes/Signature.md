[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Signature

# Class: Signature

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:32

A Signature

## TODO

@_docloc: api/crypto:Signing

## Accessors

### compactSerialized

#### Get Signature

> **get** **compactSerialized**(): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:83

The [[link-eip-2098]] compact representation.

##### Returns

`string`

***

### legacyChainId

#### Get Signature

> **get** **legacyChainId**(): `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:68

The chain ID for EIP-155 legacy transactions. For non-legacy
 transactions, this value is ``null``.

##### Returns

`bigint` \| `null`

***

### networkV

#### Get Signature

> **get** **networkV**(): `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:63

The EIP-155 ``v`` for legacy transactions. For non-legacy
 transactions, this value is ``null``.

##### Returns

`bigint` \| `null`

***

### r

#### Get Signature

> **get** **r**(): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:40

The ``r`` value for a signautre.

 This represents the ``x`` coordinate of a "reference" or
 challenge point, from which the ``y`` can be computed.

##### Returns

`string`

#### Set Signature

> **set** **r**(`value`): `void`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:41

##### Parameters

###### value

[`BytesLike`](../type-aliases/BytesLike.md)

##### Returns

`void`

***

### s

#### Get Signature

> **get** **s**(): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:45

The ``s`` value for a signature.

##### Returns

`string`

#### Set Signature

> **set** **s**(`_value`): `void`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:46

##### Parameters

###### \_value

[`BytesLike`](../type-aliases/BytesLike.md)

##### Returns

`void`

***

### serialized

#### Get Signature

> **get** **serialized**(): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:87

The serialized representation.

##### Returns

`string`

***

### v

#### Get Signature

> **get** **v**(): `27` \| `28`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:57

The ``v`` value for a signature.

 Since a given ``x`` value for ``r`` has two possible values for
 its correspondin ``y``, the ``v`` indicates which of the two ``y``
 values to use.

 It is normalized to the values ``27`` or ``28`` for legacy
 purposes.

##### Returns

`27` \| `28`

#### Set Signature

> **set** **v**(`value`): `void`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:58

##### Parameters

###### value

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

##### Returns

`void`

***

### yParity

#### Get Signature

> **get** **yParity**(): `0` \| `1`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:74

The ``yParity`` for the signature.

 See ``v`` for more details on how this value is used.

##### Returns

`0` \| `1`

***

### yParityAndS

#### Get Signature

> **get** **yParityAndS**(): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:79

The [[link-eip-2098]] compact representation of the ``yParity``
 and ``s`` compacted into a single ``bytes32``.

##### Returns

`string`

## Methods

### clone()

> **clone**(): `Signature`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:95

Returns a new identical [[Signature]].

#### Returns

`Signature`

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:99

Returns a representation that is compatible with ``JSON.stringify``.

#### Returns

`any`

***

### from()

> `static` **from**(`sig?`): `Signature`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:156

Creates a new [[Signature]].

 If no %%sig%% is provided, a new [[Signature]] is created
 with default values.

 If %%sig%% is a string, it is parsed.

#### Parameters

##### sig?

[`SignatureLike`](../type-aliases/SignatureLike.md)

#### Returns

`Signature`

***

### getChainId()

> `static` **getChainId**(`v`): `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:110

Compute the chain ID from the ``v`` in a legacy EIP-155 transactions.

 @example:
   Signature.getChainId(45)
   //_result:

   Signature.getChainId(46)
   //_result:

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`bigint`

***

### getChainIdV()

> `static` **getChainIdV**(`chainId`, `v`): `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:125

Compute the ``v`` for a chain ID for a legacy EIP-155 transactions.

 Legacy transactions which use [[link-eip-155]] hijack the ``v``
 property to include the chain ID.

 @example:
   Signature.getChainIdV(5, 27)
   //_result:

   Signature.getChainIdV(5, 28)
   //_result:

#### Parameters

##### chainId

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

##### v

`27` \| `28`

#### Returns

`bigint`

***

### getNormalizedV()

> `static` **getNormalizedV**(`v`): `27` \| `28`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/crypto/signature.d.ts:147

Compute the normalized legacy transaction ``v`` from a ``yParirty``,
 a legacy transaction ``v`` or a legacy [[link-eip-155]] transaction.

 @example:
   // The values 0 and 1 imply v is actually yParity
   Signature.getNormalizedV(0)
   //_result:

   // Legacy non-EIP-1559 transaction (i.e. 27 or 28)
   Signature.getNormalizedV(27)
   //_result:

   // Legacy EIP-155 transaction (i.e. >= 35)
   Signature.getNormalizedV(46)
   //_result:

   // Invalid values throw
   Signature.getNormalizedV(5)
   //_error:

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`27` \| `28`
