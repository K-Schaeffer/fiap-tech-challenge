import { TransactionModel } from "@molecules/FTransactionForm/FTransactionForm";
import { FTransactionItem } from "@molecules/FTransactionItem/FTransactionItem";
import { List, Typography } from "@mui/material";

export interface FTransactionListProps {
  transactionItems: TransactionModel[];
  deleteTransaction?: (transactionId: string) => void;
  editTransaction?: (transactionId: string) => void;
}

export function FTransactionList({
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
        {transactionItems.map(({ id, formattedDate, type, formattedValue }) => (
          <FTransactionItem
            key={`transaction-item-${id}`}
            formattedDate={formattedDate}
            formattedValue={formattedValue}
            type={type}
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
