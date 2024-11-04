import { Grid2, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

interface FFooterTextColumnProps {
  textHeader?: string;
  listItems?: string[];
}

export default function FFooterTextColumn(props: FFooterTextColumnProps) {
  return (
    <Grid2
      container
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
      direction="column"
    >
      <Stack spacing={1}>
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
    </Grid2>
  );
}
