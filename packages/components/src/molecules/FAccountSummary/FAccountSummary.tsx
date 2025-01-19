import { FIconButton } from "@atoms/FIconButton/FIconButton";
import { VisibilityOffTwoTone, VisibilityTwoTone } from "@mui/icons-material";
import { Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";

export interface FAccountSummaryProps {
  balance: string;
  currency: string;
}

export function FAccountSummary(props: FAccountSummaryProps) {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const handleToggle = () => {
    setIsBalanceVisible((prev) => !prev);
  };

  return (
    <Stack spacing={1.875}>
      <Stack direction={"row"} gap={3}>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          color="var(--mui-palette-secondary-contrastText)"
        >
          Saldo
        </Typography>
        <FIconButton onClick={handleToggle} options={{ color: "secondary" }}>
          {isBalanceVisible ? <VisibilityTwoTone /> : <VisibilityOffTwoTone />}
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
        {isBalanceVisible ? props.balance : `${props.currency} ***,**`}
      </Typography>
    </Stack>
  );
}
