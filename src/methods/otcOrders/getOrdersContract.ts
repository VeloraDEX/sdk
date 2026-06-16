import type { ConstructFetchInput } from '../../types';
import { constructGetSpender, GetSpender } from '../swap/spender';

export type GetOTCOrdersContractFunctions = {
  getOTCOrdersContract: GetSpender;
  getTokenTransferProxy: GetSpender;
};

export const constructGetOTCOrdersContract = (
  options: ConstructFetchInput
): GetOTCOrdersContractFunctions => {
  // analogous to getSpender() but for OTC Orders Contract = AugustusRFQ

  const {
    getSpender: getTokenTransferProxy,
    getAugustusRFQ: getOTCOrdersContract,
  } = constructGetSpender(options);

  return { getOTCOrdersContract, getTokenTransferProxy };
};
