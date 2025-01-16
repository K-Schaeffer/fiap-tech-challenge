"use client";
import FButton from "@/components/atoms/FButton/FButton";
import FChip from "@/components/atoms/FChip/FChip";
import FInput from "@/components/atoms/FInput/FInput";
import FSelectInput from "@/components/atoms/FSelectInput/FSelectInput";
import { getAccountInfo } from "@/services/Account/Account.controller";
import { Account } from "@/services/Account/Account.model";
import {
  Transaction,
  TransactionData,
  TransactionInput,
} from "@/services/Transaction/Transaction.model";
import showAlert from "@/utils/toastedAlert";
import { Box, SelectChangeEvent } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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

  const [account, setAccount] = useState<Account>({} as Account);
  const [transactionType, setTransactionType] = useState<string>(
    currentTransaction?.type || ""
  );
  const [transactionValue, setTransactionValue] = useState<number>(
    currentTransaction?.value || 0
  );

  const isAddValueAccount = ["Depósito", "Empréstimo"].includes(
    transactionType
  );

  useEffect(() => {
    loadBalanceAccount();
  }, []);

  const loadBalanceAccount = async () => {
    const accountResp: Account = await getAccountInfo();

    setAccount(accountResp);
  };

  const handleSelectTransactionType = (event: SelectChangeEvent) => {
    setTransactionType(event.target.value);
    setTransactionValue(0);
  };

  const handleInputTransactionValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let newValue: number = Math.abs(Number(event.target.value));

    if (newValue > account?.balance && !isAddValueAccount) {
      showAlert("warning", "Saldo insuficiente!");
      return;
    }

    setTransactionValue(newValue);
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

    let newValue = ["Depósito", "Empréstimo"].includes(transactionType)
      ? Math.abs(transactionValue)
      : -Math.abs(transactionValue);

    addTransaction({
      type: transactionType,
      value: newValue,
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

    loadBalanceAccount();

    showAlert("success", "Transação realizada com sucesso!");
  };

  const cleanTransactionForm = () => {
    setTransactionValue(0);
    setTransactionType("");
    router.refresh();
  };

  const onChangeNewValue = (value: number) => {
    setTransactionValue(value);
  };

  const handleValueClick = (valueAdded: number) => {
    let newValue: number = transactionValue + valueAdded;

    if (newValue > account?.balance && !isAddValueAccount) {
      showAlert("warning", "Saldo insuficiente!");
      return;
    }

    setTransactionValue(newValue);
    onChangeNewValue(newValue);
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
        <Stack spacing={2} direction="row">
          <FChip valueAdd={20} handleValueClick={handleValueClick} />
          <FChip valueAdd={50} handleValueClick={handleValueClick} />
          <FChip valueAdd={100} handleValueClick={handleValueClick} />
          <FChip
            valueAdd={isAddValueAccount ? 500 : account?.balance!}
            handleValueClick={handleValueClick}
          />
        </Stack>
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
