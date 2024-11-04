import { Container } from "@mui/material";
import { ReactNode } from "react";

interface HeaderProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export default function Header({ leftContent, rightContent }: HeaderProps) {
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
        maxWidth="xl"
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
