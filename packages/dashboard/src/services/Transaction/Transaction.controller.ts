import http from "../../api/http-common";
import { TransactionModel } from "./Transaction.model";

const init = () => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRAdC5jb20iLCJlbWFpbCI6InRAdC5jb20iLCJwYXNzd29yZCI6InRAdC5jb20iLCJpZCI6IjY3OGVmODI1MmJmYzI3MzU2Y2UzYzEyNSIsImlhdCI6MTczNzQyMzMxNiwiZXhwIjoxNzM3NDY2NTE2fQ.2lbcT7XOfmxdpghagc2XjZZV75co4O-N4TfZxiBMVLs";

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return config;
};

const create = (data: TransactionModel) => {
  let config = init();
  return http.post<TransactionModel>(
    `/account/transaction/id/${data.id}`,
    data,
    config
  );
};

const update = (id: string, data: TransactionModel) => {
  let config = init();
  return http.put<number>(`/account/transaction/id/${id}`, data, config);
};

const remove = (id: string) => {
  let config = init();
  return http.delete<boolean>(`/account/transaction/id/${id}`, config);
};

const TransactionService = {
  create,
  update,
  remove,
};

export default TransactionService;

// export const getTransactions = async () => {
//   const res = await fetch("http://localhost:3006/transactions", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     cache: "no-store",
//   });

//   const response: Transaction[] = await res.json();

//   return response.map((transaction) => new Transaction(transaction));
// };

// export const addTransaction = async (transaction: TransactionInput) => {
//   const res = await fetch("http://localhost:3006/transactions", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(transaction),
//   });

//   const data: TransactionData = await res.json();

//   return new Transaction(data);
// };

// export const editTransaction = async (transaction: TransactionData) => {
//   const res = await fetch(
//     `http://localhost:3006/transactions/${transaction.id}`,
//     {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(transaction),
//     }
//   );

//   const data: TransactionData = await res.json();

//   return new Transaction(data);
// };

// export const deleteTransaction = async (transactionId: string) => {
//   const res = await fetch(
//     `http://localhost:3006/transactions/${transactionId}`,
//     {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   const data: TransactionData = await res.json();

//   return new Transaction(data);
// };
