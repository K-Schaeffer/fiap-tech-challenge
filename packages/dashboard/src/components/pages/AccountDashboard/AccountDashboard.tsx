"use client";
import { AccountInfoModel } from "@/services/Account/Account.model";
import { TransactionModel } from "@/services/Transaction/Transaction.model";
import {
  formatCurrency,
  formatDate,
  getFormattedDateNow,
} from "@/utils/formatters";
import { AccountCircle } from "@mui/icons-material";
import { Box, Container, Grid2, Typography } from "@mui/material";
import {
  FAccountSummaryCard,
  FCard,
  FHeader,
  FMenuDropdown,
  FMenuList,
  FMenuListItem,
  FModal,
  FTransactionForm,
  FTransactionFormCard,
  FTransactionListCard,
} from "components";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface AccountDashboardProps {
  menuItems: FMenuListItem[];
  account: AccountInfoModel;
  transactionList: TransactionModel[];
  submitAddTransaction?: (transaction: TransactionModel) => void;
  submitEditTransaction?: (transaction: TransactionModel) => void;
  submitDeleteTransaction?: (transactionId: string) => void;
}
export default function AccountDashboard({
  menuItems,
  account,
  transactionList,
  submitAddTransaction,
  submitEditTransaction,
  submitDeleteTransaction,
}: AccountDashboardProps) {
  const formattedBalance = formatCurrency(account.balance!, account.currency!);
  const formattedDate = getFormattedDateNow();

  const pathname = usePathname();

  const currentMenuItems = menuItems.map((item) => ({
    ...item,
    current: item.path === pathname,
  }));

  const formattedTransactions: TransactionModel[] = transactionList.map(
    (transaction: TransactionModel) => ({
      id: transaction.id,
      type: transaction.type,
      formattedDate: formatDate(transaction.date?.toString()!),
      formattedValue: formatCurrency(
        transaction.value!,
        transaction.currency! ?? "R$"
      ),
    })
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentTransaction, setCurrentTransaction] =
    useState<TransactionModel>();

  const openEditModal = (transactionId: string) => {
    setCurrentTransaction(
      transactionList.find(({ id }) => id === transactionId)
    );

    setIsModalOpen(true);
  };

  const handleEditTransaction = (transaction: TransactionModel) => {
    if (!submitEditTransaction) {
      return;
    }

    const editedTransaction: TransactionModel = {
      ...transaction,
      currency: "R$",
      date: new Date().toISOString(),
    };

    submitEditTransaction(editedTransaction);
  };

  const handleAddTransaction = (transaction: TransactionModel) => {
    if (!submitAddTransaction) {
      return;
    }

    const newTransaction: TransactionModel = {
      ...transaction,
      currency: "R$",
      date: new Date().toISOString(),
    };

    submitAddTransaction(newTransaction);
  };

  return (
    <main
      style={{
        minWidth: "100%",
        minHeight: "100%",
        backgroundColor: "var(--mui-palette-tertiary-light)",
      }}
    >
      <FHeader
        leftContent={
          <Box>
            <FMenuDropdown
              menuItems={currentMenuItems}
              options={{ sx: { display: { xs: "flex", lg: "none" } } }}
            >
              <Link href="" />
            </FMenuDropdown>
          </Box>
        }
        rightContent={
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="body1">{account.fullName}</Typography>
            <Link href={"/"} style={{ display: "flex" }}>
              <AccountCircle color="secondary" sx={{ fontSize: 40 }} />
            </Link>
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
              <FMenuList menuItems={currentMenuItems}>
                <Link href="" />
              </FMenuList>
            </FCard>
          </Grid2>

          <Grid2
            size={{ xs: 12, lg: 6 }}
            display="flex"
            flexDirection="column"
            gap={3}
          >
            <FAccountSummaryCard
              firstName={account.fullName!}
              currency={account.currency!}
              balance={formattedBalance}
              date={formattedDate}
            >
              <Image src="/assets/card-pixels-2.svg" alt="" fill />
              <Image src="/assets/card-pixels-1.svg" alt="" fill />
              <Image src="/assets/card-illustration-1.svg" alt="" fill />
            </FAccountSummaryCard>
            <FTransactionFormCard
              addTransaction={handleAddTransaction}
              accountBalance={account.balance!}
            >
              <Image src="/assets/card-pixels-3.svg" alt="" layout="fill" />
              <Image src="/assets/card-pixels-4.svg" alt="" layout="fill" />
              <Image
                src="/assets/card-illustration-2.svg"
                alt=""
                layout="fill"
              />
            </FTransactionFormCard>
          </Grid2>

          <Grid2 size={{ xs: 12, lg: 4 }}>
            <FTransactionListCard
              transactionItems={formattedTransactions}
              editTransaction={openEditModal}
              deleteTransaction={submitDeleteTransaction}
            />
          </Grid2>
        </Grid2>
        <FModal
          title="Editar transação"
          isOpen={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
        >
          <FTransactionForm
            accountBalance={account.balance!}
            currentTransaction={currentTransaction}
            editTransaction={handleEditTransaction}
            closeEditModal={() => setIsModalOpen(false)}
            buttonText="Concluir edição"
          />
        </FModal>
      </Container>
    </main>
  );
}
