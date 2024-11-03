import { Box } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";

import FTransactionForm from "./FTransactionForm";

const meta = {
  title: "Molecules/TransactionForm",
  component: FTransactionForm,
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
  tags: ["autodocs"],
} satisfies Meta<typeof FTransactionForm>;

export default meta;

export const Default: StoryFn = (args) => {
  return (
    <Box width={500}>
      <FTransactionForm />
    </Box>
  );
};
