"use client";
import FTransactionAction, {
  FTransactionActionProps,
} from "@/components/molecules/FTransactionAction/FTransactionAction";
import FTransactionList, {
  FTransactionListProps,
} from "@/components/molecules/FTransactionList/FTransactionList";
import FCard from "@/components/organisms/FCard/FCard";
import { Stack, Typography } from "@mui/material";

export interface FTransactionListCardProps
  extends FTransactionListProps,
    FTransactionActionProps {}

export default function FTransactionListCard(props: FTransactionListCardProps) {
  return (
    <FCard>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        paddingBottom={1}
      >
        <Typography variant="h1" fontWeight={600}>
          Extrato
        </Typography>
        <FTransactionAction onEdit={props.onEdit} onDelete={props.onDelete} />
      </Stack>
      <FTransactionList transactionItems={props.transactionItems} />
    </FCard>
  );
}
