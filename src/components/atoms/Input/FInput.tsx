import { Box, TextField, TextFieldProps } from "@mui/material";

interface InputProps {
  options?: TextFieldProps;
  placeholder: string;
  textposition: "left" | "center";
  borderColor?: string;
  labelInput?: string;
  maxWidth?: string;
}

export default function FInput({
  options,
  textposition,
  borderColor,
  maxWidth,
}: InputProps) {
  const isHexColor = borderColor! ?? "#004D61";

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          width: "100%",
          margin: "auto",
          maxWidth: maxWidth,
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        {...options}
        id="outlined-basic"
        variant="outlined"
        slotProps={{
          input: {
            sx: {
              "& input": {
                textAlign: textposition,
                backgroundColor: "#FFFFFF",
                color: isHexColor,
                borderColor: isHexColor,
                borderRadius: "8px",
                borderWidth: 1,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: isHexColor,
                borderRadius: "8px",
                borderWidth: 2,
              },
              "& input::placeholder": {
                color: isHexColor,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: isHexColor,
                borderWidth: 3,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: isHexColor,
                borderWidth: 3,
              },
              "&.Mui-focused:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: isHexColor,
                borderWidth: 3,
              },
              "&.Mui-focused:not(:hover):not(:focused) .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: isHexColor,
                  borderWidth: 3,
                },
            },
          },
        }}
      />
    </Box>
  );
}
