import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import FFormTransactionCard from "./FTransactionFormCard";

const meta = {
  title: "Organisms/TransactionFormCard",
  component: FFormTransactionCard,
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
  tags: ["autodocs"],
} satisfies Meta<typeof FFormTransactionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
