"use client";
import FAccountSummary, {
  FAccountSummaryProps,
} from "@/components/molecules/FAccountSummary/FAccountSummary";
import FCard from "@/components/organisms/FCard/FCard";
import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./FAccountSummaryCard.styles";

interface FAccountSummaryCardProps extends FAccountSummaryProps {
  firstName: string;
}

export default function FAccountSummaryCard(props: FAccountSummaryCardProps) {
  const now = new Date();

  const todayFormatted = now.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

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
            {todayFormatted}
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
          left: 0,
          width: "327px",
          height: "231px",
        }}
      >
        <Image src="/assets/card-illustration-1.svg" alt="" layout="fill" />
      </Box>
    </FCard>
  );
}
