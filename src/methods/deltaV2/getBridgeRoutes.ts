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

type GetBridgeProtocols = (
  requestParams?: RequestParameters
) => Promise<BridgeProtocolResponse[]>;

type BridgeProtocolsResponse = {
  bridgeProtocols: BridgeProtocolResponse[];
};

export type GetBridgeRoutesFunctions = {
  /** @description Fetch supported bridge routes as a flat array (v2 replacement for bridge-info). */
  getBridgeRoutes: GetBridgeRoutes;
  /** @description Fetch supported bridge protocols (unchanged from v1). */
  getBridgeProtocols: GetBridgeProtocols;
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

  const getBridgeProtocols: GetBridgeProtocols = async (requestParams) => {
    const fetchURL = `${deltaPricesUrl}/bridge-protocols` as const;

    const data = await fetcher<BridgeProtocolsResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return data.bridgeProtocols;
  };

  return { getBridgeRoutes, getBridgeProtocols };
};
