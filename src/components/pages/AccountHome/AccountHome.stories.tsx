import type { Meta, StoryObj } from "@storybook/react";

import AccountHome from "./AccountHome";

const meta = {
  title: "Pages/AccountHome",
  component: AccountHome,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof AccountHome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    isDark: true,
  },
};
