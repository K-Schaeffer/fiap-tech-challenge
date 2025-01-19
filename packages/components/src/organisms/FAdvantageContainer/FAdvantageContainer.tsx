import { Grid2, Typography } from "@mui/material";

interface FAdvantageContainerProps {
  children: React.ReactNode[];
}

export function FAdvantageContainer({ children }: FAdvantageContainerProps) {
  return (
    <Grid2 spacing={2} container columns={12}>
      <Grid2 size={12} component="div" justifyContent="center">
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          color="#000000"
          marginBottom={2}
        >
          Vantagens do nosso banco:
        </Typography>
      </Grid2>
      {children}
    </Grid2>
  );
}
