"use client";
import FAccountSummary, {
  FAccountSummaryProps,
} from "@/components/molecules/FAccountSummary/FAccountSummary";
import FCard from "@/components/molecules/FCard/FCard";
import { getFormattedDateNow } from "@/utils/formatters";
import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./FAccountSummaryCard.styles";

export interface FAccountSummaryCardProps extends FAccountSummaryProps {
  firstName: string;
}

export default function FAccountSummaryCard(props: FAccountSummaryCardProps) {
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
            {getFormattedDateNow()}
          </Typography>
        </Grid2>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <FAccountSummary value={props.value} currency={props.currency} />
        </Grid2>
      </Grid2>

      <Box
        sx={{
          ...styles.commonImage,
          ...styles.bottomPixelsImage,
        }}
      >
        <Image src="/assets/card-pixels-2.svg" alt="" layout="fill" />
      </Box>
      <Box
        sx={{
          ...styles.commonImage,
          ...styles.topPixelsImage,
        }}
      >
        <Image src="/assets/card-pixels-1.svg" alt="" layout="fill" />
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
        <Image src="/assets/card-illustration-1.svg" alt="" layout="fill" />
      </Box>
    </FCard>
  );
}
