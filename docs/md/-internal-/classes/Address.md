[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Address

# Class: Address

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/address.d.ts:1

## Constructors

### Constructor

> **new Address**(`buf`): `Address`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/address.d.ts:3

#### Parameters

##### buf

`Uint8Array`

#### Returns

`Address`

## Properties

### buf

> `readonly` **buf**: `Uint8Array`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/address.d.ts:2

## Methods

### equals()

> **equals**(`address`): `boolean`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/address.d.ts:11

Is address equal to another.

#### Parameters

##### address

`Address`

#### Returns

`boolean`

***

### isZero()

> **isZero**(): `boolean`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/address.d.ts:15

Is address zero.

#### Returns

`boolean`

***

### toArray()

> **toArray**(): `Uint8Array`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/address.d.ts:23

Returns Uint8Array representation of address.

#### Returns

`Uint8Array`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/address.d.ts:19

Returns hex encoding of address.

#### Returns

`string`

***

### publicToAddress()

> `static` **publicToAddress**(`_pubKey`, `sanitize?`): `Uint8Array`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/address.d.ts:30

Returns the ethereum address of a given public key.
Accepts "Ethereum public keys" and SEC1 encoded keys.

#### Parameters

##### \_pubKey

`Uint8Array`

##### sanitize?

`boolean`

Accept public keys in other formats

#### Returns

`Uint8Array`

***

### zero()

> `static` **zero**(): `Address`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/tx/address.d.ts:7

Returns the zero address.

#### Returns

`Address`
