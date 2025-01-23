import { FInvestmentStat } from "@atoms/FInvestmentStat/FInvestmentStat";
import { Grid2 } from "@mui/material";

export const FInvestmentStats = () => (
  <Grid2 container spacing={2} columns={12} sx={{ zIndex: 1 }}>
    <Grid2 size={{ xs: 12, sm: 6, md: 6 }} component="div">
      <FInvestmentStat
        label="Renda Fixa"
        value="R$ 36.000,00"
        backgroundColor="#3f51b5"
      />
    </Grid2>
    <Grid2 size={{ xs: 12, sm: 6, md: 6 }} component="div">
      <FInvestmentStat
        label="Renda Variável"
        value="R$ 14.000,00"
        backgroundColor="#e91e63"
      />
    </Grid2>
  </Grid2>
);
