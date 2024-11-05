import FButton from "@/components/atoms/FButton/FButton";
import FInput from "@/components/atoms/FInput/FInput";
import FSelectInput from "@/components/atoms/FSelectInput/FSelectInput";
import { Box, SelectChangeEvent } from "@mui/material";
import Stack from "@mui/material/Stack";

export interface FTransactionFormProps {
  currentTransactionType: string;
  onSelectTransactionType: (e: SelectChangeEvent) => void;
  onInputTransactionValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentTransactionValue: number;
  onConfirmTransaction: () => void;
}

export default function FTransactionForm({
  currentTransactionType,
  onSelectTransactionType,
  onInputTransactionValue,
  currentTransactionValue,
  onConfirmTransaction,
}: FTransactionFormProps) {
  return (
    <Box sx={{ width: "100%", maxWidth: 500, zIndex: 1 }}>
      <Stack spacing={4}>
        <FSelectInput
          onChange={onSelectTransactionType}
          options={{ value: currentTransactionType }}
        />
        <FInput
          options={{
            placeholder: "00,00",
            label: "Valor",
            type: "number",
            value: currentTransactionValue,
          }}
          textposition="center"
          onChange={onInputTransactionValue}
        />
        <FButton
          innerText="Concluir Transação"
          options={{ variant: "contained" }}
          onClick={onConfirmTransaction}
        />
      </Stack>
    </Box>
  );
}
