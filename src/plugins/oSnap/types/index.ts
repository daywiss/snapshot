import networks from '@snapshot-labs/snapshot.js/src/networks.json';

type Networks = typeof networks;

export type Network = keyof Networks;

export type OptimisticGovernorTransaction = [to: string, operation: 0, value: string, data: string];

export type GnosisSafe = {
  safeName: string;
  safeAddress: string;
  network: Network;
  moduleAddress: string;
  tokens: Token[];
  collectables: NFT[];
  transactions: Transaction[];
}

export type SafesBySafeAddress = Record<string, GnosisSafe>;

export type OsnapPluginData = {
    safes: SafesBySafeAddress;
}

export type OsnapModelValue = {
  oSnap: OsnapPluginData;
}

export type TransactionType = 'transferFunds' | 'transferNFT' | 'contractInteraction' | 'raw';

export type Transaction = RawTransaction | TransferNftTransaction | TransferFundsTransaction;

export type BaseTransaction = {
  to: string;
  value: string;
  data: string;
  formatted: OptimisticGovernorTransaction;
}

export type RawTransaction = BaseTransaction & {
  type: 'raw';
}

export type TransferNftTransaction = BaseTransaction & {
  type: 'transferNFT';
  recipient: string;
  collectable: NFT;
}

export type TransferFundsTransaction = BaseTransaction & {
  type: 'transferFunds';
  amount: string;
  recipient: string;
  token: Token;
}

export type Asset = {
  name: string;
  address: "main" | (string & {});
  logoUri?: string;
  imageUri?: string;
}

export type Token = Asset & {
  symbol: string;
  decimals: number;
  balance?: string;
  verified?: boolean;
  chainId?: Network;
}

export type NFT = Asset & {
  id: string;
  tokenName?: string;
}

