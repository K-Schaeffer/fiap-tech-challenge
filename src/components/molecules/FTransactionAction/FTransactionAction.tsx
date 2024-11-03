"use client";
import { DeleteTwoTone, EditTwoTone } from "@mui/icons-material";
import { Stack } from "@mui/material";
import FIconButton from "../../atoms/FIconButton/FIconButton";

export default function FTransactionAction() {
  const handleEdit = () => alert("Edit");
  const handleRemove = () => alert("Remove");

  return (
    <Stack direction="row" spacing={1.875}>
      <FIconButton variant="fancy" onClick={handleEdit}>
        <EditTwoTone />
      </FIconButton>
      <FIconButton variant="fancy" onClick={handleRemove}>
        <DeleteTwoTone />
      </FIconButton>
    </Stack>
  );
}
