"use client";
import { DeleteTwoTone, EditTwoTone } from "@mui/icons-material";
import { Stack } from "@mui/material";
import FIconButton from "../../atoms/FIconButton/FIconButton";

export interface FTransactionActionProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function FTransactionAction(props: FTransactionActionProps) {
  return (
    <Stack direction="row" spacing={1.875}>
      <FIconButton variant="plain" onClick={props.onEdit} options={{ color: "primary" }}>
        <EditTwoTone />
      </FIconButton>
      <FIconButton variant="plain" onClick={props.onDelete} options={{ color: "primary" }}>
        <DeleteTwoTone />
      </FIconButton>
    </Stack>
  );
}
