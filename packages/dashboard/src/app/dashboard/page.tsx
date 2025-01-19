import AccountDashboard from "@/components/pages/AccountDashboard/AccountDashboard";
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
import { revalidatePath } from "next/cache";

export default async function DashboardView() {
  const account: Account = await getAccountInfo();

  const transactions: Transaction[] = await getTransactions();
  const transactionList = transactions.map((transaction) => ({
    ...transaction,
  }));

  async function submitAddTransaction(transaction: TransactionInput) {
    "use server";
    await addTransaction(transaction);
    revalidatePath("/dashboard");
  }

  async function submitEditTransaction(transaction: TransactionData) {
    "use server";
    await editTransaction(transaction);
    revalidatePath("/dashboard");
  }

  async function submitDeleteTransaction(transactionId: string) {
    "use server";
    await deleteTransaction(transactionId);
    revalidatePath("/dashboard");
  }

  return (
    <AccountDashboard
      account={{ ...account }}
      transactionList={[...transactionList]}
      submitAddTransaction={submitAddTransaction}
      submitEditTransaction={submitEditTransaction}
      submitDeleteTransaction={submitDeleteTransaction}
    />
  );
}
