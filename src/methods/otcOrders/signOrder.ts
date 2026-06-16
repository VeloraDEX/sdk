import type { ConstructProviderFetchInput } from '../../types';
import type { SignableOrderData } from './buildOrder';
import { sanitizeOrderData } from './helpers/misc';

export type SignOTCOrderFunctions = {
  signOTCOrder: (signableOrderData: SignableOrderData) => Promise<string>;
};

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructSignOTCOrder = (
  options: Pick<
    ConstructProviderFetchInput<any, 'signTypedDataCall'>,
    'contractCaller'
  >
): SignOTCOrderFunctions => {
  const signOTCOrder: SignOTCOrderFunctions['signOTCOrder'] = (typedData) => {
    // types allow to pass OrderData & extra_stuff, but tx will break like that
    const typedDataOnly: SignableOrderData = {
      ...typedData,
      data: sanitizeOrderData(typedData.data),
    };
    return options.contractCaller.signTypedDataCall(typedDataOnly);
  };

  return { signOTCOrder };
};
