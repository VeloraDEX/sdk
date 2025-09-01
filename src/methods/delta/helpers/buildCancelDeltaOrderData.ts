import { Domain } from '../../common/orders/buildOrderData';

const ORDER_CANCELLATIONS_EIP_712_TYPES = {
  OrderCancellations: [{ name: 'orderIds', type: 'string[]' }],
};

export type CancelDeltaOrderData = {
  orderIds: string[];
};

export type SignableCancelDeltaOrderData = {
  types: {
    OrderCancellations: (typeof ORDER_CANCELLATIONS_EIP_712_TYPES)['OrderCancellations'];
  };
  domain: Domain;
  data: CancelDeltaOrderData;
};

type BuildCancelDeltaOrderInput = {
  orderInput: CancelDeltaOrderData;
  paraswapDeltaAddress: string;
  chainId: number;
};

export function buildCancelDeltaOrderSignableData({
  orderInput,
  chainId,
  paraswapDeltaAddress,
}: BuildCancelDeltaOrderInput): SignableCancelDeltaOrderData {
  const typedData = {
    types: {
      OrderCancellations: ORDER_CANCELLATIONS_EIP_712_TYPES.OrderCancellations,
    },
    domain: {
      name: 'Portikus',
      version: '2.0.0',
      chainId,
      verifyingContract: paraswapDeltaAddress,
    },
    data: {
      // explicityly pick only the necessary fields,
      // otherwise signing will break if more is present
      orderIds: orderInput.orderIds,
    },
  };

  return typedData;
}
