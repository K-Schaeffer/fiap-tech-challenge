import { Box, Modal, Typography } from "@mui/material";
import styles from "./FModal.styles";

export interface FModalProps {
  title?: string;
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

export function FModal({ title, children, isOpen, handleClose }: FModalProps) {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={styles.modalContent}>
        {Boolean(title) && (
          <Typography
            variant="h1"
            fontWeight={600}
            sx={{ marginBottom: "24px" }}
          >
            {title}
          </Typography>
        )}
        {children}
      </Box>
    </Modal>
  );
}
