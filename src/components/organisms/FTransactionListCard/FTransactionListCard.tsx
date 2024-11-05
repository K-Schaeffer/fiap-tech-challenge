import FTransactionList from "@/components/molecules/FTransactionList/FTransactionList";
import FCard from "@/components/organisms/FCard/FCard";
import {
  deleteTransaction,
  editTransaction,
  getTransactions,
} from "@/services/Transaction/Transaction.controller";
import { Transaction } from "@/services/Transaction/Transaction.model";
import { Stack, Typography } from "@mui/material";

export default async function FTransactionListCard() {
  const transactions: Transaction[] = await getTransactions();
  const transactionList = transactions.map((transaction) => ({
    ...transaction,
  }));

  async function hanldeEditTransaction(transaction: Transaction) {
    "use server";
    await editTransaction(transaction);
  }

  async function handleDeleteTransaction(transactionId: string) {
    "use server";
    await deleteTransaction(transactionId);
  }

  return (
    <FCard>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        paddingBottom={1}
      >
        <Typography variant="h1" fontWeight={600}>
          Extrato
        </Typography>
      </Stack>
      <FTransactionList
        transactionItems={[...transactionList]}
        deleteTransaction={handleDeleteTransaction}
        editTransaction={hanldeEditTransaction}
      />
    </FCard>
  );
}
