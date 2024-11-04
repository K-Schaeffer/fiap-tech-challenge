"use client";
import FCard from "@/components/organisms/FCard/FCard";
import FHeader from "@/components/organisms/FHeader/FHeader";
import FMenuDropdown from "@/components/organisms/FMenuDropdown/FMenuDropdown";
import FMenuList from "@/components/organisms/FMenuList/FMenuList";
import FTransactionFormCard from "@/components/organisms/FTransactionFormCard/FTransactionFormCard";
import { Account } from "@/services/Account/Account.model";
import { AccountCircle } from "@mui/icons-material";
import { Box, Container, Grid2, Typography } from "@mui/material";

const menuItems = [
  {
    label: "Início",
    path: "/",
    current: true,
  },
  {
    label: "Transferências",
    path: "/dashboard",
  },
  {
    label: "Investimentos",
    path: "/dashboard",
  },
  {
    label: "Outros Serviços",
    path: "/dashboard",
  },
];

const styles: { main: React.CSSProperties } = {
  main: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#E4EDE3",
  },
};

interface AccountDashboardProps {
  account: Account;
}

export default function AccountDashboard({ account }: AccountDashboardProps) {
  // const transaction: Transaction = await addTransaction({ amount: 100, currency: 'USD', type: 'withdrawal', date: '30-10-2024' });

  return (
    <main style={styles.main}>
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
        <Grid2 container spacing={3} paddingTop={3}>
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
            <FCard variant="dark">
              <Typography variant="h1">Account Dashboard</Typography>
            </FCard>
            <FTransactionFormCard />
          </Grid2>

          <Grid2 size={{ xs: 12, lg: 4 }}>
            <FCard>
              <Typography variant="h1">Account Dashboard</Typography>
            </FCard>
          </Grid2>
        </Grid2>
      </Container>
    </main>
  );
}
