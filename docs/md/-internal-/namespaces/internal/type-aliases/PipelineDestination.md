[**@velora-dex/sdk**](../../../../README.md) • **Docs**

***

[@velora-dex/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [internal](../README.md) / PipelineDestination

# Type Alias: PipelineDestination\<S, P\>

> **PipelineDestination**\<`S`, `P`\>: `S` *extends* [`PipelineTransformSource`](PipelineTransformSource.md)\<infer ST\> ? `NodeJS.WritableStream` \| [`PipelineDestinationIterableFunction`](PipelineDestinationIterableFunction.md)\<`ST`\> \| [`PipelineDestinationPromiseFunction`](PipelineDestinationPromiseFunction.md)\<`ST`, `P`\> : `never`

## Type Parameters

• **S** *extends* [`PipelineTransformSource`](PipelineTransformSource.md)\<`any`\>

• **P**

## Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/stream.d.ts:1484
