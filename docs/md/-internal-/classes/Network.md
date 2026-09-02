[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Network

# Class: Network

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/network.d.ts:27

A **Network** provides access to a chain's properties and allows
 for plug-ins to extend functionality.

## Constructors

### Constructor

> **new Network**(`name`, `chainId`): `Network`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/network.d.ts:32

Creates a new **Network** for %%name%% and %%chainId%%.

#### Parameters

##### name

`string`

##### chainId

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Network`

## Accessors

### chainId

#### Get Signature

> **get** **chainId**(): `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/network.d.ts:48

The network chain ID.

##### Returns

`bigint`

#### Set Signature

> **set** **chainId**(`value`): `void`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/network.d.ts:49

##### Parameters

###### value

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/network.d.ts:43

The network common name.

 This is the canonical name, as networks migh have multiple
 names.

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/network.d.ts:44

##### Parameters

###### value

`string`

##### Returns

`void`

***

### plugins

#### Get Signature

> **get** **plugins**(): [`NetworkPlugin`](NetworkPlugin.md)[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/network.d.ts:61

Returns the list of plugins currently attached to this Network.

##### Returns

[`NetworkPlugin`](NetworkPlugin.md)[]

## Methods

### attachPlugin()

> **attachPlugin**(`plugin`): `this`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/network.d.ts:66

Attach a new %%plugin%% to this Network. The network name
 must be unique, excluding any fragment.

#### Parameters

##### plugin

[`NetworkPlugin`](NetworkPlugin.md)

#### Returns

`this`

***

### clone()

> **clone**(): `Network`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/network.d.ts:81

Create a copy of this Network.

#### Returns

`Network`

***

### computeIntrinsicGas()

> **computeIntrinsicGas**(`tx`): `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/network.d.ts:88

Compute the intrinsic gas required for a transaction.

 A GasCostPlugin can be attached to override the default
 values.

#### Parameters

##### tx

[`TransactionLike`](../interfaces/TransactionLike.md)

#### Returns

`number`

***

### getPlugin()

> **getPlugin**\<`T`\>(`name`): `T` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/network.d.ts:72

Return the plugin, if any, matching %%name%% exactly. Plugins
 with fragments will not be returned unless %%name%% includes
 a fragment.

#### Type Parameters

##### T

`T` *extends* [`NetworkPlugin`](NetworkPlugin.md) = [`NetworkPlugin`](NetworkPlugin.md)

#### Parameters

##### name

`string`

#### Returns

`T` \| `null`

***

### getPlugins()

> **getPlugins**\<`T`\>(`basename`): `T`[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/network.d.ts:77

Gets a list of all plugins that match %%name%%, with otr without
 a fragment.

#### Type Parameters

##### T

`T` *extends* [`NetworkPlugin`](NetworkPlugin.md) = [`NetworkPlugin`](NetworkPlugin.md)

#### Parameters

##### basename

`string`

#### Returns

`T`[]

***

### matches()

> **matches**(`other`): `boolean`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/network.d.ts:57

Returns true if %%other%% matches this network. Any chain ID
 must match, and if no chain ID is present, the name must match.

 This method does not currently check for additional properties,
 such as ENS address or plug-in compatibility.

#### Parameters

##### other

[`Networkish`](../type-aliases/Networkish-1.md)

#### Returns

`boolean`

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/network.d.ts:36

Returns a JSON-compatible representation of a Network.

#### Returns

`any`

***

### from()

> `static` **from**(`network?`): `Network`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/network.d.ts:92

Returns a new Network for the %%network%% name or chainId.

#### Parameters

##### network?

[`Networkish`](../type-aliases/Networkish-1.md)

#### Returns

`Network`

***

### register()

> `static` **register**(`nameOrChainId`, `networkFunc`): `void`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/network.d.ts:97

Register %%nameOrChainId%% with a function which returns
 an instance of a Network representing that chain.

#### Parameters

##### nameOrChainId

`string` \| `number` \| `bigint`

##### networkFunc

() => `Network`

#### Returns

`void`
