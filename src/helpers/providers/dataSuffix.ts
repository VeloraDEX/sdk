import type { Signer as EthersV5Signer } from '@ethersproject/abstract-signer';
import type { ContractRunner, Signer as EthersV6Signer } from 'ethers';
import { bytesToHex } from 'viem';

export type WithDataSuffixInput<T> = { signer: T; suffix?: string };

export function withEthersV5DataSuffix({
  signer,
  suffix,
}: WithDataSuffixInput<EthersV5Signer>): EthersV5Signer {
  if (!suffix) return signer;
  return {
    _isSigner: true,
    provider: signer.provider,
    getAddress: signer.getAddress.bind(signer),
    signMessage: signer.signMessage.bind(signer),
    signTransaction: signer.signTransaction.bind(signer),
    getBalance: signer.getBalance.bind(signer),
    getTransactionCount: signer.getTransactionCount.bind(signer),
    estimateGas: signer.estimateGas.bind(signer),
    call: signer.call.bind(signer),
    getChainId: signer.getChainId.bind(signer),
    getGasPrice: signer.getGasPrice.bind(signer),
    getFeeData: signer.getFeeData.bind(signer),
    resolveName: signer.resolveName.bind(signer),
    checkTransaction: signer.checkTransaction.bind(signer),
    populateTransaction: signer.populateTransaction.bind(signer),
    _checkProvider: signer._checkProvider.bind(signer),
    connect: (provider) =>
      withEthersV5DataSuffix({ signer: signer.connect(provider), suffix }),
    // Contract retains its receipt decoding; the signer receives final calldata.
    sendTransaction: async (tx) =>
      signer.sendTransaction({
        ...tx,
        data: appendSuffix(await tx.data, suffix),
      }),
  };
}

export function withEthersV6DataSuffix({
  signer,
  suffix,
}: WithDataSuffixInput<EthersV6Signer>): ContractRunner {
  if (!suffix) return signer;
  return {
    provider: signer.provider,
    resolveName: signer.resolveName.bind(signer),
    sendTransaction: (tx) =>
      signer.sendTransaction({
        ...tx,
        data: appendSuffix(tx.data, suffix),
      }),
  };
}

function appendSuffix(
  data: string | ArrayLike<number> | null | undefined,
  suffix: string
): string {
  const hex =
    typeof data === 'string'
      ? data
      : data
      ? bytesToHex(Uint8Array.from(data))
      : '0x';
  return `${hex}${suffix.slice(2)}`;
}
