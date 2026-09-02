[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / DeployContractParameters

# Type Alias: DeployContractParameters\<abi, chain, account, chainOverride, allArgs\>

> **DeployContractParameters**\<`abi`, `chain`, `account`, `chainOverride`, `allArgs`\> = [`UnionOmit`](UnionOmit.md)\<[`SendTransactionParameters`](SendTransactionParameters.md)\<`chain`, `account`, `chainOverride`\>, `"accessList"` \| `"chain"` \| `"to"` \| `"data"`\> & [`GetChainParameter`](GetChainParameter.md)\<`chain`, `chainOverride`\> & [`UnionEvaluate`](UnionEvaluate.md)\<readonly \[\] *extends* `allArgs` ? `object` : `object`\> & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/deployContract.d.ts:11

## Type Declaration

### abi

> **abi**: `abi`

### bytecode

> **bytecode**: [`Hex`](Hex.md)

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### account

`account` *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

### chainOverride

`chainOverride` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### allArgs

`allArgs` = [`ContractConstructorArgs`](ContractConstructorArgs.md)\<`abi`\>
