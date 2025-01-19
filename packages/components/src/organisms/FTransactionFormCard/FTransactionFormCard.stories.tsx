import type { Meta, StoryFn } from "@storybook/react";

import { FTransactionFormProps } from "@molecules/FTransactionForm/FTransactionForm";
import { Box } from "@mui/material";
import { fn } from "@storybook/test";
import { FTransactionFormCard } from "./FTransactionFormCard";

//TODO: Document edit flow
const meta = {
  title: "Organisms/TransactionFormCard",
  component: FTransactionFormCard,
  parameters: {
    layout: "centered",
  },
  args: {
    accountBalance: 2500,
    addTransaction: fn(),
  },
} satisfies Meta<typeof FTransactionFormCard>;

export default meta;

export const Default: StoryFn<FTransactionFormProps> = (args) => {
  return (
    <Box width={800}>
      <FTransactionFormCard {...args}>
        <img src="" alt="Bottom Pixels" />
        <img src="" alt="Top Pixels" />
        <img src="" alt="Illustration" />
      </FTransactionFormCard>
    </Box>
  );
};
