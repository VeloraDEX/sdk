[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Common

# Class: Common

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:14

Common class to access chain and hardfork parameters and to provide
a unified and shared view on the network and hardfork state.

Use the [Common.custom](#custom) static constructor for creating simple
custom chain Common objects (more complete custom chain setups
can be created via the main constructor and the [CommonOpts.customChains](../interfaces/CommonOpts.md#customchains) parameter).

## Extends

- [`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md)

## Constructors

### Constructor

> **new Common**(`opts`): `Common`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:60

#### Parameters

##### opts

[`CommonOpts`](../interfaces/CommonOpts.md)

#### Returns

`Common`

#### Overrides

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md).[`constructor`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md#constructor)

## Properties

### DEFAULT\_HARDFORK

> `readonly` **DEFAULT\_HARDFORK**: `string`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:15

***

### prefixed

> `static` **prefixed**: `string` \| `boolean`

Defined in: node\_modules/.pnpm/eventemitter3@5.0.4/node\_modules/eventemitter3/index.d.ts:9

#### Inherited from

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md).[`prefixed`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md#prefixed)

## Methods

### \_calcForkHash()

> **\_calcForkHash**(`hardfork`, `genesisHash`): `string`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:241

Internal helper function to calculate a fork hash

#### Parameters

##### hardfork

`string`

Hardfork name

##### genesisHash

`Uint8Array`

Genesis block hash of the chain

#### Returns

`string`

Fork hash as hex string

***

### \_getHardfork()

> **\_getHardfork**(`hardfork`): [`HardforkConfig`](../interfaces/HardforkConfig.md) \| `null`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:106

Internal helper function, returns the params for the given hardfork for the chain set

#### Parameters

##### hardfork

`string`

Hardfork name

#### Returns

[`HardforkConfig`](../interfaces/HardforkConfig.md) \| `null`

Dictionary with hardfork params or null if hardfork not on chain

***

### activeOnBlock()

> **activeOnBlock**(`blockNumber`): `boolean`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:172

Alias to hardforkIsActiveOnBlock when hardfork is set

#### Parameters

##### blockNumber

[`Numbers`](../type-aliases/Numbers.md)

#### Returns

`boolean`

True if HF is active on block number

***

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context?`): `this`

Defined in: node\_modules/.pnpm/eventemitter3@5.0.4/node\_modules/eventemitter3/index.d.ts:45

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

##### fn

(...`args`) => `void`

##### context?

`any`

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md).[`addListener`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md#addlistener)

***

### bootstrapNodes()

> **bootstrapNodes**(): [`BootstrapNodeConfig`](../interfaces/BootstrapNodeConfig.md)[] \| `undefined`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:274

Returns bootstrap nodes for the current chain

#### Returns

[`BootstrapNodeConfig`](../interfaces/BootstrapNodeConfig.md)[] \| `undefined`

Dict with bootstrap nodes

***

### chainId()

> **chainId**(): `bigint`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:289

Returns the Id of current chain

#### Returns

`bigint`

chain Id

***

### chainName()

> **chainName**(): `string`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:294

Returns the name of current chain

#### Returns

`string`

chain name (lower case)

***

### consensusAlgorithm()

> **consensusAlgorithm**(): `string`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:321

Returns the concrete consensus implementation
algorithm or protocol for the network
e.g. "ethash" for "pow" consensus type,
"clique" for "poa" consensus type or
"casper" for "pos" consensus type.

Note: This value can update along a Hardfork.

#### Returns

`string`

***

### consensusConfig()

> **consensusConfig**(): `object`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:335

Returns a dictionary with consensus configuration
parameters based on the consensus algorithm

Expected returns (parameters must be present in
the respective chain json files):

ethash: empty object
clique: period, epoch
casper: empty object

Note: This value can update along a Hardfork.

#### Returns

`object`

***

### consensusType()

> **consensusType**(): `string`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:311

Returns the consensus type of the network
Possible values: "pow"|"poa"|"pos"

Note: This value can update along a Hardfork.

#### Returns

`string`

***

### copy()

> **copy**(): `Common`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:341

Returns a deep copy of this Common instance.

#### Returns

`Common`

***

### dnsNetworks()

> **dnsNetworks**(): `string`[]

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:279

Returns DNS networks for the current chain

#### Returns

`string`[]

Array of DNS ENR urls

***

### eipBlock()

> **eipBlock**(`eip`): `bigint` \| `null`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:199

Returns the hardfork change block for eip

#### Parameters

##### eip

`number`

EIP number

#### Returns

`bigint` \| `null`

Block number or null if unscheduled

***

### eips()

> **eips**(): `number`[]

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:304

Returns the active EIPs

#### Returns

`number`[]

List of EIPs

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Defined in: node\_modules/.pnpm/eventemitter3@5.0.4/node\_modules/eventemitter3/index.d.ts:32

Calls each of the listeners registered for a given event.

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

##### args

...`any`[]

#### Returns

`boolean`

#### Inherited from

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md).[`emit`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md#emit)

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Defined in: node\_modules/.pnpm/eventemitter3@5.0.4/node\_modules/eventemitter3/index.d.ts:15

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md).[`eventNames`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md#eventnames)

***

### forkHash()

> **forkHash**(`_hardfork?`, `genesisHash?`): `string`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:247

Returns an eth/64 compliant fork hash (EIP-2124)

#### Parameters

##### \_hardfork?

`string`

##### genesisHash?

`Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>

Genesis block hash of the chain, optional if already defined and not needed to be calculated

#### Returns

`string`

***

### genesis()

> **genesis**(): [`GenesisBlockConfig`](../interfaces/GenesisBlockConfig.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:264

Returns the Genesis parameters of the current chain

#### Returns

[`GenesisBlockConfig`](../interfaces/GenesisBlockConfig.md)

Genesis dictionary

***

### getHardforkByBlockNumber()

> **getHardforkByBlockNumber**(`_blockNumber`, `_td?`, `_timestamp?`): `string`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:86

Returns the hardfork based on the block number or an optional
total difficulty (Merge HF) provided.

An optional TD takes precedence in case the corresponding HF block
is set to `null` or otherwise needs to match (if not an error
will be thrown).

#### Parameters

##### \_blockNumber

[`Numbers`](../type-aliases/Numbers.md)

##### \_td?

[`Numbers`](../type-aliases/Numbers.md)

##### \_timestamp?

[`Numbers`](../type-aliases/Numbers.md)

#### Returns

`string`

The name of the HF

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: node\_modules/.pnpm/web3-utils@4.3.2/node\_modules/web3-utils/lib/commonjs/event\_emitter.d.ts:9

#### Returns

`number`

#### Inherited from

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md).[`getMaxListeners`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md#getmaxlisteners)

***

### gteHardfork()

> **gteHardfork**(`hardfork`): `boolean`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:186

Alias to hardforkGteHardfork when hardfork is set

#### Parameters

##### hardfork

`string`

Hardfork name

#### Returns

`boolean`

True if hardfork set is greater than hardfork provided

***

### hardfork()

> **hardfork**(): `string`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:284

Returns the hardfork set

#### Returns

`string`

Hardfork name

***

### hardforkBlock()

> **hardforkBlock**(`_hardfork?`): `bigint` \| `null`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:192

Returns the hardfork change block for hardfork provided or set

#### Parameters

##### \_hardfork?

`string`

#### Returns

`bigint` \| `null`

Block number or null if unscheduled

***

### hardforkForForkHash()

> **hardforkForForkHash**(`forkHash`): [`HardforkConfig`](../interfaces/HardforkConfig.md) \| `null`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:253

#### Parameters

##### forkHash

`string`

Fork hash as a hex string

#### Returns

[`HardforkConfig`](../interfaces/HardforkConfig.md) \| `null`

Array with hardfork data (name, block, forkHash)

***

### hardforkGteHardfork()

> **hardforkGteHardfork**(`_hardfork1`, `hardfork2`): `boolean`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:180

Sequence based check if given or set HF1 is greater than or equal HF2

#### Parameters

##### \_hardfork1

`string` \| `null`

##### hardfork2

`string`

Hardfork name

#### Returns

`boolean`

True if HF1 gte HF2

***

### hardforkIsActiveOnBlock()

> **hardforkIsActiveOnBlock**(`_hardfork`, `_blockNumber`): `boolean`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:166

Checks if set or provided hardfork is active on block number

#### Parameters

##### \_hardfork

`string` \| `null`

##### \_blockNumber

[`Numbers`](../type-aliases/Numbers.md)

#### Returns

`boolean`

True if HF is active on block number

***

### hardforks()

> **hardforks**(): [`HardforkConfig`](../interfaces/HardforkConfig.md)[]

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:269

Returns the hardforks for current chain

#### Returns

[`HardforkConfig`](../interfaces/HardforkConfig.md)[]

Array with arrays of hardforks

***

### hardforkTimestamp()

> **hardforkTimestamp**(`_hardfork?`): `bigint` \| `null`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:193

#### Parameters

##### \_hardfork?

`string`

#### Returns

`bigint` \| `null`

***

### hardforkTTD()

> **hardforkTTD**(`_hardfork?`): `bigint` \| `null`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:205

Returns the hardfork change total difficulty (Merge HF) for hardfork provided or set

#### Parameters

##### \_hardfork?

`string`

#### Returns

`bigint` \| `null`

Total difficulty or null if no set

***

### isActivatedEIP()

> **isActivatedEIP**(`eip`): `boolean`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:159

Checks if an EIP is activated by either being included in the EIPs
manually passed in with the [CommonOpts.eips](../interfaces/BaseOpts.md#eips) or in a
hardfork currently being active

Note: this method only works for EIPs being supported
by the [CommonOpts.eips](../interfaces/BaseOpts.md#eips) constructor option

#### Parameters

##### eip

`number`

#### Returns

`boolean`

***

### ~~isHardforkBlock()~~

> **isHardforkBlock**(`_blockNumber`, `_hardfork?`): `boolean`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:213

True if block number provided is the hardfork (given or set) change block

#### Parameters

##### \_blockNumber

[`Numbers`](../type-aliases/Numbers.md)

##### \_hardfork?

`string`

#### Returns

`boolean`

True if blockNumber is HF block

#### Deprecated

***

### ~~isNextHardforkBlock()~~

> **isNextHardforkBlock**(`_blockNumber`, `_hardfork?`): `boolean`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:234

True if block number provided is the hardfork change block following the hardfork given or set

#### Parameters

##### \_blockNumber

[`Numbers`](../type-aliases/Numbers.md)

##### \_hardfork?

`string`

#### Returns

`boolean`

True if blockNumber is HF block

#### Deprecated

***

### listenerCount()

> **listenerCount**(`event`): `number`

Defined in: node\_modules/.pnpm/eventemitter3@5.0.4/node\_modules/eventemitter3/index.d.ts:27

Return the number of listeners listening to a given event.

#### Parameters

##### event

`string` \| `symbol`

#### Returns

`number`

#### Inherited from

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md).[`listenerCount`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md#listenercount)

***

### listeners()

> **listeners**\<`T`\>(`event`): (...`args`) => `void`[]

Defined in: node\_modules/.pnpm/eventemitter3@5.0.4/node\_modules/eventemitter3/index.d.ts:20

Return the listeners registered for a given event.

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

#### Returns

(...`args`) => `void`[]

#### Inherited from

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md).[`listeners`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md#listeners)

***

### networkId()

> **networkId**(): `bigint`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:299

Returns the Id of current network

#### Returns

`bigint`

network Id

***

### ~~nextHardforkBlock()~~

> **nextHardforkBlock**(`_hardfork?`): `bigint` \| `null`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:226

Returns the change block for the next hardfork after the hardfork provided or set

#### Parameters

##### \_hardfork?

`string`

#### Returns

`bigint` \| `null`

Block number or null if not available

#### Deprecated

***

### nextHardforkBlockOrTimestamp()

> **nextHardforkBlockOrTimestamp**(`_hardfork?`): `bigint` \| `null`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:219

Returns the change block for the next hardfork after the hardfork provided or set

#### Parameters

##### \_hardfork?

`string`

#### Returns

`bigint` \| `null`

Block timestamp, number or null if not available

***

### off()

> **off**\<`T`\>(`event`, `fn?`, `context?`, `once?`): `this`

Defined in: node\_modules/.pnpm/eventemitter3@5.0.4/node\_modules/eventemitter3/index.d.ts:69

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

##### fn?

(...`args`) => `void`

##### context?

`any`

##### once?

`boolean`

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md).[`off`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md#off)

***

### on()

> **on**\<`T`\>(`event`, `fn`, `context?`): `this`

Defined in: node\_modules/.pnpm/eventemitter3@5.0.4/node\_modules/eventemitter3/index.d.ts:40

Add a listener for a given event.

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

##### fn

(...`args`) => `void`

##### context?

`any`

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md).[`on`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md#on)

***

### once()

> **once**\<`T`\>(`event`, `fn`, `context?`): `this`

Defined in: node\_modules/.pnpm/eventemitter3@5.0.4/node\_modules/eventemitter3/index.d.ts:54

Add a one-time listener for a given event.

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

##### fn

(...`args`) => `void`

##### context?

`any`

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md).[`once`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md#once)

***

### param()

> **param**(`topic`, `name`): `bigint`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:123

Returns a parameter for the current chain setup

If the parameter is present in an EIP, the EIP always takes precedence.
Otherwise the parameter if taken from the latest applied HF with
a change on the respective parameter.

#### Parameters

##### topic

`string`

Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')

##### name

`string`

Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)

#### Returns

`bigint`

The value requested or `BigInt(0)` if not found

***

### paramByBlock()

> **paramByBlock**(`topic`, `name`, `blockNumber`, `td?`, `timestamp?`): `bigint`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:149

Returns a parameter for the hardfork active on block number or
optional provided total difficulty (Merge HF)

#### Parameters

##### topic

`string`

Parameter topic

##### name

`string`

Parameter name

##### blockNumber

[`Numbers`](../type-aliases/Numbers.md)

Block number

##### td?

[`Numbers`](../type-aliases/Numbers.md)

Total difficulty
   *

##### timestamp?

[`Numbers`](../type-aliases/Numbers.md)

#### Returns

`bigint`

The value requested or `BigInt(0)` if not found

***

### paramByEIP()

> **paramByEIP**(`topic`, `name`, `eip`): `bigint` \| `undefined`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:139

Returns a parameter corresponding to an EIP

#### Parameters

##### topic

`string`

Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')

##### name

`string`

Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)

##### eip

`number`

Number of the EIP

#### Returns

`bigint` \| `undefined`

The value requested or `undefined` if not found

***

### paramByHardfork()

> **paramByHardfork**(`topic`, `name`, `hardfork`): `bigint`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:131

Returns the parameter corresponding to a hardfork

#### Parameters

##### topic

`string`

Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')

##### name

`string`

Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)

##### hardfork

`string`

Hardfork name

#### Returns

`bigint`

The value requested or `BigInt(0)` if not found

***

### removeAllListeners()

> **removeAllListeners**(`event?`): `this`

Defined in: node\_modules/.pnpm/eventemitter3@5.0.4/node\_modules/eventemitter3/index.d.ts:79

Remove all listeners, or those of the specified event.

#### Parameters

##### event?

`string` \| `symbol`

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md).[`removeAllListeners`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md#removealllisteners)

***

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn?`, `context?`, `once?`): `this`

Defined in: node\_modules/.pnpm/eventemitter3@5.0.4/node\_modules/eventemitter3/index.d.ts:63

Remove the listeners of a given event.

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

##### fn?

(...`args`) => `void`

##### context?

`any`

##### once?

`boolean`

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md).[`removeListener`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md#removelistener)

***

### setChain()

> **setChain**(`chain`): [`ChainConfig`](../interfaces/ChainConfig.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:67

Sets the chain

#### Parameters

##### chain

`string` \| `number` \| `bigint` \| `object`

String ('mainnet') or Number (1) chain representation.
             Or, a Dictionary of chain parameters for a private network.

#### Returns

[`ChainConfig`](../interfaces/ChainConfig.md)

The dictionary with parameters set as chain

***

### setEIPs()

> **setEIPs**(`eips?`): `void`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:111

Sets the active EIPs

#### Parameters

##### eips?

`number`[]

#### Returns

`void`

***

### setForkHashes()

> **setForkHashes**(`genesisHash`): `void`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:259

Sets any missing forkHashes on the passed-in Common instance

#### Parameters

##### genesisHash

`Uint8Array`

The genesis block hash

#### Returns

`void`

***

### setHardfork()

> **setHardfork**(`hardfork`): `void`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:72

Sets the hardfork to get params for

#### Parameters

##### hardfork

`string`

String identifier (e.g. 'byzantium') or Hardfork enum

#### Returns

`void`

***

### setHardforkByBlockNumber()

> **setHardforkByBlockNumber**(`blockNumber`, `td?`, `timestamp?`): `string`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:100

Sets a new hardfork based on the block number or an optional
total difficulty (Merge HF) provided.

An optional TD takes precedence in case the corresponding HF block
is set to `null` or otherwise needs to match (if not an error
will be thrown).

#### Parameters

##### blockNumber

[`Numbers`](../type-aliases/Numbers.md)

##### td?

[`Numbers`](../type-aliases/Numbers.md)

##### timestamp?

[`Numbers`](../type-aliases/Numbers.md)

#### Returns

`string`

The name of the HF set

***

### setMaxListeners()

> **setMaxListeners**(`maxListeners`): `this`

Defined in: node\_modules/.pnpm/web3-utils@4.3.2/node\_modules/web3-utils/lib/commonjs/event\_emitter.d.ts:8

#### Parameters

##### maxListeners

`number`

#### Returns

`this`

#### Inherited from

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md).[`setMaxListeners`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md#setmaxlisteners)

***

### \_getInitializedChains()

> `static` **\_getInitializedChains**(`customChains?`): [`ChainsConfig`](../interfaces/ChainsConfig.md)

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:342

#### Parameters

##### customChains?

[`ChainConfig`](../interfaces/ChainConfig.md)[]

#### Returns

[`ChainsConfig`](../interfaces/ChainsConfig.md)

***

### custom()

> `static` **custom**(`chainParamsOrName`, `opts?`): `Common`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:45

Creates a Common object for a custom chain, based on a standard one.

It uses all the [Chain](../enumerations/Chain.md) parameters from the baseChain option except the ones overridden
in a provided chainParamsOrName dictionary. Some usage example:

```javascript
Common.custom({chainId: 123})
```

There are also selected supported custom chains which can be initialized by using one of the
CustomChains for chainParamsOrName, e.g.:

```javascript
Common.custom(CustomChains.MaticMumbai)
```

Note that these supported custom chains only provide some base parameters (usually the chain and
network ID and a name) and can only be used for selected use cases (e.g. sending a tx with
the `web3-utils/tx` library to a Layer-2 chain).

#### Parameters

##### chainParamsOrName

[`Partial`](../type-aliases/Partial.md)\<[`ChainConfig`](../interfaces/ChainConfig.md)\> \| [`CustomChain`](../enumerations/CustomChain.md)

Custom parameter dict (`name` will default to `custom-chain`) or string with name of a supported custom chain

##### opts?

[`CustomCommonOpts`](../interfaces/CustomCommonOpts.md)

Custom chain options to set the [CustomCommonOpts.baseChain](../interfaces/CustomCommonOpts.md#basechain), selected [CustomCommonOpts.hardfork](../interfaces/BaseOpts.md#hardfork) and others

#### Returns

`Common`

***

### fromGethGenesis()

> `static` **fromGethGenesis**(`genesisJson`, `to`): `Common`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:52

Static method to load and set common from a geth genesis json

#### Parameters

##### genesisJson

`any`

json of geth configuration

##### to

[`GethConfigOpts`](../interfaces/GethConfigOpts.md)

further configure the common instance

#### Returns

`Common`

Common

***

### isSupportedChainId()

> `static` **isSupportedChainId**(`chainId`): `boolean`

Defined in: node\_modules/.pnpm/web3-eth-accounts@4.2.1/node\_modules/web3-eth-accounts/lib/commonjs/common/common.d.ts:58

Static method to determine if a chainId is supported as a standard chain

#### Parameters

##### chainId

`bigint`

bigint id (`1`) of a standard chain

#### Returns

`boolean`

boolean
