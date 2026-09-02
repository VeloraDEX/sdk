[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / \_TupleOf

# Type Alias: \_TupleOf\<length, size, acc\>

> **\_TupleOf**\<`length`, `size`, `acc`\> = `acc`\[`"length"`\] *extends* `size` ? `acc` : `_TupleOf`\<`length`, `size`, readonly \[`length`, `...acc`\]\>

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/types.d.ts:149

## Type Parameters

### length

`length`

### size

`size` *extends* `number`

### acc

`acc` *extends* readonly `unknown`[]
