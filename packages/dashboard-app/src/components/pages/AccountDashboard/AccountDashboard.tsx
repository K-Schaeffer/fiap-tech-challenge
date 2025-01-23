"use client";
import { Account } from "@/services/Account/Account.model";
import {
  Transaction,
  TransactionData,
  TransactionInput,
} from "@/services/Transaction/Transaction.model";
import {
  formatCurrency,
  formatDate,
  getFormattedDateNow,
} from "@/utils/formatters";
import { Container, Grid2 } from "@mui/material";
import {
  FAccountSummaryCard,
  FCard,
  FInvestmentsCard,
  FMenuList,
  FMenuListItem,
  FModal,
  FTransactionForm,
  FTransactionFormCard,
  FTransactionFormItem,
  FTransactionFormItemInput,
  FTransactionListCard,
  TransactionItem,
} from "components";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface AccountDashboardProps {
  menuItems: FMenuListItem[];
  account: Account;
  transactionList: Transaction[];
  getInitialData: () => void;
  submitAddTransaction?: (transaction: TransactionInput) => void;
  submitEditTransaction?: (transaction: TransactionData) => void;
  submitDeleteTransaction?: (transactionId: string) => void;
}

export default function AccountDashboard({
  menuItems,
  account,
  transactionList,
  getInitialData,
  submitAddTransaction,
  submitEditTransaction,
  submitDeleteTransaction,
}: AccountDashboardProps) {
  const loadData = async () => {
    getInitialData();
  };

  useEffect(() => {
    loadData();
  }, []);

  // const accountUpdatedEvent = new CustomEvent("dashboardApp: accountUpdated", {
  //   detail: account.fullName,
  // });
  // document.dispatchEvent(accountUpdatedEvent);

  const formattedBalance = formatCurrency(account.balance, account.currency);
  const formattedDate = getFormattedDateNow();
  const pathname = usePathname();

  const currentMenuItems = menuItems.map((item) => ({
    ...item,
    current: item.path === pathname,
  }));

  const formattedTransactions: TransactionItem[] = transactionList.map(
    (transaction) => ({
      id: transaction.id,
      type: transaction.type,
      formattedDate: formatDate(transaction.date),
      formattedValue: formatCurrency(transaction.value, transaction.currency),
      userId: transaction.userId,
      fileBase64: transaction.fileBase64,
      fileName: transaction.fileName,
    })
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentTransaction, setCurrentTransaction] = useState<Transaction>();

  const openEditModal = (transactionId: string) => {
    setCurrentTransaction(
      transactionList.find(({ id }) => id === transactionId)
    );

    setIsModalOpen(true);
  };

  const handleEditTransaction = (transaction: FTransactionFormItem) => {
    if (!submitEditTransaction) {
      return;
    }

    const editedTransaction: TransactionData = {
      ...transaction,
      currency: "R$",
      date: new Date().toISOString(),
      userId: account.id!,
    };

    submitEditTransaction(editedTransaction);
  };

  const handleAddTransaction = (transaction: FTransactionFormItemInput) => {
    if (!submitAddTransaction) {
      return;
    }

    const newTransaction: TransactionInput = {
      ...transaction,
      currency: "R$",
      id: 0,
      date: new Date().toISOString(),
      userId: account.id!,
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
              firstName={account.firstName}
              currency={account.currency}
              balance={formattedBalance}
              date={formattedDate}
            >
              <Image src="/assets/card-pixels-2.svg" alt="" fill />
              <Image src="/assets/card-pixels-1.svg" alt="" fill />
              <Image src="/assets/card-illustration-1.svg" alt="" fill />
            </FAccountSummaryCard>
            <FTransactionFormCard
              addTransaction={handleAddTransaction}
              accountBalance={account.balance}
            >
              <Image src="/assets/card-pixels-3.svg" alt="" layout="fill" />
              <Image src="/assets/card-pixels-4.svg" alt="" layout="fill" />
              <Image
                src="/assets/card-illustration-2.svg"
                alt=""
                layout="fill"
              />
            </FTransactionFormCard>
            <FInvestmentsCard>
              <Image src="/assets/card-pixels-3.svg" alt="" layout="fill" />
              <Image src="/assets/card-pixels-4.svg" alt="" layout="fill" />
            </FInvestmentsCard>
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
            accountId={account.id}
            accountBalance={account.balance}
            currentTransaction={currentTransaction}
            addTransaction={handleAddTransaction}
            editTransaction={handleEditTransaction}
            closeEditModal={() => setIsModalOpen(false)}
            buttonText="Concluir edição"
          />
        </FModal>
      </Container>
    </main>
  );
}
