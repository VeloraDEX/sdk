[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtendableProtectedActions

# Type Alias: ExtendableProtectedActions\<transport, chain, account, tokens\>

> **ExtendableProtectedActions**\<`transport`, `chain`, `account`, `tokens`\> = [`Pick`](Pick.md)\<[`PublicActions`](PublicActions.md)\<`transport`, `chain`, `account`, `tokens`\>, `"call"` \| `"createContractEventFilter"` \| `"createEventFilter"` \| `"estimateContractGas"` \| `"estimateGas"` \| `"getBlock"` \| `"getBlockNumber"` \| `"getChainId"` \| `"getContractEvents"` \| `"getEnsText"` \| `"getFilterChanges"` \| `"getGasPrice"` \| `"getLogs"` \| `"getTransaction"` \| `"getTransactionCount"` \| `"getTransactionReceipt"` \| `"prepareTransactionRequest"` \| `"readContract"` \| `"sendRawTransaction"` \| `"simulateContract"` \| `"uninstallFilter"` \| `"watchBlockNumber"` \| `"watchContractEvent"`\> & [`Pick`](Pick.md)\<[`WalletActions`](WalletActions.md)\<`chain`, `account`, `tokens`\>, `"sendTransaction"` \| `"writeContract"`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/createClient.d.ts:77

## Type Parameters

### transport

`transport` *extends* [`Transport`](Transport.md) = [`Transport`](Transport.md)

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### account

`account` *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

### tokens

`tokens` *extends* [`Tokens`](Tokens.md) \| `undefined` = [`Tokens`](Tokens.md) \| `undefined`
