"use client";
import FHeader from "@/components/molecules/FHeader/FHeader";
import FMenuList from "@/components/molecules/FMenuList/FMenuList";
import FAdvantageContainer from "@/components/organisms/FAdvantageContainer/FAdvantageContainer";
import FFooter from "@/components/organisms/FFooter/FFooter";
import FMenuDropdown from "@/components/organisms/FMenuDropdown/FMenuDropdown";
import { MENU_ITEMS_HOME } from "@/constants";
import { Box, Container, Grid2, Typography } from "@mui/material";
import { FAccountButtonActions, FAccountButtons } from "components";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface FAccountHomeProps {
  actions: FAccountButtonActions;
}

export default function AccountHome(props: FAccountHomeProps) {
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
        minWidth: "100%",
        minHeight: "100%",
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
            <FAccountButtons
              color="primary"
              options={{
                sx: {
                  display: { xs: "none", md: "flex" },
                },
              }}
              handleNewAccount={() => {
                props.actions.handleNewAccount();
              }}
              handleLogin={() => {
                props.actions.handleLogin();
              }}
            />
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
          <FAccountButtons
            color="secondary"
            options={{
              display: { xs: "flex", md: "none" },
              marginTop: 4,
              marginBottom: 4,
            }}
            handleNewAccount={props.actions?.handleNewAccount}
            handleLogin={props.actions?.handleLogin}
          />
          <FAdvantageContainer />
        </Box>
      </Container>

      <FFooter />
    </main>
  );
}
