"use client";
import FHeader from "@/components/organisms/FHeader/FHeader";
import { Account } from "@/services/Account/Account.model";
import { AccountCircle } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";

interface AccountDashboardProps {
  account: Account;
}

export default function AccountDashboard({ account }: AccountDashboardProps) {
  // const transaction: Transaction = await addTransaction({ amount: 100, currency: 'USD', type: 'withdrawal', date: '30-10-2024' });

  return (
    <Container
      maxWidth={false}
      sx={{
        paddingRight: 0,
        paddingLeft: 0,
        margin: 0,
      }}
    >
      <FHeader>
        <Typography variant="caption">{account.fullName}</Typography>
        <AccountCircle color="secondary" />
      </FHeader>
    </Container>
  );
}
