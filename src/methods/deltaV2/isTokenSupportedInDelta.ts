import { API_URL } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type {
  Address,
  ConstructFetchInput,
  RequestParameters,
} from '../../types';

type TokenSupportedResponse = { supported: boolean };
type IsTokenSupportedQuery = {
  token: Address;
  chainId: number;
};

type IsTokenSupportedInDelta = (
  token: Address,
  requestParams?: RequestParameters
) => Promise<boolean>;

export type IsTokenSupportedInDeltaFunctions = {
  isTokenSupportedInDelta: IsTokenSupportedInDelta;
};

export const constructIsTokenSupportedInDelta = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): IsTokenSupportedInDeltaFunctions => {
  const baseUrl = `${apiURL}/delta/v2/prices/is-token-supported` as const;

  const isTokenSupportedInDelta: IsTokenSupportedInDelta = async (
    token,
    requestParams
  ) => {
    const search = constructSearchString<IsTokenSupportedQuery>({
      token,
      chainId,
    });

    const fetchURL = `${baseUrl}/${search}` as const;

    const data = await fetcher<TokenSupportedResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return data.supported;
  };

  return { isTokenSupportedInDelta };
};
