import { assert } from 'ts-essentials';
import { TypedDataField } from '../../methods/common/orders/buildOrderData';

// regex from @ethersproject/hash TypedDataEncoder.constructor
// may be overly strict, but reliable
const baseTypeRegex = /^([^\x5b]*)(\x5b|$)/;

export function findPrimaryType<P extends string>(
  types: Record<P, TypedDataField[]>
): P {
  const candidates = Object.keys(types) as P[];
  const candidatesSet = new Set(candidates);

  candidates.forEach((candidate) => {
    const typedDataFields = types[candidate];
    if (!typedDataFields) return;

    typedDataFields.forEach(({ type }) => {
      // Get the base type (drop any array specifiers)
      const baseType = type.match(baseTypeRegex)?.[1];
      if (!baseType) return;

      // if type was referred to as a child of another type, it can't be the primaryType
      candidatesSet.delete(baseType as P);
    });
  });

  const [primaryType] = Array.from(candidatesSet);

  assert(
    primaryType,
    `No primary type found in SignableTypedData types, ${JSON.stringify(types)}`
  );

  return primaryType;
}
