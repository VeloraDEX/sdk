import { DeltaAuction, GetDeltaOrdersFunctions } from '../..';

function isExecutedDeltaAuction(
  auction: Omit<DeltaAuction, 'signature'>,
  waitForCrosschain = true // only consider executed when destChain work is done
) {
  if (auction.status !== 'EXECUTED') return false;

  // crosschain Order is executed on destChain if bridgeStatus is filled
  if (waitForCrosschain && auction.order.bridge.destinationChainId !== 0) {
    return auction.bridgeStatus === 'filled';
  }

  return true;
}

type GetDeltaOrder = () => ReturnType<
  GetDeltaOrdersFunctions['getDeltaOrderById']
>;

async function fetchOrderPeriodically(getDeltaOrder: GetDeltaOrder) {
  const intervalId = setInterval(async () => {
    const auction = await getDeltaOrder();
    console.log('checks: ', auction); // Handle or log the fetched auction as needed

    if (isExecutedDeltaAuction(auction)) {
      clearInterval(intervalId); // Stop interval if completed
      console.log('Order completed');
    }
  }, 3000);
  console.log('Order Pending');
  // Return intervalId to enable clearing the interval if needed externally
  return intervalId;
}

export async function startStatusCheck(getDeltaOrder: GetDeltaOrder) {
  const intervalId = await fetchOrderPeriodically(getDeltaOrder);
  setTimeout(() => clearInterval(intervalId), 60000); // Stop after 60 seconds
}
