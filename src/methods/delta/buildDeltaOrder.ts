import type {
  ConstructFetchInput,
  EnumerateLiteral,
  RequestParameters,
} from '../../types';
import { constructGetDeltaContract } from './getDeltaContract';
import { BridgePrice } from './getDeltaPrice';
import { constructGetPartnerFee } from './getPartnerFee';
import {
  buildDeltaSignableOrderData,
  type BuildDeltaOrderDataInput,
  type SignableDeltaOrderData,
} from './helpers/buildDeltaOrderData';
import { SwapSideToOrderKind } from './helpers/types';
import { BeneficiaryType } from '../common/orders/types';
import { SwapSide } from '../../constants';
export type { SignableDeltaOrderData } from './helpers/buildDeltaOrderData';

export type SwapSideUnion = EnumerateLiteral<typeof SwapSide>;

export type BuildDeltaOrderDataParams = {
  /** @description The address of the order owner */
  owner: string;
  /** @description The address of the order beneficiary */
  beneficiary?: string; // beneficiary==owner if no transferTo
  /** @description The address of the src token */
  srcToken: string; // lowercase
  /** @description The address of the dest token. For Crosschain Order - destination token on the destination chain */
  destToken: string; // lowercase
  /** @description The amount of src token to swap */
  srcAmount: string; // wei
  /** @description The minimum amount of dest token to receive */
  destAmount: string; // wei, deltaPrice.destAmount - slippage
  /** @description The deadline for the order */
  deadline?: number; // seconds
  /** @description The nonce of the order */
  nonce?: number | string; // can be random, can even be Date.now()
  /** @description Optional permit signature for the src token https://developers.velora.xyz/api/velora-api/velora-delta-api/build-a-delta-order-to-sign#supported-permits-order#supported-permits */
  permit?: string; //can be "0x"
  /** @description Partner string. */
  partner?: string;

  /** @description Destination Chain ID for Crosschain Orders */
  destChainId?: number;
  /** @description Whether the beneficiary is a contract. Needed to automatically fill in crosschain Bridge */
  beneficiaryType?: BeneficiaryType;

  /** @description price response received from /delta/prices (getDeltaPrice method) */
  deltaPrice: Pick<
    BridgePrice,
    | 'destAmount'
    | 'partner'
    | 'partnerFee'
    | 'destToken'
    | 'srcAmount'
    | 'bridge'
  >;

  /** @description partner fee in basis points (bps), 50bps=0.5% */
  partnerFeeBps?: number;
  /** @description partner address */
  partnerAddress?: string;
  /** @description take surplus */
  partnerTakesSurplus?: boolean;

  /** @description The side of the order. Default is SELL */
  side?: SwapSideUnion;
  /** @description Metadata for the order, hex string */
  metadata?: string;
};

type BuildDeltaOrder = (
  buildOrderParams: BuildDeltaOrderDataParams,
  requestParams?: RequestParameters
) => Promise<SignableDeltaOrderData>;

export type BuildDeltaOrderFunctions = {
  /** @description Build Orders to be posted to Delta API for execution */
  buildDeltaOrder: BuildDeltaOrder;
};

export const constructBuildDeltaOrder = (
  options: ConstructFetchInput
): BuildDeltaOrderFunctions => {
  const { chainId } = options;

  // cached internally
  const { getDeltaContract } = constructGetDeltaContract(options);
  // cached internally for `partner`
  const { getPartnerFee } = constructGetPartnerFee(options);

  const buildDeltaOrder: BuildDeltaOrder = async (options, requestParams) => {
    const ParaswapDelta = await getDeltaContract(requestParams);
    if (!ParaswapDelta) {
      throw new Error(`Delta is not available on chain ${chainId}`);
    }

    ////// Partner logic //////

    // externally supplied partner fee data takes precedence
    let partnerAddress = options.partnerAddress;
    let partnerFeeBps =
      options.partnerFeeBps ?? options.deltaPrice.partnerFee * 100;
    let partnerTakesSurplus = options.partnerTakesSurplus;

    // if fee given, takeSurplus is ignored
    const feeOrTakeSurplusSupplied =
      partnerFeeBps !== undefined || partnerTakesSurplus !== undefined;

    if (partnerAddress === undefined || feeOrTakeSurplusSupplied) {
      const partner = options.partner || options.deltaPrice.partner;
      const partnerFeeResponse = await getPartnerFee(
        { partner },
        requestParams
      );

      partnerAddress = partnerAddress ?? partnerFeeResponse.partnerAddress;
      // deltaPrice.partnerFee and partnerFeeResponse.partnerFee should be the same, but give priority to externally provided
      partnerFeeBps = partnerFeeBps ?? partnerFeeResponse.partnerFee;
      partnerTakesSurplus =
        partnerTakesSurplus ?? partnerFeeResponse.takeSurplus;
    }

    const swapSide = options.side ?? SwapSide.SELL;

    const expectedAmount =
      swapSide === SwapSide.SELL
        ? options.deltaPrice.destAmount
        : options.deltaPrice.srcAmount;

    const input: BuildDeltaOrderDataInput = {
      owner: options.owner,
      beneficiary: options.beneficiary,
      srcToken: options.srcToken,
      // for some cases of WETH->ETH crosschain swaps, the destToken is changed to WETH or ETH,
      // this is already reflected in deltaPrice
      destToken: options.deltaPrice.destToken,
      srcAmount: options.srcAmount,
      destAmount: options.destAmount,
      expectedAmount,
      deadline: options.deadline,
      nonce: options.nonce?.toString(10),
      permit: options.permit,
      kind: SwapSideToOrderKind[swapSide],
      metadata: options.metadata,

      chainId,
      paraswapDeltaAddress: ParaswapDelta,
      partnerAddress,
      partnerTakesSurplus,
      partnerFeeBps,

      bridge: options.deltaPrice.bridge, // ZERO_BRIDGE for same-chain Orders
    };

    return buildDeltaSignableOrderData(input);
  };

  return {
    buildDeltaOrder,
  };
};
