[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BlobOptions

# Interface: BlobOptions

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/buffer.d.ts:134

**`Experimental`**

## Properties

### endings?

> `optional` **endings?**: `"transparent"` \| `"native"`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/buffer.d.ts:139

**`Experimental`**

One of either `'transparent'` or `'native'`. When set to `'native'`, line endings in string source parts
will be converted to the platform native line-ending as specified by `import { EOL } from 'node:os'`.

***

### type?

> `optional` **type?**: `string`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/buffer.d.ts:145

**`Experimental`**

The Blob content-type. The intent is for `type` to convey
the MIME media type of the data, however no validation of the type format
is performed.
