import type {
  ConstructProviderFetchInput,
  RequestParameters,
  TxSendOverrides,
} from '../../types';
import { constructGetDeltaContract } from './getDeltaContract';
import { sanitizeDeltaOrderData } from './helpers/misc';
import { SignableDeltaOrderData } from './helpers/buildDeltaOrderData';
import { produceDeltaOrderHash } from './preSignDeltaOrder';
import type { ExtractAbiMethodNames } from '../../helpers/misc';
import type { DeltaAuctionOrder } from './helpers/types';

import { DEFAULT_BRIDGE } from './getDeltaPrice';

export type CancelAndWithdrawDeltaOrderParams = {
  order: DeltaAuctionOrder;
  signature: string;
  isFillable: boolean;
};

export type CancelAndWithdrawDeltaOrder<T> = (
  params: CancelAndWithdrawDeltaOrderParams,
  overrides?: TxSendOverrides,
  requestParams?: RequestParameters
) => Promise<T>;

export type WithdrawDeltaNative<T> = (
  amount: string,
  overrides?: TxSendOverrides,
  requestParams?: RequestParameters
) => Promise<T>;

export type DepositNativeAndPreSign<T> = (
  orderHash: string,
  overrides?: TxSendOverrides,
  requestParams?: RequestParameters
) => Promise<T>;

export type DepositNativeAndPreSignDeltaOrder<T> = (
  signableOrderData: SignableDeltaOrderData,
  overrides?: TxSendOverrides,
  requestParams?: RequestParameters
) => Promise<T>;

export type DeltaTokenModuleFunctions<T> = {
  /** @description Cancel an order on-chain and withdraw native ETH back to the owner */
  cancelAndWithdrawDeltaOrder: CancelAndWithdrawDeltaOrder<T>;
  /** @description Withdraw Delta Wrapped Native tokens as native ETH */
  withdrawDeltaNative: WithdrawDeltaNative<T>;
  /** @description Deposit native ETH and pre-sign a Delta order */
  depositNativeAndPreSign: DepositNativeAndPreSign<T>;
  /** @description Deposit native ETH and pre-sign a Delta order from signable order data */
  depositNativeAndPreSignDeltaOrder: DepositNativeAndPreSignDeltaOrder<T>;
};

const DeltaTokenModuleAbi = [
  {
    type: 'function',
    name: 'cancelAndWithdraw',
    inputs: [
      {
        name: 'orderWithSig',
        type: 'tuple',
        internalType: 'struct OrderWithSig',
        components: [
          {
            name: 'order',
            type: 'tuple',
            internalType: 'struct Order',
            components: [
              {
                name: 'owner',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'beneficiary',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'srcToken',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'destToken',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'srcAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'destAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'expectedAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'deadline',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'kind',
                type: 'uint8',
                internalType: 'enum OrderKind',
              },
              {
                name: 'nonce',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'partnerAndFee',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'permit',
                type: 'bytes',
                internalType: 'bytes',
              },
              {
                name: 'metadata',
                type: 'bytes',
                internalType: 'bytes',
              },
              {
                name: 'bridge',
                type: 'tuple',
                internalType: 'struct Bridge',
                components: [
                  {
                    name: 'protocolSelector',
                    type: 'bytes4',
                    internalType: 'bytes4',
                  },
                  {
                    name: 'destinationChainId',
                    type: 'uint256',
                    internalType: 'uint256',
                  },
                  {
                    name: 'outputToken',
                    type: 'address',
                    internalType: 'address',
                  },
                  {
                    name: 'scalingFactor',
                    type: 'int8',
                    internalType: 'int8',
                  },
                  {
                    name: 'protocolData',
                    type: 'bytes',
                    internalType: 'bytes',
                  },
                ],
              },
            ],
          },
          {
            name: 'signature',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'bridgeOverride',
            type: 'tuple',
            internalType: 'struct BridgeOverride',
            components: [
              {
                name: 'protocolSelector',
                type: 'bytes4',
                internalType: 'bytes4',
              },
              {
                name: 'protocolData',
                type: 'bytes',
                internalType: 'bytes',
              },
            ],
          },
          {
            name: 'cosignature',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
      {
        name: 'isFillable',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'withdrawNative',
    inputs: [
      {
        name: 'amount',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'depositNativeAndPreSign',
    inputs: [
      {
        name: 'orderHash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [],
    stateMutability: 'payable',
  },
] as const;

type AvailableMethods = ExtractAbiMethodNames<typeof DeltaTokenModuleAbi>;

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructDeltaTokenModule = <T>(
  options: Pick<
    ConstructProviderFetchInput<T, 'transactCall'>,
    'contractCaller' | 'fetcher' | 'apiURL' | 'chainId'
  >
): DeltaTokenModuleFunctions<T> => {
  // cached internally
  const { getDeltaContract } = constructGetDeltaContract(options);

  const cancelAndWithdrawDeltaOrder: CancelAndWithdrawDeltaOrder<T> = async (
    { order, signature, isFillable },
    overrides = {},
    requestParams
  ) => {
    const ParaswapDelta = await getDeltaContract(requestParams);
    if (!ParaswapDelta) {
      throw new Error(`Delta is not available on chain ${options.chainId}`);
    }

    const orderWithSig = {
      order,
      signature,
      bridgeOverride: DEFAULT_BRIDGE,
      cosignature: '0x',
    };

    const res = await options.contractCaller.transactCall<AvailableMethods>({
      address: ParaswapDelta,
      abi: DeltaTokenModuleAbi,
      contractMethod: 'cancelAndWithdraw',
      args: [orderWithSig, isFillable],
      overrides,
    });

    return res;
  };

  const withdrawDeltaNative: WithdrawDeltaNative<T> = async (
    amount,
    overrides = {},
    requestParams
  ) => {
    const ParaswapDelta = await getDeltaContract(requestParams);
    if (!ParaswapDelta) {
      throw new Error(`Delta is not available on chain ${options.chainId}`);
    }

    const res = await options.contractCaller.transactCall<AvailableMethods>({
      address: ParaswapDelta,
      abi: DeltaTokenModuleAbi,
      contractMethod: 'withdrawNative',
      args: [amount],
      overrides,
    });

    return res;
  };

  const depositNativeAndPreSign: DepositNativeAndPreSign<T> = async (
    orderHash,
    overrides = {},
    requestParams
  ) => {
    const ParaswapDelta = await getDeltaContract(requestParams);
    if (!ParaswapDelta) {
      throw new Error(`Delta is not available on chain ${options.chainId}`);
    }

    const res = await options.contractCaller.transactCall<AvailableMethods>({
      address: ParaswapDelta,
      abi: DeltaTokenModuleAbi,
      contractMethod: 'depositNativeAndPreSign',
      args: [orderHash],
      overrides,
    });

    return res;
  };

  const depositNativeAndPreSignDeltaOrder: DepositNativeAndPreSignDeltaOrder<
    T
  > = async (signableOrderData, overrides = {}, requestParams) => {
    // types allow to pass OrderData & extra_stuff, but tx will break like that
    const typedDataOnly: SignableDeltaOrderData = {
      ...signableOrderData,
      data: sanitizeDeltaOrderData(signableOrderData.data),
    };

    const orderHash = produceDeltaOrderHash(typedDataOnly);
    const res = await depositNativeAndPreSign(
      orderHash,
      overrides,
      requestParams
    );
    return res;
  };

  return {
    cancelAndWithdrawDeltaOrder,
    withdrawDeltaNative,
    depositNativeAndPreSign,
    depositNativeAndPreSignDeltaOrder,
  };
};
