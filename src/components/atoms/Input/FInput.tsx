import React from 'react';
import { Box, TextField } from '@mui/material';

interface InputProps {
  placeholder: string;
  textposition: "left" | "center";
  borderColor?: string;
  maxWidth: string
}

export default function Input({ placeholder, textposition, borderColor, maxWidth }: InputProps) {
  const isHexColor = borderColor! ?? "#004D61";

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { width: '100%', maxWidth: maxWidth, margin: "auto" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder={placeholder}
        InputProps={{
          sx: {
            '& input': {
              textAlign: textposition,
              backgroundColor: "#FFFFFF",
              color: isHexColor,
              borderColor: isHexColor,
              borderRadius: "8px",
              borderWidth: 1,
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: isHexColor,
              borderRadius: "8px",
              borderWidth: 2,
            },
            '& input::placeholder': {
              color: isHexColor,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: isHexColor,
              borderWidth: 3,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: isHexColor,
              borderWidth: 3,
            },
            '&.Mui-focused:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: isHexColor,
              borderWidth: 3,
            },
            '&.Mui-focused:not(:hover):not(:focused) .MuiOutlinedInput-notchedOutline': {
              borderColor: isHexColor,
              borderWidth: 3,
            },
          }
        }}
      />
    </Box>
  );
}
