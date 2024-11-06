import FButton from "@/components/atoms/FButton/FButton";
import { Box, BoxProps, ButtonProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export interface FAccountButtonActions {
  handleNewAccount: () => void;
  handleLogin: () => void;
}

interface FAccountButtonsProps extends FAccountButtonActions {
  color: ButtonProps["color"];
  options?: BoxProps;
}

export default function FAccountButtons({
  color,
  options,
  handleNewAccount,
  handleLogin,
}: FAccountButtonsProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box {...options} alignItems="center" justifyContent="center" gap={3}>
      <FButton
        options={{ variant: "contained", color }}
        innerText={matches ? "Abrir Conta" : "Abrir minha conta"}
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
