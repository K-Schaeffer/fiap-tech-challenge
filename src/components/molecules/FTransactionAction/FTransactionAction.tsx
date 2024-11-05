"use client";
import { DeleteTwoTone, EditTwoTone } from "@mui/icons-material";
import { Stack } from "@mui/material";
import FIconButton from "../../atoms/FIconButton/FIconButton";

export interface FTransactionActionProps {
  transactionId: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function FTransactionAction({
  transactionId,
  onEdit,
  onDelete,
}: FTransactionActionProps) {
  return (
    <Stack direction="row" spacing={1.875}>
      <FIconButton
        variant="fancy"
        onClick={() => onEdit(transactionId)}
        options={{ color: "primary" }}
      >
        <EditTwoTone />
      </FIconButton>
      <FIconButton
        variant="fancy"
        onClick={() => onDelete(transactionId)}
        options={{ color: "secondary" }}
      >
        <DeleteTwoTone />
      </FIconButton>
    </Stack>
  );
}
