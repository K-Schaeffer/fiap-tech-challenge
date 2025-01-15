import { Box, IconButton, IconButtonProps } from "@mui/material";
import React from "react";

interface FIconButtonProps {
  options?: IconButtonProps;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function FIconButton({
  options,
  onClick,
  children,
}: FIconButtonProps) {
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
