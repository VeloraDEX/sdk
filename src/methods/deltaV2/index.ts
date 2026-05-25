import type { ConstructProviderFetchInput } from '../../types';
import type { DeltaAuction, OnChainOrderMap } from '../delta/helpers/types';

// reused v1 modules
import {
  GetDeltaContractFunctions,
  constructGetDeltaContract,
} from '../delta/getDeltaContract';
import {
  constructGetPartnerFee,
  GetPartnerFeeFunctions,
} from '../delta/getPartnerFee';
import {
  ApproveTokenForDeltaFunctions,
  constructApproveTokenForDelta,
} from '../delta/approveForDelta';
import {
  constructPreSignDeltaOrder,
  PreSignDeltaOrderFunctions,
} from '../delta/preSignDeltaOrder';
import {
  constructPreSignExternalDeltaOrder,
  PreSignExternalDeltaOrderFunctions,
} from '../delta/preSignExternalDeltaOrder';
import {
  constructPreSignTWAPDeltaOrder,
  PreSignTWAPDeltaOrderFunctions,
} from '../delta/preSignTWAPDeltaOrder';
import {
  DeltaTokenModuleFunctions,
  constructDeltaTokenModule,
} from '../delta/deltaTokenModule';

// new v2 modules
import {
  BuildDeltaOrderV2Functions,
  BuildDeltaOrderV2Params,
  BuiltDeltaOrderV2,
  constructBuildDeltaOrderV2,
} from './buildDeltaOrderV2';
import {
  BuildExternalDeltaOrderV2Functions,
  BuildExternalDeltaOrderV2Params,
  constructBuildExternalDeltaOrderV2,
} from './buildExternalDeltaOrderV2';
import {
  BuildTWAPDeltaOrderV2Functions,
  BuildTWAPDeltaOrderV2Params,
  constructBuildTWAPDeltaOrderV2,
} from './buildTWAPDeltaOrderV2';
import {
  constructPostDeltaOrderV2,
  DeltaOrderToPostV2,
  PostDeltaOrderV2Functions,
} from './postDeltaOrderV2';
import {
  constructPostExternalDeltaOrderV2,
  PostExternalDeltaOrderV2Functions,
} from './postExternalDeltaOrderV2';
import {
  constructPostTWAPDeltaOrderV2,
  PostTWAPDeltaOrderV2Functions,
} from './postTWAPDeltaOrderV2';
import {
  constructGetDeltaPriceV2,
  GetDeltaPriceV2Functions,
} from './getDeltaPriceV2';
import {
  constructGetDeltaOrdersV2,
  GetDeltaOrdersV2Functions,
} from './getDeltaOrdersV2';
import {
  constructGetBridgeRoutes,
  GetBridgeRoutesFunctions,
} from './getBridgeRoutes';
import {
  constructIsTokenSupportedInDeltaV2,
  IsTokenSupportedInDeltaV2Functions,
} from './isTokenSupportedInDeltaV2';
import {
  CancelDeltaOrderV2Functions,
  constructCancelDeltaOrderV2,
} from './cancelDeltaOrderV2';
import {
  constructGetAgentsListV2,
  GetAgentsListV2Functions,
} from './getAgentsListV2';

// ── Sign v2 ─────────────────────────────────────────────────────────────────

type SignDeltaOrderV2 = (builtOrder: BuiltDeltaOrderV2) => Promise<string>;

export type SignDeltaOrderV2Functions = {
  /** @description Sign a BuiltDeltaOrderV2 (any order type) using EIP-712 typed data. */
  signDeltaOrderV2: SignDeltaOrderV2;
};

export const constructSignDeltaOrderV2 = (
  options: Pick<
    ConstructProviderFetchInput<any, 'signTypedDataCall'>,
    'contractCaller'
  >
): SignDeltaOrderV2Functions => {
  const signDeltaOrderV2: SignDeltaOrderV2 = async (builtOrder) => {
    return options.contractCaller.signTypedDataCall({
      types: builtOrder.toSign.types,
      domain: builtOrder.toSign.domain,
      data: builtOrder.toSign.value,
    });
  };
  return { signDeltaOrderV2 };
};

// ── Submit orchestrators ─────────────────────────────────────────────────────

