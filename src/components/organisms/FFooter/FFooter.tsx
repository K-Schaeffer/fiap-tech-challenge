import FFoterIconsColumn from "@/components/molecules/FFooterContainer/FFooterIconsColumn";
import FFooterColumn from "@/components/molecules/FFooterContainer/FFooterTextColumn";
import { Box, Stack } from "@mui/material";

export default function FFooter() {
  const listService: string[] = [
    "Conta corrente",
    "Conta PJ",
    "Cartão de crédito",
  ];

  const listContact: string[] = [
    "0800 004 250 08",
    "meajuda@bytebank.com.br",
    "ouvidoria@bytebank.com.br",
  ];

  return (
    <Box
      sx={{
        width: "100vw",
        height: { md: "224px", sm: "178px", xs: "289px" },
        backgroundColor: "#000000",
        position: "fixed",
        bottom: 0,
        left: 0,
      }}
    >
      <Stack
        spacing={2}
        direction="row"
        sx={{
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          marginTop: { md: "43px", sm: "27.3px", xs: "24.2px" },
        }}
      >
        <Box>
          <FFooterColumn textHeader="Serviços" listItems={listService} />
        </Box>
        <Box>
          <FFooterColumn textHeader="Contato" listItems={listContact} />
        </Box>
        <Box>
          <FFoterIconsColumn
            textHeader="Desenvolvido por Alura"
            listItems={listContact}
          />
        </Box>
      </Stack>
    </Box>
  );
}
