import AccountDashboard from "@/components/pages/AccountDashboard/AccountDashboard";
import { getAccountInfo } from "@/services/Account/Account.controller";
import { Account } from "@/services/Account/Account.model";

import {
  addTransaction,
  getTransactions,
} from "@/services/Transaction/Transaction.controller";
import { Transaction } from "@/services/Transaction/Transaction.model";
import { redirect } from "next/navigation";
export default async function DashboardView() {
  const account: Account = await getAccountInfo();
  const transactionList: Transaction[] = await getTransactions();
  const transactions = transactionList.map((transaction) => ({
    ...transaction,
  }));

  async function createNewTransaction({ value, type }: any) {
    "use server";

    await addTransaction({
      amount: value,
      type,
      currency: "R$",
      date: new Date().toISOString(),
    });

    redirect("/dashboard");
  }

  return (
    <AccountDashboard
      transactions={[...transactions]}
      account={{ ...account }}
      addTransaction={createNewTransaction}
    />
  );
}
