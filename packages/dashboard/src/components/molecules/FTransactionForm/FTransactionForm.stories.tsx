import { Box } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";

import FTransactionForm, { FTransactionFormProps } from "./FTransactionForm";

const meta = {
  title: "Molecules/TransactionForm",
  component: FTransactionForm,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    buttonText: "Concluir",
  },
} satisfies Meta<typeof FTransactionForm>;

export default meta;

export const Default: StoryFn<FTransactionFormProps> = (args) => {
  return (
    <Box width={500}>
      <FTransactionForm {...args} />
    </Box>
  );
};
