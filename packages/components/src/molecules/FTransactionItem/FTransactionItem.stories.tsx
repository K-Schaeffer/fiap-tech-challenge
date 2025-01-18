import type { Meta, StoryFn } from "@storybook/react";

import { Box } from "@mui/material";
import { fn } from "@storybook/test";
import { FTransactionItem, FTransactionItemProps } from "./FTransactionItem";

const meta = {
  title: "Molecules/TransactionItem",
  component: FTransactionItem,
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [{ name: "Gray", value: "#D3D3D3" }],
      default: "Gray",
    },
  },
  args: {
    onDelete: fn(),
    onEdit: fn(),
    date: "2021-10-10",
    type: "income",
    value: "R$ 100",
  },
} satisfies Meta<typeof FTransactionItem>;

export default meta;

export const Default: StoryFn<FTransactionItemProps> = (args) => {
  return (
    <Box width={400} padding={4} sx={{ backgroundColor: "#fff" }}>
      <FTransactionItem {...args} />
    </Box>
  );
};
