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

export default async function DashboardView() {
  const account: Account = await getAccountInfo();

  const transactions: Transaction[] = await getTransactions();
  const transactionList = transactions.map((transaction) => ({
    ...transaction,
  }));

  async function handleAddTransaction(transaction: TransactionInput) {
    "use server";
    await addTransaction(transaction);
  }

  async function hanldeEditTransaction(transaction: TransactionData) {
    "use server";
    await editTransaction(transaction);
  }

  async function handleDeleteTransaction(transactionId: string) {
    "use server";
    await deleteTransaction(transactionId);
  }

  return (
    <AccountDashboard
      account={{ ...account }}
      transactionList={[...transactionList]}
      handleAddTransaction={handleAddTransaction}
      handleEditTransaction={hanldeEditTransaction}
      handleDeleteTransaction={handleDeleteTransaction}
    />
  );
}
