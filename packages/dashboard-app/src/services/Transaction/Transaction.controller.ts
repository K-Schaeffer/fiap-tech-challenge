import {
  Transaction,
  TransactionData,
  TransactionInput,
} from "./Transaction.model";

export const getTransactions = async () => {
  const res = await fetch("https://bytebankfiapfase2.vercel.app/transactions", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const response: Transaction[] = await res.json();

  return response.map((transaction) => new Transaction(transaction));
};

export const addTransaction = async (transaction: TransactionInput) => {
  const res = await fetch("https://bytebankfiapfase2.vercel.app/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  });

  const data: TransactionData = await res.json();

  return new Transaction(data);
};

export const editTransaction = async (transaction: TransactionData) => {
  const res = await fetch(
    `https://bytebankfiapfase2.vercel.app/transactions/${transaction.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    }
  );

  const data: TransactionData = await res.json();

  return new Transaction(data);
};

export const deleteTransaction = async (transactionId: string) => {
  const res = await fetch(
    `https://bytebankfiapfase2.vercel.app/transactions/${transactionId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data: TransactionData = await res.json();

  return new Transaction(data);
};
