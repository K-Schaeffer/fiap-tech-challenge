import {
  Transaction,
  TransactionData,
  TransactionInput,
} from "./Transaction.model";

export const getTransactions = async () => {
  const res = await fetch("http://localhost:3004/transactions", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response: Transaction[] = await res.json();

  return response.map((transaction) => new Transaction(transaction));
};

export const addTransaction = async (transaction: TransactionInput) => {
  const res = await fetch("http://localhost:3004/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  });

  const data: TransactionData = await res.json();

  return new Transaction(data);
};
