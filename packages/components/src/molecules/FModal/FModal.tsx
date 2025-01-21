import { FIconButton } from "@atoms/FIconButton/FIconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Modal, SxProps, Typography } from "@mui/material";
import styles from "./FModal.styles";

export interface FModalProps {
  title?: string;
  children: React.ReactNode;
  isOpen: boolean;
  stylesProps?: SxProps;
  handleClose: () => void;
}

export function FModal({
  title,
  children,
  isOpen,
  stylesProps,
  handleClose,
}: FModalProps) {
  const style = stylesProps ?? styles.modalContent;

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={style}>
        {Boolean(title) && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h1"
              fontWeight={600}
              sx={{ marginBottom: "24px" }}
            >
              {title}
            </Typography>
            <Box sx={{ marginBottom: "24px" }}>
              <FIconButton onClick={handleClose}>
                <CloseIcon
                  sx={{
                    width: "29px",
                    height: "29.6px",
                    color: "var(--mui-palette-secondary-main)",
                  }}
                />
              </FIconButton>
            </Box>
          </Box>
        )}
        {children}
      </Box>
    </Modal>
  );
}
