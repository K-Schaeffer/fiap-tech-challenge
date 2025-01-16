import type { Meta, StoryFn } from "@storybook/react";

import { Box } from "@mui/material";
import FFoterIconsColumn, {
  FFoterIconsColumnProps,
} from "./FFooterIconsColumn";

const meta = {
  title: "Molecules/FFoterIconsColumn",
  component: FFoterIconsColumn,
  parameters: {
    layout: "centered",
    isDark: true,
  },
  args: { textHeader: "Desenvolvido por Alura" },
} satisfies Meta<typeof FFoterIconsColumn>;

export default meta;

export const Default: StoryFn<FFoterIconsColumnProps> = (args) => {
  return (
    <Box maxWidth={400} padding={2}>
      <FFoterIconsColumn {...args} />
    </Box>
  );
};
