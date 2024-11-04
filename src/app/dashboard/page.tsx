import { getAccountInfo } from "@/services/Account/Account.controller";
import { Account } from "@/services/Account/Account.model";
// import { Transaction } from "@/services/Transaction/Transaction.model";
// import { addTransaction } from "@/services/Transaction/Transaction.controller";
import AccountDashboard from "@/components/pages/AccountDashboard/AccountDashboard";

export default async function DashboardView() {
  const account: Account = await getAccountInfo();

  // const transaction: Transaction = await addTransaction({ amount: 100, currency: 'USD', type: 'withdrawal', date: '30-10-2024' });

  return <AccountDashboard account={{ ...account }} />;
}
