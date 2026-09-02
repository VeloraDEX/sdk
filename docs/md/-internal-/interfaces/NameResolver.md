[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / NameResolver

# Interface: NameResolver

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/address/index.d.ts:36

An interface for any object which can resolve an ENS name.

## Extended by

- [`Signer`](Signer.md)
- [`Provider`](Provider.md)

## Methods

### resolveName()

> **resolveName**(`name`): `Promise`\<`string` \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/address/index.d.ts:44

Resolve to the address for the ENS %%name%%.

 Resolves to ``null`` if the name is unconfigued. Use
 [[resolveAddress]] (passing this object as %%resolver%%) to
 throw for names that are unconfigured.

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`string` \| `null`\>
