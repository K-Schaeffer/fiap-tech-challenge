import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { FRegister } from "./FRegister";

const meta = {
  title: "Molecules/FRegister",
  component: FRegister,
  parameters: {
    layout: "centered",
  },
  args: { submitRegister: fn() },
} satisfies Meta<typeof FRegister>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
