import { hexToBytes, stringToBytes, keccak256 } from 'viem/utils';
import type { ConstructProviderFetchInput } from '../../types';
import { DeltaAuction } from './helpers/types';

type SuccessResponse = { success: true };

type CancelDeltaOrderRequestParams = {
  orderId: string;
  signature: string;
};

export type SignCancelDeltaOrderRequest = (
  params: Pick<DeltaAuction, 'id'>
) => Promise<string>;

export type PostCancelDeltaOrderRequest = (
  params: CancelDeltaOrderRequestParams
) => Promise<SuccessResponse>;

export type CancelDeltaOrder = (
  params: Pick<DeltaAuction, 'id'>
) => Promise<SuccessResponse>;

export type CancelDeltaOrderFunctions = {
  signCancelDeltaOrderRequest: SignCancelDeltaOrderRequest;
  postCancelDeltaOrderRequest: PostCancelDeltaOrderRequest;
  cancelDeltaOrder: CancelDeltaOrder;
};

export const constructCancelDeltaOrder = (
  options: Pick<
    ConstructProviderFetchInput<any, 'signMessageCall'>,
    'contractCaller' | 'fetcher' | 'apiURL'
  >
): CancelDeltaOrderFunctions => {
  const signCancelDeltaOrderRequest: SignCancelDeltaOrderRequest = async ({
    id,
  }) => {
    const message = constructCancelDeltaOrderMessage(id);
    const signature = await options.contractCaller.signMessageCall(message);

    return signature;
  };

  const postCancelDeltaOrderRequest: PostCancelDeltaOrderRequest = async (
    params
  ) => {
    const cancelUrl = `${options.apiURL}/delta/orders/cancel` as const;

    const res = await options.fetcher<SuccessResponse>({
      url: cancelUrl,
      method: 'POST',
      data: params,
    });

    return res;
  };

  const cancelDeltaOrder: CancelDeltaOrder = async ({ id }) => {
    const signature = await signCancelDeltaOrderRequest({ id });
    const res = await postCancelDeltaOrderRequest({ orderId: id, signature });

    return res;
  };

  return {
    signCancelDeltaOrderRequest,
    postCancelDeltaOrderRequest,
    cancelDeltaOrder,
  };
};

function constructCancelDeltaOrderMessage(orderId: string): Uint8Array {
  const payload = `CancelOrder:${orderId}`;

  const digestHex = keccak256(stringToBytes(payload)); // 0x… (32 bytes)
  const messageBytes = hexToBytes(digestHex);

  return messageBytes;
}
