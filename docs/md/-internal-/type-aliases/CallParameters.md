[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CallParameters

# Type Alias: CallParameters\<chain\>

> **CallParameters**\<`chain`\> = [`UnionOmit`](UnionOmit.md)\<[`FormattedCall`](FormattedCall.md)\<`chain`\>, `"from"`\> & `object` & \{ `blockHash?`: `undefined`; `blockNumber?`: `bigint`; `blockTag?`: `undefined`; `requireCanonical?`: `undefined`; \} \| \{ `blockHash?`: `undefined`; `blockNumber?`: `undefined`; `blockTag?`: [`BlockTag`](BlockTag-2.md); `requireCanonical?`: `undefined`; \} \| \{ `blockHash`: [`Hash`](Hash.md); `blockNumber?`: `undefined`; `blockTag?`: `undefined`; `requireCanonical?`: `boolean`; \}

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/call.d.ts:26

## Type Declaration

### account?

> `optional` **account?**: [`Account`](Account.md) \| [`Address`](Address-1.md)

Account attached to the call (msg.sender).

### batch?

> `optional` **batch?**: `boolean`

Whether or not to enable multicall batching on this call.

### blockOverrides?

> `optional` **blockOverrides?**: [`BlockOverrides`](BlockOverrides.md)

Block overrides for the call.

### code?

> `optional` **code?**: [`Hex`](Hex.md)

Bytecode to perform the call on.

### factory?

> `optional` **factory?**: [`Address`](Address-1.md)

Contract deployment factory address (ie. Create2 factory, Smart Account factory, etc).

### factoryData?

> `optional` **factoryData?**: [`Hex`](Hex.md)

Calldata to execute on the factory to deploy the contract.

### requestOptions?

> `optional` **requestOptions?**: [`EIP1193RequestOptions`](EIP1193RequestOptions.md)

Request options.

### stateOverride?

> `optional` **stateOverride?**: [`StateOverride`](StateOverride.md)

State overrides for the call.

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`
