[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / call

# Function: call()

> **call**\<`chain`, `account`, `tokens`\>(`client`, `args`): `object` & `object` & `object` & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/token/getAllowance.d.ts:51

Defines a call to the `allowance` function.

Can be passed as a parameter to `multicall`, `simulateContract`, or any
other action that accepts a contract call. The token is selected by `token`
symbol (resolved from the client's `tokens` array) or contract address.

## Type Parameters

### chain

`chain` *extends* [`Chain`](../type-aliases/Chain.md) \| `undefined`

### account

`account` *extends* [`Account`](../type-aliases/Account.md) \| `undefined`

### tokens

`tokens` *extends* [`Tokens`](../type-aliases/Tokens.md) \| `undefined` = `undefined`

## Parameters

### client

[`Client`](../type-aliases/Client.md)\<[`Transport`](../type-aliases/Transport.md), `chain`, `account`, `undefined`, `undefined`, `tokens`\>

Client.

### args

[`Args`](../type-aliases/Args.md)\<`chain`, `tokens`\>

Arguments.

## Returns

`object` & `object` & `object` & `object`

The call.
