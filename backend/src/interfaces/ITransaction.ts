interface ITransaction {
  'id'?: number,
  'price': number,
  'accountId': number,
  'date': Date,
  'cashback'?: number,
}

export default ITransaction;