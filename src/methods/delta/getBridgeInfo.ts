import { API_URL } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type {
  Address,
  ConstructFetchInput,
  RequestParameters,
} from '../../types';

// srcChainId -> destChainId -> outputToken[]
// output Tokens that are supported for a srcChainId -> destChainId pair
export type BridgeInfo = Record<number, Record<number, Address[]>>;
type BridgeInfoResponse = { supportedTokens: BridgeInfo };

type GetBridgeInfoParams = {
  /** @description Include tokens that can be swapped on destChain after bridge. Default is true. */
  allowBridgeAndSwap?: boolean;
  /** @description Include only the specified bridges. Default is all bridges. */
  bridges?: string[];
};

type BridgeInfoQuery = {
  allowBridgeAndSwap?: boolean;
  bridges?: string;
};

type GetBridgeInfo = (
  params?: GetBridgeInfoParams,
  requestParams?: RequestParameters
) => Promise<BridgeInfo>;

export type BridgeProtocolResponse = {
  protocol: string;
  displayName: string;
};

type BridgeProtocolsResponse = {
  bridgeProtocols: BridgeProtocolResponse[];
};

type GetBridgeProtocols = (
  requestParams?: RequestParameters
) => Promise<BridgeProtocolResponse[]>;

export type GetBridgeInfoFunctions = {
  getBridgeInfo: GetBridgeInfo;
  getBridgeProtocols: GetBridgeProtocols;
};

export const constructGetBridgeInfo = ({
  apiURL = API_URL,
  fetcher,
}: ConstructFetchInput): GetBridgeInfoFunctions => {
  const deltaBridgeUrl = `${apiURL}/delta/prices` as const;

  const getBridgeInfo: GetBridgeInfo = async (params = {}, requestParams) => {
    const { allowBridgeAndSwap, bridges } = params;
    const bridgesString = bridges ? bridges.join(',') : undefined;

    const search = constructSearchString<BridgeInfoQuery>({
      allowBridgeAndSwap,
      bridges: bridgesString,
    });

    const fetchURL = `${deltaBridgeUrl}/bridge-info${search}` as const;

    const data = await fetcher<BridgeInfoResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return data.supportedTokens;
  };

  const getBridgeProtocols: GetBridgeProtocols = async (requestParams) => {
    const fetchURL = `${deltaBridgeUrl}/bridge-protocols` as const;

    const data = await fetcher<BridgeProtocolsResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return data.bridgeProtocols;
  };

  return {
    getBridgeInfo,
    getBridgeProtocols,
  };
};
