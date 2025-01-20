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
import { GetServerSideProps } from "next";
import { revalidatePath } from "next/cache";

function serializeAccount(account: Account) {
  return {
    ...account,
  };
}

function serializeTransactions(transactions: Transaction[]) {
  return transactions.map((transaction) => ({
    ...transaction,
  }));
}

export const getServerSideProps: GetServerSideProps = async () => {
  const account: Account = await getAccountInfo();
  const transactions: Transaction[] = await getTransactions();

  const serializedAccount = serializeAccount(account);
  const serializedTransactions = serializeTransactions(transactions);

  console.log("Retornando dados");
  console.log(serializedAccount);
  console.log(serializedTransactions);
  console.log("Retornando dados fim");

  return {
    props: {
      account: serializedAccount,
      transactions: serializedTransactions,
    },
  };
};

interface DashboardProps {
  account: Account;
  transactions: Transaction[];
}

export default function DashboardView({
  account,
  transactions,
}: DashboardProps) {
  console.log("Rececbendo dados");
  console.log(account);
  console.log(transactions);
  console.log("Rececbendo dados fim");
  async function submitAddTransaction(transaction: TransactionInput) {
    await addTransaction(transaction);
    revalidatePath("/");
  }

  async function submitEditTransaction(transaction: TransactionData) {
    await editTransaction(transaction);
    revalidatePath("/");
  }

  async function submitDeleteTransaction(transactionId: string) {
    await deleteTransaction(transactionId);
    revalidatePath("/");
  }

  return (
    <AccountDashboard
      menuItems={MENU_ITEMS}
      account={account}
      transactionList={transactions}
      submitAddTransaction={submitAddTransaction}
      submitEditTransaction={submitEditTransaction}
      submitDeleteTransaction={submitDeleteTransaction}
    />
  );
}
