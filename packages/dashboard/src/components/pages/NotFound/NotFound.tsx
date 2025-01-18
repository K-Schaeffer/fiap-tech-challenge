"use client";
import { Box, Container, Typography } from "@mui/material";
import { FButton } from "components";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main
      style={{
        minWidth: "100%",
        minHeight: "100%",
        backgroundColor: "var(--mui-palette-tertiary-light)",
      }}
    >
      <Container maxWidth="xl" sx={{ height: "100vh" }}>
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          gap={4}
        >
          <Typography variant="h1" fontWeight={600}>
            404 | Página não encontrada
          </Typography>
          <FButton
            options={{ variant: "outlined", color: "secondary" }}
            onClick={() => router.back()}
            innerText="Voltar para a Dashboard"
          />
        </Box>
      </Container>
    </main>
  );
}
