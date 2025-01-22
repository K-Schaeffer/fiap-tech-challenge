import AccountDashboard from "@/components/pages/AccountDashboard/AccountDashboard";
import { MENU_ITEMS } from "@/constants/menuItems";
import { Account } from "@/services/Account/Account.model";
import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getTransactions,
} from "@/services/Transaction/Transaction.controller";
import {
  Transaction,
  TransactionData,
  TransactionInput,
} from "@/services/Transaction/Transaction.model";
// import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";

// function serializeAccount(account: Account) {
//   return {
//     ...account,
//   };
// }

// function serializeTransactions(transactions: Transaction[]) {
//   return transactions.map((transaction) => ({
//     ...transaction,
//   }));
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   const account: Account = await getAccountInfo();
//   const transactions: Transaction[] = await getTransactions();

//   const serializedAccount = serializeAccount(account);
//   const serializedTransactions = serializeTransactions(transactions);

//   return {
//     props: {
//       account: serializedAccount,
//       transactions: serializedTransactions,
//     },
//   };
// };

interface DashboardProps {
  account: Account;
  transactions: Transaction[];
}

export default function DashboardView(
  {
    // account,
    // transactions,
  }: DashboardProps
) {
  const account: Account = {
    fullName: "Joana da Silva Oliveira",
    firstName: "Joana",
    balance: 2500,
    currency: "R$",
  };
  const transactions: Transaction[] = [
    {
      id: "f9fd",
      type: "Transferência",
      value: -100,
      currency: "R$",
      date: "2025-01-22T00:10:09.509Z",
    },
  ];

  const [localTransactions, setLocalTransactions] = useState(transactions);

  async function submitAddTransaction(transaction: TransactionInput) {
    await addTransaction(transaction);

    const updatedTransactions = await getTransactions();
    setLocalTransactions(updatedTransactions);
  }

  async function submitEditTransaction(transaction: TransactionData) {
    await editTransaction(transaction);
    setLocalTransactions(
      localTransactions.map((t) => (t.id === transaction.id ? transaction : t))
    );
  }

  async function submitDeleteTransaction(transactionId: string) {
    await deleteTransaction(transactionId);
    setLocalTransactions(
      localTransactions.filter((t) => t.id !== transactionId)
    );
  }

  return (
    <>
      <Head>
        <title>Bytebank | Dashboard</title>
        <meta name="description" content="By FIAP Tech Challenge" />
      </Head>
      <AccountDashboard
        menuItems={MENU_ITEMS}
        account={account}
        transactionList={localTransactions}
        submitAddTransaction={submitAddTransaction}
        submitEditTransaction={submitEditTransaction}
        submitDeleteTransaction={submitDeleteTransaction}
      />
    </>
  );
}
