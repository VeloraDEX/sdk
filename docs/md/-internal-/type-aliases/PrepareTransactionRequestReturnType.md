[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / PrepareTransactionRequestReturnType

# Type Alias: PrepareTransactionRequestReturnType\<chain, account, chainOverride, accountOverride, request, _derivedAccount, _derivedChain, _customTransactionType, _transactionType, _transactionRequest\>

> **PrepareTransactionRequestReturnType**\<`chain`, `account`, `chainOverride`, `accountOverride`, `request`, `_derivedAccount`, `_derivedChain`, `_customTransactionType`, `_transactionType`, `_transactionRequest`\> = [`Prettify`](Prettify-1.md)\<[`UnionRequiredBy`](UnionRequiredBy.md)\<[`Extract`](Extract.md)\<[`UnionOmit`](UnionOmit.md)\<[`FormattedTransactionRequest`](FormattedTransactionRequest.md)\<`_derivedChain`\>, `"from"`\> & `_derivedChain` *extends* [`Chain`](Chain.md) ? `object` : `object` & `_derivedAccount` *extends* [`Account`](Account.md) ? `object` : `object`, [`IsNever`](IsNever.md)\<`_transactionRequest`\> *extends* `true` ? `unknown` : [`ExactPartial`](ExactPartial.md)\<`_transactionRequest`\>\> & `object`, [`ParameterTypeToParameters`](ParameterTypeToParameters.md)\<`request`\[`"parameters"`\] *extends* readonly [`PrepareTransactionRequestParameterType`](PrepareTransactionRequestParameterType.md)[] ? `request`\[`"parameters"`\]\[`number`\] : *typeof* [`defaultParameters`](../variables/defaultParameters.md)\[`number`\]\>\> & `unknown` *extends* `request`\[`"kzg"`\] ? `object` : [`Pick`](Pick.md)\<`request`, `"kzg"`\> & `object`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/prepareTransactionRequest.d.ts:54

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### account

`account` *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

### chainOverride

`chainOverride` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### accountOverride

`accountOverride` *extends* [`Account`](Account.md) \| [`Address`](Address-1.md) \| `undefined` = [`Account`](Account.md) \| [`Address`](Address-1.md) \| `undefined`

### request

`request` *extends* [`PrepareTransactionRequestRequest`](PrepareTransactionRequestRequest.md)\<`chain`, `chainOverride`\> = [`PrepareTransactionRequestRequest`](PrepareTransactionRequestRequest.md)\<`chain`, `chainOverride`\>

### _derivedAccount

`_derivedAccount` *extends* [`Account`](Account.md) \| [`Address`](Address-1.md) \| `undefined` = [`DeriveAccount`](DeriveAccount.md)\<`account`, `accountOverride`\>

### _derivedChain

`_derivedChain` *extends* [`Chain`](Chain.md) \| `undefined` = [`DeriveChain`](DeriveChain.md)\<`chain`, `chainOverride`\>

### _customTransactionType

`_customTransactionType` *extends* `string` = [`ExtractCustomFormattedTransactionType`](ExtractCustomFormattedTransactionType.md)\<`_derivedChain`, `request`\>

### _transactionType

`_transactionType` = `request`\[`"type"`\] *extends* `string` ? `request`\[`"type"`\] : [`IsNever`](IsNever.md)\<`_customTransactionType`\> *extends* `false` ? `_customTransactionType` : `request`\[`"type"`\] *extends* `string` \| `undefined` ? `request`\[`"type"`\] : [`GetTransactionType`](GetTransactionType.md)\<`request`\> *extends* `"legacy"` ? `unknown` : [`GetTransactionType`](GetTransactionType.md)\<`request`\>

### _transactionRequest

`_transactionRequest` = [`ExtractFormattedTransactionRequest`](ExtractFormattedTransactionRequest.md)\<`_derivedChain`, \{ `type?`: `_transactionType` *extends* `string` ? `_transactionType` : `undefined`; \}\>
