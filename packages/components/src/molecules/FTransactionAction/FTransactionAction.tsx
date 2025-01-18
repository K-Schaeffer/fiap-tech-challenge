import { FIconButton } from "@atoms/FIconButton/FIconButton";
import { DeleteTwoTone, EditTwoTone } from "@mui/icons-material";
import { Stack } from "@mui/material";

export interface FTransactionActionProps {
  onEdit: () => void;
  onDelete: () => void;
}

export function FTransactionAction({
  onEdit,
  onDelete,
}: FTransactionActionProps) {
  return (
    <Stack direction="row" spacing={1.875}>
      <FIconButton onClick={onEdit} options={{ color: "primary" }}>
        <EditTwoTone />
      </FIconButton>
      <FIconButton onClick={onDelete} options={{ color: "secondary" }}>
        <DeleteTwoTone />
      </FIconButton>
    </Stack>
  );
}
