"use client";
import {
  Transaction,
  TransactionData,
  TransactionInput,
} from "@/services/Transaction/Transaction.model";
import { Box, SelectChangeEvent } from "@mui/material";
import Stack from "@mui/material/Stack";
import { FButton, FInput, FSelectInput } from "components";
import { useRouter } from "next/navigation";
import { useState } from "react";
export interface FTransactionFormProps {
  currentTransaction?: Transaction;
  addTransaction?: (transaction: TransactionInput) => void;
  editTransaction?: (transaction: TransactionData) => void;
  closeEditModal?: () => void;
  buttonText?: string;
}

export default function FTransactionForm({
  currentTransaction,
  addTransaction,
  editTransaction,
  closeEditModal,
  buttonText,
}: FTransactionFormProps) {
  const router = useRouter();

  const [transactionType, setTransactionType] = useState<string>(
    currentTransaction?.type || ""
  );
  const [transactionValue, setTransactionValue] = useState<number>(
    currentTransaction?.value || 0
  );

  const handleSelectTransactionType = (event: SelectChangeEvent) => {
    setTransactionType(event.target.value);
  };

  const handleInputTransactionValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTransactionValue(Number(event.target.value));
  };

  const handleEditTransaction = (): void => {
    if (!currentTransaction || !editTransaction) {
      return;
    }

    editTransaction({
      ...currentTransaction,
      type: transactionType,
      value: transactionValue,
      date: new Date().toISOString(),
    });

    if (!closeEditModal) {
      return;
    }

    closeEditModal();
  };

  const handleAddTransaction = (): void => {
    if (!addTransaction) {
      return;
    }

    addTransaction({
      type: transactionType,
      value: transactionValue,
      date: new Date().toISOString(),
      currency: "R$",
    });
  };

  const handleConfirmTransaction = (): void => {
    if (currentTransaction) {
      handleEditTransaction();
    } else {
      handleAddTransaction();
    }
    cleanTransactionForm();
  };

  const cleanTransactionForm = () => {
    setTransactionValue(0);
    setTransactionType("");
    router.refresh();
  };

  return (
    <Box sx={{ width: "100%", zIndex: 1 }}>
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
          innerText={buttonText}
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
