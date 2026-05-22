import { API_URL } from '../../constants';
import type { ConstructFetchInput, RequestParameters } from '../../types';

export type AgentList = string[];

type AgentsListV2Response = AgentList;

type GetAgentsListV2 = (
  requestParams?: RequestParameters
) => Promise<AgentList>;

export type GetAgentsListV2Functions = {
  /** @description List agents available on the current chain. */
  getAgentsListV2: GetAgentsListV2;
};

export const constructGetAgentsListV2 = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetAgentsListV2Functions => {
  const baseUrl = `${apiURL}/delta/v2/agents/list/${chainId}` as const;

  const getAgentsListV2: GetAgentsListV2 = async (requestParams) => {
    const data = await fetcher<AgentsListV2Response>({
      url: baseUrl,
      method: 'GET',
      requestParams,
    });
    return data;
  };

  return { getAgentsListV2 };
};
