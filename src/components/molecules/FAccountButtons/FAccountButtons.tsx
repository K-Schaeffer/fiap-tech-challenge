import FButton from "@/components/atoms/FButton/FButton";
import { Box, BoxProps, ButtonProps } from "@mui/material";

interface FAccountButtonsProps {
  color: ButtonProps["color"];
  options?: BoxProps;
}

export default function FAccountButtons({
  color,
  options,
}: FAccountButtonsProps) {
  return (
    <Box {...options} alignItems="center" justifyContent="center" gap={3}>
      <FButton
        options={{ variant: "contained", color }}
        innerText="Abrir minha conta"
      />
      <FButton
        options={{ variant: "outlined", color }}
        innerText="Ja tenho conta"
      />
    </Box>
  );
}
