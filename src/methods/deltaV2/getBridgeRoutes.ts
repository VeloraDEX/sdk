import { API_URL } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import type { BridgeProtocolResponse } from '../delta/getBridgeInfo';
import type { BridgeRoute } from './types';

type GetBridgeRoutesParams = {
  /** @description Include tokens that can be swapped on destChain after bridge. Default is true. */
  allowBridgeAndSwap?: boolean;
  /** @description Include only the specified bridges. Default is all bridges. */
  bridges?: string[];
};

type BridgeRoutesQuery = {
  allowBridgeAndSwap?: boolean;
  bridges?: string;
};

type BridgeRoutesResponse = { routes: BridgeRoute[] };

type GetBridgeRoutes = (
  params?: GetBridgeRoutesParams,
  requestParams?: RequestParameters
) => Promise<BridgeRoute[]>;

type GetBridgeProtocolsV2 = (
  requestParams?: RequestParameters
) => Promise<BridgeProtocolResponse[]>;

type BridgeProtocolsV2Response = {
  bridgeProtocols: BridgeProtocolResponse[];
};

export type GetBridgeRoutesFunctions = {
  /** @description Fetch supported bridge routes as a flat array (v2 replacement for bridge-info). */
  getBridgeRoutes: GetBridgeRoutes;
  /** @description Fetch supported bridge protocols (falls through to v1 controller on the v2 path). */
  getBridgeProtocolsV2: GetBridgeProtocolsV2;
};

export const constructGetBridgeRoutes = ({
  apiURL = API_URL,
  fetcher,
}: ConstructFetchInput): GetBridgeRoutesFunctions => {
  const deltaPricesUrl = `${apiURL}/delta/v2/prices` as const;

  const getBridgeRoutes: GetBridgeRoutes = async (
    params = {},
    requestParams
  ) => {
    const { allowBridgeAndSwap, bridges } = params;

    const search = constructSearchString<BridgeRoutesQuery>({
      allowBridgeAndSwap,
      bridges: bridges?.join(','),
    });

    const fetchURL = `${deltaPricesUrl}/bridge-routes${search}` as const;

    const data = await fetcher<BridgeRoutesResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return data.routes;
  };

  const getBridgeProtocolsV2: GetBridgeProtocolsV2 = async (requestParams) => {
    const fetchURL = `${deltaPricesUrl}/bridge-protocols` as const;

    const data = await fetcher<BridgeProtocolsV2Response>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return data.bridgeProtocols;
  };

  return { getBridgeRoutes, getBridgeProtocolsV2 };
};
