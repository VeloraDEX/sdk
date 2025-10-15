export type OrderTransaction = {
  hash: string;
  event_type: 'OrderFilled' | 'OrderCancelled';
};

export type OrderType = 'LIMIT' | 'P2P';
