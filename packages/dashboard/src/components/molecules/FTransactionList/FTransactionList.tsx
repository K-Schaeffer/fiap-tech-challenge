"use client";
import { editTransaction } from "@/services/Transaction/Transaction.controller";
import { TransactionData } from "@/services/Transaction/Transaction.model";
import { formatCurrency, formatDate } from "@/utils/formatters";
import { List, Typography } from "@mui/material";
import { FModal, FTransactionItem } from "components";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FTransactionForm from "../FTransactionForm/FTransactionForm";

export interface FTransactionListProps {
  transactionItems: TransactionData[];
  deleteTransaction?: (transactionId: string) => void;
  editTransaction?: (transaction: TransactionData) => void;
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
    if (!deleteTransaction) {
      return;
    }

    deleteTransaction(transactionId);
    router.refresh();
  };

  return (
    <>
      <List>
        {transactionItems.map(({ id, date, type, value, currency }) => (
          <FTransactionItem
            key={`transaction-item-${id}`}
            date={formatDate(date)}
            type={type}
            value={formatCurrency(value, currency)}
            onDelete={() => handleDelete(id)}
            onEdit={() => handleEdit(id)}
          />
        ))}
      </List>
      {transactionItems.length === 0 && (
        <Typography variant="body1" color="textLight">
          Nenhuma transação encontrada.
        </Typography>
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
          buttonText="Concluir edição"
        />
      </FModal>
    </>
  );
}
