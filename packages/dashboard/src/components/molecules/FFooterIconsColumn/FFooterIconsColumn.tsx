import FIconButton from "@/components/atoms/FIconButton/FIconButton";
import { Instagram, WhatsApp, YouTube } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Image from "next/image";

export interface FFoterIconsColumnProps {
  textHeader?: string;
}

export default function FFoterIconsColumn(props: FFoterIconsColumnProps) {
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

      <Image src="/assets/logo-white.svg" alt="" width={145} height={32} />
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
