import FButton from "@/components/atoms/FButton/FButton";
import Input from "@/components/atoms/FInput/FInput";
import SelectInput from "@/components/atoms/FSelectInput/FSelectInput";
import { Box, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

const bgColor = {
  light: "var(--mui-palette-bgCard-light)",
  dark: "var(--mui-palette-bgCard-dark)",
};

export default function FTransactionForm() {
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Stack
        spacing={{ md: 2, xs: 3 }}
        sx={{
          justifyContent: { md: "start", sm: "start", xs: "center" },
          alignItems: { md: "start", sm: "start", xs: "center" },
        }}
      >
        <Box
          sx={{
            maxWidth: { md: "192px", sm: "192px", xs: "192px" },
            paddingTop: "32px",
          }}
        >
          <Typography
            fontWeight={700}
            lineHeight={"30.26px"}
            color="#DEE9EA"
            height={"31px"}
            fontSize={25}
          >
            Nova transação
          </Typography>
        </Box>
        <Box sx={{ width: { md: "355px", sm: "355px", xs: "280px" } }}>
          <SelectInput />
        </Box>
        <Box
          sx={{
            maxWidth: { md: "355px", sm: "355px", xs: "144px" },
            height: "48px",
          }}
        >
          <Input
            placeholder="00,00"
            textposition="center"
            labelInput={"Valor"}
          />
        </Box>
        <Box
          sx={{
            maxWidth: { md: "250px", sm: "250px", xs: "144px" },
          }}
        >
          <FButton innerText="Concluir Transação" />
        </Box>
      </Stack>
    </Box>
  );
}
