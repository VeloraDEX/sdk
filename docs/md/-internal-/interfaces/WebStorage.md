[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WebStorage

# Interface: WebStorage

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/types.d.ts:25

This Web Storage API interface provides access to a particular domain's session or local storage. It allows, for example, the addition, modification, or deletion of stored data items.

## Indexable

> \[`name`: `string`\]: `any`

## Properties

### length

> `readonly` **length**: `number`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/types.d.ts:27

Returns the number of key/value pairs.

## Methods

### clear()

> **clear**(): `void`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/types.d.ts:33

Removes all key/value pairs, if there are any.

Dispatches a storage event on Window objects holding an equivalent Storage object.

#### Returns

`void`

***

### getItem()

> **getItem**(`key`): `string` \| `null`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/types.d.ts:35

Returns the current value associated with the given key, or null if the given key does not exist.

#### Parameters

##### key

`string`

#### Returns

`string` \| `null`

***

### key()

> **key**(`index`): `string` \| `null`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/types.d.ts:37

Returns the name of the nth key, or null if n is greater than or equal to the number of key/value pairs.

#### Parameters

##### index

`number`

#### Returns

`string` \| `null`

***

### removeItem()

> **removeItem**(`key`): `void`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/types.d.ts:43

Removes the key/value pair with the given key, if a key/value pair with the given key exists.

Dispatches a storage event on Window objects holding an equivalent Storage object.

#### Parameters

##### key

`string`

#### Returns

`void`

***

### setItem()

> **setItem**(`key`, `value`): `void`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/types.d.ts:51

Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.

Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)

Dispatches a storage event on Window objects holding an equivalent Storage object.

#### Parameters

##### key

`string`

##### value

`string`

#### Returns

`void`
