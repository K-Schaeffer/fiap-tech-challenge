import { FAlert } from "@atoms/FAlert/FAlert";
import { FButton } from "@atoms/FButton/FButton";
import { FChip } from "@atoms/FChip/FChip";
import { FInput } from "@atoms/FInput/FInput";
import { FSelectInput } from "@atoms/FSelectInput/FSelectInput";
import { AlertColor, Box, SelectChangeEvent, Stack } from "@mui/material";
import { useState } from "react";

export interface FTransactionFormItemInput {
  type: string;
  value: number;
}

export interface FTransactionFormItem extends FTransactionFormItemInput {
  id: string;
}

export interface FTransactionFormProps {
  accountBalance: number;
  currentTransaction?: FTransactionFormItem;
  addTransaction?: (transaction: FTransactionFormItemInput) => void;
  editTransaction?: (transaction: FTransactionFormItem) => void;
  closeEditModal?: () => void;
  buttonText?: string;
}

export function FTransactionForm({
  accountBalance,
  currentTransaction,
  addTransaction,
  editTransaction,
  closeEditModal,
  buttonText,
}: FTransactionFormProps) {
  const [transactionType, setTransactionType] = useState<string>(
    currentTransaction?.type || ""
  );

  const [transactionValue, setTransactionValue] = useState<number>(
    currentTransaction?.value || 0
  );

  // TODO: Use constants for those plain string values (Currently we have those mapped on an array in the component lib - FSelectInput.constants.js)
  const isAddValueAccount = ["Depósito", "Empréstimo"].includes(
    transactionType
  );

  const [alert, setAlert] = useState<{
    severity: AlertColor;
    text: string;
  } | null>(null);

  const [alertOpen, setAlertOpen] = useState(false);

  const handleSelectTransactionType = (event: SelectChangeEvent) => {
    setTransactionType(event.target.value);
    setTransactionValue(0);
  };

  const handleInputTransactionValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue: number = Math.abs(Number(event.target.value));

    if (newValue > accountBalance && !isAddValueAccount) {
      setAlert({ severity: "warning", text: "Saldo insuficiente!" });
      setAlertOpen(true);
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

    const newValue = ["Depósito", "Empréstimo"].includes(transactionType)
      ? Math.abs(transactionValue)
      : -Math.abs(transactionValue);

    addTransaction({
      type: transactionType,
      value: newValue,
    });
  };

  const handleConfirmTransaction = (): void => {
    if (currentTransaction) {
      handleEditTransaction();
    } else {
      handleAddTransaction();
    }

    cleanTransactionForm();

    setAlert({ severity: "success", text: "Transação realizada com sucesso!" });
    setAlertOpen(true);
  };

  const cleanTransactionForm = () => {
    setTransactionValue(0);
    setTransactionType("");
  };

  const onChangeNewValue = (value: number) => {
    setTransactionValue(value);
  };

  const handleValueClick = (valueAdded: number) => {
    const newValue: number = transactionValue + valueAdded;

    if (newValue > accountBalance && !isAddValueAccount) {
      setAlert({ severity: "warning", text: "Saldo insuficiente!" });
      setAlertOpen(true);
      return;
    }

    setTransactionValue(newValue);
    onChangeNewValue(newValue);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <>
      {alert && (
        <FAlert
          severity={alert.severity}
          text={alert.text}
          open={alertOpen}
          onClose={handleCloseAlert}
        />
      )}
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
              valueAdd={isAddValueAccount ? 500 : (accountBalance ?? 0)}
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
    </>
  );
}
