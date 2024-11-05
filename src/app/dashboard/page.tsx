import AccountDashboard from "@/components/pages/AccountDashboard/AccountDashboard";
import { getAccountInfo } from "@/services/Account/Account.controller";
import { Account } from "@/services/Account/Account.model";

import { addTransaction } from "@/services/Transaction/Transaction.controller";

export default async function DashboardView() {
  const account: Account = await getAccountInfo();

  // const transaction: Transaction = async () => {
  //   await addTransaction({
  //     amount: 100,
  //     currency: "USD",
  //     type: "withdrawal",
  //     date: "30-10-2024",
  //   });
  // };

  async function createNewTransaction({ value, type }: any) {
    "use server";

    try {
      await addTransaction({
        amount: value,
        type,
        currency: "USD",
        date: "30-10-2024",
      });
    } catch (err: unknown) {
      console.warn(err);
    }
  }

  return (
    <AccountDashboard
      account={{ ...account }}
      addTransaction={createNewTransaction}
    />
  );
}
