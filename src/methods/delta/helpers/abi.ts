export const PreSignatureModuleAbi = [
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'orderHash',
        type: 'bytes32',
      },
      {
        internalType: 'bool',
        name: 'preSigned',
        type: 'bool',
      },
    ],
    name: 'setPreSignature',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
