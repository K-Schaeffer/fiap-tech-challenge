import { IconButton, IconButtonProps, Box } from "@mui/material";
import React from "react";

interface FIconButtonProps {
  variant: 'plain' | 'fancy';
  options?: IconButtonProps;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function FIconButton(props: FIconButtonProps) {
  return (
    <IconButton 
    {...props.options}
    style={{ padding: 0 }}
    onClick={props.onClick}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ...(props.variant === 'fancy' && {
            backgroundColor: '#004D61',
            width: 40,
            height: 40,
            borderRadius: '50%',
          }),
        }}>
        { props.children }
      </Box>
    </IconButton>
  );
}
