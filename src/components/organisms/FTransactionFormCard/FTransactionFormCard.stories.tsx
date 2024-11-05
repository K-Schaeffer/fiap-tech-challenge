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
  },
} satisfies Meta<typeof FFormTransactionCard>;

export default meta;

export const Default: StoryFn = () => {
  return (
    <Box maxWidth={650}>
      <FFormTransactionCard />
    </Box>
  );
};
