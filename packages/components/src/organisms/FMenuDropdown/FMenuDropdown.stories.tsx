import type { Meta, StoryObj } from "@storybook/react";

import { FMenuDropdown } from "./FMenuDropdown";

const meta = {
  title: "Organisms/MenuDropdown",
  component: FMenuDropdown,
  parameters: {
    layout: "centered",
    isDark: false,
  },
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
    current: false,
  },
];

export const Default: Story = {
  args: {
    menuItems,
    children: <div></div>,
  },
};

export const Dark: Story = {
  parameters: {
    isDark: true,
  },
  args: {
    menuItems,
    children: <div></div>,
  },
};
