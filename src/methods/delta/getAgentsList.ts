import { API_URL } from '../../constants';
import type { ConstructFetchInput, RequestParameters } from '../../types';

export type AgentList = string[];

type AgentsListResponse = AgentList;

type GetAgentsList = (requestParams?: RequestParameters) => Promise<AgentList>;

export type GetAgentsListFunctions = {
  /** @description List agents available on the current chain. */
  getAgentsList: GetAgentsList;
};

export const constructGetAgentsList = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetAgentsListFunctions => {
  const baseUrl = `${apiURL}/delta/v2/agents/list/${chainId}` as const;

  const getAgentsList: GetAgentsList = async (requestParams) => {
    const data = await fetcher<AgentsListResponse>({
      url: baseUrl,
      method: 'GET',
      requestParams,
    });
    return data;
  };

  return { getAgentsList };
};
