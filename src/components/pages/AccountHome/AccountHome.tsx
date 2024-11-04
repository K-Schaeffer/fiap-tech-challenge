"use client";
import FButton from "@/components/atoms/FButton/FButton";
import FAdvantageContainer from "@/components/organisms/FAdvantageContainer/FAdvantageContainer";
import FFooter from "@/components/organisms/FFooter/FFooter";
import FHeader from "@/components/organisms/FHeader/FHeader";
import FMenuDropdown from "@/components/organisms/FMenuDropdown/FMenuDropdown";
import FMenuList from "@/components/organisms/FMenuList/FMenuList";
import { MENU_ITEMS_HOME } from "@/constants";
import { Box, Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AccountHome() {
  const pathname = usePathname();

  const menuItems = MENU_ITEMS_HOME.map((item) => ({
    ...item,
    current: item.path === pathname,
  }));

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: "100vw",
        minHeight: "100vh",
        background: "linear-gradient(var(--mui-palette-tertiary-main), #fff)",
      }}
    >
      <FHeader
        maxWidth="lg"
        leftContent={
          <Box display="flex" alignItems="center" gap={8}>
            <Box
              sx={{
                display: { xs: "none", md: "none", lg: "flex" },
                userSelect: "none",
              }}
            >
              <Image
                src="/assets/logo.svg"
                alt="logo Bytebank"
                width={146}
                height={32}
              />
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex", lg: "none" },
                userSelect: "none",
              }}
            >
              <Image
                src="/assets/logo-small.svg"
                alt="logo Bytebank pequeno"
                width={27}
                height={27}
              />
            </Box>
            <FMenuDropdown
              menuItems={menuItems}
              options={{ sx: { display: { xs: "flex", md: "none" } } }}
            />
            <FMenuList
              menuItems={menuItems}
              variant="row"
              options={{
                sx: { display: { xs: "none", md: "flex" }, fontWeight: 600 },
              }}
            />
          </Box>
        }
        rightContent={
          <Box>
            <Box
              display="flex"
              alignItems="center"
              gap={3}
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <FButton
                options={{ variant: "contained", color: "primary" }}
                innerText="Abrir minha conta"
              />
              <FButton
                options={{ variant: "outlined", color: "primary" }}
                innerText="Ja tenho conta"
              />
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                userSelect: "none",
              }}
            >
              <Image
                src="/assets/logo.svg"
                alt="logo Bytebank"
                width={146}
                height={32}
              />
            </Box>
          </Box>
        }
      />

      <Container maxWidth="lg" sx={{ flex: 1 }}>
        <Box paddingTop={3} paddingBottom={3} gap={8}>
          <Grid2
            container
            display="flex"
            alignItems="center"
            justifyContent="center"
            spacing={8}
          >
            <Grid2
              size={{ md: 12, lg: 5 }}
              display="flex"
              justifyContent={{ xs: "center", lg: "flex-start" }}
            >
              <Typography
                variant="h1"
                fontWeight={600}
                color="#000"
                maxWidth={446}
                textAlign={{ xs: "center", lg: "left" }}
              >
                Experimente mais liberdade no controle da sua vida financeira.
                Crie sua conta com a gente!
              </Typography>
            </Grid2>
            <Grid2
              size={{ md: 12, lg: 7 }}
              display="flex"
              justifyContent={{ xs: "center", lg: "flex-end" }}
            >
              <Image
                src="/assets/banner-illustration.svg"
                alt=""
                layout="responsive"
                width={662}
                height={413}
              />
            </Grid2>
          </Grid2>
          <FAdvantageContainer />
        </Box>
      </Container>

      <FFooter />
    </main>
  );
}
