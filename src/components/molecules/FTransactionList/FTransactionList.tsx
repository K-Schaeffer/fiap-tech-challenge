import { List } from "@mui/material";
import FTransactionItem from "../FTransactionItem/FTransactionItem";

interface FTransactionListProps {
  transactionItems: {
    date: string;
    type: string;
    value: number;
    currency: string;
  }[];
}

export default function FTransactionList({
  transactionItems,
}: FTransactionListProps) {
  return (
    <List>
      {transactionItems.map(({ date, type, value, currency }, index) => (
        <FTransactionItem
          key={`transaction-item-${index}`}
          date={date}
          type={type}
          value={value}
          currency={currency}
        />
      ))}
    </List>
  );
}
