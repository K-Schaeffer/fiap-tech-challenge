import AccountDashboard from "@/components/pages/AccountDashboard/AccountDashboard";
import { MENU_ITEMS_DASHBOARD } from "@/constants/menuItems";
import AccountService from "@/services/Account/Account.controller";
import { AccountInfoModel } from "@/services/Account/Account.model";
import TransactionService from "@/services/Transaction/Transaction.controller";
import { TransactionModel } from "@/services/Transaction/Transaction.model";

import { UserModel } from "@/services/User/User.model";

import { revalidatePath } from "next/cache";

export default async function DashboardView() {
  let account: AccountInfoModel = {} as AccountInfoModel;
  let user: UserModel = {} as UserModel;

  async function handleLoadAccount() {
    "use client";

    const respAccountData = await AccountService.getByUserId(user?.id!);

    account = respAccountData?.data?.result!;
  }

  async function submitAddTransaction(transaction: TransactionModel) {
    "use server";
    transaction.to = account?.account![0].userId;
    transaction.from = account?.account![0].userId;
    transaction.anexo = "";
    transaction.accountId = account?.account![0].id;

    const respTransaction = await TransactionService.create(transaction);

    if (respTransaction?.data?.id!) {
      const respAccountData = await AccountService.getByUserId("idUser");

      account = respAccountData?.data?.result!;
    }

    handleLoadAccount();
    revalidatePath("/dashboard");
    return respTransaction?.data;
  }

  async function submitEditTransaction(transaction: TransactionModel) {
    "use server";
    const respTransaction = await TransactionService.update(
      transaction.id!,
      transaction
    );

    if (respTransaction?.data) {
      handleLoadAccount();
      revalidatePath("/dashboard");
      return respTransaction.data;
    }
  }

  async function submitDeleteTransaction(transactionId: string) {
    "use server";
    const respTransaction = await TransactionService.remove(transactionId);

    if (respTransaction?.data) {
      handleLoadAccount();
      revalidatePath("/dashboard");
    }
  }

  return (
    <AccountDashboard
      menuItems={MENU_ITEMS_DASHBOARD}
      account={{ ...account }}
      transactionList={account.transactions ?? []}
      submitAddTransaction={submitAddTransaction}
      submitEditTransaction={submitEditTransaction}
      submitDeleteTransaction={submitDeleteTransaction}
    />
  );
}
