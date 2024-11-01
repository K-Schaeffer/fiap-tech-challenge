"use client";
import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, FormControlProps, SelectProps } from '@mui/material';

interface SelectInputProps {
  formControlOptions?: FormControlProps;
  selectOptions?: SelectProps<string>;
}

export default function SelectInput({ formControlOptions, selectOptions }: SelectInputProps) {
  const [transactionType, setTransactionType] = React.useState<string>('');
  const handleChange = (event: SelectChangeEvent<string>) => {
    setTransactionType(event.target.value);
  };

  const borderColor = formControlOptions?.style?.color || "#004D61";

  return (
    <FormControl fullWidth {...formControlOptions} style={{ width: '100%', margin: "auto", ...formControlOptions?.style }}>
      <InputLabel id="transaction-type-select-label" style={{ color: borderColor }}>
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
          color: borderColor,
          '.MuiOutlinedInput-notchedOutline': {
            borderColor,
            borderWidth: 2,
          },
          '&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor,
            borderWidth: 3,
          },
          '.MuiSvgIcon-root': {
            color: borderColor
          },
          ...selectOptions?.sx,
        }}
      >
        <MenuItem value="cambio">Câmbio de Moeda</MenuItem>
        <MenuItem value="doc-ted">DOC/TED</MenuItem>
        <MenuItem value="emprestimo-financiamento">Empréstimo e Financiamento</MenuItem>
      </Select>
    </FormControl>
  );
}
