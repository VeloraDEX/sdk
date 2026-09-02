[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Client\_Base

# Type Alias: Client\_Base\<transport, chain, account, rpcSchema, tokens\>

> **Client\_Base**\<`transport`, `chain`, `account`, `rpcSchema`, `tokens`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:81

## Type Parameters

### transport

`transport` *extends* [`Transport`](Transport.md) = [`Transport`](Transport.md)

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### account

`account` *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

### rpcSchema

`rpcSchema` *extends* [`RpcSchema`](RpcSchema.md) \| `undefined` = `undefined`

### tokens

`tokens` *extends* [`Tokens`](Tokens.md) \| `undefined` = [`Tokens`](Tokens.md) \| `undefined`

## Properties

### account

> **account**: `account`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:83

The Account of the Client.

***

### batch?

> `optional` **batch?**: [`ClientConfig`](ClientConfig.md)\[`"batch"`\]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:85

Flags for batch settings.

***

### cacheTime

> **cacheTime**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:87

Time (in ms) that cached data will remain in memory.

***

### ccipRead?

> `optional` **ccipRead?**: [`ClientConfig`](ClientConfig.md)\[`"ccipRead"`\]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:89

[CCIP Read](https://eips.ethereum.org/EIPS/eip-3668) configuration.

***

### chain

> **chain**: `chain`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:91

Chain for the client.

***

### dataSuffix?

> `optional` **dataSuffix?**: [`DataSuffix`](DataSuffix.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:93

Data suffix to append to transaction data.

***

### experimental\_blockTag?

> `optional` **experimental\_blockTag?**: [`BlockTag`](BlockTag-2.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:95

Default block tag to use for RPC requests.

***

### key

> **key**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:97

A key for the client.

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:99

A name for the client.

***

### pollingInterval

> **pollingInterval**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:101

Frequency (in ms) for polling enabled actions & events. Defaults to 4_000 milliseconds.

***

### request

> **request**: [`EIP1193RequestFn`](EIP1193RequestFn.md)\<`rpcSchema` *extends* `undefined` ? [`EIP1474Methods`](EIP1474Methods.md) : `rpcSchema`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:103

Request function wrapped with friendly error handling

***

### tokens

> **tokens**: `tokens`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:105

Collection of tokens declared on the Client.

***

### transport

> **transport**: [`ReturnType`](ReturnType.md)\<`transport`\>\[`"config"`\] & [`ReturnType`](ReturnType.md)\<`transport`\>\[`"value"`\]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:107

The RPC transport

***

### type

> **type**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:109

The type of client.

***

### uid

> **uid**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:111

A unique ID for the client.
