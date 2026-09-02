[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / LookupAddress

# Interface: LookupAddress

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/dns.d.ts:107

## Properties

### address

> **address**: `string`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/dns.d.ts:111

A string representation of an IPv4 or IPv6 address.

***

### family

> **family**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/dns.d.ts:116

`4` or `6`, denoting the family of `address`, or `0` if the address is not an IPv4 or IPv6 address. `0` is a likely indicator of a
bug in the name resolution service used by the operating system.
