import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
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

  return <header style={styles.header}>{children}</header>;
}
