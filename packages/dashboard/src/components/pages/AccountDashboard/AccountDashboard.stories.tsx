import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";
import AccountDashboard from "./AccountDashboard";

const meta = {
  title: "Pages/AccountDashboard",
  component: AccountDashboard,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof AccountDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    account: {
      fullName: "John Doe",
      firstName: "John",
      currency: "USD",
      balance: 1000,
    },
    transactionList: [
      {
        id: "1",
        type: "Transferência",
        date: "10-25-2024",
        value: 200,
        currency: "R$",
      },
      {
        id: "2",
        type: "Depósito",
        date: "10-11-2024",
        value: 250,
        currency: "R$",
      },
    ],
    handleAddTransaction: fn(),
    handleEditTransaction: fn(),
    handleDeleteTransaction: fn(),
  },
};
