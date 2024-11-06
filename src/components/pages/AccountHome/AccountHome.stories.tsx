import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";
import AccountHome from "./AccountHome";

const meta = {
  title: "Pages/AccountHome",
  component: AccountHome,
  parameters: {
    layout: "fullscreen",
    isDark: true,
  },
} satisfies Meta<typeof AccountHome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    actions: {
      handleNewAccount: fn(),
      handleLogin: fn(),
    },
  },
};
