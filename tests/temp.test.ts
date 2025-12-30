import { createPublicClient, http } from 'viem';
import { optimism } from 'viem/chains';

const viemPublicClient = createPublicClient({
  chain: optimism, // may need to override chainId
  transport: http(),
});

const PreSignatureModuleAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'orderHash',
        type: 'bytes32',
      },
    ],
    name: 'isPreSigned',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

describe('temp tests', () => {
  test('check presigned order', async () => {
    const result = await viemPublicClient.readContract({
      address: '0x76e0eBB8D4c6DccB3fDEDAb7a3E1C87036719A42',
      abi: PreSignatureModuleAbi,
      functionName: 'isPreSigned',
      args: [
        '0x75C94990D2Ad92D8da4E0a238d872D09ec16706E',
        '0x4629702889c7433220973b29b3295c4960ec0d1ce4e74c04e3d85fb236e73c50',
      ],
    });
    console.log(result);
  });
});
