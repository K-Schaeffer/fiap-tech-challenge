import type { Meta, StoryObj } from "@storybook/react";

import FTransactionList from "./FTransactionList";

const meta = {
  title: "Molecules/TransactionList",
  component: FTransactionList,
  parameters: {
    layout: "padded",
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof FTransactionList>;

export default meta;
type Story = StoryObj<typeof meta>;

const transactionItems = [
  {
    date: "2024-11-02",
    type: "Depósito",
    value: 2000,
    currency: "R$",
  },
  {
    date: "2024-11-01",
    type: "Depósito",
    value: 69.99,
    currency: "$",
  },
  {
    date: "2024-11-01",
    type: "Depósito",
    value: 100,
    currency: "$",
  },
  {
    date: "2024-10-31",
    type: "Transferência",
    value: -500,
    currency: "R$",
  },
];

export const Default: Story = {
  args: {
    transactionItems,
  },
};
