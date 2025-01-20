import { FIconButton } from "@atoms/FIconButton/FIconButton";
import { FCard } from "@molecules/FCard/FCard";
import { FFilter } from "@molecules/FFilter/FFilter";
import {
  FTransactionList,
  FTransactionListProps,
} from "@molecules/FTransactionList/FTransactionList";
import { FilterList } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export function FTransactionListCard({
  transactionItems,
  editTransaction,
  deleteTransaction,
}: FTransactionListProps) {

  const [showSelect, setShowSelect] = useState(false);
  const [filteredTransactions, setFilteredTransactions] = useState(transactionItems);
  const [filterTypes, setFilterTypes] = useState<string[]>([]);

  const toggleSelectVisibility = () => {
    setShowSelect((prev) => !prev);
  };


  const handleFilterChange = (filterTypes: string[]) => {
    setFilterTypes(filterTypes);
  };

  const applyFilter = () => {
    if (filterTypes.length === 0) {
      setFilteredTransactions(transactionItems);
    } else {
      const filtered = transactionItems.filter((transaction) =>
        filterTypes.includes(transaction.type)
      );
      setFilteredTransactions(filtered);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [transactionItems, filterTypes]);

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

        <FIconButton
          options={{ color: "primary" }}
          onClick={toggleSelectVisibility}
        >
          <FilterList />
        </FIconButton>
      </Stack>
      <Stack
        direction="row"
        justifyContent="start"
        alignItems="start"
        paddingBottom={1}
      >
        <FFilter
          onFilterChange={handleFilterChange}
          showSelect={showSelect}
        />

      </Stack>
      <Container
        sx={{
          height: "600px",
          overflowY: "visible",
          overflowX: "hidden",
        }}
      >


        <FTransactionList
          transactionItems={filteredTransactions}
          editTransaction={editTransaction}
          deleteTransaction={deleteTransaction}
        />
      </Container>
    </FCard>
  );
}
