import type { Meta, StoryFn } from "@storybook/react";

import { Box } from "@mui/material";
import { FTransactionListProps } from "components";
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
        formattedDate: "2024-11-02",
        type: "Depósito",
        formattedValue: "R$ 2000",
      },
      {
        id: "2",
        formattedDate: "2024-11-02",
        type: "Depósito",
        formattedValue: "R$ 2000",
      },
      {
        id: "3",
        formattedDate: "2024-11-02",
        type: "Depósito",
        formattedValue: "R$ 2000",
      },
    ];
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
