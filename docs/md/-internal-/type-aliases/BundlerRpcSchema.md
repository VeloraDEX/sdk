[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BundlerRpcSchema

# Type Alias: BundlerRpcSchema

> **BundlerRpcSchema** = \[\{ `Method`: `"eth_chainId"`; `Parameters?`: `undefined`; `ReturnType`: [`Hex`](Hex.md); \}, \{ `Method`: `"eth_estimateUserOperationGas"`; `Parameters`: \[[`RpcUserOperation`](RpcUserOperation.md), [`Address`](Address-1.md)\] \| \[[`RpcUserOperation`](RpcUserOperation.md), [`Address`](Address-1.md), [`RpcStateOverride`](RpcStateOverride.md)\]; `ReturnType`: [`RpcEstimateUserOperationGasReturnType`](RpcEstimateUserOperationGasReturnType.md); \}, \{ `Method`: `"eth_getUserOperationByHash"`; `Parameters`: \[[`Hash`](Hash.md)\]; `ReturnType`: [`RpcGetUserOperationByHashReturnType`](RpcGetUserOperationByHashReturnType.md) \| `null`; \}, \{ `Method`: `"eth_getUserOperationReceipt"`; `Parameters`: \[[`Hash`](Hash.md)\]; `ReturnType`: [`RpcUserOperationReceipt`](RpcUserOperationReceipt.md) \| `null`; \}, \{ `Method`: `"eth_sendUserOperation"`; `Parameters`: \[[`RpcUserOperation`](RpcUserOperation.md), [`Address`](Address-1.md)\]; `ReturnType`: [`Hash`](Hash.md); \}, \{ `Method`: `"eth_supportedEntryPoints"`; `Parameters?`: `undefined`; `ReturnType`: readonly [`Address`](Address-1.md)[]; \}\]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:189
