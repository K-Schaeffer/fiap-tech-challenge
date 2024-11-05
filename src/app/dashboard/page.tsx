import AccountDashboard from "@/components/pages/AccountDashboard/AccountDashboard";
import { getAccountInfo } from "@/services/Account/Account.controller";
import { Account } from "@/services/Account/Account.model";

export default async function DashboardView() {
  const account: Account = await getAccountInfo();

  return <AccountDashboard account={{ ...account }} />;
}
