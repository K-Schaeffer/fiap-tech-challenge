import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FInput } from "./FInput";

const meta: Meta<typeof FInput> = {
  title: "Atoms/Input",
  component: FInput,
  args: { onChange: fn() },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FInput>;

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
