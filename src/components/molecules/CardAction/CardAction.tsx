import { IconButtonProps, Stack, StackProps } from "@mui/material";
import FIcon from '../../atoms/FIcon/Ficon';
import React from "react";

interface CardActionProps {
    icon1: "menu" | "avatar" | "delete" | "edit" | "olho";
    icon2: "menu" | "avatar" | "delete" | "edit" | "olho";
}

const CardAction: React.FC<CardActionProps> = ({ icon1, icon2 }) => {
    return (
      <Stack direction="row" spacing={1.875}>
        <FIcon icon={"edit"} />
        <FIcon icon="delete" />
      </Stack>
    );
  };

  export default CardAction;
