import { Box } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";
import { FSelectInput } from "./FSelectInput";

const meta: Meta<typeof FSelectInput> = {
  title: "Atoms/SelectInput",
  component: FSelectInput,
  parameters: {
    layout: "centered",
  },
  args: { onChange: fn() },
};

export default meta;

export const Default: StoryFn = (args) => {
  return (
    <Box width={500}>
      <FSelectInput {...args} />
    </Box>
  );
};
