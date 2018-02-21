### [Lisk GraphQL][liskgraphql]

  [liskgraphql]: https://lisk-graphql.now.sh/ "Lisk GraphQL Server"

#### GraphQL Server for Lisk Blockchain

![](assets/screenshot.gif)

#### To run locally:

```
yarn
yarn start
```

#### Implemented API Calls
```
  getBalance(address: String): Balance
  getAccount(address: String): Account
  getTopAccounts: TopAccounts
  getDelegates(address: String): Delegates
  getTransaction(id: String): Transaction
  getTransactions(limit: String): Transactions
```
