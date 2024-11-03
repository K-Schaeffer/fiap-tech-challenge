"use client";
import {
  FormControl,
  FormControlProps,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";
import React from "react";

interface SelectInputProps {
  formControlOptions?: FormControlProps;
  selectOptions?: SelectProps<string>;
}

export default function SelectInput({
  formControlOptions,
  selectOptions,
}: SelectInputProps) {
  const [transactionType, setTransactionType] = React.useState<string>("");
  const handleChange = (event: SelectChangeEvent<string>) => {
    setTransactionType(event.target.value);
  };

  return (
    <FormControl
      fullWidth
      {...formControlOptions}
      style={{ width: "100%", margin: "auto", ...formControlOptions?.style }}
    >
      <InputLabel
        id="transaction-type-select-label"
        style={{ color: "var(--mui-palette-primary-main)" }}
      >
        Selecione o tipo de transação
      </InputLabel>
      <Select
        labelId="transaction-type-select-label"
        id="transaction-type-select"
        value={transactionType}
        label="Selecione o tipo de transação"
        onChange={handleChange}
        {...selectOptions}
        style={{
          minHeight: 40,
          borderRadius: 8,
          backgroundColor: "#FFFFFF",
          ...selectOptions?.style,
        }}
        sx={{
          color: "var(--mui-palette-primary-main)",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--mui-palette-primary-main)",
            borderWidth: 2,
          },
          "&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "var(--mui-palette-primary-main)",
              borderWidth: 3,
            },
          ".MuiSvgIcon-root": {
            color: "var(--mui-palette-primary-main)",
          },
          ...selectOptions?.sx,
        }}
      >
        <MenuItem value="cambio">Câmbio de Moeda</MenuItem>
        <MenuItem value="doc-ted">DOC/TED</MenuItem>
        <MenuItem value="emprestimo-financiamento">
          Empréstimo e Financiamento
        </MenuItem>
      </Select>
    </FormControl>
  );
}
