import FFoterIconsColumn from "@/components/molecules/FFooterContainer/FFooterIconsColumn";
import FFooterColumn from "@/components/molecules/FFooterContainer/FFooterTextColumn";
import { Box, Grid2 } from "@mui/material";

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
    <Grid2
      container
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundColor: "#000000",
        position: "relative",
        bottom: 0,
        left: 0,
        width: "100%",
        paddingLeft: { xl: "24rem", lg: "20rem", sm: "60px", xs: "1em" },
        paddingRight: { xl: "24rem", lg: "20rem", sm: "60px", xs: "1em" },
        direction: { lg: "row", sm: "column" },
        height: { xs: "489px", lg: "224px", sm: "178px" },
      }}
    >
      <Grid2 size={{ xs: 12, sm: 4 }}>
        <Box sx={{ marginTop: { sm: 0, xs: 3 } }}>
          <FFooterColumn textHeader="Serviços" listItems={listService} />
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 4 }}>
        <FFooterColumn textHeader="Contato" listItems={listContact} />
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 4 }}>
        <FFoterIconsColumn
          listItems={listContact}
          textHeader="Desenvolvido por Alura"
        />
      </Grid2>
    </Grid2>
  );
}
