import { Container, ContainerProps } from "@mui/material";
import { ReactNode } from "react";

interface HeaderProps {
  maxWidth?: ContainerProps["maxWidth"];
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export default function Header({
  leftContent,
  rightContent,
  maxWidth = "xl",
}: HeaderProps) {
  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 24px",
      backgroundColor: "var(--mui-palette-bgHeader-main)",
      color: "var(--mui-palette-primary-contrastText)",
      height: "96px",
      width: "100%",
    },
  };

  return (
    <header style={styles.header}>
      <Container
        maxWidth={maxWidth}
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {leftContent}
        {rightContent}
      </Container>
    </header>
  );
}
