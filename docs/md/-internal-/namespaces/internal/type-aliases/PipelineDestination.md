[**@velora-dex/sdk**](../../../../README.md)

***

[@velora-dex/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [internal](../README.md) / PipelineDestination

# Type Alias: PipelineDestination\<S, P\>

> **PipelineDestination**\<`S`, `P`\> = `S` *extends* [`PipelineTransformSource`](PipelineTransformSource.md)\<infer ST\> ? [`WritableStream`](../../../interfaces/WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](PipelineDestinationIterableFunction.md)\<`ST`\> \| [`PipelineDestinationPromiseFunction`](PipelineDestinationPromiseFunction.md)\<`ST`, `P`\> : `never`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1484

## Type Parameters

### S

`S` *extends* [`PipelineTransformSource`](PipelineTransformSource.md)\<`any`\>

### P

`P`
