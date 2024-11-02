import { Box, Card, Typography } from "@mui/material";

type FCardVariant = "light" | "dark";

interface FCardProps {
  title?: string;
  children: React.ReactNode;
  variant?: FCardVariant;
}

const bgColor = {
  light: "var(--mui-palette-bgCard-light)",
  dark: "var(--mui-palette-bgCard-dark)",
};

const textColor = {
  light: "currentColor",
  dark: "var(--mui-palette-bgCard-contrastText)",
};

export default function FCard({ title, children, variant }: FCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: variant
          ? bgColor[variant]
          : "var(--mui-palette-bgCard-main)",
        padding: "24px",
        borderRadius: "8px",
      }}
    >
      {Boolean(title) && (
        <Typography
          variant="h1"
          fontWeight={600}
          color={variant ? textColor[variant] : "currentColor"}
          sx={{ marginBottom: "24px" }}
        >
          {title}
        </Typography>
      )}
      <Box
        sx={{
          color: variant ? textColor[variant] : "currentColor",
        }}
      >
        {children}
      </Box>
    </Card>
  );
}
