import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Input from "./FInput";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    placeholder: {
      control: "text",
      description: "Texto que aparece quando o campo está vazio",
    },
    textposition: {
      control: {
        type: "select",
        options: ["left", "center"],
      },
      description: "Alinhamento do texto dentro do campo",
    },
    maxWidth: {
      control: "text",
      description: "Largura do campo",
    },
  },
  args: { onChange: fn() },
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberInput: Story = {
  args: {
    options: {
      type: "number",
      placeholder: "00,00",
    },
    textposition: "center",
    maxWidth: "400px",
  },
};
