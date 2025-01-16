import { Chip } from "@mui/material";

interface FChipProps {
  valueAdd: number;
  handleValueClick: (value: number) => void;
}

export default function FChip({ valueAdd, handleValueClick }: FChipProps) {
  return (
    <Chip
      variant="outlined"
      label={"+" + valueAdd}
      sx={{
        height: "2.3rem",
        border: "1px solid var(--mui-palette-primary-main)",
        width: "5rem",
        borderRadius: "14px",
        color: "var(--mui-palette-primary-main)",
        backgroundColor: "var(--mui-palette-primary-contrastText)",
        fontSize: "0.8rem",
      }}
      onClick={() => handleValueClick(valueAdd)}
    />
  );
}
