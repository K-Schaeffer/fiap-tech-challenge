import FButton from "@/components/atoms/FButton/FButton";
import FInput from "@/components/atoms/FInput/FInput";
import FSelectInput from "@/components/atoms/FSelectInput/FSelectInput";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function FTransactionForm() {
  return (
    <Box sx={{ width: "100%", maxWidth: 500, zIndex: 1 }}>
      <Stack spacing={4}>
        <FSelectInput />
        <FInput
          options={{ placeholder: "00,00", label: "Valor", type: "number" }}
          textposition="center"
        />
        <FButton
          innerText="Concluir Transação"
          options={{ variant: "contained" }}
        />
      </Stack>
    </Box>
  );
}
