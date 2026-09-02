[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / NetworkPlugin

# Class: NetworkPlugin

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/plugins-network.d.ts:6

A **NetworkPlugin** provides additional functionality on a [[Network]].

## Constructors

### Constructor

> **new NetworkPlugin**(`name`): `NetworkPlugin`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/plugins-network.d.ts:17

Creates a new **NetworkPlugin**.

#### Parameters

##### name

`string`

#### Returns

`NetworkPlugin`

## Properties

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/plugins-network.d.ts:13

The name of the plugin.

 It is recommended to use reverse-domain-notation, which permits
 unique names with a known authority as well as hierarchal entries.

## Methods

### clone()

> **clone**(): `NetworkPlugin`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/plugins-network.d.ts:21

Creates a copy of this plugin.

#### Returns

`NetworkPlugin`
