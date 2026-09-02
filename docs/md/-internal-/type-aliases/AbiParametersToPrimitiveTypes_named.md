[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiParametersToPrimitiveTypes\_named

# Type Alias: AbiParametersToPrimitiveTypes\_named\<abiParameters, abiParameterKind, acc, depth\>

> **AbiParametersToPrimitiveTypes\_named**\<`abiParameters`, `abiParameterKind`, `acc`, `depth`\> = `depth`\[`"length"`\] *extends* `15` ? readonly `unknown`[] : `abiParameters` *extends* readonly \[infer head1, infer head2, infer head3, infer head4, infer head5, infer head6, `...(infer tail extends readonly AbiParameter[])`\] ? `AbiParametersToPrimitiveTypes_named`\<`tail`, `abiParameterKind`, readonly \[`...acc`, `...ToNamedTuple<head1, abiParameterKind>`, `...ToNamedTuple<head2, abiParameterKind>`, `...ToNamedTuple<head3, abiParameterKind>`, `...ToNamedTuple<head4, abiParameterKind>`, `...ToNamedTuple<head5, abiParameterKind>`, `...ToNamedTuple<head6, abiParameterKind>`\], \[`...depth`, `1`\]\> : `abiParameters` *extends* readonly \[infer head1, infer head2, infer head3, infer head4, infer head5\] ? readonly \[`...acc`, `...ToNamedTuple<head1, abiParameterKind>`, `...ToNamedTuple<head2, abiParameterKind>`, `...ToNamedTuple<head3, abiParameterKind>`, `...ToNamedTuple<head4, abiParameterKind>`, `...ToNamedTuple<head5, abiParameterKind>`\] : `abiParameters` *extends* readonly \[infer head1, infer head2, infer head3, infer head4\] ? readonly \[`...acc`, `...ToNamedTuple<head1, abiParameterKind>`, `...ToNamedTuple<head2, abiParameterKind>`, `...ToNamedTuple<head3, abiParameterKind>`, `...ToNamedTuple<head4, abiParameterKind>`\] : `abiParameters` *extends* readonly \[infer head1, infer head2, infer head3\] ? readonly \[`...acc`, `...ToNamedTuple<head1, abiParameterKind>`, `...ToNamedTuple<head2, abiParameterKind>`, `...ToNamedTuple<head3, abiParameterKind>`\] : `abiParameters` *extends* readonly \[infer head1, infer head2\] ? readonly \[`...acc`, `...ToNamedTuple<head1, abiParameterKind>`, `...ToNamedTuple<head2, abiParameterKind>`\] : `abiParameters` *extends* readonly \[infer head\] ? readonly \[`...acc`, `...ToNamedTuple<(...), (...)>`\] : `acc` *extends* readonly \[\] ? `abiParameters` *extends* readonly \[\] ? readonly \[\] : readonly ...[] : `acc`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/utils.d.ts:91

## Type Parameters

### abiParameters

`abiParameters` *extends* readonly [`AbiParameter`](AbiParameter-1.md)[]

### abiParameterKind

`abiParameterKind` *extends* [`AbiParameterKind`](AbiParameterKind.md) = [`AbiParameterKind`](AbiParameterKind.md)

### acc

`acc` *extends* readonly `unknown`[] = \[\]

### depth

`depth` *extends* readonly `number`[] = \[\]
