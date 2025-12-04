[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ClientConfig

# Type Alias: ClientConfig\<transport, chain, accountOrAddress, rpcSchema\>

> **ClientConfig**\<`transport`, `chain`, `accountOrAddress`, `rpcSchema`\>: `object`

## Type Parameters

• **transport** *extends* [`Transport`](Transport.md) = [`Transport`](Transport.md)

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **accountOrAddress** *extends* [`Account`](Account.md) \| [`Address`](Address.md) \| `undefined` = [`Account`](Account.md) \| [`Address`](Address.md) \| `undefined`

• **rpcSchema** *extends* [`RpcSchema`](RpcSchema.md) \| `undefined` = `undefined`

## Type declaration

### account?

> `optional` **account**: `accountOrAddress` \| [`Account`](Account.md) \| [`Address`](Address.md)

The Account to use for the Client. This will be used for Actions that require an account as an argument.

### batch?

> `optional` **batch**: `object`

Flags for batch settings.

### batch.multicall?

> `optional` **multicall**: `boolean` \| [`Prettify`](Prettify.md)\<[`MulticallBatchOptions`](MulticallBatchOptions.md)\>

Toggle to enable `eth_call` multicall aggregation.

### cacheTime?

> `optional` **cacheTime**: `number`

Time (in ms) that cached data will remain in memory.

#### Default

```ts
chain.blockTime / 3
```

### ccipRead?

> `optional` **ccipRead**: `object` \| `false`

[CCIP Read](https://eips.ethereum.org/EIPS/eip-3668) configuration.
If `false`, the client will not support offchain CCIP lookups.

### chain?

> `optional` **chain**: [`Chain`](Chain.md) \| `chain`

Chain for the client.

### experimental\_blockTag?

> `optional` **experimental\_blockTag**: [`BlockTag`](BlockTag.md)

Default block tag to use for RPC requests.

If the chain supports a pre-confirmation mechanism
(set via `chain.experimental_preconfirmationTime`), defaults to `'pending'`.

#### Default

```ts
'latest'
```

### key?

> `optional` **key**: `string`

A key for the client.

### name?

> `optional` **name**: `string`

A name for the client.

### pollingInterval?

> `optional` **pollingInterval**: `number`

Frequency (in ms) for polling enabled actions & events.

#### Default

```ts
chain.blockTime / 3
```

### rpcSchema?

> `optional` **rpcSchema**: `rpcSchema`

Typed JSON-RPC schema for the client.

### transport

> **transport**: `transport`

The RPC transport

### type?

> `optional` **type**: `string`

The type of client.

## Defined in

node\_modules/viem/\_types/clients/createClient.d.ts:14
