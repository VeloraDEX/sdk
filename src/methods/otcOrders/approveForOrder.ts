import type { ConstructProviderFetchInput } from '../../types';
import { ApproveToken, approveTokenMethodFactory } from '../../helpers/approve';
import { constructApproveToken } from '../swap/approve';
import { constructGetSpender } from '../swap/spender';

export type ApproveTokenForOTCOrderFunctions<T> = {
  /** @description approving AugustusRFQ as spender for makerAsset */
  approveMakerTokenForOTCOrder: ApproveToken<T>;
  /** @description approving AugustusRFQ as spender for takerAsset to call SDK.fillOrderDirectly */
  approveTakerTokenForOTCOrder: ApproveToken<T>;
};

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructApproveTokenForOTCOrder = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): ApproveTokenForOTCOrderFunctions<T> => {
  // getAugustusRFQ is cached internally for the same instance of SDK
  // so should persist across same apiUrl & network
  const { getAugustusRFQ } = constructGetSpender(options);

  const approveTokenForOTCOrder: ApproveToken<T> =
    approveTokenMethodFactory<T>(options.contractCaller, getAugustusRFQ);

  return {
    approveMakerTokenForOTCOrder: approveTokenForOTCOrder,
    approveTakerTokenForOTCOrder: approveTokenForOTCOrder,
  };
};
