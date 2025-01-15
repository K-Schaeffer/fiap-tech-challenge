import { Box, Card, CardProps, Typography } from "@mui/material";

type FCardVariant = "light" | "dark";

interface FCardProps {
  title?: string;
  children: React.ReactNode;
  variant?: FCardVariant;
  options?: CardProps;
}

const bgColor = {
  light: "var(--mui-palette-bgCard-light)",
  dark: "var(--mui-palette-bgCard-dark)",
};

const textColor = {
  light: "var(--mui-palette-bgCard-dark)",
  dark: "var(--mui-palette-bgCard-contrastText)",
};

export default function FCard({
  title,
  children,
  variant,
  options,
}: FCardProps) {
  return (
    <Card
      {...options}
      elevation={0}
      sx={{
        ...options?.sx,
        backgroundColor: variant
          ? bgColor[variant]
          : "var(--mui-palette-bgCard-main)",
        padding: "32px",
        borderRadius: "8px",
      }}
    >
      {Boolean(title) && (
        <Typography
          variant="h1"
          fontWeight={600}
          color={variant ? textColor[variant] : "currentColor"}
          sx={{ marginBottom: "32px" }}
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
