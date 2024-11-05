import AccountDashboard from "@/components/pages/AccountDashboard/AccountDashboard";
import { getAccountInfo } from "@/services/Account/Account.controller";
import { Account } from "@/services/Account/Account.model";

import {
  addTransaction,
  getTransactions,
} from "@/services/Transaction/Transaction.controller";
import { Transaction } from "@/services/Transaction/Transaction.model";

export default async function DashboardView() {
  const account: Account = await getAccountInfo();

  async function fetchTransactions() {
    "use server";

    const transactionsObj: Transaction[] = await getTransactions();
    const transactions = transactionsObj.map((transaction) => ({
      ...transaction,
    }));
    console.log("transactions", transactions);

    return transactions;
  }

  async function createNewTransaction({ value, type }: any) {
    "use server";

    try {
      await addTransaction({
        amount: value,
        type,
        currency: "R$",
        date: new Date().toISOString(),
      });
    } catch (err: unknown) {
      console.warn(err);
    }
  }

  return (
    <AccountDashboard
      fetchTransactions={fetchTransactions}
      account={{ ...account }}
      addTransaction={createNewTransaction}
    />
  );
}
