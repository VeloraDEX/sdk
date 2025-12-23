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
  allowBridgeAndSwap?: string;
  bridges?: string;
};

type GetBridgeInfo = (
  params?: GetBridgeInfoParams,
  requestParams?: RequestParameters
) => Promise<BridgeInfo>;


export type GetBridgeInfoFunctions = {
  getBridgeInfo: GetBridgeInfo;
};

export const constructGetBridgeInfo = ({
  apiURL = API_URL,
  fetcher,
}: ConstructFetchInput): GetBridgeInfoFunctions => {
  const deltaBridgeUrl = `${apiURL}/delta/prices` as const;

  const getBridgeInfo: GetBridgeInfo = async (params = {}, requestParams) => {
    const { allowBridgeAndSwap, bridges } = params;
    const allowBridgeAndSwapString = allowBridgeAndSwap ? 'true' : 'false';
    const bridgesString = bridges ? bridges.join(',') : undefined;

    const search = constructSearchString<BridgeInfoQuery>({
      allowBridgeAndSwap: allowBridgeAndSwapString,
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

  return {
    getBridgeInfo,
  };
};
