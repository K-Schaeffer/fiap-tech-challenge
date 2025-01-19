import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FAccountButtons } from "./FAccountButtons";

const meta = {
  title: "Molecules/AccountButtons",
  component: FAccountButtons,
  parameters: {
    layout: "centered",
  },
  args: {
    handleNewAccount: fn(),
    handleLogin: fn(),
  },
} satisfies Meta<typeof FAccountButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    isDark: true,
  },
  args: {
    color: "primary",
    options: {
      display: "flex",
      flexDirection: "row",
    },
  },
};

export const PrimaryLight: Story = {
  args: {
    color: "primary",
    options: {
      display: "flex",
      flexDirection: "row",
    },
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    options: {
      display: "flex",
      flexDirection: "row",
    },
  },
};
