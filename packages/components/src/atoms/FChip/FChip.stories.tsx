import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FChip } from "./FChip";

const meta = {
  title: "Atoms/Chip",
  component: FChip,
  parameters: {
    layout: "centered",
  },
  args: {
    handleValueClick: fn(),
  },
} satisfies Meta<typeof FChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    valueAdd: 10,
  },
};

export const LargeValue: Story = {
  args: {
    valueAdd: 100,
  },
};
