import type { Meta, StoryObj } from "@storybook/react";

import AccountDashboard from "./AccountDashboard";

const meta = {
  title: "Pages/AccountDashboard",
  component: AccountDashboard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
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
      closestTransactions: [
        {
          id: 1,
          type: "transferência",
          date: "10-25-2024",
          amount: 200,
          currency: "R$",
        },
        {
          id: 2,
          type: "depósito",
          date: "10-11-2024",
          amount: 250,
          currency: "R$",
        },
      ],
    },
  },
};
