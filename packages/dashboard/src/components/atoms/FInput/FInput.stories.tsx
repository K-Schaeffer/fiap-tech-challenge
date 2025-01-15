import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Input from "./FInput";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  args: { onChange: fn() },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Number: Story = {
  args: {
    options: {
      type: "number",
      placeholder: "00,00",
    },
    textposition: "center",
    maxWidth: "400px",
  },
};
