import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { DeleteTwoTone, EditTwoTone } from "@mui/icons-material";
import React from "react";
import { FIconButton } from "./FIconButton";

const meta = {
  title: "Atoms/IconButton",
  component: FIconButton,
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
} satisfies Meta<typeof FIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: { color: "primary" },
    children: <DeleteTwoTone />,
  },
};

export const Secondary: Story = {
  args: {
    options: { color: "secondary" },
    children: <EditTwoTone />,
  },
};
