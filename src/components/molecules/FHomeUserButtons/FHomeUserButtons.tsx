import FButton from "@/components/atoms/FButton/FButton";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function FHomeUserButtons() {
  return (
    <Box sx={{ width: "100%", hidden: { md: "show", sm: "show", xs: "none" } }}>
      <Stack
        spacing={{ md: 3, sm: 2, xs: 0 }}
        direction="row"
        sx={{
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            maxWidth: { md: "180px", sm: "144px" },
            height: "48px",
          }}
        >
          <FButton
            innerText={"Abrir minha conta"}
            options={{ variant: "contained", color: "primary" }}
          />
        </Box>
        <Box
          sx={{
            maxWidth: { md: "180px", sm: "144px" },
            height: "48px",
          }}
        >
          <FButton
            innerText="Já tenho conta"
            options={{ variant: "outlined", color: "primary" }}
          />
        </Box>
      </Stack>
    </Box>
  );
}
