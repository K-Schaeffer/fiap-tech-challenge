"use client";
import { Box, Container, Grid2, Typography } from "@mui/material";

import {
  FAccountButtonActions,
  FAccountButtons,
  FAdvantageColumn,
  FAdvantageContainer,
  FFooter,
  FHeader,
  FMenuDropdown,
  FMenuList,
  FMenuListItem,
} from "components";

import Image from "next/image";
import Link from "next/link";

interface FAccountHomeProps {
  actions: FAccountButtonActions;
  menuItems: FMenuListItem[];
}
export default function AccountHome(props: FAccountHomeProps) {
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
              menuItems={props.menuItems}
              options={{ sx: { display: { xs: "flex", md: "none" } } }}
            >
              <Link href="" />
            </FMenuDropdown>
            <FMenuList
              menuItems={props.menuItems}
              variant="row"
              options={{
                sx: { display: { xs: "none", md: "flex" }, fontWeight: 600 },
              }}
            >
              <Link href="" />
            </FMenuList>
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
            handleNewAccount={() => {
              props.actions.handleNewAccount();
            }}
            handleLogin={() => {
              props.actions.handleLogin();
            }}
          />
          <FAdvantageContainer>
            <FAdvantageColumn
              title="Conta e cartão gratuitos"
              description="Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
            >
              <Image
                src="/assets/GiftBox.svg"
                alt="Ícone de caixa de presente"
                width="64"
                height="64"
              />{" "}
            </FAdvantageColumn>
            <FAdvantageColumn
              title="Saques sem custo"
              description="Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
            >
              <Image
                src="/assets/Exchange.svg"
                alt="Ícone de mão entregando dinheiro"
                width="64"
                height="64"
              />{" "}
            </FAdvantageColumn>
            <FAdvantageColumn
              title="Programa de pontos"
              description="Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"
            >
              <Image
                src="/assets/Star.svg"
                alt="Ícone de estrela"
                width="64"
                height="64"
              />{" "}
            </FAdvantageColumn>
            <FAdvantageColumn
              title="Seguro dispositivos"
              description="Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."
            >
              <Image
                src="/assets/Devices.svg"
                alt="Ícone de diversas telas de diferentes dispositivos"
                width="64"
                height="64"
              />{" "}
            </FAdvantageColumn>
          </FAdvantageContainer>
        </Box>
      </Container>

      <FFooter>
        <Image src="/assets/logo-white.svg" alt="" width={145} height={32} />
      </FFooter>
    </main>
  );
}
