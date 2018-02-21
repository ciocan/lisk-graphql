import fetch from 'node-fetch';
import {
  transformAccountResponse,
  transformTopAccountResponse,
  transformDelegatesResponse,
  transformTransactionResponse,
  transformTransactionsResponse
} from './transformers';

const NET_HASH = 'ed14889723f24ecc54871d058d98ce91ff2f973192075c0155ba2b7b70ad2511';
const VERSION = '1.0.0';
const NODE_PORT = 443;
const NODE_URL = `https://node01.lisk.io`;

const makeApiCall = async (uri) => {
  const options = {
    headers: {
      method: 'GET',
      'Content-Type': 'application/json',
      NET_HASH,
      VERSION,
      NODE_PORT
    }
  };

  const response = await fetch(`${NODE_URL}${uri}`, options);
  return await response.json();
};

export const getBalance = (address) =>
  makeApiCall(`/api/accounts/getBalance?address=${address}`);

export const getAccount = (address) =>
  makeApiCall(`/api/accounts?address=${address}`)
    .then(transformAccountResponse);

export const getTopAccounts = () =>
  makeApiCall(`/api/accounts/top`)
    .then(transformTopAccountResponse);

export const getDelegates = (address) =>
  makeApiCall(`/api/accounts/delegates?address=${address}`)
    .then(transformDelegatesResponse);

export const getTransaction = (id) =>
  makeApiCall(`/api/transactions/get?id=${id}`)
    .then(transformTransactionResponse);

export const getTransactions = ({ limit }) =>
  makeApiCall(`/api/transactions?limit=${limit}`)
    .then(transformTransactionsResponse);
