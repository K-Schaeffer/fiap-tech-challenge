import { formatCurrency, formatDate, formatMonth } from "@/utils/formatters";
import { Grid2, Typography } from "@mui/material";
import styles from "./FTransactionItem.styles";

interface FTransactionItemProps {
  date: string;
  type: string;
  value: number;
}

export default function FTransactionItem({
  date,
  type,
  value,
}: FTransactionItemProps) {
  return (
    <Grid2 container>
      <Grid2 size={10} gap={8} sx={styles.gridLeft}>
        <Typography variant="caption" fontWeight={600} color="tertiary">
          {formatMonth(date)}
        </Typography>
        <Typography variant="body1">{type}</Typography>
        <Typography variant="body1" fontWeight={600}>
          {formatCurrency(value, "R$")}
        </Typography>
      </Grid2>
      <Grid2
        size={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" color="textLight">
          {formatDate(date)}
        </Typography>
      </Grid2>
    </Grid2>
  );
}
