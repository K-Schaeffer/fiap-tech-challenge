import { FButton } from "@atoms/FButton/FButton";
import { FIconButton } from "@atoms/FIconButton/FIconButton";
import { FInput } from "@atoms/FInput/FInput";
import { UserModel } from "@molecules/FRegister/FRegister";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

type submitLoginProps = {
  submitLogin?: (item: UserModel) => Promise<boolean>;
};

export function FLogin({ submitLogin }: submitLoginProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const handleInputEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };

  const handleInputpPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const cleanStates = () => {
    setEmail("");
    setPassword("");
    setHidePassword(false);
  };

  const handleSubmitLogin = async () => {
    let model: UserModel = {
      email,
      password,
    };

    const respSubmit = await submitLogin(model);

    if (respSubmit) {
      cleanStates();
    }
  };

  return (
    <>
      <Container
        sx={{
          width: "100%",
        }}
      >
        <Stack gap={2} flexDirection={"column"}>
          <Grid2
            size={{ md: 12, lg: 7, xl: 2 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ height: { xs: "216px", md: "261px", lg: "261px" } }}
          >
            <Box
              sx={{
                height: { xs: "216px", md: "261px", lg: "261px" },
                width: { xs: "293px", md: "354px", lg: "354px" },
              }}
            >
              <Image
                src="/assets/login-illustration.svg"
                alt="login"
                width={300}
                height={220}
              />
            </Box>
          </Grid2>

          <Typography
            variant="h1"
            fontWeight={600}
            color="#000"
            textAlign={{ xs: "center", lg: "left" }}
            fontSize="20px"
          >
            Preencha os campos abaixo para criar sua conta corrente!
          </Typography>

          <FInput
            options={{
              placeholder: "Digite seu email",
              label: "Email",
              type: "text",
              value: email || "",
            }}
            textposition="left"
            onChange={handleInputEmailChange}
          />

          <Grid2 container display="flex" alignItems="center" spacing={2}>
            <Box width="70%">
              <FInput
                options={{
                  placeholder: "Digite sua senha",
                  label: "Senha",
                  type: hidePassword ? "password" : "text",
                  value: password || "",
                  color: "secondary",
                }}
                textposition="left"
                onChange={handleInputpPasswordChange}
              />
            </Box>

            {hidePassword ? (
              <FIconButton onClick={() => setHidePassword(!hidePassword)}>
                <VisibilityOffIcon
                  sx={{
                    width: "29px",
                    height: "29.6px",
                    color: "var(--mui-palette-secondary-main)",
                  }}
                />
              </FIconButton>
            ) : (
              <FIconButton onClick={() => setHidePassword(!hidePassword)}>
                <VisibilityIcon
                  sx={{
                    width: "29px",
                    height: "29.6px",
                    color: "var(--mui-palette-secondary-main)",
                  }}
                />
              </FIconButton>
            )}
          </Grid2>

          <Typography
            variant="h1"
            fontWeight={400}
            color="var(--mui-palette-primary-main)"
            textAlign={{ xs: "center", lg: "left" }}
            fontSize="16px"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Esqueci a senha!
          </Typography>

          <Grid2
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            width="100%"
          >
            <FButton
              options={{
                variant: "contained",
              }}
              innerText="Acessar"
              onClick={() => handleSubmitLogin()}
            />
          </Grid2>
        </Stack>
      </Container>
    </>
  );
}
