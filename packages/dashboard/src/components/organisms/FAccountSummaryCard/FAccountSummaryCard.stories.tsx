import type { Meta, StoryFn } from "@storybook/react";

import { Box } from "@mui/material";
import FAccountSummaryCard, {
  FAccountSummaryCardProps,
} from "./FAccountSummaryCard";

const meta = {
  title: "Organisms/AccountSummaryCard",
  component: FAccountSummaryCard,
  parameters: {
    layout: "centered",
  },
  args: {
    firstName: "Marilene",
    value: 50,
    currency: "$",
  },
} satisfies Meta<typeof FAccountSummaryCard>;

export default meta;

export const Default: StoryFn<FAccountSummaryCardProps> = (args) => {
  return (
    <Box width={800}>
      <FAccountSummaryCard {...args} />
    </Box>
  );
};
