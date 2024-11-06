import FFoterIconsColumn from "@/components/molecules/FFooterIconsColumn/FFooterIconsColumn";
import FFooterColumn from "@/components/molecules/FFooterTextColumn/FFooterTextColumn";
import { Box, Container, Grid2 } from "@mui/material";

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

export default function FFooter() {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        width: "100%",
      }}
      padding={6}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <FFooterColumn textHeader="Serviços" listItems={listService} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <FFooterColumn textHeader="Contato" listItems={listContact} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <FFoterIconsColumn textHeader="Desenvolvido por Alura" />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
