import {
  Alert,
  AlertColor,
  Snackbar,
  SnackbarCloseReason,
} from "@mui/material";
import React, { useEffect } from "react";

export interface FAlertProps {
  severity: AlertColor;
  text: string;
  open: boolean;
  onClose: () => void;
}

const FAlert: React.FC<FAlertProps> = ({ severity, text, open, onClose }) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Fecha o alerta após 3 segundos

      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    onClose();
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
      autoHideDuration={3000}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

export default FAlert;
