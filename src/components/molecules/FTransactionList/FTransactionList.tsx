"use client";
import { TransactionData } from "@/services/Transaction/Transaction.model";
import { List } from "@mui/material";
import FTransactionItem from "../FTransactionItem/FTransactionItem";

export interface FTransactionListProps {
  transactionItems: TransactionData[];
}

export default function FTransactionList({
  transactionItems,
}: FTransactionListProps) {
  return (
    <List>
      {transactionItems.map(({ date, type, amount, currency }, index) => (
        <FTransactionItem
          key={`transaction-item-${index}`}
          date={date}
          type={type}
          value={amount}
          currency={currency}
        />
      ))}
    </List>
  );
}
