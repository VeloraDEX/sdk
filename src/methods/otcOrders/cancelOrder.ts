import type { ExtractAbiMethodNames } from '../../helpers/misc';
import type {
  ConstructProviderFetchInput,
  RequestParameters,
  TxSendOverrides,
} from '../../types';
import { constructGetSpender } from '../swap/spender';

export type CancelOrder<T> = (
  orderHash: string,
  overrides?: TxSendOverrides,
  requestParams?: RequestParameters
) => Promise<T>;

export type CancelOrderBulk<T> = (
  orderHashes: string[],
  overrides?: TxSendOverrides,
  requestParams?: RequestParameters
) => Promise<T>;

export type CancelOTCOrderFunctions<T> = {
  cancelOTCOrder: CancelOrder<T>;
  cancelOTCOrdersBulk: CancelOrderBulk<T>;
};

// much smaller than the whole AugustusRFQ_ABI
const MinAugustusRFQAbi = [
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'orderHash',
        type: 'bytes32',
      },
    ],
    name: 'cancelOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: 'orderHashes',
        type: 'bytes32[]',
      },
    ],
    name: 'cancelOrders',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

type AvailableMethods = ExtractAbiMethodNames<typeof MinAugustusRFQAbi>;

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructCancelOTCOrder = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): CancelOTCOrderFunctions<T> => {
  // getAugustusRFQ is cached internally for the same instance of SDK
  // so should persist across same apiUrl & network
  const { getAugustusRFQ } = constructGetSpender(options);

  const cancelOTCOrder: CancelOrder<T> = async (
    orderHash,
    overrides = {},
    requestParams
  ) => {
    const verifyingContract = await getAugustusRFQ(requestParams);

    const res = await options.contractCaller.transactCall<AvailableMethods>({
      // @CHECK if verifyingContract is the one we need to approve
      // maybe a Proxy in-between
      address: verifyingContract,
      abi: MinAugustusRFQAbi,
      contractMethod: 'cancelOrder',
      args: [orderHash],
      overrides,
    });

    return res;
  };

  const cancelOTCOrderBulk: CancelOrderBulk<T> = async (
    orderHashes,
    overrides = {},
    requestParams
  ) => {
    const verifyingContract = await getAugustusRFQ(requestParams);

    const res = await options.contractCaller.transactCall<AvailableMethods>({
      // @CHECK if verifyingContract is the one we need to approve
      // maybe a Proxy in-between
      address: verifyingContract,
      abi: MinAugustusRFQAbi,
      contractMethod: 'cancelOrders',
      args: [orderHashes],
      overrides,
    });

    return res;
  };

  return {
    cancelOTCOrder,
    cancelOTCOrdersBulk: cancelOTCOrderBulk,
  };
};
