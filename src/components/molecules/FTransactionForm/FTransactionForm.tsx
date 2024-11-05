"use client";
import FButton from "@/components/atoms/FButton/FButton";
import FInput from "@/components/atoms/FInput/FInput";
import FSelectInput from "@/components/atoms/FSelectInput/FSelectInput";
import {
  Transaction,
  TransactionData,
  TransactionInput,
} from "@/services/Transaction/Transaction.model";
import { Box, SelectChangeEvent } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
import { useState } from "react";
export interface FTransactionFormProps {
  currentTransaction?: Transaction;
  addTransaction?: (transaction: TransactionInput) => void;
  editTransaction?: (transaction: TransactionData) => void;
  closeEditModal?: () => void;
}

export default function FTransactionForm({
  currentTransaction,
  addTransaction,
  editTransaction,
  closeEditModal,
}: FTransactionFormProps) {
  const router = useRouter();

  const [transactionType, setTransactionType] = useState<string>(
    currentTransaction?.type || ""
  );
  const [transactionValue, setTransactionValue] = useState<number>(
    currentTransaction?.amount || 0
  );

  const handleSelectTransactionType = (event: SelectChangeEvent) => {
    setTransactionType(event.target.value);
  };

  const handleInputTransactionValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTransactionValue(Number(event.target.value));
  };

  const handleConfirmTransaction = () => {
    if (currentTransaction) {
      editTransaction &&
        editTransaction({
          ...currentTransaction,
          type: transactionType,
          amount: transactionValue,
          date: new Date().toISOString(),
        });
      closeEditModal && closeEditModal();
    } else {
      addTransaction &&
        addTransaction({
          type: transactionType,
          amount: transactionValue,
          date: new Date().toISOString(),
          currency: "R$",
        });
    }
    setTransactionValue(0);
    setTransactionType("");
    router.refresh();
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 500, zIndex: 1 }}>
      <Stack spacing={4}>
        <FSelectInput
          onChange={handleSelectTransactionType}
          options={{ value: transactionType }}
        />
        <FInput
          options={{
            placeholder: "00,00",
            label: "Valor",
            type: "number",
            value: transactionValue || "",
          }}
          textposition="center"
          onChange={handleInputTransactionValue}
        />
        <FButton
          innerText="Concluir Transação"
          options={{
            variant: "contained",
            disabled: !transactionType || !transactionValue,
          }}
          onClick={handleConfirmTransaction}
        />
      </Stack>
    </Box>
  );
}
