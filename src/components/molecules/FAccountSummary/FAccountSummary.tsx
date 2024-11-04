"use client";
import { formatCurrency } from "@/utils/formatters";
import { VisibilityOffTwoTone, VisibilityTwoTone } from "@mui/icons-material";
import { Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import FIconButton from "../../atoms/FIconButton/FIconButton";

export interface FAccountSummaryProps {
  currency: string;
  value: number;
}

export default function FAccountSummary(props: FAccountSummaryProps) {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const balance = formatCurrency(props.value, props.currency);

  const handleToggle = () => {
    setIsBalanceVisible((prev) => !prev);
  };

  return (
    <Stack spacing={1.875}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          color="var(--mui-palette-secondary-contrastText)"
        >
          Saldo
        </Typography>
        <FIconButton
          variant="plain"
          onClick={handleToggle}
          options={{ color: "secondary" }}
        >
          {isBalanceVisible ? <VisibilityOffTwoTone /> : <VisibilityTwoTone />}
        </FIconButton>
      </Stack>
      <Divider sx={{ width: 180, bgcolor: "#FF5031" }}></Divider>
      <Typography
        variant="body1"
        fontWeight={400}
        color="var(--mui-palette-secondary-contrastText)"
      >
        Conta Corrente
      </Typography>
      <Typography
        fontWeight={400}
        fontSize={31}
        color="var(--mui-palette-secondary-contrastText)"
      >
        {isBalanceVisible ? balance : "R$ ***,**"}
      </Typography>
    </Stack>
  );
}
