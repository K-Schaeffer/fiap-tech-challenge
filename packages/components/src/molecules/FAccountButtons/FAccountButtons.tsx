import { FButton } from "@atoms/FButton/FButton";
import { Box, BoxProps, ButtonProps } from "@mui/material";

export interface FAccountButtonActions {
  handleNewAccount: () => void;
  handleLogin: () => void;
}

interface FAccountButtonsProps extends FAccountButtonActions {
  color: ButtonProps["color"];
  options?: BoxProps;
}

export function FAccountButtons({
  color,
  options,
  handleNewAccount,
  handleLogin,
}: FAccountButtonsProps) {
  return (
    <Box {...options} alignItems="center" justifyContent="center" gap={3}>
      <FButton
        options={{ variant: "contained", color }}
        innerText="Abrir Conta"
        onClick={handleNewAccount}
      />
      <FButton
        options={{ variant: "outlined", color }}
        innerText="Ja tenho conta"
        onClick={handleLogin}
      />
    </Box>
  );
}
