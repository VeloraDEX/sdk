import type { SignableDeltaOrderData } from './buildDeltaOrderData';
import type { SignableExternalOrderData } from './buildExternalOrderData';
import type { SignableTWAPOrderData } from './buildTWAPOrderData';

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

export function sanitizeTWAPOrderData(
  orderData: SignableTWAPOrderData['data']
): SignableTWAPOrderData['data'] {
  const common = {
    owner: orderData.owner,
    beneficiary: orderData.beneficiary,
    srcToken: orderData.srcToken,
    destToken: orderData.destToken,
    nonce: orderData.nonce,
    partnerAndFee: orderData.partnerAndFee,
    deadline: orderData.deadline,
    interval: orderData.interval,
    numSlices: orderData.numSlices,
    permit: orderData.permit,
    metadata: orderData.metadata,
    bridge: orderData.bridge,
  };

  if ('destAmountPerSlice' in orderData) {
    // TWAPOrder (SELL)
    return {
      ...common,
      destAmountPerSlice: orderData.destAmountPerSlice,
      totalSrcAmount: orderData.totalSrcAmount,
    };
  }

  // TWAPBuyOrder (BUY)
  return {
    ...common,
    totalDestAmount: orderData.totalDestAmount,
    maxSrcAmount: orderData.maxSrcAmount,
  };
}
