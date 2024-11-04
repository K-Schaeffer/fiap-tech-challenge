import type { Meta, StoryObj } from "@storybook/react";

import FAccountSummaryCard from "./FAccountSummaryCard";

const meta = {
  title: "Organisms/AccountSummaryCard",
  component: FAccountSummaryCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FAccountSummaryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    firstName: "Marilene",
    value: 50,
    currency: "$",
  },
};
