import { Box, IconButton, IconButtonProps } from "@mui/material";

interface FIconButtonProps {
  options?: IconButtonProps;
  onClick?: () => void;
  children: React.ReactNode;
}

export function FIconButton({ options, onClick, children }: FIconButtonProps) {
  return (
    <IconButton {...options} style={{ padding: 0 }} onClick={onClick}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </IconButton>
  );
}
