import { Stack } from "@mui/material";
import FIcon from '../../atoms/FIcon/Ficon';
import React from "react";

const FTransactionAction: React.FC = () => {
    return (
      <Stack direction="row" spacing={1.875}>
        <FIcon icon={"edit"} />
        <FIcon icon="delete" />
      </Stack>
    );
  };

  export default FTransactionAction;
