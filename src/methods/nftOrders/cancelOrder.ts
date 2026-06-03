import type { ConstructProviderFetchInput } from '../../types';
import {
  CancelOrder,
  CancelOrderBulk,
  constructCancelOTCOrder,
} from '../otcOrders/cancelOrder';

/** @deprecated NFT Orders are deprecated and will be removed in a future version. */
export type CancelNFTOrderFunctions<T> = {
  cancelNFTOrder: CancelOrder<T>;
  cancelNFTOrderBulk: CancelOrderBulk<T>;
};

// should work the same as for LimitOrders
/** @deprecated NFT Orders are deprecated and will be removed in a future version. */
export const constructCancelNFTOrder = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): CancelNFTOrderFunctions<T> => {
  const { cancelLimitOrder, cancelLimitOrderBulk } =
    constructCancelOTCOrder(options);
  return {
    cancelNFTOrder: cancelLimitOrder,
    cancelNFTOrderBulk: cancelLimitOrderBulk,
  };
};
