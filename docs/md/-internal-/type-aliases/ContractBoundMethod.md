[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractBoundMethod

# Type Alias: ContractBoundMethod\<Abi, Method\>

> **ContractBoundMethod**\<`Abi`, `Method`\> = (...`args`) => `Method`\[`"Abi"`\]\[`"stateMutability"`\] *extends* `"payable"` \| `"pure"` ? [`PayableMethodObject`](../interfaces/PayableMethodObject.md)\<`Method`\[`"Inputs"`\], `Method`\[`"Outputs"`\]\> : [`NonPayableMethodObject`](../interfaces/NonPayableMethodObject.md)\<`Method`\[`"Inputs"`\], `Method`\[`"Outputs"`\]\>

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/contract.d.ts:7

## Type Parameters

### Abi

`Abi` *extends* [`AbiFunctionFragment`](AbiFunctionFragment.md)

### Method

`Method` *extends* [`ContractMethod`](ContractMethod.md)\<`Abi`\> = [`ContractMethod`](ContractMethod.md)\<`Abi`\>

## Parameters

### args

...`Method`\[`"Inputs"`\] *extends* `undefined` \| `unknown` ? `any`[] : `Method`\[`"Inputs"`\]

## Returns

`Method`\[`"Abi"`\]\[`"stateMutability"`\] *extends* `"payable"` \| `"pure"` ? [`PayableMethodObject`](../interfaces/PayableMethodObject.md)\<`Method`\[`"Inputs"`\], `Method`\[`"Outputs"`\]\> : [`NonPayableMethodObject`](../interfaces/NonPayableMethodObject.md)\<`Method`\[`"Inputs"`\], `Method`\[`"Outputs"`\]\>
