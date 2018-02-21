import {
  getBalance,
  getAccount,
  getTopAccounts,
  getDelegates,
  getTransaction,
  getTransactions
} from '../lisk-api';

export const resolvers = {
  Query: {
    getBalance: (_, { address }) => getBalance(address),
    getAccount: (_, { address }) => getAccount(address),
    getTopAccounts: () => getTopAccounts(),
    getDelegates: (_, { address }) => getDelegates(address),
    getTransaction: (_, { id }) => getTransaction(id),
    getTransactions: (_, params) => getTransactions(params)
  }
};
