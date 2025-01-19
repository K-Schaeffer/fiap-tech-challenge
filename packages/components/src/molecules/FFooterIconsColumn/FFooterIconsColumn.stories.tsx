import type { Meta, StoryFn } from "@storybook/react";

import { Box } from "@mui/material";
import {
  FFooterIconsColumn,
  FFooterIconsColumnProps,
} from "./FFooterIconsColumn";

const meta = {
  title: "Molecules/FooterIconsColumn",
  component: FFooterIconsColumn,
  parameters: {
    layout: "centered",
    isDark: true,
  },
  args: { textHeader: "Desenvolvido por Alura" },
} satisfies Meta<typeof FFooterIconsColumn>;

export default meta;

export const Default: StoryFn<FFooterIconsColumnProps> = (args) => {
  return (
    <Box maxWidth={400} padding={2}>
      <FFooterIconsColumn {...args}>
        <img src="" alt="Image" />
      </FFooterIconsColumn>
    </Box>
  );
};
