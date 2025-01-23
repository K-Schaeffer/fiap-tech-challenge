import { FInvestmentStat } from "@atoms/FInvestmentStat/FInvestmentStat";
import { FCard } from "@molecules/FCard/FCard";
import { FPieChart } from "@molecules/FPieChart/FPieChart";
import { Box, Grid2, Typography } from "@mui/material";
import styles from "@organisms/FInvestmentsCard/FInvestmentsCard.styles";

interface FInvestmentsCardProps {
  children?: React.ReactNode[];
}

export function FInvestmentsCard({ children }: FInvestmentsCardProps) {
  return (
    <FCard
      title="Investimentos"
      variant="light"
      options={{
        sx: {
          height: "auto",
          position: "relative",
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          ...styles.commonImage,
          ...styles.topPixelsImage,
          zIndex: -1,
        }}
      >
        {children && children[0]}
      </Box>

      <Box
        sx={{
          position: "absolute",
          ...styles.commonImage,
          ...styles.bottomPixelsImage,
          zIndex: -1,
        }}
      >
        {children && children[1]}
      </Box>

      <Box width={{ xs: "100%", sm: "100%" }}>
        <Box>
          <Typography variant="h6">Total: R$ 50.000,00</Typography>
          <Grid2
            container
            spacing={2}
            columns={12}
            sx={{ marginTop: 4, marginBottom: 8 }}
          >
            <Grid2 size={{ xs: 12, sm: 6, md: 6 }} component="div">
              <FInvestmentStat
                label="Renda Fixa"
                value="R$ 36.000,00"
                backgroundColor="#004D61"
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, md: 6 }} component="div">
              <FInvestmentStat
                label="Renda Variável"
                value="R$ 14.000,00"
                backgroundColor="#004D61"
              />
            </Grid2>
          </Grid2>
        </Box>
        <Box>
          <Typography variant="h6">Estatisticas</Typography>
          <Grid2
            container
            spacing={2}
            columns={12}
            sx={{ marginTop: 2, marginBottom: 2 }}
          >
            <Grid2 size={{ xs: 12, sm: 12, md: 12 }} component="div">
              <Box
                sx={{
                  width: "100%",
                  minHeight: "300px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  borderRadius: "8px",
                  backgroundColor: "#004D61",
                }}
              >
                <FPieChart />
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </FCard>
  );
}
