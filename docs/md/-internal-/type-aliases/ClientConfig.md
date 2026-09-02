[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ClientConfig

# Type Alias: ClientConfig\<transport, chain, accountOrAddress, rpcSchema, tokens\>

> **ClientConfig**\<`transport`, `chain`, `accountOrAddress`, `rpcSchema`, `tokens`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:16

## Type Parameters

### transport

`transport` *extends* [`Transport`](Transport.md) = [`Transport`](Transport.md)

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### accountOrAddress

`accountOrAddress` *extends* [`Account`](Account.md) \| [`Address`](Address-1.md) \| `undefined` = [`Account`](Account.md) \| [`Address`](Address-1.md) \| `undefined`

### rpcSchema

`rpcSchema` *extends* [`RpcSchema`](RpcSchema.md) \| `undefined` = `undefined`

### tokens

`tokens` *extends* [`Tokens`](Tokens.md) \| `undefined` = [`Tokens`](Tokens.md) \| `undefined`

## Properties

### account?

> `optional` **account?**: `accountOrAddress` \| [`Account`](Account.md) \| [`Address`](Address-1.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:18

The Account to use for the Client. This will be used for Actions that require an account as an argument.

***

### batch?

> `optional` **batch?**: `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:20

Flags for batch settings.

#### multicall?

> `optional` **multicall?**: `boolean` \| [`Prettify`](Prettify-1.md)\<[`MulticallBatchOptions`](MulticallBatchOptions.md)\>

Toggle to enable `eth_call` multicall aggregation.

***

### cacheTime?

> `optional` **cacheTime?**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:37

Time (in ms) that cached data will remain in memory.

#### Default

```ts
chain.blockTime / 3
```

***

### ccipRead?

> `optional` **ccipRead?**: \{ `request?`: (`parameters`) => `Promise`\<[`CcipRequestReturnType`](CcipRequestReturnType.md)\>; \} \| `false`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:42

[CCIP Read](https://eips.ethereum.org/EIPS/eip-3668) configuration.
If `false`, the client will not support offchain CCIP lookups.

#### Union Members

##### Type Literal

\{ `request?`: (`parameters`) => `Promise`\<[`CcipRequestReturnType`](CcipRequestReturnType.md)\>; \}

##### request?

> `optional` **request?**: (`parameters`) => `Promise`\<[`CcipRequestReturnType`](CcipRequestReturnType.md)\>

A function that will be called to make the offchain CCIP lookup request.

###### Parameters

###### parameters

[`CcipRequestParameters`](CcipRequestParameters.md)

###### Returns

`Promise`\<[`CcipRequestReturnType`](CcipRequestReturnType.md)\>

###### See

https://eips.ethereum.org/EIPS/eip-3668#client-lookup-protocol

***

`false`

***

### chain?

> `optional` **chain?**: [`Chain`](Chain.md) \| `chain`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:50

Chain for the client.

***

### dataSuffix?

> `optional` **dataSuffix?**: [`DataSuffix`](DataSuffix.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:52

Data suffix to append to transaction data.

***

### experimental\_blockTag?

> `optional` **experimental\_blockTag?**: [`BlockTag`](BlockTag-2.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:32

Default block tag to use for RPC requests.

If the chain supports a pre-confirmation mechanism
(set via `chain.experimental_preconfirmationTime`), defaults to `'pending'`.

#### Default

```ts
'latest'
```

***

### key?

> `optional` **key?**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:54

A key for the client.

***

### name?

> `optional` **name?**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:56

A name for the client.

***

### pollingInterval?

> `optional` **pollingInterval?**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:61

Frequency (in ms) for polling enabled actions & events.

#### Default

```ts
chain.blockTime / 3
```

***

### rpcSchema?

> `optional` **rpcSchema?**: `rpcSchema`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:65

Typed JSON-RPC schema for the client.

***

### tokens?

> `optional` **tokens?**: `tokens`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:71

Collection of tokens to declare on the Client. A token's symbol becomes
available to token Actions (e.g. `token.transfer`) only when its `addresses`
map includes the Client's `chain.id`.

***

### transport

> **transport**: `transport`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:73

The RPC transport

***

### type?

> `optional` **type?**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:75

The type of client.
