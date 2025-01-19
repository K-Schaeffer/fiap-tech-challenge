import { Grid2, Typography } from "@mui/material";

interface AdvantageColumnProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function FAdvantageColumn({
  title,
  description,
  children,
}: AdvantageColumnProps) {
  return (
    <Grid2
      container
      size={{ xs: 12, sm: 6, md: 3 }}
      component="div"
      alignItems="center"
      direction="column"
    >
      {children}
      <Typography variant="h6" align="center" fontWeight="bold" color="#47A138">
        {title}
      </Typography>
      <Typography variant="body2" align="center" color="#767676">
        {description}
      </Typography>
    </Grid2>
  );
}
