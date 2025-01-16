import type { Meta, StoryFn } from "@storybook/react";

import { Box } from "@mui/material";
import FAccountSummary, { FAccountSummaryProps } from "./FAccountSummary";

const meta = {
  title: "Molecules/AccountSummary",
  component: FAccountSummary,
  parameters: {
    layout: "centered",
  },
  args: {
    currency: "R$",
    value: 2500,
  },
} satisfies Meta<typeof FAccountSummary>;

export default meta;

export const Default: StoryFn<FAccountSummaryProps> = (args) => {
  return (
    <Box
      maxWidth={400}
      sx={{ backgroundColor: "var(--mui-palette-primary-main)" }}
      padding={2}
    >
      <FAccountSummary {...args} />
    </Box>
  );
};
