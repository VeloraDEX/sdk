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

type IsTokenSupportedInDeltaV2 = (
  token: Address,
  requestParams?: RequestParameters
) => Promise<boolean>;

export type IsTokenSupportedInDeltaV2Functions = {
  isTokenSupportedInDeltaV2: IsTokenSupportedInDeltaV2;
};

export const constructIsTokenSupportedInDeltaV2 = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): IsTokenSupportedInDeltaV2Functions => {
  const baseUrl = `${apiURL}/delta/v2/prices/is-token-supported` as const;

  const isTokenSupportedInDeltaV2: IsTokenSupportedInDeltaV2 = async (
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

  return { isTokenSupportedInDeltaV2 };
};
