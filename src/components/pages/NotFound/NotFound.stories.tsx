import type { Meta, StoryObj } from "@storybook/react";

import NotFound from "./NotFound";

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
  tags: ["autodocs"],
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
