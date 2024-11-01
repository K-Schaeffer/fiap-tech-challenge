import { TransactionInput, TransactionData, Transaction } from './Transaction.model';

export const addTransaction = async (transaction: TransactionInput) => {

  const res = await fetch('http://localhost:3004/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transaction),
  })
 
  const data: TransactionData = await res.json();

  return new Transaction(data);
}