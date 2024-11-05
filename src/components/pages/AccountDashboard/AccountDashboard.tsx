"use client";
import FAccountSummaryCard from "@/components/organisms/FAccountSummaryCard/FAccountSummaryCard";
import FCard from "@/components/organisms/FCard/FCard";
import FHeader from "@/components/organisms/FHeader/FHeader";
import FMenuDropdown from "@/components/organisms/FMenuDropdown/FMenuDropdown";
import FMenuList from "@/components/organisms/FMenuList/FMenuList";
import FTransactionFormCard from "@/components/organisms/FTransactionFormCard/FTransactionFormCard";
import FTransactionListCard from "@/components/organisms/FTransactionListCard/FTransactionListCard";
import { MENU_ITEMS_DASHBOARD } from "@/constants";
import { Account } from "@/services/Account/Account.model";
import { Transaction } from "@/services/Transaction/Transaction.model";
import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid2,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface AccountDashboardProps {
  account: Account;
  transactions: Transaction[];
  addTransaction: ({ value, type }: any) => void;
}
export default function AccountDashboard({
  account,
  transactions,
  addTransaction,
}: AccountDashboardProps) {
  const pathname = usePathname();

  const menuItems = MENU_ITEMS_DASHBOARD.map((item) => ({
    ...item,
    current: item.path === pathname,
  }));

  const [transactionType, setTransactionType] = useState<string>("");
  const [transactionValue, setTransactionValue] = useState<number | string>("");

  const handleSelectTransactionType = (event: SelectChangeEvent) => {
    setTransactionType(event.target.value);
  };

  const handleInputTransactionValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTransactionValue(Number(event.target.value));
  };

  const handleConfirmTransaction = () => {
    addTransaction({ value: transactionValue, type: transactionType });
    setTransactionValue("");
    setTransactionType("");
  };

  return (
    <main
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "var(--mui-palette-tertiary-light)",
      }}
    >
      <FHeader
        leftContent={
          <Box>
            <FMenuDropdown
              menuItems={menuItems}
              options={{ sx: { display: { xs: "flex", lg: "none" } } }}
            />
          </Box>
        }
        rightContent={
          <Box display="flex" alignItems="center" gap={8}>
            <Typography variant="body1">{account.fullName}</Typography>
            <AccountCircle color="secondary" sx={{ fontSize: 40 }} />
          </Box>
        }
      />
      <Container maxWidth="xl">
        <Grid2 container spacing={3} paddingTop={3} paddingBottom={3}>
          <Grid2 size={{ xs: 0, lg: 2 }}>
            <FCard
              options={{
                sx: {
                  display: { xs: "none", lg: "block" },
                },
              }}
            >
              <FMenuList menuItems={menuItems} />
            </FCard>
          </Grid2>

          <Grid2
            size={{ xs: 12, lg: 6 }}
            display="flex"
            flexDirection="column"
            gap={3}
          >
            <FAccountSummaryCard
              firstName={account.firstName}
              currency={account.currency}
              value={account.balance}
            />
            <FTransactionFormCard
              currentTransactionType={transactionType}
              onSelectTransactionType={handleSelectTransactionType}
              onInputTransactionValue={handleInputTransactionValue}
              currentTransactionValue={transactionValue}
              onConfirmTransaction={handleConfirmTransaction}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, lg: 4 }}>
            <FTransactionListCard transactionItems={transactions} />
          </Grid2>
        </Grid2>
      </Container>
    </main>
  );
}
