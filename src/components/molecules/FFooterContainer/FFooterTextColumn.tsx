import { Box, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

interface FFooterTextColumnProps {
  textHeader?: string;
  listItems?: string[];
}

export default function FFooterTextColumn(props: FFooterTextColumnProps) {
  return (
    <Box sx={{ width: "100%", hidden: { md: "show", sm: "show", xs: "none" } }}>
      <Stack
        spacing={2}
        sx={{
          justifyContent: "start",
          alignItems: "start",
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
        {props?.listItems?.map((item) => (
          <Typography
            fontWeight={400}
            lineHeight={"19.2px"}
            color="ligth"
            height={"31px"}
            fontSize={16}
          >
            {item}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}
