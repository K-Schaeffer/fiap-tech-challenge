import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import FTransactionAction from "./FTransactionAction";

const meta = {
  title: "Molecules/TransactionAction",
  component: FTransactionAction,
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
  tags: ["autodocs"],
} satisfies Meta<typeof FTransactionAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Action: Story = {};
