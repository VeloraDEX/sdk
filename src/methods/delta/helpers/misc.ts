import type { SignableDeltaOrderData } from './buildDeltaOrderData';
import type { SignableExternalOrderData } from './buildExternalOrderData';

export function sanitizeDeltaOrderData({
  owner,
  beneficiary,
  srcToken,
  destToken,
  srcAmount,
  destAmount,
  expectedAmount,
  deadline,
  nonce,
  permit,
  partnerAndFee,
  bridge,
  kind,
  metadata,
}: SignableDeltaOrderData['data'] &
  Record<string, any>): SignableDeltaOrderData['data'] {
  return {
    owner,
    beneficiary,
    srcToken,
    destToken,
    srcAmount,
    destAmount,
    expectedAmount,
    deadline,
    nonce,
    permit,
    partnerAndFee,
    bridge,
    kind,
    metadata,
  };
}

export function sanitizeExternalOrderData({
  owner,
  handler,
  srcToken,
  destToken,
  srcAmount,
  destAmount,
  expectedAmount,
  deadline,
  nonce,
  permit,
  partnerAndFee,
  kind,
  metadata,
  data,
}: SignableExternalOrderData['data'] &
  Record<string, any>): SignableExternalOrderData['data'] {
  return {
    owner,
    handler,
    srcToken,
    destToken,
    srcAmount,
    destAmount,
    expectedAmount,
    deadline,
    nonce,
    permit,
    partnerAndFee,
    kind,
    metadata,
    data,
  };
}
