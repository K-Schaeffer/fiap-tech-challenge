import { MenuItem } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import SelectInput from "./FSelectInput";

const meta: Meta<typeof SelectInput> = {
  title: "Atoms/SelectInput",
  component: SelectInput,
  argTypes: {
    formControlOptions: {
      control: {
        type: "object",
      },
      description: "Opções para o FormControl",
    },
    options: {
      control: {
        type: "object",
      },
      description: "Opções para o Select",
    },
  },
  args: { onChange: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    formControlOptions: {
      style: { color: "#004D61" },
    },
    options: {
      children: [
        <MenuItem key="cambio" value="cambio">
          Câmbio de Moeda
        </MenuItem>,
        <MenuItem key="doc-ted" value="doc-ted">
          DOC/TED
        </MenuItem>,
        <MenuItem
          key="emprestimo-financiamento"
          value="emprestimo-financiamento"
        >
          Empréstimo e Financiamento
        </MenuItem>,
      ],
    },
  },
};
