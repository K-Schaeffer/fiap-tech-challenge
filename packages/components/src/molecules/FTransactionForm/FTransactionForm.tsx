import { FAlert } from "@atoms/FAlert/FAlert";
import { FButton } from "@atoms/FButton/FButton";
import { FChip } from "@atoms/FChip/FChip";
import { FInput } from "@atoms/FInput/FInput";
import { FInputFile } from "@atoms/FInputFile/FInputFile";
import { FSelectInput } from "@atoms/FSelectInput/FSelectInput";
import { AlertColor, Box, SelectChangeEvent } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export interface FTransactionFormItemInput {
  type: string;
  value: number;
  fileBase64?: string;
  fileName?: string;
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
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileBase64, setFileBase64] = useState<string | null>(null);

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
      fileBase64: fileBase64 ?? "",
      fileName: fileName ?? "",
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
    setFileName(null);
    setFileBase64(null);
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

  const onUploadFile = (files: FileList) => {
    try {
      const file = files[0];
      const fileExtension = file.name.split(".").pop()?.toLowerCase();

      if (file.size > 1048576) {
        setAlert({
          severity: "warning",
          text: "O tamanho do arquivo é muito grande. Por favor, envie uma imagem menor ou igual a 1MB.",
        });
        setAlertOpen(true);
        return;
      }

      if (
        !(
          file &&
          (fileExtension === "jpg" ||
            fileExtension === "jpeg" ||
            fileExtension === "png")
        )
      ) {
        setAlert({
          severity: "warning",
          text: "Formato de arquivo inválido. Por favor, envie uma imagem do tipo .jpg, .jpeg ou .png.",
        });
        setAlertOpen(true);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFileName(file.name);
        setFileBase64(base64String);
      };
      reader.readAsDataURL(file);
    } catch (error) {}
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
          <FInputFile
            innerText="Anexar comprovante"
            onUploadFile={onUploadFile}
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
    </>
  );
}
