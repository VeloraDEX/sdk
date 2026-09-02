[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BlockTag

# Type Alias: BlockTag

> **BlockTag** = `"latest"` \| `"earliest"` \| `"pending"` \| `"safe"` \| `"finalized"`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:89

Specifies a particular block in the blockchain.

- `"latest"`: the latest proposed block
- `"earliest"`: the earliest/genesis block – lowest numbered block the client has available
- `"pending"`: pending state/transactions – next block built by the client on top
  of unsafe and containing the set of transactions usually taken from local mempool
- `"safe"`: the latest safe head block – the most recent block that is safe from
  re-orgs under honest majority and certain synchronicity assumptions
- `"finalized"`: the latest finalized block – the most recent crypto-economically secure block;
  cannot be re-orged outside of manual intervention driven by community coordination

Using `pending`, while allowed, is not advised, as it may lead
to internally inconsistent results. Use of `latest` is safe and will not
lead to inconsistent results. Depending on the backing RPC networks caching system,
the usage of `pending` may lead to inconsistencies as a result of an
overly aggressive cache system. This may cause downstream errors/invalid states.
