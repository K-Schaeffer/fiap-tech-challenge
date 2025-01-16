import type { Meta, StoryFn } from "@storybook/react";

import { Box } from "@mui/material";
import FFormTransactionCard from "./FTransactionFormCard";

const meta = {
  title: "Organisms/TransactionFormCard",
  component: FFormTransactionCard,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    layout: "centered",
  },
} satisfies Meta<typeof FFormTransactionCard>;

export default meta;

export const Default: StoryFn = () => {
  return (
    <Box width={800}>
      <FFormTransactionCard />
    </Box>
  );
};
