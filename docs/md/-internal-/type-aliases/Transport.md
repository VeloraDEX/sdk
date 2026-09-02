[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Transport

# Type Alias: Transport\<type, rpcAttributes, eip1193RequestFn\>

> **Transport**\<`type`, `rpcAttributes`, `eip1193RequestFn`\> = \<`chain`\>(`{ chain, }`) => `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/transports/createTransport.d.ts:29

## Type Parameters

### type

`type` *extends* `string` = `string`

### rpcAttributes

`rpcAttributes` = [`Record`](Record.md)\<`string`, `any`\>

### eip1193RequestFn

`eip1193RequestFn` *extends* [`EIP1193RequestFn`](EIP1193RequestFn.md) = [`EIP1193RequestFn`](EIP1193RequestFn.md)

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md)

## Parameters

### \{ chain, \}

#### account?

[`Account`](Account.md)

#### chain?

`chain`

#### pollingInterval?

[`ClientConfig`](ClientConfig.md)\[`"pollingInterval"`\]

#### retryCount?

[`TransportConfig`](TransportConfig.md)\[`"retryCount"`\]

#### timeout?

[`TransportConfig`](TransportConfig.md)\[`"timeout"`\]

## Returns

`object`

### config

> **config**: [`TransportConfig`](TransportConfig.md)\<`type`\>

### request

> **request**: `eip1193RequestFn`

### value?

> `optional` **value?**: `rpcAttributes`
