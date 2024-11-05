import { Box } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";

import FTransactionForm from "./FTransactionForm";

const meta = {
  title: "Molecules/TransactionForm",
  component: FTransactionForm,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  args: {},
} satisfies Meta<typeof FTransactionForm>;

export default meta;

export const Default: StoryFn = () => {
  return (
    <Box width={500}>
      <FTransactionForm />
    </Box>
  );
};
