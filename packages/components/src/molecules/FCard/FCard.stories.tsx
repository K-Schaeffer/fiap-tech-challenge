import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "@mui/material";
import React from "react";
import { FCard } from "./FCard";

const meta = {
  title: "Molecules/Card",
  component: FCard,
  parameters: {
    layout: "padded",
    backgrounds: {
      values: [{ name: "Gray", value: "#D3D3D3" }],
    },
  },
} satisfies Meta<typeof FCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    backgrounds: { default: "Gray" },
  },
  args: {
    title: "Título do card",
    children: <Typography>Conteúdo do card!</Typography>,
  },
};

export const DefaultWithoutTitle: Story = {
  parameters: {
    backgrounds: { default: "Gray" },
  },
  args: {
    children: <Typography>Conteúdo do card!</Typography>,
  },
};

export const Light: Story = {
  args: {
    title: "Título do card",
    children: <Typography>Conteúdo do card!</Typography>,
    variant: "light",
  },
};

export const Dark: Story = {
  args: {
    title: "Título do card",
    children: <Typography>Conteúdo do card!</Typography>,
    variant: "dark",
  },
};
