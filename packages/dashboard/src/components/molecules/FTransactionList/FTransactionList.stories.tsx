import type { Meta, StoryFn } from "@storybook/react";

import { Box } from "@mui/material";
import { fn } from "@storybook/test";
import FTransactionList, { FTransactionListProps } from "./FTransactionList";

const transactionItems = [
  {
    id: "1",
    date: "2024-11-02",
    type: "Depósito",
    value: 2000,
    currency: "R$",
  },
  {
    id: "1",
    date: "2024-11-02",
    type: "Depósito",
    value: 2000,
    currency: "R$",
  },
  {
    id: "1",
    date: "2024-11-02",
    type: "Depósito",
    value: 2000,
    currency: "R$",
  },
];

const meta = {
  title: "Molecules/TransactionList",
  component: FTransactionList,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    transactionItems: transactionItems,
    deleteTransaction: fn(),
    editTransaction: fn(),
  },
} satisfies Meta<typeof FTransactionList>;

export default meta;

export const Default: StoryFn<FTransactionListProps> = (args) => {
  return (
    <Box width={400} padding={4} sx={{ backgroundColor: "#fff" }}>
      <FTransactionList {...args} />
    </Box>
  );
};
