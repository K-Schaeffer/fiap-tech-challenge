import {
  FTransactionItem,
  TransactionItem,
} from "@molecules/FTransactionItem/FTransactionItem";
import { List, Pagination, Stack, Typography } from "@mui/material";
import { useState } from "react";

export interface FTransactionListProps {
  transactionItems: TransactionItem[];
  deleteTransaction?: (transactionId: number) => void;
  editTransaction?: (transactionId: number) => void;
}

export function FTransactionList({
  transactionItems,
  editTransaction,
  deleteTransaction,
}: FTransactionListProps) {
  const ITEMS_PER_PAGE = 7;
  const [page, setPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  let paginatedItems = transactionItems.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );
  const handleDelete = (transactionId: number) => {
    if (!deleteTransaction) {
      return;
    }

    deleteTransaction(transactionId);
  };

  return (
    <>
      {transactionItems.length > 0 ? (
        <>
          <List>
            {paginatedItems.map(
              ({ id, formattedDate, type, formattedValue }) => (
                <FTransactionItem
                  key={`transaction-item-${id}`}
                  formattedDate={formattedDate}
                  formattedValue={formattedValue}
                  type={type}
                  onDelete={() => handleDelete(id!)}
                  onEdit={() => editTransaction && editTransaction(id)}
                />
              )
            )}
            <Stack spacing={2} alignItems="center" marginTop={2}>
              <Pagination
                count={Math.ceil(transactionItems.length / ITEMS_PER_PAGE)}
                page={page}
                onChange={handleChangePage}
                showFirstButton
                showLastButton
              />
            </Stack>
          </List>
        </>
      ) : (
        <Typography variant="body1" color="textLight">
          Nenhuma transação encontrada.
        </Typography>
      )}
    </>
  );
}
