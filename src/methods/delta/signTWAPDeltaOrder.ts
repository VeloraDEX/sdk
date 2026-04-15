import type { ConstructProviderFetchInput } from '../../types';
import { SignableTWAPOrderData } from './helpers/buildTWAPOrderData';
import { sanitizeTWAPOrderData } from './helpers/misc';

type SignTWAPDeltaOrder = (
  signableOrderData: SignableTWAPOrderData
) => Promise<string>;

export type SignTWAPDeltaOrderFunctions = {
  signTWAPDeltaOrder: SignTWAPDeltaOrder;
};

export const constructSignTWAPDeltaOrder = (
  options: Pick<
    ConstructProviderFetchInput<any, 'signTypedDataCall'>,
    'contractCaller'
  >
): SignTWAPDeltaOrderFunctions => {
  const signTWAPDeltaOrder: SignTWAPDeltaOrder = async (typedData) => {
    const typedDataOnly = {
      ...typedData,
      data: sanitizeTWAPOrderData(typedData.data),
    } as SignableTWAPOrderData;
    const signature = await options.contractCaller.signTypedDataCall(
      typedDataOnly
    );

    return signature;
  };

  return { signTWAPDeltaOrder };
};
