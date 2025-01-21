"use client";
import AccountService from "@/services/Account/Account.controller";
import { AccountInfoModel } from "@/services/Account/Account.model";
import UserService from "@/services/User/User.controller";
import { UserModel } from "@/services/User/User.model";
import { AlertColor, Box, Container, Grid2, Typography } from "@mui/material";

import {
  FAccountButtons,
  FAdvantageColumn,
  FAdvantageContainer,
  FAlert,
  FFooter,
  FHeader,
  FLogin,
  FMenuDropdown,
  FMenuList,
  FMenuListItem,
  FModal,
  FRegister,
} from "components";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

interface FAccountHomeProps {
  menuItems: FMenuListItem[];
}
export default function AccountHome(props: FAccountHomeProps) {
  const router = useRouter();

  const [user, setUser] = useState<UserModel>();
  const [accessToken, setAccessToken] = useState<string>();
  const [account, setAccount] = useState<AccountInfoModel>();
  const [alert, setAlert] = useState<{
    severity: AlertColor;
    text: string;
  } | null>(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState<boolean>(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] =
    useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (item: UserModel): Promise<boolean> => {
    try {
      if (!validateEmail(item?.email!)) {
        setAlert({
          severity: "warning",
          text: "informe um email valido!",
        });
        setAlertOpen(true);
        return false;
      }

      const respAutentication = await UserService.authorization(item);

      const autentication: UserModel = respAutentication?.data?.result!;

      if (autentication) {
        setAccessToken(autentication.token!);

        let modelUser: UserModel = {
          id: autentication.id!,
          token: autentication.token!,
        };

        setUser(modelUser);

        const respAccountData = await AccountService.getByUserId(modelUser.id!);

        if (respAccountData?.data?.result!) {
          setAccount(respAccountData.data.result);
        }

        setAlert({ severity: "success", text: "Login realizado com sucesso!" });
        setAlertOpen(true);
        router.push("/dashboard");
        return true;
      } else {
        setAlert({
          severity: "warning",
          text: "Dados incorretos, tente novamente!",
        });
        setAlertOpen(true);
      }
    } catch (error) {
      setAlert({ severity: "error", text: `${error}` });
      setAlertOpen(true);
      return false;
    }
    return false;
  };

  const handleSubmitRegister = async (item: UserModel): Promise<boolean> => {
    try {
      if (!validateEmail(item?.email!)) {
        setAlert({
          severity: "warning",
          text: "informe um email valido!",
        });
        setAlertOpen(true);
        return false;
      }
      const respAutentication = await UserService.create(item);

      const autentication: UserModel = respAutentication?.data?.result!;

      if (autentication) {
        setAlert({ severity: "success", text: "Usuário criado com sucesso!" });
        setAlertOpen(true);
        return true;
      } else {
        setAlert({
          severity: "warning",
          text: "Dados incorretos, tente novamente!",
        });
        setAlertOpen(true);
      }
    } catch (error) {
      setAlert({ severity: "error", text: `${error}` });
      setAlertOpen(true);
      return false;
    }
    return false;
  };

  const handleNewAccount = () => {
    setIsModalRegisterOpen(true);
  };

  const handleLoginAccount = () => {
    setIsModalLoginOpen(true);
  };

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
      {alert && (
        <FAlert
          severity={alert.severity}
          text={alert.text}
          open={alertOpen}
          onClose={() => setAlertOpen(false)}
        />
      )}
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
              handleNewAccount={() => handleNewAccount()}
              handleLogin={() => handleLoginAccount()}
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
            handleNewAccount={() => handleNewAccount}
            handleLogin={() => handleLoginAccount}
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

      <FModal
        title="Login"
        isOpen={isModalLoginOpen}
        handleClose={() => setIsModalLoginOpen(false)}
        stylesProps={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { lg: "45%", sm: "65%", xs: "85%" },
          height: "100%",
          backgroundColor: "var(--mui-palette-bgModal-main)",
          color: "var(--mui-palette-secondary-main)",
          padding: "24px",
        }}
      >
        <FLogin submitLogin={handleLogin} />
      </FModal>

      <FModal
        title="Register"
        isOpen={isModalRegisterOpen}
        handleClose={() => setIsModalRegisterOpen(false)}
        stylesProps={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { lg: "45%", sm: "65%", xs: "85%" },
          height: "100%",
          backgroundColor: "var(--mui-palette-bgModal-main)",
          color: "var(--mui-palette-secondary-main)",
          padding: "24px",
        }}
      >
        <FRegister submitRegister={handleSubmitRegister} />
      </FModal>
    </main>
  );
}
