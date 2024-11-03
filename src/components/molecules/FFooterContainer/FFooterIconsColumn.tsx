import FIconButton from "@/components/atoms/FIconButton/FIconButton";
import { Instagram, WhatsApp, YouTube } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Image from "next/image";

interface FFoterIconsColumnProps {
  textHeader?: string;
  listItems?: string[];
}

export default function FFoterIconsColumn(props: FFoterIconsColumnProps) {
  return (
    <Box
      sx={{
        width: "100%",
        hidden: { md: "show", sm: "show", xs: "none" },
      }}
    >
      <Stack
        spacing={2}
        sx={{
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Typography
          fontWeight={700}
          lineHeight={"19.2px"}
          color="ligth"
          height={"31px"}
          fontSize={16}
        >
          {props.textHeader}
        </Typography>

        <Image src="/assets/logo-white.svg" alt="" width={145} height={32} />
        <Stack spacing={3} direction="row">
          <FIconButton variant="plain">
            <Instagram sx={{ width: "29px", height: "29.6px" }} />
          </FIconButton>
          <FIconButton variant="plain">
            <WhatsApp sx={{ width: "29px", height: "29.6px" }} />
          </FIconButton>
          <FIconButton variant="plain">
            <YouTube sx={{ width: "29px", height: "29.6px" }} />
          </FIconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
