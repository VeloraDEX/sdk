[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Client

# Type Alias: Client\<transport, chain, account, rpcSchema, extended, tokens\>

> **Client**\<`transport`, `chain`, `account`, `rpcSchema`, `extended`, `tokens`\> = [`Client_Base`](Client_Base.md)\<`transport`, `chain`, `account`, `rpcSchema`, `tokens`\> & `extended` *extends* [`Extended`](Extended.md) ? `extended` : `unknown` & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:78

## Type Declaration

### extend

> **extend**: \<`client`\>(`fn`) => `Client`\<`transport`, `chain`, `account`, `rpcSchema`, [`Prettify`](Prettify-1.md)\<`client`\> & `extended` *extends* [`Extended`](Extended.md) ? `extended` : `unknown`, `tokens`\>

#### Type Parameters

##### client

`client` *extends* [`Extended`](Extended.md) & [`ExactPartial`](ExactPartial.md)\<[`ExtendableProtectedActions`](ExtendableProtectedActions.md)\<`transport`, `chain`, `account`, `tokens`\>\>

#### Parameters

##### fn

(`client`) => `client`

#### Returns

`Client`\<`transport`, `chain`, `account`, `rpcSchema`, [`Prettify`](Prettify-1.md)\<`client`\> & `extended` *extends* [`Extended`](Extended.md) ? `extended` : `unknown`, `tokens`\>

## Type Parameters

### transport

`transport` *extends* [`Transport`](Transport.md) = [`Transport`](Transport.md)

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### account

`account` *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

### rpcSchema

`rpcSchema` *extends* [`RpcSchema`](RpcSchema.md) \| `undefined` = `undefined`

### extended

`extended` *extends* [`Extended`](Extended.md) \| `undefined` = [`Extended`](Extended.md) \| `undefined`

### tokens

`tokens` *extends* [`Tokens`](Tokens.md) \| `undefined` = [`Tokens`](Tokens.md) \| `undefined`
