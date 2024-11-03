import FButton from "@/components/atoms/FButton/FButton";
import FInput from "@/components/atoms/FInput/FInput";
import FSelectInput from "@/components/atoms/FSelectInput/FSelectInput";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function FTransactionForm() {
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Stack
        spacing={{ md: 4, xs: 3 }}
        sx={{
          width: { md: "80%", xs: "100%" },
        }}
      >
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
