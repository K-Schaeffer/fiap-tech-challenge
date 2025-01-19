import { SxProps } from "@mui/material";

const modalContent: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: "40%", sm: "60%", xs: "80%" },
  padding: "24px",
  borderRadius: "8px",
  backgroundColor: "var(--mui-palette-bgCard-main)",
};

const styles = { modalContent };

export default styles;
