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
    id: 1,
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

    if (updatedTransactions) {
      setLocalAccount(updatedTransactions[0]);
    }
  }

  async function fetchTransactions() {
    const updatedTransactions = await getTransactions();
    setLocalTransactions(updatedTransactions);
  }

  async function submitAddTransaction(transaction: TransactionInput) {
    await addTransaction(transaction);

    await getInitialData();
  }

  async function submitEditTransaction(transaction: TransactionData) {
    await editTransaction(transaction);
    await getInitialData();
  }

  async function submitDeleteTransaction(transactionId: number) {
    await deleteTransaction(transactionId);
    await getInitialData();
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
