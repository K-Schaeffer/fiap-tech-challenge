import { Box, Button, ButtonProps, Typography } from "@mui/material";
import React from "react";

interface FButtonProps {
  innerText?: string;
  options?: ButtonProps;
  onClick?: () => void;
}

export function FButton(props: FButtonProps) {
  return (
    <Button
      {...props.options}
      style={{
        textTransform: "none",
        padding: 0,
        borderRadius: 8,
        maxHeight: 48,
        borderWidth: 2,
      }}
      onClick={props.onClick}
    >
      {props.innerText && (
        <Box padding={2}>
          <Typography variant="body1" fontWeight={600}>
            {props.innerText}
          </Typography>
        </Box>
      )}
    </Button>
  );
}
