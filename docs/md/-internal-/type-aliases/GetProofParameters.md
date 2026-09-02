[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetProofParameters

# Type Alias: GetProofParameters

> **GetProofParameters** = `object` & \{ `blockHash?`: `undefined`; `blockNumber?`: `bigint`; `blockTag?`: `undefined`; `requireCanonical?`: `undefined`; \} \| \{ `blockHash?`: `undefined`; `blockNumber?`: `undefined`; `blockTag?`: [`BlockTag`](BlockTag-2.md); `requireCanonical?`: `undefined`; \} \| \{ `blockHash`: [`Hash`](Hash.md); `blockNumber?`: `undefined`; `blockTag?`: `undefined`; `requireCanonical?`: `boolean`; \}

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/getProof.d.ts:12

## Type Declaration

### address

> **address**: [`Address`](Address-1.md)

Account address.

### storageKeys

> **storageKeys**: [`Hash`](Hash.md)[]

Array of storage-keys that should be proofed and included.
