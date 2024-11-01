import { List } from "@mui/material";
import FTransactionItem from "../FTransactionItem/FTransactionItem";

interface FTransactionListProps {
  transactionItems: {
    date: string;
    type: string;
    value: number;
  }[];
}

export default function FTransactionList({
  transactionItems,
}: FTransactionListProps) {
  return (
    <List>
      {transactionItems.map(({ date, type, value }, index) => (
        <FTransactionItem
          key={`transaction-item-${index}`}
          date={date}
          type={type}
          value={value}
        />
      ))}
    </List>
  );
}
