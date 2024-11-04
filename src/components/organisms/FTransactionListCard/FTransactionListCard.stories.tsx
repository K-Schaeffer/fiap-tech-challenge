import type { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";

import { Box } from "@mui/material";
import FTransactionListCard, {
  FTransactionListCardProps,
} from "./FTransactionListCard";

const meta = {
  title: "Organisms/TransactionListCard",
  component: FTransactionListCard,
  parameters: {
    layout: "centered",
  },
  args: {
    transactionItems: [
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
    ],
    onEdit: fn(),
    onDelete: fn(),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FTransactionListCard>;

export default meta;

export const Default: StoryFn<FTransactionListCardProps> = (args) => {
  return (
    <Box
      height={512}
      width={282}
      sx={{ backgroundColor: "var(--mui-palette-primary-main)" }}
      padding={2}
    >
      <FTransactionListCard {...args} />
    </Box>
  );
};
