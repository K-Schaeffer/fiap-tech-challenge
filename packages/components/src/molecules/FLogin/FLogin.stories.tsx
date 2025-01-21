import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { FLogin } from "./FLogin";

const meta = {
  title: "Molecules/FLogin",
  component: FLogin,
  parameters: {
    layout: "centered",
  },
  args: { submitLogin: fn() },
} satisfies Meta<typeof FLogin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
