import type { ConstructFetchInput } from '../../types';
import { constructGetSpender, GetSpender } from '../swap/spender';

/** @deprecated Limit Orders are deprecated and will be removed in a future version. */
export type GetLimitOrdersContractFunctions = {
  getLimitOrdersContract: GetSpender;
  getTokenTransferProxy: GetSpender;
};

/** @deprecated Limit Orders are deprecated and will be removed in a future version. */
export const constructGetLimitOrdersContract = (
  options: ConstructFetchInput
): GetLimitOrdersContractFunctions => {
  // analogous to getSpender() but for Limit Orders Contract = AugustusRFQ

  const {
    getSpender: getTokenTransferProxy,
    getAugustusRFQ: getLimitOrdersContract,
  } = constructGetSpender(options);

  return { getLimitOrdersContract, getTokenTransferProxy };
};