export type SubmitDeltaOrderV2Params = BuildDeltaOrderV2Params & {
  /** @description Referrer address */
  referrerAddress?: string;
  degenMode?: boolean;
} & Pick<DeltaOrderToPostV2, 'type' | 'includeAgents' | 'excludeAgents'>;

type SubmitDeltaOrderV2 = (
  orderParams: SubmitDeltaOrderV2Params
) => Promise<DeltaAuction>;

export type SubmitDeltaOrderV2Funcs = {
  submitDeltaOrderV2: SubmitDeltaOrderV2;
};

export const constructSubmitDeltaOrderV2 = (
  options: ConstructProviderFetchInput<any, 'signTypedDataCall'>
): SubmitDeltaOrderV2Funcs => {
  const { buildDeltaOrderV2 } = constructBuildDeltaOrderV2(options);
  const { signDeltaOrderV2 } = constructSignDeltaOrderV2(options);
  const { postDeltaOrderV2 } = constructPostDeltaOrderV2(options);

  const submitDeltaOrderV2: SubmitDeltaOrderV2 = async (orderParams) => {
    const orderData = await buildDeltaOrderV2(orderParams);
    const signature = await signDeltaOrderV2(orderData);

    return postDeltaOrderV2({
      signature,
      partner: orderParams.partner,
      order: orderData.toSign.value as OnChainOrderMap['Order'],
      partiallyFillable: orderParams.partiallyFillable,
      referrerAddress: orderParams.referrerAddress,
      type: orderParams.type,
      includeAgents: orderParams.includeAgents,
      excludeAgents: orderParams.excludeAgents,
      degenMode: orderParams.degenMode,
    });
  };

  return { submitDeltaOrderV2 };
};

export type SubmitExternalDeltaOrderV2Params =
  BuildExternalDeltaOrderV2Params & {
    referrerAddress?: string;
  } & Pick<DeltaOrderToPostV2, 'type' | 'includeAgents' | 'excludeAgents'>;

type SubmitExternalDeltaOrderV2 = (
  orderParams: SubmitExternalDeltaOrderV2Params
) => Promise<DeltaAuction<'ExternalOrder'>>;

export type SubmitExternalDeltaOrderV2Funcs = {
  submitExternalDeltaOrderV2: SubmitExternalDeltaOrderV2;
};

export const constructSubmitExternalDeltaOrderV2 = (
  options: ConstructProviderFetchInput<any, 'signTypedDataCall'>
): SubmitExternalDeltaOrderV2Funcs => {
  const { buildExternalDeltaOrderV2 } =
    constructBuildExternalDeltaOrderV2(options);
  const { signDeltaOrderV2 } = constructSignDeltaOrderV2(options);
  const { postExternalDeltaOrderV2 } =
    constructPostExternalDeltaOrderV2(options);

  const submitExternalDeltaOrderV2: SubmitExternalDeltaOrderV2 = async (
    orderParams
  ) => {
    const orderData = await buildExternalDeltaOrderV2(orderParams);
    const signature = await signDeltaOrderV2(orderData);

    return postExternalDeltaOrderV2({
      signature,
      partner: orderParams.partner,
      order: orderData.toSign.value as OnChainOrderMap['ExternalOrder'],
      partiallyFillable: orderParams.partiallyFillable,
      referrerAddress: orderParams.referrerAddress,
      type: orderParams.type,
      includeAgents: orderParams.includeAgents,
      excludeAgents: orderParams.excludeAgents,
    });
  };

  return { submitExternalDeltaOrderV2 };
};

export type SubmitTWAPDeltaOrderV2Params = BuildTWAPDeltaOrderV2Params & {
  referrerAddress?: string;
  degenMode?: boolean;
} & Pick<DeltaOrderToPostV2, 'type' | 'includeAgents' | 'excludeAgents'>;

type SubmitTWAPDeltaOrderV2 = (
  orderParams: SubmitTWAPDeltaOrderV2Params
) => Promise<DeltaAuction<'TWAPOrder'> | DeltaAuction<'TWAPBuyOrder'>>;

export type SubmitTWAPDeltaOrderV2Funcs = {
  submitTWAPDeltaOrderV2: SubmitTWAPDeltaOrderV2;
};

