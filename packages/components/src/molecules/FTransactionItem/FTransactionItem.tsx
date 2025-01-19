import {
  FTransactionAction,
  FTransactionActionProps,
} from "@molecules/FTransactionAction/FTransactionAction";
import { Grid2, Typography } from "@mui/material";
import styles from "./FTransactionItem.styles";

export interface TransactionItem {
  id: string;
  type: string;
  formattedDate: string;
  formattedValue: string;
}

export interface FTransactionItemProps
  extends Omit<TransactionItem, "id">,
    FTransactionActionProps {}

export function FTransactionItem({
  formattedDate,
  type,
  formattedValue,
  onEdit,
  onDelete,
}: FTransactionItemProps) {
  return (
    <Grid2 container>
      <Grid2 size={10} gap={8} sx={styles.gridLeft}>
        <Typography variant="caption" fontWeight={600} color="tertiary">
          {formattedDate}
        </Typography>
        <Typography variant="body1">{type}</Typography>
        <Typography variant="body1" fontWeight={600}>
          {formattedValue}
        </Typography>
      </Grid2>
      <Grid2
        size={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <FTransactionAction
          onEdit={onEdit}
          onDelete={onDelete}
        ></FTransactionAction>
      </Grid2>
    </Grid2>
  );
}
