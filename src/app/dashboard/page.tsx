import FButton from "@/components/atoms/FButton/FButton";
import FTransactionItem from "@/components/molecules/FTransactionItem/FTransactionItem";
import { getAccountInfo } from "@/services/Account/Account.controller";
import { Account } from "@/services/Account/Account.model";
import { Grid2, Typography } from "@mui/material";
import styles from "./page.module.css";
// import { Transaction } from "@/services/Transaction/Transaction.model";
// import { addTransaction } from "@/services/Transaction/Transaction.controller";
import FInput from "@/components/atoms/Input/FInput";
import FCard from "@/components/organisms/FCard/FCard";
import FFormTransaction from "@/components/organisms/FFormTransaction/FFormTransaction";
import FMenuDropdown from "@/components/organisms/FMenuDropdown/FMenuDropdown";
import FMenuList from "@/components/organisms/FMenuList/FMenuList";

export default async function Dashboard() {
  const account: Account = await getAccountInfo();

  // const transaction: Transaction = await addTransaction({ amount: 100, currency: 'USD', type: 'withdrawal', date: '30-10-2024' });

  return (
    <Grid2 container className={styles.page} spacing={2}>
      {account.fullName}
      {account.firstName}
      {account.balance}
      {account.currency}
      <main>
        <Typography variant="h1" color="primary">
          Foo
        </Typography>
        Í
        <Typography variant="subtitle1" color="secondary">
          Foo
        </Typography>
        <FButton
          options={{ variant: "contained", color: "primary" }}
          innerText="Oi primario"
        />
        <FButton
          options={{ variant: "contained", color: "secondary" }}
          innerText="Oi secondario"
        />
        <FTransactionItem
          date="2021-10-10"
          type="Foo"
          value={100}
          currency="USD"
        />
        <FMenuDropdown
          menuItems={[
            {
              label: "Início",
              path: "/",
              current: true,
            },
            {
              label: "Dashboard",
              path: "/dashboard",
            },
          ]}
        />
        <FCard>
          <FMenuList
            menuItems={[
              {
                label: "Início",
                path: "/",
                current: true,
              },
              {
                label: "Dashboard",
                path: "/dashboard",
              },
            ]}
          />
        </FCard>
        <FInput placeholder="00,00" textposition="center" maxWidth="200px" />
        <FFormTransaction />
      </main>
      <aside>
        <Typography variant="body1" color="primary">
          Foo
        </Typography>
        <Typography variant="caption" color="primary">
          Bar
        </Typography>
      </aside>
    </Grid2>
  );
}
