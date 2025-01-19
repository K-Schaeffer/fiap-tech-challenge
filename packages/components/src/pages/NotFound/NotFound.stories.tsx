import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";
import { NotFound } from "./NotFound";

const meta = {
  title: "Pages/NotFound",
  component: NotFound,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/dashboard",
      },
    },
  },
  args: {
    onBack: fn(),
  },
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
