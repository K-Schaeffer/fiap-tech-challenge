"use client";
import FModal from "@/components/organisms/FModal/FModal";
import { editTransaction } from "@/services/Transaction/Transaction.controller";
import { TransactionData } from "@/services/Transaction/Transaction.model";
import { List, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FTransactionForm from "../FTransactionForm/FTransactionForm";
import FTransactionItem from "../FTransactionItem/FTransactionItem";

export interface FTransactionListProps {
  transactionItems: TransactionData[];
  deleteTransaction: (transactionId: string) => void;
  editTransaction: (transaction: TransactionData) => void;
}

export default function FTransactionList({
  transactionItems,
  deleteTransaction,
}: FTransactionListProps) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTransaction, setCurrentTransaction] =
    useState<TransactionData>();

  const handleEdit = (transactionId: string) => {
    setCurrentTransaction(
      transactionItems.find(({ id }) => id === transactionId)
    );
    setIsModalOpen(true);
  };

  const handleDelete = (transactionId: string) => {
    deleteTransaction(transactionId);
    router.refresh();
  };

  return (
    <>
      <List>
        {transactionItems.map(({ id, date, type, amount, currency }) => (
          <FTransactionItem
            key={`transaction-item-${id}`}
            transactionId={id}
            date={date}
            type={type}
            value={amount}
            currency={currency}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </List>
      {transactionItems.length === 0 && (
        <Typography variant="body1">Nenhuma transação encontrada.</Typography>
      )}
      <FModal
        title="Editar transação"
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      >
        <FTransactionForm
          currentTransaction={currentTransaction}
          editTransaction={editTransaction}
          closeEditModal={() => setIsModalOpen(false)}
        />
      </FModal>
    </>
  );
}
