import { FFooterIconsColumn } from "@molecules/FFooterIconsColumn/FFooterIconsColumn";
import { FFooterTextColumn } from "@molecules/FFooterTextColumn/FFooterTextColumn";
import { Box, Container, Grid2 } from "@mui/material";

import { listContact, listService } from "./FFooter.constants";

interface FFooterProps {
  children?: React.ReactNode;
}

export function FFooter({ children }: FFooterProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        width: "100%",
      }}
      padding={6}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <FFooterTextColumn textHeader="Serviços" listItems={listService} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <FFooterTextColumn textHeader="Contato" listItems={listContact} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <FFooterIconsColumn textHeader="Desenvolvido por Alura">
              {children}
            </FFooterIconsColumn>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