export const constructSubmitTWAPDeltaOrderV2 = (
  options: ConstructProviderFetchInput<any, 'signTypedDataCall'>
): SubmitTWAPDeltaOrderV2Funcs => {
  const { buildTWAPDeltaOrderV2 } = constructBuildTWAPDeltaOrderV2(options);
  const { signDeltaOrderV2 } = constructSignDeltaOrderV2(options);
  const { postTWAPDeltaOrderV2 } = constructPostTWAPDeltaOrderV2(options);

  const submitTWAPDeltaOrderV2: SubmitTWAPDeltaOrderV2 = async (
    orderParams
  ) => {
    const orderData = await buildTWAPDeltaOrderV2(orderParams);
    const signature = await signDeltaOrderV2(orderData);

    return postTWAPDeltaOrderV2({
      signature,
      partner: orderParams.partner,
      order: orderData.toSign.value as
        | OnChainOrderMap['TWAPOrder']
        | OnChainOrderMap['TWAPBuyOrder'],
      onChainOrderType: orderParams.onChainOrderType,
      partiallyFillable: orderParams.partiallyFillable,
      referrerAddress: orderParams.referrerAddress,
      type: orderParams.type,
      includeAgents: orderParams.includeAgents,
      excludeAgents: orderParams.excludeAgents,
      degenMode: orderParams.degenMode,
    });
  };

  return { submitTWAPDeltaOrderV2 };
};

// ── Handler bundle ───────────────────────────────────────────────────────────

export type DeltaV2OrderHandlers<TxResponse> = SubmitDeltaOrderV2Funcs &
  SubmitExternalDeltaOrderV2Funcs &
  SubmitTWAPDeltaOrderV2Funcs &
  BuildDeltaOrderV2Functions &
  BuildExternalDeltaOrderV2Functions &
  BuildTWAPDeltaOrderV2Functions &
  PostDeltaOrderV2Functions &
  PostExternalDeltaOrderV2Functions &
  PostTWAPDeltaOrderV2Functions &
  SignDeltaOrderV2Functions &
  PreSignDeltaOrderFunctions<TxResponse> &
  PreSignExternalDeltaOrderFunctions<TxResponse> &
  PreSignTWAPDeltaOrderFunctions<TxResponse> &
  GetDeltaPriceV2Functions &
  GetDeltaOrdersV2Functions &
  GetBridgeRoutesFunctions &
  IsTokenSupportedInDeltaV2Functions &
  GetAgentsListV2Functions &
  GetDeltaContractFunctions &
  GetPartnerFeeFunctions &
  ApproveTokenForDeltaFunctions<TxResponse> &
  DeltaTokenModuleFunctions<TxResponse> &
  CancelDeltaOrderV2Functions;

/** @description Construct an SDK bundle exposing every Delta v2 method (queries, build/sign/post, on-chain helpers). */
export const constructAllDeltaV2OrdersHandlers = <TxResponse>(
  options: ConstructProviderFetchInput<
    TxResponse,
    'signTypedDataCall' | 'transactCall'
  >
): DeltaV2OrderHandlers<TxResponse> => {
  return {
    ...constructSubmitDeltaOrderV2(options),
    ...constructSubmitExternalDeltaOrderV2(options),
    ...constructSubmitTWAPDeltaOrderV2(options),
    ...constructBuildDeltaOrderV2(options),
    ...constructBuildExternalDeltaOrderV2(options),
    ...constructBuildTWAPDeltaOrderV2(options),
    ...constructPostDeltaOrderV2(options),
    ...constructPostExternalDeltaOrderV2(options),
    ...constructPostTWAPDeltaOrderV2(options),
    ...constructSignDeltaOrderV2(options),
    ...constructPreSignDeltaOrder(options),
    ...constructPreSignExternalDeltaOrder(options),
    ...constructPreSignTWAPDeltaOrder(options),
    ...constructGetDeltaPriceV2(options),
    ...constructGetDeltaOrdersV2(options),
    ...constructGetBridgeRoutes(options),
    ...constructIsTokenSupportedInDeltaV2(options),
    ...constructGetAgentsListV2(options),
    ...constructGetDeltaContract(options),
    ...constructGetPartnerFee(options),
    ...constructApproveTokenForDelta(options),
    ...constructDeltaTokenModule(options),
    ...constructCancelDeltaOrderV2(options),
  };
};
