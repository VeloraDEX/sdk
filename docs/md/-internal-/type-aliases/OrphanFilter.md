[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / OrphanFilter

# Type Alias: OrphanFilter

> **OrphanFilter** = \{ `hash`: `string`; `number`: `number`; `orphan`: `"drop-block"`; \} \| \{ `orphan`: `"drop-transaction"`; `other?`: \{ `blockHash`: `string`; `blockNumber`: `number`; `hash`: `string`; \}; `tx`: \{ `blockHash`: `string`; `blockNumber`: `number`; `hash`: `string`; \}; \} \| \{ `orphan`: `"reorder-transaction"`; `other?`: \{ `blockHash`: `string`; `blockNumber`: `number`; `hash`: `string`; \}; `tx`: \{ `blockHash`: `string`; `blockNumber`: `number`; `hash`: `string`; \}; \} \| \{ `log`: \{ `address`: `string`; `blockHash`: `string`; `blockNumber`: `number`; `data`: `string`; `index`: `number`; `topics`: `ReadonlyArray`\<`string`\>; `transactionHash`: `string`; \}; `orphan`: `"drop-log"`; \}

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:948

An Orphan Filter allows detecting when an orphan block has
 resulted in dropping a block or transaction or has resulted
 in transactions changing order.

 Not currently fully supported.
