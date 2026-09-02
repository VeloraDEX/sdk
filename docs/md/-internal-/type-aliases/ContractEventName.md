[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractEventName

# Type Alias: ContractEventName

> **ContractEventName** = `string` \| [`ContractEvent`](../interfaces/ContractEvent.md) \| [`TopicFilter`](TopicFilter.md) \| [`DeferredTopicFilter`](../interfaces/DeferredTopicFilter.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:24

The name for an event used for subscribing to Contract events.

 **``string``** - An event by name. The event must be non-ambiguous.
 The parameters will be dereferenced when passed into the listener.

 [[ContractEvent]] - A filter from the ``contract.filters``, which will
 pass only the EventPayload as a single parameter, which includes a
 ``.signature`` property that can be used to further filter the event.

 [[TopicFilter]] - A filter defined using the standard Ethereum API
 which provides the specific topic hash or topic hashes to watch for along
 with any additional values to filter by. This will only pass a single
 parameter to the listener, the EventPayload which will include additional
 details to refine by, such as the event name and signature.

 [[DeferredTopicFilter]] - A filter created by calling a [[ContractEvent]]
 with parameters, which will create a filter for a specific event
 signautre and dereference each parameter when calling the listener.
