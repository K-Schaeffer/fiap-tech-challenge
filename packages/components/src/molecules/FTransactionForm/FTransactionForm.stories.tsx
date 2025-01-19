import { Box } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";

import { FTransactionForm, FTransactionFormProps } from "./FTransactionForm";

//TODO: Document edit flow
const meta = {
  title: "Molecules/TransactionForm",
  component: FTransactionForm,
  parameters: {
    layout: "centered",
  },
  args: {
    addTransaction: fn(),
    accountBalance: 2500,
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
