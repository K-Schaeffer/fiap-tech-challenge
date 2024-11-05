import { formatCurrency, formatDate, formatMonth } from "@/utils/formatters";
import { Grid2, Typography } from "@mui/material";
import styles from "./FTransactionItem.styles";
import FTransactionAction, { FTransactionActionProps } from "../FTransactionAction/FTransactionAction";

interface FTransactionItemProps extends FTransactionActionProps {
  date: string;
  type: string;
  value: number;
  currency: string;
}

export default function FTransactionItem(props: FTransactionItemProps) {
  return (
    <Grid2 container>
      <Grid2 size={10} gap={8} sx={styles.gridLeft}>
        <Typography variant="caption" fontWeight={600} color="textLight">
          {formatDate(props.date)}
        </Typography>
        <Typography variant="body1">{props.type}</Typography>
        <Typography variant="body1" fontWeight={600}>
          {formatCurrency(props.value, props.currency)}
        </Typography>
      </Grid2>
      <Grid2
        size={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <FTransactionAction onEdit={props.onEdit} onDelete={props.onDelete}></FTransactionAction>
      </Grid2>
    </Grid2>
  );
}
