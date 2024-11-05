"use client";
import { DeleteTwoTone, EditTwoTone } from "@mui/icons-material";
import { Stack } from "@mui/material";
import FIconButton from "../../atoms/FIconButton/FIconButton";

export interface FTransactionActionProps {
  onEdit: () => void;
  onDelete: () => void;
}

export default function FTransactionAction({
  onEdit,
  onDelete,
}: FTransactionActionProps) {
  return (
    <Stack direction="row" spacing={1.875}>
      <FIconButton
        variant="fancy"
        onClick={onEdit}
        options={{ color: "primary" }}
      >
        <EditTwoTone />
      </FIconButton>
      <FIconButton
        variant="fancy"
        onClick={onDelete}
        options={{ color: "secondary" }}
      >
        <DeleteTwoTone />
      </FIconButton>
    </Stack>
  );
}
