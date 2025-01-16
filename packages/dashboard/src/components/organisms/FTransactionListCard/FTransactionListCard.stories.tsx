import type { Meta, StoryFn } from "@storybook/react";

import { FTransactionListProps } from "@/components/molecules/FTransactionList/FTransactionList";
import { Box } from "@mui/material";
import FTransactionListCard from "./FTransactionListCard";

const meta = {
  title: "Organisms/TransactionListCard",
  component: FTransactionListCard,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    transactionItems: [
      {
        id: "1",
        date: "2024-11-02",
        type: "Depósito",
        value: 2000,
        currency: "R$",
      },
      {
        id: "2",
        date: "2024-11-01",
        type: "Depósito",
        value: 69.99,
        currency: "$",
      },
      {
        id: "3",
        date: "2024-11-01",
        type: "Depósito",
        value: 100,
        currency: "$",
      },
      {
        id: "4",
        date: "2024-10-31",
        type: "Transferência",
        value: -500,
        currency: "R$",
      },
    ],
  },
} satisfies Meta<typeof FTransactionListCard>;

export default meta;

export const Default: StoryFn<FTransactionListProps> = (args) => {
  return (
    <Box
      height={600}
      width={400}
      sx={{ backgroundColor: "var(--mui-palette-primary-main)" }}
      padding={2}
    >
      <FTransactionListCard {...args} />
    </Box>
  );
};
