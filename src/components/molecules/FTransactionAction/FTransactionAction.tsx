import { Stack } from "@mui/material";
import FIconButton from '../../atoms/FIconButton/FIconButton';
import { DeleteTwoTone, EditTwoTone } from "@mui/icons-material";

export default function FTransactionAction() {
    return (
      <Stack direction="row" spacing={1.875}>
        <FIconButton variant="fancy">
          <EditTwoTone />
        </FIconButton>
        <FIconButton variant="fancy">
          <DeleteTwoTone />
        </FIconButton>
      </Stack>
    );
  };
