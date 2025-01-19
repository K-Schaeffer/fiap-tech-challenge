import {
  FAccountSummary,
  FAccountSummaryProps,
} from "@molecules/FAccountSummary/FAccountSummary";
import { FCard } from "@molecules/FCard/FCard";
import { Box, Grid2, Typography } from "@mui/material";
import styles from "./FAccountSummaryCard.styles";

export interface FAccountSummaryCardProps extends FAccountSummaryProps {
  firstName: string;
  date: string;
  children?: React.ReactNode[];
}

export function FAccountSummaryCard(props: FAccountSummaryCardProps) {
  return (
    <FCard
      variant="dark"
      title={`Olá, ${props.firstName} :)`}
      options={{
        sx: {
          height: "600px",
          position: "relative",
        },
      }}
    >
      <Grid2 container spacing={4}>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <Typography variant="caption" textTransform="capitalize">
            {props.date}
          </Typography>
        </Grid2>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <FAccountSummary balance={props.balance} currency={props.currency} />
        </Grid2>
      </Grid2>

      <Box
        sx={{
          ...styles.commonImage,
          ...styles.bottomPixelsImage,
        }}
      >
        {props.children && props.children[0]}
      </Box>
      <Box
        sx={{
          ...styles.commonImage,
          ...styles.topPixelsImage,
        }}
      >
        {props.children && props.children[1]}
      </Box>
      <Box
        sx={{
          ...styles.commonImage,
          bottom: 0,
          left: { xs: 0, sm: 150 },
          width: "327px",
          height: "231px",
        }}
      >
        {props.children && props.children[2]}
      </Box>
    </FCard>
  );
}
