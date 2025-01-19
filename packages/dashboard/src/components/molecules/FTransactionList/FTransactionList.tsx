"use client";
import { List, Typography } from "@mui/material";
import { FTransactionItem } from "components";

export interface FTransactionItem {
  id: string;
  type: string;
  date: string;
  currency: string;
  value: number;
  formattedValue: string;
}

export interface FTransactionListProps {
  transactionItems: FTransactionItem[];
  deleteTransaction?: (transactionId: string) => void;
  editTransaction?: (transactionId: string) => void;
}

export default function FTransactionList({
  transactionItems,
  editTransaction,
  deleteTransaction,
}: FTransactionListProps) {
  const handleDelete = (transactionId: string) => {
    if (!deleteTransaction) {
      return;
    }

    deleteTransaction(transactionId);
  };

  return (
    <>
      <List>
        {transactionItems.map(({ id, date, type, formattedValue }) => (
          <FTransactionItem
            key={`transaction-item-${id}`}
            date={date}
            type={type}
            value={formattedValue}
            onDelete={() => handleDelete(id)}
            onEdit={() => editTransaction && editTransaction(id)}
          />
        ))}
      </List>
      {transactionItems.length === 0 && (
        <Typography variant="body1" color="textLight">
          Nenhuma transação encontrada.
        </Typography>
      )}
    </>
  );
}
