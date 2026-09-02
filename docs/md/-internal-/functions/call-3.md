[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / call

# Function: call()

> **call**\<`chain`, `account`, `tokens`\>(`client`, `parameters`): `object` & `object` & `object` & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/token/approve.d.ts:68

Defines a call to the `approve` function.

Can be passed as a parameter to `estimateContractGas`, `simulateContract`,
`sendCalls`, `sendTransaction` (`calls`), or `multicall`. The token is
selected by `token`, which is either a token symbol (resolved from the
client's `tokens` array) or a contract `address`; `amount.decimals`
is inferred from declared client tokens when omitted.

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

### parameters

[`Args`](../type-aliases/Args-3.md)\<`chain`, `tokens`\>

Parameters.

## Returns

`object` & `object` & `object` & `object`

The call.
