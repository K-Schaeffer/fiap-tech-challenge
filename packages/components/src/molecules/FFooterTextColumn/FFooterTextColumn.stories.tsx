import type { Meta, StoryFn } from "@storybook/react";

import { Box } from "@mui/material";
import { FFooterTextColumn, FFooterTextColumnProps } from "./FFooterTextColumn";

const meta = {
  title: "Molecules/FooterTextColumn",
  component: FFooterTextColumn,
  parameters: {
    layout: "centered",
    isDark: true,
  },
  args: {
    textHeader: "Serviços",
    listItems: ["Conta Corrente", "Conta PJ", "Cartão de crédito"],
  },
} satisfies Meta<typeof FFooterTextColumn>;

export default meta;

export const Default: StoryFn<FFooterTextColumnProps> = (args) => {
  return (
    <Box maxWidth={400} padding={2}>
      <FFooterTextColumn {...args} />
    </Box>
  );
};
