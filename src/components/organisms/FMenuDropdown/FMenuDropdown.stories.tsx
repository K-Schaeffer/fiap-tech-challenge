import type { Meta, StoryObj } from "@storybook/react";

import FMenuDropdown from "./FMenuDropdown";

const meta = {
  title: "Organisms/MenuDropdown",
  component: FMenuDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FMenuDropdown>;

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