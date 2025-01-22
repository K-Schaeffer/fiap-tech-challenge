import { FIconButton } from "@atoms/FIconButton/FIconButton";
import { Instagram, WhatsApp, YouTube } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export interface FFooterIconsColumnProps {
  textHeader?: string;
  children?: React.ReactNode;
}

export function FFooterIconsColumn(props: FFooterIconsColumnProps) {
  return (
    <Stack
      spacing={3}
      display="flex"
      alignItems={{ md: "flex-start", lg: "center" }}
    >
      <Typography
        fontWeight={700}
        lineHeight={"19.2px"}
        color="light"
        height={"31px"}
        fontSize={16}
        minWidth={185}
      >
        {props.textHeader}
      </Typography>

      {props.children}

      <Stack spacing={3} direction="row">
        <FIconButton>
          <Instagram sx={{ width: "29px", height: "29.6px" }} />
        </FIconButton>
        <FIconButton>
          <WhatsApp sx={{ width: "29px", height: "29.6px" }} />
        </FIconButton>
        <FIconButton>
          <YouTube sx={{ width: "29px", height: "29.6px" }} />
        </FIconButton>
      </Stack>
    </Stack>
  );
}
