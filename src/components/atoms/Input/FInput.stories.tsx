import type { Meta, StoryObj } from '@storybook/react';
import Input from './FInput';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Texto que aparece quando o campo está vazio',
    },
    textposition: {
      control: {
        type: 'select',
        options: ['left', 'center'],
      },
      description: 'Alinhamento do texto dentro do campo',
    },
    borderColor: {
      control: 'color',
      description: 'Cor da borda do campo',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    placeholder: "aaaaa",
    textposition: "center",
    borderColor: '#004D61',
  },
};

export const CenteredText: Story = {
  args: {
    placeholder: 'Texto centralizado',
    textposition: 'center',
    borderColor: '#FF5031',
  },
};

export const CustomBorderColor: Story = {
  args: {
    placeholder: 'Borda personalizada',
    textposition: 'left',
    borderColor: '#3498DB',
  },
};
