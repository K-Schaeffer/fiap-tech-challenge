import type { Meta, StoryObj } from "@storybook/react";

import FMenuList from "./FMenuList";

const meta = {
  title: "Organisms/MenuList",
  component: FMenuList,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FMenuList>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Default: Story = {
  args: {
    menuItems,
  },
};
