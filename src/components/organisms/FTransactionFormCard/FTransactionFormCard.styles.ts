import { SxProps } from "@mui/material";

const commonImage: React.CSSProperties = {
  position: "absolute",
  userSelect: "none",
};

const bottomPixelsImage: React.CSSProperties | SxProps = {
  bottom: 0,
  right: { xs: 0 },
  left: { sm: 0, md: 0 },
  display: { xs: "none", sm: "initial" },
  width: { md: "180px", sm: "180px", xs: "146px" },
  height: { md: "177px", sm: "177px", xs: "144px" },
};

const topPixelsImage: React.CSSProperties | SxProps = {
  top: 0,
  right: { sm: 0, md: 0 },
  display: { xs: "none", sm: "initial" },
  width: { md: "180px", sm: "180px", xs: "146px" },
  height: { md: "177px", sm: "177px", xs: "144px" },
};

const styles = { commonImage, bottomPixelsImage, topPixelsImage };

export default styles;
