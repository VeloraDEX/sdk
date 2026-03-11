import type { ConstructProviderFetchInput } from '../../types';
import { SignableExternalOrderData } from './helpers/buildExternalOrderData';
import { sanitizeExternalOrderData } from './helpers/misc';

type SignExternalDeltaOrder = (
  signableOrderData: SignableExternalOrderData
) => Promise<string>;

export type SignExternalDeltaOrderFunctions = {
  signExternalDeltaOrder: SignExternalDeltaOrder;
};

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructSignExternalDeltaOrder = (
  options: Pick<
    ConstructProviderFetchInput<any, 'signTypedDataCall'>,
    'contractCaller'
  >
): SignExternalDeltaOrderFunctions => {
  const signExternalDeltaOrder: SignExternalDeltaOrder = async (typedData) => {
    // types allow to pass OrderData & extra_stuff, but tx will break like that
    const typedDataOnly: SignableExternalOrderData = {
      ...typedData,
      data: sanitizeExternalOrderData(typedData.data),
    };
    const signature = await options.contractCaller.signTypedDataCall(
      typedDataOnly
    );

    return signature;
  };

  return { signExternalDeltaOrder };
};
