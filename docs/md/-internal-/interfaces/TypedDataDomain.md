[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TypedDataDomain

# Interface: TypedDataDomain

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/hash/typed-data.d.ts:6

The domain for an [[link-eip-712]] payload.

## Properties

### chainId?

> `optional` **chainId?**: [`BigNumberish`](../type-aliases/BigNumberish-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/hash/typed-data.d.ts:18

The chain ID of the signing domain.

***

### name?

> `optional` **name?**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/hash/typed-data.d.ts:10

The human-readable name of the signing domain.

***

### salt?

> `optional` **salt?**: [`BytesLike`](../type-aliases/BytesLike.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/hash/typed-data.d.ts:26

A salt used for purposes decided by the specific domain.

***

### verifyingContract?

> `optional` **verifyingContract?**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/hash/typed-data.d.ts:22

The the address of the contract that will verify the signature.

***

### version?

> `optional` **version?**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/hash/typed-data.d.ts:14

The major version of the signing domain.
