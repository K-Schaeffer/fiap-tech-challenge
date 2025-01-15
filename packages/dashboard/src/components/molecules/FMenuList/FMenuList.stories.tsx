import type { Meta, StoryFn } from "@storybook/react";

import { Box } from "@mui/material";
import FMenuList from "./FMenuList";

const meta = {
  title: "Molecules/MenuList",
  component: FMenuList,
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [{ name: "Gray", value: "#D3D3D3" }],
      default: "Gray",
    },
  },
} satisfies Meta<typeof FMenuList>;

export default meta;

const menuItems = [
  {
    label: "Home",
    path: "/",
    current: true,
  },
  {
    label: "About",
    path: "/about",
  },
];

export const Default: StoryFn = () => {
  return (
    <Box width={200} padding={4} sx={{ backgroundColor: "#fff" }}>
      <FMenuList menuItems={menuItems} />
    </Box>
  );
};
