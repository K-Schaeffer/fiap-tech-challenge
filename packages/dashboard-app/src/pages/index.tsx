import AccountDashboard from "@/components/pages/AccountDashboard/AccountDashboard";
import { MENU_ITEMS } from "@/constants/menuItems";
import { getAccountInfo } from "@/services/Account/Account.controller";
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
import Head from "next/head";
import { useState } from "react";

export default function DashboardView() {
  const account: Account = {
    fullName: "",
    firstName: "",
    balance: 0,
    currency: "",
  };

  const transactions: Transaction[] = [];

  const [localAccount, setLocalAccount] = useState(account);
  const [localTransactions, setLocalTransactions] = useState(transactions);

  async function getInitialData() {
    await fetchAccount();
    await fetchTransactions();
  }

  async function fetchAccount() {
    const updatedTransactions = await getAccountInfo();
    setLocalAccount(updatedTransactions);
  }

  async function fetchTransactions() {
    const updatedTransactions = await getTransactions();
    setLocalTransactions(updatedTransactions);
  }

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
        <title>Dashboard</title>
        <meta name="description" content="By FIAP Tech Challenge" />
      </Head>
      <AccountDashboard
        menuItems={MENU_ITEMS}
        account={localAccount}
        getInitialData={getInitialData}
        transactionList={localTransactions}
        submitAddTransaction={submitAddTransaction}
        submitEditTransaction={submitEditTransaction}
        submitDeleteTransaction={submitDeleteTransaction}
      />
    </>
  );
}
