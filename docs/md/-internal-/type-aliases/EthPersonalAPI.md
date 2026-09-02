[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EthPersonalAPI

# Type Alias: EthPersonalAPI

> **EthPersonalAPI** = `object`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_personal\_api.d.ts:3

## Properties

### personal\_ecRecover

> **personal\_ecRecover**: (`signedData`, `signature`) => [`Address`](Address-2.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_personal\_api.d.ts:12

#### Parameters

##### signedData

[`HexString`](HexString.md)

##### signature

[`HexString`](HexString.md)

#### Returns

[`Address`](Address-2.md)

***

### personal\_importRawKey

> **personal\_importRawKey**: (`keyData`, `passphrase`) => [`HexString`](HexString.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_personal\_api.d.ts:8

#### Parameters

##### keyData

[`HexString`](HexString.md)

##### passphrase

`string`

#### Returns

[`HexString`](HexString.md)

***

### personal\_listAccounts

> **personal\_listAccounts**: () => [`Address`](Address-2.md)[]

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_personal\_api.d.ts:4

#### Returns

[`Address`](Address-2.md)[]

***

### personal\_lockAccount

> **personal\_lockAccount**: (`address`) => `boolean`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_personal\_api.d.ts:7

#### Parameters

##### address

[`Address`](Address-2.md)

#### Returns

`boolean`

***

### personal\_newAccount

> **personal\_newAccount**: (`password`) => [`Address`](Address-2.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_personal\_api.d.ts:5

#### Parameters

##### password

`string`

#### Returns

[`Address`](Address-2.md)

***

### personal\_sendTransaction

> **personal\_sendTransaction**: (`tx`, `passphrase`) => [`HexString`](HexString.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_personal\_api.d.ts:9

#### Parameters

##### tx

[`Transaction`](../interfaces/Transaction-1.md)

##### passphrase

`string`

#### Returns

[`HexString`](HexString.md)

***

### personal\_sign

> **personal\_sign**: (`data`, `address`, `passphrase`) => [`HexString`](HexString.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_personal\_api.d.ts:11

#### Parameters

##### data

[`HexString`](HexString.md)

##### address

[`Address`](Address-2.md)

##### passphrase

`string`

#### Returns

[`HexString`](HexString.md)

***

### personal\_signTransaction

> **personal\_signTransaction**: (`tx`, `passphrase`) => [`HexString`](HexString.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_personal\_api.d.ts:10

#### Parameters

##### tx

[`Transaction`](../interfaces/Transaction-1.md)

##### passphrase

`string`

#### Returns

[`HexString`](HexString.md)

***

### personal\_unlockAccount

> **personal\_unlockAccount**: (`address`, `password`, `unlockDuration`) => `boolean`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/eth\_personal\_api.d.ts:6

#### Parameters

##### address

[`Address`](Address-2.md)

##### password

`string`

##### unlockDuration

`number`

#### Returns

`boolean`
