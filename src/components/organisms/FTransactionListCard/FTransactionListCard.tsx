"use client";
import FTransactionList, {
  FTransactionListProps,
} from "@/components/molecules/FTransactionList/FTransactionList";
import FCard from "@/components/organisms/FCard/FCard";
import { Stack, Typography } from "@mui/material";

export interface FTransactionListCardProps
  extends FTransactionListProps {}

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
      </Stack>
      <FTransactionList transactionItems={props.transactionItems} />
    </FCard>
  );
}
